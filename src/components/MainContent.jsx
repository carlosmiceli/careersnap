import PersonColumn from './PersonColumn';
import SnapColumn from './SnapColumn';
import RewardColumn from './RewardColumn';

function MainContent() {
    return (
        <div className="flex flex-col md:grid-cols-2">
            <div className="md:col-span-1">
                <PersonColumn />
            </div>

            <div className="md:col-span-2">
                <SnapColumn />
            </div>

            <div className="flex flex-col md:col-span-1">
                <RewardColumn />
            </div>
        </div>
    );
}

export default MainContent;