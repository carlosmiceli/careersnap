import {
    Card,
} from "../../shadcn/components/ui/card";

import Link from "./micro/Link";

function Contact() {
    return (
        <div className="">
            <Card className="flex flex-col gap-4 border-0 md:text-xs xl:text-sm shadow-none bg-transparent pr-5">
                <Link url="https://www.carlosmiceli.com" image="images/cm.png" text="carlosmiceli.com" />
                <Link url="https://www.linkedin.com/in/carlosmiceli/" image="images/linkedin.png" text="Linkedin" />
                <Link url="https://github.com/carlosmiceli" image="images/github.png" text="Github" />
                <Link url="https://paper.dropbox.com/doc/My-Journey-to-Coding-Mastery--CGUyxU7u25CpW7THHKtK_2XDAg-kDdrF9BRDEx3KXjH6V8tp" image="images/dropbox-paper.png" text="My Journey to Coding Mastery" />
                <Link url="mailto:me@carlosmiceli.com" image="images/email.png" text="me@carlosmiceli.com" />
                <Link url="https://calendly.com/carlosmiceli/carlos-job-search-initial-call" image="images/calendar.png" text="Schedule a 15 min. call" />
            </Card>
        </div>
    );
}

export default Contact;