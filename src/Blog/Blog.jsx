/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

export default function Blog({ blog, handleAddToBookmark, handleMarkAsRead }) {
  const {
    id,
    title,
    cover,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="mb-20">
      <img
        className="w-full mb-8"
        src={cover}
        alt={`Cover picture of the title`}
      />
      <div className="flex justify-between mb-4">
        <div className="flex gap-3">
          <img className="w-14" src={author_img} alt="" />
          <div>
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="ml-2 text-red-400 text-2xl"
          >
            <FaBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>#{hash}</span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(reading_time, id)}
        className="text-purple-600 font-bold"
      >
        Mark as read
      </button>
    </div>
  );
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
};
