import PropTypes from "prop-types";

function Header({ bgColor, textColor, text }) {
  const headStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={headStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#FF6A95",
};

Header.prototype = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
