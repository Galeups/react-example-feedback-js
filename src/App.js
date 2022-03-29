import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackData from "./data/FeedbackData";
import AboutPage from "./pages/AboutPage";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure delete this item?")) {
      setFeedback(feedback.filter((el) => el.id !== id));
    }
  };

  const handleAddFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <Router>
      <>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm handleAdd={handleAddFeedback} />
                  <FeedbackStats feedback={feedback} />

                  <FeedbackList
                    feedback={feedback}
                    handleDelete={(id) => handleDelete(id)}
                  />
                </>
              }
            />

            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
