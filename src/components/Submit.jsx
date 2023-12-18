import {
    Input
} from "../shadcn/components/ui/input";
import { Button } from "../shadcn/components/ui/button";

function Submit() {
    return (
        <div className="flex gap-2 justify-center items-center py-3 bg-[#F34646]">
            <div className="text-white font-bold">
                <p >Want your own CareerSnap? First 100 subscribers will get it for free for a year 😊:</p>
            </div>
            <Input className="w-80" type="email" placeholder="Email " />    
            <Button className="bg-[#242C3F]">I'm interested!</Button>
        </div>
    );
}

export default Submit;