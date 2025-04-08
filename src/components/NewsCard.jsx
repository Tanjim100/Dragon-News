import { FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { BiShow } from "react-icons/bi";
import { Link } from "react-router-dom";

const NewsCard = (props = {}) => {
    const { news } = props || {};
    const {_id, title, thumbnail_url, details, author, rating, total_view } = news;


    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <IoStar key={i} className={i <= rating ? "text-yellow-500" : "text-gray-300"} />
            );
        }
        return stars;
    };


    return (
        <div className="card bg-base-100 shadow-xl rounded-lg border border-gray-200">
            <div className="flex justify-between items-center bg-[#F3F3F3] p-4">
                <div className="flex items-center space-x-2">
                    <img
                        src={author?.img}
                        alt={author?.name}
                        className="w-10 h-10 rounded-full object-cover border border-gray-300"
                    />
                    <div>
                        <p className="font-semibold text-gray-800">{author?.name}</p>
                        <p className="text-sm text-gray-500">{author?.published_date}</p>
                    </div>
                </div>
                <div className="flex space-x-2 text-gray-500">
                    <FaRegBookmark className="cursor-pointer hover:text-gray-700" />
                    <FaShareAlt className="cursor-pointer hover:text-gray-700" />
                </div>
            </div>



            <div className="p-4 space-y-4">
                <h2 className="font-bold text-lg text-gray-900">{title}</h2>
                <img
                    src={thumbnail_url}
                    alt={title}
                    className="w-full h-80 object-cover rounded-md"
                />

                <p className="text-gray-700 mb-3">
                    {details.length > 100 ? details.slice(0, 100) + "..." : details}
                </p>

                <Link to={`/news/${_id}`} className="btn btn-sm btn-primary">Read More</Link>

                <div className="border-b border-gray-200"></div>

                <div className="flex justify-between items-center text-gray-600">
                    <div className="flex items-center space-x-1 text-yellow-500">
                        {renderStars(rating?.number || 0)}
                        <span>{rating?.number}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <BiShow />
                        <span>{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
