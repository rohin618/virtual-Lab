import React, { useState } from "react";
import axios from "axios";
import { apiRouters } from "../../components/api/apiRouters";
import apiClient from "../../components/api/apiClients";

const CodeEditor = ({ testCases = [] }) => {
  const [code, setCode] = useState();
  const [outputResults, setOutputResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setCode(event.target.value);
  };


  const runCode = async () => {
    setLoading(true);
    const results = [];

    for (let i = 0; i < testCases.length; i++) {
      const test = testCases[i];
      console.log(test)

      try {
        const res = await apiClient.post(apiRouters.codeExecute, {
          script: code,
          stdin: test.input,
          language: "python3",
          versionIndex: "3"
        });

        console.log("Backend Response:", res.data); 

        const output = res.data.output?.trim?.() || "";
        const expected = test.expected?.trim?.() || "";
        const passed = output === expected;

        results.push({
          input: test.input,
          expected: test.expected,
          output,
          passed,
        });
      } catch (err) {
        console.error("Execution Error:", err?.response?.data || err.message);

        results.push({
          input: test.input,
          expected: test.expected,
          output: err?.response?.data || "Error running code",
          passed: false,
        });
      }
    }

    setOutputResults(results);
    setLoading(false);
  };

  return (
    <div>
      <h4>Code Editor</h4>
      <textarea
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
        }}
      />

      <button onClick={runCode} className="btn btn-success mt-2">
        {loading ? "Running..." : "Run Code"}
      </button>

      <div className="mt-4">
        {outputResults.map((res, index) => (
          <div key={index} className={`alert ${res.passed ? 'alert-success' : 'alert-danger'}`}>
            <strong>Test Case {index + 1}:</strong><br />
            <strong>Input:</strong> <pre>{res.input}</pre>
            <strong>Expected:</strong> <pre>{res.expected}</pre>
            <strong>Your Output:</strong> <pre>{res.output}</pre>
            <strong>Status:</strong> {res.passed ? "Passed ✅" : "Failed ❌"}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodeEditor;
