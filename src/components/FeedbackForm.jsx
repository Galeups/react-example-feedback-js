import React, { useState } from "react";

import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm() {
  const messageText = "Test must be least 10 characters!";
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);

  const onTextChange = (event) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage(messageText);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setText(event.target.value);
  };

  const handleSelectRating = (rating) => {
    setRating(rating);
  };

  return (
    <Card>
      <form>
        <h2>How would you rate you service with us?</h2>
        <RatingSelect select={handleSelectRating} />
        <div className="input-group">
          <input
            onChange={onTextChange}
            value={text}
            type="text"
            placeholder="Write a review"
          />
          <Button type="submit" version="secondary" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
