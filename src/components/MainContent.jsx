import Photo from "./sub/Photo";
import Status from "./sub/Status";
import Contact from "./sub/Contact";
import About from "./sub/About";
import TextBox from "./sub/micro/TextBox";
import Previous from "./sub/Previous";
import Reward from "./sub/Reward";

function MainContent() {
    return (
        <div className="flex flex-col py-4 h-full w-full items-center">
            <h1 className="text-3xl mb-6">My Career Snap</h1>
            <div className="grid grid-cols-2 lg:flex flex-cols-4 w-10/12 gap-6">
                <div className="order-1 flex flex-col gap-3 lg: w-2/12">
                    <Photo />
                    <About />
                    <Status />
                    <Contact />
                </div>
                <div className="order-3 lg:order-2 flex flex-col gap-2 w-4/12">
                    <TextBox title="Goals" text="" />
                    <TextBox title="Pros and Cons" text="" />
                    <TextBox title="Weird Things I'm Proud Of" text="" />
                    <TextBox title="Job Criteria" text="" />
                    <TextBox title="Example of Good Job Fit" text="" />
                </div>
                <div className="order-4 lg:order-3 flex flex-col gap-2 w-4/12">
                    <TextBox title="Skills and Tech Stack" text="" />
                    <TextBox title="What I'm Learning" text="" />
                    <TextBox title="Questions I'm Pondering..." text="" />
                    <TextBox title="Company Criteria" text="" />
                    <TextBox title="Some Companies I Like" text="" />
                </div>
                <div className="order-2 lg:order-4 lg: w-2/12">
                    <Reward />
                    <Previous />
                </div>
            </div>
        </div>
    );
}

export default MainContent;