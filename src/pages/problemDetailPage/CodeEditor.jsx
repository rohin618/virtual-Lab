// src/CodeEditor.js
import React, { useState, useEffect } from "react";

const CodeEditor = () => {
  const [code, setCode] = useState("// Write your code here\n");

  // Basic syntax highlighting function using simple regex
  const syntaxHighlight = (code) => {
    const keywords = /\b(function|return|const|let|var|if|else|for|while|class|new|this|try|catch)\b/g;
    const strings = /(['"]).*?\1/g;
    const comments = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)/g;

    return code
      .replace(comments, "<span class='comment'>$&</span>")
      .replace(keywords, "<span class='keyword'>$&</span>")
      .replace(strings, "<span class='string'>$&</span>");
  };

  // Handle the changes in the textarea
  const handleChange = (event) => {
    setCode(event.target.value);
  };

  // Function to add line numbers in the display area
  const addLineNumbers = (code) => {
    return code.split("\n").map((line, index) => {
      return (
        <div key={index} className="line">
          <span className="line-number">{index + 1}</span>
          <span className="line-code">{line}</span>
        </div>
      );
    });
  };

  return (
    <div className="code-editor">
      <textarea
        className="editor"
        value={code}
        onChange={handleChange}
        spellCheck="false"
        style={{
          width: "100%",
          height: "300px",
          fontFamily: "monospace",
          fontSize: "16px",
          backgroundColor: "#2d2d2d",
          color: "white",
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "10px",
          outline: "none",
          overflowY: "auto",
          whiteSpace: "pre-wrap",
          wordWrap: "break-word",
        }}
      />
      <div
        className="highlighted-code"
        dangerouslySetInnerHTML={{ __html: syntaxHighlight(code) }}
      />
    </div>
  );
};

export default CodeEditor;
