import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "Text from context item 1",
      rating: 10,
    },
    {
      id: 2,
      text: "Text from context item 2",
      rating: 6,
    },
    {
      id: 3,
      text: "Text from context item 3",
      rating: 9,
    },
  ]);

  const [feedBackEdit, setFeedBackEdit] = useState({ item: {}, isEdit: false });

  const handleDelete = (id) => {
    if (window.confirm("Are you sure delete this item?")) {
      setFeedback(feedback.filter((el) => el.id !== id));
    }
  };

  const handleAddFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const handleEdit = (item) => {
    setFeedBackEdit({ item, isEdit: true });
  };

  const handleUpdateFeedBack = (id, editedItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...editedItem, id: id } : item
      )
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedBackEdit,
        handleDelete,
        handleAddFeedback,
        handleEdit,
        handleUpdateFeedBack,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
