import {
    Card
} from "../../shadcn/components/ui/card";
import { Separator } from "../../shadcn/components/ui/separator";

function Photo() {
    return (
        <div>
            <Card className="w-2/3">
                <h1>Reward</h1>
                <h1>VALUE</h1>
                <Separator />
                <h1>Last Salary: $X</h1>
                <h1>Last Job: Senior In-Training Full Stack Engineer @ Ad Badger</h1>
                <h1>Time in Position: 22 months </h1>
                <h1>Location: Austin, Texas (Remote position) </h1>
                <h1>Team size: ~20 employees, 4 engineers</h1>
            </Card>
        </div>
    );
}

export default Photo;