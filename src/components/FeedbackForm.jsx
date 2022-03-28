import React from "react";
import { useState } from "react";

import Card from "./shared/Card";
import Button from "./shared/Button";

function FeedbackForm() {
  const messageText = "Test must be least 10 characters!";
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

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

  return (
    <Card>
      <form>
        <h2>How would you rate you service with us?</h2>
        {/* TODO - insert here a rating select component */}
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
