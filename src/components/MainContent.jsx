import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/auth';
import { doc, collection, getDocs, query, updateDoc, orderBy } from "firebase/firestore";
import { db } from '../firebase';


import 'react-quill/dist/quill.snow.css';
import Photo from "./sub/Photo";
import Status from "./sub/Status";
import Contact from "./sub/Contact";
import About from "./sub/About";
import TextBox from "./sub/micro/TextBox";
import Previous from "./sub/Previous";
import Reward from "./sub/Reward";

function MainContent() {
    const { user } = useAuth();
    const [oddCategories, setOddCategories] = useState([]);
    const [evenCategories, setEvenCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const adminContentDocRef = doc(db, "adminContent", process.env.REACT_APP_FIREBASE_ADMIN_COLLECTION_ID);
            const categoriesCollectionRef = collection(adminContentDocRef, "categories");

            // Create and execute a query to fetch and order categories in a single request
            const categoriesQuery = query(categoriesCollectionRef, orderBy('order', 'asc'));
            const querySnapshot = await getDocs(categoriesQuery);

            // Map the query results to an array of category data
            const categoriesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            console.log(categoriesData)

            const oddCats = [];
            const evenCats = [];
            categoriesData.forEach((category, index) => {
                if (index % 2 === 0) {
                    oddCats.push(category);
                } else {
                    evenCats.push(category);
                }
            });

            setOddCategories(oddCats);
            setEvenCategories(evenCats);
        };

        fetchCategories();
    }, []);

    const updateCategoryContent = (id, newContent) => {
        const updateContent = (categories) => categories.map(cat => {
            if (cat.id === id) {
                return { ...cat, content: newContent };
            }
            return cat;
        });
    
        // Check which set the category belongs to and update accordingly
        if (oddCategories.some(cat => cat.id === id)) {
            setOddCategories(categories => updateContent(categories));
        } else if (evenCategories.some(cat => cat.id === id)) {
            setEvenCategories(categories => updateContent(categories));
        }
    };

    const currentDate = new Date();
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);

    return (
        <div className="flex flex-col py-4 h-full w-full items-center overflow-y-scroll">

            <h1 className="text-3xl mb-6">Carlos' Career Snapshot <span className="text-[16px]">(as of {formattedDate})</span></h1>
            <div className="grid grid-cols-2 lg:flex flex-cols-4 w-10/12 gap-6">
                <div className="order-1 flex flex-col gap-3 lg: w-2/12">
                    <Photo />
                    <About />
                    <Status />
                    <Contact />
                </div>
                <div className="order-3 lg:order-2 flex flex-col gap-4 w-4/12">
                    {oddCategories.map(category => (
                        <TextBox key={category.id} id={category.id} title={category.title} content={category.content} onContentUpdate={updateCategoryContent}  />
                    ))}
                </div>
                <div className="order-4 lg:order-3 flex flex-col gap-4 w-4/12">
                    {evenCategories.map(category => (
                        <TextBox key={category.id} id={category.id} title={category.title} content={category.content} onContentUpdate={updateCategoryContent}  />
                    ))}
                </div>
                <div className="order-2 lg:order-4 lg: w-2/12">
                    <Reward />
                    <Previous />
                </div>
            </div>
        </div>
    );
}

export default MainContent;