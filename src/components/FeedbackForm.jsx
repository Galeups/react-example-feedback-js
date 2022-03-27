import React from "react";
import { useState } from "react";

import Card from "./shared/Card";

function FeedbackForm() {
  const [text, setText] = useState("");
  const onTextChange = (event) => {
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
          <button type="submit">Send</button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
