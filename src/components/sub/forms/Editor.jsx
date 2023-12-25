
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { doc, updateDoc } from "firebase/firestore";
import { Button } from "../../../shadcn/components/ui/button"
import { db } from '../../../firebase';
import { DialogClose } from '../../../shadcn/components/ui/dialog';

function Editor({ id, content, onSave }) {
    const [editorContent, setEditorContent] = useState(content);

    const handleChange = (newContent) => {
        setEditorContent(newContent);
        //add autosave with debounce
    };

    const handleSave = () => {
        const categoryDocRef = doc(db, "adminContent", process.env.REACT_APP_FIREBASE_ADMIN_COLLECTION_ID, "categories", id);

        updateDoc(categoryDocRef, { content: editorContent })
            .then(() => {
                console.log("Document successfully updated!");
                onSave(editorContent);
            })
            .catch((error) => {
                console.error("Error updating document: ", error);
            });
    };

    return (
        <div>

            <ReactQuill className='max-w-[700px] h-[500px]' value={editorContent} onChange={handleChange} />
            <div className='flex gap-2 mt-12 justify-end'>
                <Button onClick={handleSave} className="w-[80px]" >Save</Button>
                <DialogClose><Button className="w-[80px]">Cancel</Button></DialogClose>
            </div>
        </div>
    )
}

export default Editor