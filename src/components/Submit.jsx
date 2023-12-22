import React, { useState } from 'react';
import {db} from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import {
    Input
} from "../shadcn/components/ui/input";
import { Button } from "../shadcn/components/ui/button";

function Submit() {
    const [email, setEmail] = useState('');
    const [form, hideForm] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await addDoc(collection(db, "emails"), {email: email});
            if (res.id) {
                setEmail('');
                hideForm(true);
            }
            else {
                console.error("Error adding email: ", res);
            }
        } catch (error) {
            console.error("Error adding email: ", error);
        }
    };

    return (
        <div className="flex min-h-[6vh] justify-center items-center py-3 bg-[#F34646]">
            {!form
                ?
                <div className="flex gap-2 justify-center items-center">
                    <div className="text-white font-bold">
                        <p >Want your own Career Snap? First 100 subscribers get it for free for a year when it releases 😊:</p>
                    </div>
                    <form className="flex gap-2 items-center" onSubmit={handleSubmit}>
                        <Input
                            className="w-80"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                        />
                        <Button type="submit" className="bg-[#242C3F]">I'm interested!</Button>
                    </form>
                </div>
                :
                <p className='text-white font-bold'>Thank you! I'll be in touch!</p>}
        </div>
    );
}

export default Submit;