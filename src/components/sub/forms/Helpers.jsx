import React, { useState } from 'react';
import {db} from '../../../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, Controller } from "react-hook-form"
import * as z from "zod"

import { Button } from "../../../shadcn/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormMessage,
} from "../../../shadcn/components/ui/form"

import { Input } from "../../../shadcn/components/ui/input"
import { Textarea } from '../../../shadcn/components/ui/textarea';
import { AlertDialogCancel } from '../../../shadcn/components/ui/alert-dialog';

const helpersSchema = z.object({
    name: z.string().min(2).max(50, {
        message: "Name must be between 2 and 50 characters.",
    }),
    contact: z.string().optional(),
    link: z.string().optional().refine((data) => !data || isValidUrl(data), {
        message: "Invalid link URL.",
    }),
    description: z.string().min(2).max(1000, {
        message: "Description must be between 2 and 1000 characters.",
    })
});

function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}

function HelpersForm() {
    const [form, hideForm] = useState(false);
    const methods = useForm({
        resolver: zodResolver(helpersSchema),
        defaultValues: {
            name: "",
            contact: "",
            link: "",
            description: "",
        },
    });
    const { handleSubmit, reset, control } = methods;

    const onSubmit = async (data) => {
        console.log(data)
        try {
            const docRef = await addDoc(collection(db, "helpers"), { name: data.name, contact: data.contact, link: data.link, description: data.description });
            if (docRef.id) {
                reset();
                hideForm(true);
            }
        } catch (error) {
            console.error("Error adding helper: ", error);
        }
    };


    return (
        < div >
            {
                !form
                    ?
                    <Form {...methods} onSubmit={handleSubmit(onSubmit)}>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-[95%] pl-2">
                            <FormField
                                control={control}
                                name="name"
                                render={() => (
                                    <FormItem>
                                        <FormDescription>Name</FormDescription>
                                        <FormControl>
                                            <Controller
                                                name="name"
                                                control={control}
                                                render={({ field }) => <Input {...field} className="border border-black" placeholder="Enter your first name at least so I know how to call you :)" />}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>)}

                            />
                            <FormField
                                control={control}
                                name="contact"
                                render={() => (
                                    <FormItem>
                                        <FormDescription>How can I contact you?</FormDescription>
                                        <FormControl>
                                            <Controller
                                                name="contact"
                                                control={control}
                                                render={({ field }) => <Input {...field} className="border border-black" placeholder="Email, social media profile, phone number, whatever..." />}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name="link"
                                render={() => (
                                    <FormItem>
                                        <FormDescription>Is there a link? If so, paste it below.</FormDescription>
                                        <FormControl>
                                            <Controller
                                                name="link"
                                                control={control}
                                                render={({ field }) => <Input {...field} className="border border-black" placeholder="It could be a job listing, someone's profile, a company website, etc." />}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name="description"
                                render={() => (
                                    <FormItem>
                                        <FormDescription>Tell me the details or instructions about this opportunity 😊</FormDescription>
                                        <FormControl>
                                            <Controller
                                                name="description"
                                                control={control}
                                                render={({ field }) => <Textarea {...field} className="border border-black" placeholder="What should I do or know to pursue this opportunity?" />}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className='flex gap-2'>
                                <Button type="submit">Submit</Button>
                                <AlertDialogCancel className="border border-black">Cancel</AlertDialogCancel>
                            </div>
                        </form>
                    </Form>
                    :
                    <div className='flex flex-col gap-10 justify-center items-center text-2xl'><p>
                        Thank you! I'll be in touch!
                    </p>
                        <AlertDialogCancel className="border border-black bg-black text-white">Close</AlertDialogCancel>
                    </div>}
        </div >
    );

}

export default HelpersForm

