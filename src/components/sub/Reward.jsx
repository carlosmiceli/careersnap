import {
    Card
} from "../../shadcn/components/ui/card";
import {
    Button
} from "../../shadcn/components/ui/button";

function Photo() {
    return (
        <div>
            <Card className="flex flex-col text-center bg-green-500 border-0 shadow-none text-white font-bold py-6 pt-5 px-5 items-center">
                <h1 className="text-4xl">Reward</h1>
                <div className="flex flex-col mt-4 mb-6">
                    <h1 className="text-lg">U$D 2.000 to 15.000*</h1>
                    <p className="text-sm text-decoration-line: underline hover:cursor-pointer">(How does this work?)</p>
                </div>
                <Button className="text-xl bg-[#242C3F] mb-5">I Want to Help!</Button>
                <p className="text-xs">*Estimation based on previous salary, market avg. compensation, company location, etc.</p>
            </Card>
        </div>
    );
}

export default Photo;