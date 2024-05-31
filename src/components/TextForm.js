import React, { useState } from "react";

export default function TextForm(probs) {
  const [text, setText] = useState("");

  const handleBtnUppercase = () => {
    setText(text.toUpperCase());
    probs.handleAlert("success", "Converted to Uppercase")
  };

  const handleBtnLowercase = () => {
    setText(text.toLowerCase());
    probs.handleAlert("success", "Converted to Lowercase")
  };

  const handleBtnSpaces = () => {
    let textArr = text.split(/[" "]+/)
    setText(textArr.join(" "));
    probs.handleAlert("success", "Removed Extra spaces")
  };

  const handleBtnClear = () => {
    setText("");
    probs.handleAlert("danger", "Text Cleared")
  };

    const handleBtnCopy = () => {
      let text_box = document.getElementById("text_box");
      text_box.select();
      navigator.clipboard.writeText(text_box.value);
      document.getSelection().removeAllRanges();
      probs.handleAlert("success", "Text Copied to Clipboard")
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div>
        <label
          htmlFor="text_box"
          className="block mb-2 text-lg font-bold text-gray-900 dark:text-white"
        >
          Your Text
        </label>
        <textarea
          id="text_box"
          rows="15"
          value={text}
          onChange={handleChange}
          placeholder="Write text here..."
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-200 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ></textarea>

        <button
          onClick={handleBtnUppercase}
          className="m-5 relative inline-block px-4 py-2 font-medium group"
        >
          <span className="rounded absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="rounded absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
          <span className="rounded relative text-black group-hover:text-white">
            Uppercase
          </span>
        </button>

        <button
          onClick={handleBtnLowercase}
          className="m-5 relative inline-block px-4 py-2 font-medium group"
        >
          <span className="rounded absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="rounded absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
          <span className="rounded relative text-black group-hover:text-white">
            Lowercase
          </span>
        </button>

        <button
          onClick={handleBtnSpaces}
          className="m-5 relative inline-block px-4 py-2 font-medium group"
        >
          <span className="rounded absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="rounded absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
          <span className="rounded relative text-black group-hover:text-white">
            Remove Spaces
          </span>
        </button>

        <button
          onClick={handleBtnCopy}
          className="m-5 relative inline-block px-4 py-2 font-medium group"
        >
          <span className="rounded absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="rounded absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
          <span className="rounded relative text-black group-hover:text-white">
            Copy
          </span>
        </button>

        <button
          onClick={handleBtnClear}
          className="m-5 relative inline-block px-4 py-2 font-medium group"
        >
          <span className="rounded absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="rounded absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
          <span className="rounded relative text-black group-hover:text-white">
            Clear text
          </span>
        </button>
      
      
      </div>


      <hr />

      <div>
        <label className="block mb-2 mt-6 text-lg font-bold text-gray-900 dark:text-white">
          Your text Summary
        </label>
        <span className="text-sm dark:text-gray-300">
          <span className="font-bold">{text.trim().split(" ").length}</span>{" "}
          Words, <span className="font-bold">{text.length}</span> Characters,{" "}
          <span className="font-bold">
            {(text.trim().split(" ").length - 1) * 0.005}
          </span>{" "}
          Mins to read
        </span>
      </div>
    </>
  );
}
