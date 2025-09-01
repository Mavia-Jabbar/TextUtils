import React, { useState } from "react";
import "./../css Files/TextEnter.css";

export default function TextEnter(props) {
  const [text, settext] = useState("");
  const [length, setlength] = useState();
  const [textLength, settextLength] = useState();
  const [showData, setshowData] = useState(false);

  const renderData = () => {
    if (length && textLength === 0) {
      return (
        <div className="summary">
          <h2>Summary of Your Text</h2>
          <p>No words and no characters</p>
        </div>
      );
    } else {
      return (
        <div className="summary">
          <h2>Summary of Your Text</h2>
          <p>
            {length} words and {textLength} characters
          </p>
          <p>{(0.008 * length).toFixed(2)} Minutes to read</p>
          <div>
            <h4>Preview</h4>
            <p>{text}</p>
          </div>
        </div>
      );
    }
  };

  const countCharacters = () => {
    let newtext = text.trim().split(/\s+/).length;
    let newTextLength = text.length;
    settextLength(newTextLength);
    setlength(newtext);
    setshowData(true);
  };

  const handleClipboard = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => props.showAlert("Text copied to clipboard", "success"))
      .catch((err) => props.showAlert("Failed to copy text", "danger"));
  };

  const removeExtraSpaces = () => {
    let newText = text.trim().split(/\s+/).join(" ");
    settext(newText);
  };

  const clearFunc = () => settext("");
  const handleUpClick = () =>
    settext(text.toUpperCase().trim().split(/\s+/).join(" "));
  const lowerCaseFunc = () =>
    settext(text.toLowerCase().trim().split(/\s+/).join(" "));
  const handleUpChange = (event) => settext(event.target.value);

  return (
    <div className="text-enter-container">
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <p>{props.title}</p>
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleUpChange}
        ></textarea>
        <div className="button-group my-3">
          <button className="btn btn-dark" onClick={handleClipboard}>
            Copy to clipboard
          </button>
          <button className="btn btn-primary" onClick={handleUpClick}>
            Uppercase
          </button>
          <button className="btn btn-primary" onClick={lowerCaseFunc}>
            Lowercase
          </button>
          <button className="btn btn-danger" onClick={clearFunc}>
            Clear
          </button>
          <button className="btn btn-success" onClick={removeExtraSpaces}>
            Remove spaces
          </button>
          <button className="btn btn-info" onClick={countCharacters}>
            Count words
          </button>
        </div>
      </div>
      {showData && renderData()}
    </div>
  );
}
