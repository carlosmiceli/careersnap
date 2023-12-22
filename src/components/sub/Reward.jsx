import {
    Card
} from "../../shadcn/components/ui/card";
import {
    Button
} from "../../shadcn/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../shadcn/components/ui/dialog"
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "../../shadcn/components/ui/alert-dialog"
import { ScrollArea } from "../../shadcn/components/ui/scroll-area"
import HelpersForm from "./forms/Helpers";

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
                    <AlertDialogTrigger asChild><Button className="text-xl bg-[#242C3F] mb-5">I Want to Help!</Button></AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle className="w-[95%] pl-2">Thank you for helping me get my next job!</AlertDialogTitle>
                            <AlertDialogDescription className="text-neutral-600 w-[95%] pl-2">
                                To let me know about any job opportunities I should apply for, or to introduce me to someone you think could help me, you can:
                                <ul>
                                    <br />
                                    <li>
                                        A- Fill the form below.
                                    </li>
                                    <li>
                                        B- Email me / message me wherever.
                                    </li>
                                    <br />
                                </ul>
                                Whatever is easier for you! If I end up getting that job you'll get the reward regardless of how you told me. Just make sure I can find you, so we can coordinate how to give you the reward!
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <ScrollArea className="w-full h-full pr-3">
                            <HelpersForm />
                        </ScrollArea>
                    </AlertDialogContent>
                </AlertDialog>
                <p className="text-xs">*Estimation based on previous salary, market avg. compensation, company location, etc.</p>
            </Card >

        </div >
    );
}

export default Reward;