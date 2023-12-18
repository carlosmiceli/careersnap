import {
    Card,
} from "../../shadcn/components/ui/card";

import Link from "./micro/Link";

function Contact() {
    return (
        <div className="">
            <Card className="flex flex-col gap-4 bg-indigo-100 border-0 shadow-none text-lg">
                <Link url="https://www.carlosmiceli.com" image="images/cm.png" text="carlosmiceli.com" />
                <Link url="https://www.linkedin.com" image="images/linkedin.png" text="Linkedin" />
                <Link url="https://www.github.com" image="images/github.png" text="Github" />
                <Link url="mailto:me@carlosmiceli.com" image="images/email.png" text="me@carlosmiceli.com" />
                <Link url="https://calendly.com/carlosmiceli/carlos-job-search-initial-call" image="images/calendar.png" text="Schedule a 15 min. call" />
            </Card>
        </div>
    );
}

export default Contact;