"use client"
import db from '../../../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "../../../shadcn/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../shadcn/components/ui/form"

import { Input } from "../../../shadcn/components/ui/input"

const helpersSchema = z.object({
    name: z.string().min(2).max(50, {
        message: "Name must be between 2 and 50 characters.",
    }),
    email: z.string().email({
        message: "Invalid email address.",
    }).optional(),
    profile: z.string().optional(),
    link: z.string().url({
        message: "Invalid link URL.",
    }).optional(),
    description: z.string().min(2).max(1000, {
        message: "Description must be between 2 and 1000 characters.",
    }),
})

function HelpersForm() {
    // 1. Define your form.
    const form = useForm({
        resolver: zodResolver(helpersSchema),
        defaultValues: {
            name: "",
            email: "",
            profile: "",
            link: "",
            description: "",
        },
    });

    const handleSubmit = async (values) => {
        try {
            const res = await addDoc(collection(db, "helpers"), values);
            if (res.id) {
                console.log("Email added successfully");
                form.reset(); // Reset the form values
            } else {
                console.error("Error adding email: ", res);
            }
        } catch (error) {
            console.error("Error adding email: ", error);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name" // Updated the name prop to match the field name in the form schema
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your name" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email" // Added the email field
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your email" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your email address.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="profile" // Added the profile field
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Profile</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your profile" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your profile.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="link" // Added the link field
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Link</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter the link" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is the link URL.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description" // Added the description field
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter the description" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is the description.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}

export default HelpersForm

