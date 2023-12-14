import Photo from "./sub/Photo";
import Status from "./sub/Status";
import Links from "./sub/Links";
import About from "./sub/TextAreas/About";
import Goals from "./sub/TextAreas/Goals";
import Skills from "./sub/TextAreas/Skills";
import Learning from "./sub/TextAreas/Learning";
import { Separator } from "../shadcn/components/ui/separator";
import JobCriteria from "./sub/TextAreas/JobCriteria";
import CompanyCriteria from "./sub/TextAreas/CompanyCriteria";
import JobExample from "./sub/TextAreas/JobExample";
import CompanyExample from "./sub/TextAreas/CompanyExample";
import WeirdProud from "./sub/TextAreas/WeirdProud";
import Questions from "./sub/TextAreas/Questions";
import Reward from "./sub/Reward";
import System from "./sub/System";
import Help from "./sub/Help";
import Submit from "./sub/Submit";

function MainContent() {
    return (
        <div className="flex flex-cols-4 md:grid-cols-none">
            <div >
                <Photo />
                <Status />
                <Links />
            </div>
            <div>
                <About />
                <Goals />
                <WeirdProud />
                <Separator />
                <JobCriteria />
                <JobExample />
            </div>
            <div>
                <Skills />
                <Learning />
                <Questions />
                <Separator />
                <CompanyCriteria />
                <CompanyExample />
            </div>
            <div >
                <Reward />
                <System />
                <Help />
                <Submit />
            </div>
        </div>
    );
}

export default MainContent;