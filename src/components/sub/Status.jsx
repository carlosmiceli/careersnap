import { Badge } from "../../shadcn/components/ui/badge"

function Status() {
    return (
        <div className="flex justify-center sm:justify-normal">
            <Badge className="bg-green-500 m-1 font-bold text-sm text-center xl:text-sm">STATUS: Looking for next job</Badge>
        </div>
    );
}

export default Status;