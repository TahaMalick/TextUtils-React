import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCase was clicked" );
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("All text upperCase","success")
  };
  const handleLoClick = () => {
    // console.log("LowerCase was clicked" );
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("All text LowerCase","success")
  };
  const handleClear = () => {
    // console.log("Clear was clicked" );
    let newText = "";
    setText(newText);
    props.showAlert("All text Cleared","success")
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
    // console.log("On Change");
     
  };

  const handleCopyText = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("All text copy to clipboard","success")
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove extra spaces","success")
  };
  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading} </h1>
        <div className="my-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="3"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert to Upper case
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
          Convert to lower case
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleClear}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleCopyText}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {" "}
          {text.split(" ").filter((element)=>{return element.length!==0}).length } words and {text.length} Characters
        </p>
        <p>
          {" "}
          {0.008 * (text.split(" ").filter((element)=>{return element.length!==0}).length )} time need to read above
          paragraph
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ?text:'Enter something in above text box to preview'}</p>
      </div>
    </>
  );
}
