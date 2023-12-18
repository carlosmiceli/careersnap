import {
    Card
} from "../../shadcn/components/ui/card";
import { Separator } from "../../shadcn/components/ui/separator";

function Photo() {
    return (
        <div>
            <Card className="flex flex-col gap-2 text-center bg-green-500 text-white font-bold py-7 px-3 items-center">
                <h1 className="text-3xl">Reward</h1>
                <h1 className="text-xl">U$D 2.000 to 15.000*</h1>
                <p className="text-xs">*Estimation based on previous salary, market avg. compensation, company location, etc.</p>
                {/* <ul className="text-sm">
                    <li>
                        *If new salary is less or equal U$D3.500: reward is 1x salary.
                    </li>
                    <li>
                        If new salary over U$D3.500 and less than U$D5.000: reward is 1.5x salary.
                    </li>
                    <li>
                        If new salary over U$D5.000: reward is 2x salary.
                    </li>
                </ul> */}
            </Card>
            <Separator />
            <h1>Last Salary: $X</h1>
            <h1>Last Job: Senior In-Training Full Stack Engineer @ Ad Badger</h1>
            <h1>Time in Position: 22 months </h1>
            <h1>Location: Austin, Texas (Remote position) </h1>
            <h1>Team size: ~20 employees, 4 engineers</h1>
        </div>
    );
}

export default Photo;