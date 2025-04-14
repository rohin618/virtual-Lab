import React, { useEffect, useState } from "react";
import apiClient from "../../components/api/apiClients";
import { apiRouters } from "../../components/api/apiRouters";

const CodeEditor = ({ testCases = [], problemId,problemOverviewId }) => {
  const [code, setCode] = useState("");
  const [outputResults, setOutputResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  const [pageDetail,setPageDetail] = useState({});
  useEffect(()=>{
   if(problemId != 0){
    fetchPageDetail();
   }
  },[problemId])

  const fetchPageDetail = async ()=>{
    try{
      const response = await apiClient.get(apiRouters.getPageDetail(problemId));
      if(response.status === 200){
        setPageDetail(response.data);
        setCode(response.data.currentCode);
      }
    }catch(e){
      console.log(e)
    }
  }

  const runCode = async () => {
    setLoading(true);

    try {
      const res = await apiClient.post(apiRouters.codeExecute(problemId,problemOverviewId), {
        script: code,
        language: "python3",
        versionIndex: "3",
        testCases: testCases ,
      });

      setOutputResults(res.data);
    } catch (error) {
      console.error("Execution Error:", error?.response?.data || error.message);
      setOutputResults([{
        input: "",
        expected: "",
        output: "Error running code",
        passed: false,
      }]);
    } finally {
      setLoading(false);
    }
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

      <button onClick={runCode} className="btn btn-success mt-2" disabled={loading}>
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
