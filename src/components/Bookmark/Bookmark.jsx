import PropTypes from "prop-types";

export default function Bookmark({ bookmark }) {
  return (
    <div>
      <h3 className="text-3xl">{bookmark.title}</h3>
    </div>
  );
}

Bookmark.propTypes = {
  bookmark: PropTypes.object,
};
