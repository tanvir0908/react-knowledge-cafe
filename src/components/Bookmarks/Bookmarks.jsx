/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
// import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

export default function Bookmarks({ bookmarks, readingTime }) {
  return (
    <div className="w-1/3">
      <div>
        <h3>Reading time: {readingTime}</h3>
      </div>
      <h2 className="text-3xl">Bookmarked Blogs: {bookmarks.length}</h2>
      {/* {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))} */}
      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark} />
      ))}
    </div>
  );
}

// Bookmarks.propTypes = {
//   bookmarks: PropTypes.arrays,
// };
