import {
    Card
} from "../../shadcn/components/ui/card";

function Photo() {
    return (
        <div>
            <Card className="w-2/3">
                <img src="images/carlos.jpeg" alt="Carlos"/>
            </Card>

        </div>
    );
}

export default Photo;