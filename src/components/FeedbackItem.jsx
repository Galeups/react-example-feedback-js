import PropTypes from "prop-types";
import { useContext } from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "./shared/Card";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item }) {
  const { handleDelete, handleEdit } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleEdit(item)} className="edit">
        <FaEdit color="purple" />
      </button>

      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
