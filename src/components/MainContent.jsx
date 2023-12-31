import { useState, useEffect } from 'react';
import { doc, collection, getDocs, query, orderBy } from "firebase/firestore";
import { Triangle } from 'react-loader-spinner'
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
    const [oddCategories, setOddCategories] = useState([]);
    const [evenCategories, setEvenCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            setIsLoading(true);
            const adminContentDocRef = doc(db, "adminContent", process.env.REACT_APP_FIREBASE_ADMIN_COLLECTION_ID);
            const categoriesCollectionRef = collection(adminContentDocRef, "categories");

            const categoriesQuery = query(categoriesCollectionRef, orderBy('order', 'asc'));
            const querySnapshot = await getDocs(categoriesQuery);

            const categoriesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

            const oddCats = [];
            const evenCats = [];
            categoriesData.forEach((category) => {
                if (category.order % 2 === 0) {
                    evenCats.push(category);
                } else {
                    oddCats.push(category);
                }
            });

            setOddCategories(oddCats);
            setEvenCategories(evenCats);
            setIsLoading(false);
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

        if (oddCategories.some(cat => cat.id === id)) {
            setOddCategories(categories => updateContent(categories));
        } else if (evenCategories.some(cat => cat.id === id)) {
            setEvenCategories(categories => updateContent(categories));
        }
    };

    const currentDate = new Date();
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-full">
                <Triangle
                    visible={true}
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="triangle-loading"
                />
            </div>
        );
    }

    return (
        <div className="flex flex-col py-4 h-full w-full items-center overflow-y-scroll">
            <div className="grid grid-cols-1 gap-10 sm:grid sm:grid-cols-2 sm:gap-6 lg:flex flex-cols-4 w-10/12 overflow-y-scroll no-scrollbar">
                <div className="lg:sticky lg:top-0 lg:z-10 order-1 mr-1 flex flex-col gap-3 lg:w-2/12">
                    <h1 className="lg:text-xl">Carlos' Career Snapshot <span className="text-xs">({formattedDate})</span></h1>
                    <Photo />
                    <About />
                    <Status />
                    <Contact />
                </div>
                <div className="order-3 lg:order-2 flex flex-col gap-4 lg:w-4/12">
                    {evenCategories.map(category => (
                        <TextBox key={category.id} id={category.id} title={category.title} content={category.content} onContentUpdate={updateCategoryContent} />
                    ))}
                </div>
                <div className="order-4 lg:order-3 flex flex-col gap-4 lg:w-4/12">
                    {oddCategories.map(category => (
                        <TextBox key={category.id} id={category.id} title={category.title} content={category.content} onContentUpdate={updateCategoryContent} />
                    ))}
                </div>
                <div className="flex flex-col gap-2 sm:gap-0 lg:sticky lg:top-0 lg:z-10 order-2 lg:order-4 lg:w-2/12">
                    <Reward />
                    <Previous />
                </div>
            </div>
        </div>
    );
}

export default MainContent;