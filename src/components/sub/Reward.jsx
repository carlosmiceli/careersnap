import {
    useState
} from "react";
import {
    Card
} from "../../shadcn/components/ui/card";
import {
    Button
} from "../../shadcn/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../shadcn/components/ui/dialog"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "../../shadcn/components/ui/alert-dialog"

function Reward() {
    return (
        <div>
            <Card className="flex flex-col text-center bg-green-500 border-0 shadow-none text-white font-bold py-6 pt-5 px-5 items-center">
                <h1 className="text-4xl">Reward:</h1>
                <div className="flex flex-col mt-2 mb-6">
                    <h1 className="text-xl">U$D 2.000 to 15.000*</h1>
                    <Dialog>
                        <DialogTrigger asChild>
                            <p className="text-sm text-decoration-line: underline hover:cursor-pointer">(How does this work?)</p>
                        </DialogTrigger>
                        <DialogContent className="">
                            <DialogHeader>
                                <DialogTitle>Career Snap's Reward System</DialogTitle>
                            </DialogHeader>
                            <p>I believe that connecting someone... </p>
                        </DialogContent>
                    </Dialog>
                </div>
                <AlertDialog>
                    <AlertDialogTrigger><Button className="text-xl bg-[#242C3F] mb-5">I Want to Help!</Button></AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
                <p className="text-xs">*Estimation based on previous salary, market avg. compensation, company location, etc.</p>
            </Card >

        </div >
    );
}

export default Reward;