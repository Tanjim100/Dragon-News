import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className='flex items-center gap-4 p-4 bg-base-300'>
            <p className='bg-[#D72050] text-base-100 py-2 px-3'>Latest</p>
            <Marquee pauseOnHover={true} speed={85}>
                <Link to="/news" className="font-semibold text-[#403F3F]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat assumenda deserunt ad aspernatur pariatur quam officiis, distinctio ullam nam alias asperiores! Deleniti, neque aliquid sint magnam corporis doloribus ipsum sequi!</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;