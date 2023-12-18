import {
    Textarea
} from "../../../shadcn/components/ui/textarea";

function TextBox(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <Textarea>{props.text}</Textarea>
        </div>
    );
}

export default TextBox;