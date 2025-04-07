


import React, { useEffect, useState } from 'react'
import CodeEditor from './CodeEditor'
import './problemdetial.css'
import apiClient from '../../components/api/apiClients'
import { apiRouters } from '../../components/api/apiRouters'
import { useParams } from 'react-router-dom'
import { PortableWifiOff } from '@mui/icons-material'

const ProblemDetail = () => {
const[problem,setProblem] = useState({});
  const {slug} = useParams();
useEffect(()=>{
fetchData();
},[])
  const fetchData = async ()=>{
    try{
      const res = await apiClient.get(apiRouters.getProblemByProblemSetId(slug));
      if (res.data) {
        const updatedData = {
          ...res.data,
          test1: res.data.test1.replace(/\\n/g, '\n'),
          test2: res.data.test2.replace(/\\n/g, '\n')
        };
        console.log(updatedData);
        setProblem(updatedData);
      }
      
    }catch(E){
      console.log(E);
    }
  }

  return (
    <div>
      <section className='problemDetail_section'>
        <div className='container'>
          <div className='problemDetail_inner row'>
            {/* Left Side */}
            <div className='col-md-6 pd_leftSide'>
              <h2 className='problem-title'>{problem?.problemTitle}</h2>
              <p className='problem-description'>
                {problem?.problemDescription}
              </p>
              <div className='test-case'>
                <h5>Test Case 1:</h5>
                <pre className='test-case-input'>
                  Input: {problem.test1}
                </pre>
                <p className='expected-output'>
                  Expected Output: {problem.output1}
                </p>
              </div>

              <div className='test-case'>
                <h5>Test Case 2:</h5>
                <pre className='test-case-input'>
                  Input: {problem.test2}
                </pre>
                <p className='expected-output'>
                  Expected Output: {problem.output2}
                </p>
              </div>
            </div>

            

            {/* Right Side - Code Editor */}
            <div className='col-md-6 pd_rightside'>
            <CodeEditor
  testCases={[
    {
      input: problem.test1,
      expected: problem.output1
    },
    {
      input: problem.test2,
      expected: problem.output2
    }
  ]}
/>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProblemDetail
