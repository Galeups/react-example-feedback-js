import { useState } from "react";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure delete this item?")) {
      setFeedback(feedback.filter((el) => el.id !== id));
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList
          feedback={feedback}
          handleDelete={(id) => handleDelete(id)}
        />
      </div>
    </>
  );
}

export default App;
