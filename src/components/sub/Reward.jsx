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
import { Popover, PopoverTrigger, PopoverContent } from "../../shadcn/components/ui/popover"
import { ScrollArea } from "../../shadcn/components/ui/scroll-area"
import HelpersForm from "./forms/Helpers";

function Reward() {
    return (
        <div>
            <Card className="flex flex-col text-center bg-green-500 border-0 shadow-none text-white font-bold py-6 pt-5 px-5 items-center">
                <h1 className="text-3xl xl:text-4xl">Reward:</h1>
                <div className="flex flex-col mt-2 mb-6">
                    <h1 className="text-xl md:text-lg xl:text-xl">U$D 2.000 to 15.000*</h1>
                    <Dialog >
                        <DialogTrigger asChild>
                            <p className="text-xs xl:text-sm text-decoration-line: underline hover:cursor-pointer">(How does this work?)</p>
                        </DialogTrigger>
                        <DialogContent className="text-[13px] overflow-y-auto">
                            <DialogHeader>
                                <DialogTitle>How Does The Reward Work?</DialogTitle>
                            </DialogHeader>
                            <p>Similar to how companies reward referrals for new hires, I believe in rewarding those who significantly aid my career journey. Your reward is determined by how the salary of the new job compares to my previous salary:</p>
                            <ul className="pl-2">
                                <li><strong>* 1x month's salary reward</strong> if the new job pays lower than $3,150.</li>
                                <li><strong>* 1.5x month's salary reward</strong> if the new job pays between $3,150 and $5,850.</li>
                                <li><strong>* 2x month's salary reward</strong> if the new job pays above $5,850.</li>
                            </ul>
                            <p>We can arrange the payment logistics in whatever way that suits you best. The reward  will be paid over six monthly installments starting with the first salary.
                                <sup><Popover>
                                    <PopoverTrigger>1</PopoverTrigger>
                                    <PopoverContent className="text-xs border border-gray-300">If I leave the position within six months, the payments will continue up to my last salary from that company.</PopoverContent>
                                </Popover></sup></p>

                            <h3 className="text-sm font-semibold">How Can You Help?</h3>
                            <ul className="pl-2">
                                <li>* Tell me if they are hiring software engineers in the company you work for.</li>
                                <li>* Introduce me to someone within another company that may be hiring.</li>
                                <li>* Point me towards a company or job listing so I can apply.</li>
                                <li>* Facilitate an interview or meeting.</li>
                                <li>* Submit my profile/CV for a potential opportunity.</li>
                            </ul>
                            <p>Any of the above would earn you this reward if I end up getting hired, because it wouldn't have happened without your help. <em>I'm not looking to be handed a job;</em> <strong>I just want the opportunity to interview.</strong></p>

                            <h3 className="text-sm font-semibold">What Can You Do With The Reward?</h3>
                            <p>Receiving money for helping someone get a job might feel unusual, but <em>"Income Share Agreements"</em> are not new. If you need inspiration, here are some ideas for what we can do with your reward:</p>
                            <ul>
                                <li><strong>Personal Use:</strong> Enjoy it or use it to invest in your own career growth.</li>
                                <li><strong>Gift:</strong> Give it to those in your life that you want to help or show them your appreciation.</li>
                                <li><strong>Donation:</strong> Tell me what cause you'd like me to donate it to.</li>
                                <li><strong>Contest:</strong> Let me host a contest for your LinkedIn followers.</li>
                                <li><strong>Undecided?</strong> If unsure, I'll think of causes to donate it to and/or ways to use it to help/thank you!</li>
                            </ul>
                        </DialogContent>
                    </Dialog>
                </div>
                <AlertDialog>
                    <AlertDialogTrigger asChild><Button className="text-sm xl:text-lg 2xl:text-xl bg-[#242C3F] mb-5">I Want to Help!</Button></AlertDialogTrigger>
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