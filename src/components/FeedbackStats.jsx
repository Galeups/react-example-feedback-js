import PropTypes from "prop-types";

function FeedbackStats({ feedback }) {
  let average =
    feedback.reduce((acc, current) => {
      return acc + current.rating;
    }, 0) / feedback.length || 0;

  average = average.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {average}</h4>
    </div>
  );
}

FeedbackStats.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackStats;
