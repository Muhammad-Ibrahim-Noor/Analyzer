import React, { useState } from "react";

export default function Textform(props) {
  let clickEventUppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  let clickEventClear = () => {
    let newText = "";
    setText(newText);
  };
  let clickEventLowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  let handleOnChange = (event) => {
    // console.log();
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div class="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="5"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={clickEventClear}>
          Clear Text
        </button>
        <button className="btn btn-primary" onClick={clickEventUppercase}>
          Convert to UPPERCASE
        </button>
        <button className="btn btn-primary mx-1" onClick={clickEventLowercase}>
          Convert to lowercase
        </button>
      </div>
      <div className="container my-3 ">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters including
          spaces
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
      </div>
      <h2>Preview</h2>
      <p>{text}</p>
    </>
  );
}
