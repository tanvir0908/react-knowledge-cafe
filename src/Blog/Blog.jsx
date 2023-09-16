import PropTypes from "prop-types";

export default function Blog({ blog }) {
  const {
    title,
    cover,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div>
      <img src={cover} alt={`Cover picture of the title`} />
      <div className="flex justify-between ">
        <div className="flex gap-3">
          <img className="w-14" src={author_img} alt="" />
          <div>
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>#{hash}</span>
        ))}
      </p>
    </div>
  );
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
