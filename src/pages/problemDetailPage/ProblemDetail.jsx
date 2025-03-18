// import React from 'react'
// import CodeEditor from './CodeEditor'
// import './problemdetial.css'


// const ProblemDetail = () => {
//   return (
//     <div>
//      <section className='problemDetail_section'>
//      <div className='problemDetail_inner'>
//         <div className='pd_leftSide'>
//             {/* left side */}
//             <h1>rohini kumar</h1>
//         </div>
//         <div className='pd_rightside'>
//             <div>
//                 <CodeEditor/>
//             </div>
//         </div>
//       </div>
//      </section>
//     </div>
//   )
// }

// export default ProblemDetail




import React from 'react'
import CodeEditor from './CodeEditor'
import './problemdetial.css'

const ProblemDetail = () => {
  return (
    <div>
      <section className='problemDetail_section'>
        <div className='container'>
          <div className='problemDetail_inner row'>
            {/* Left Side */}
            <div className='col-md-6 pd_leftSide'>
              <h2 className='problem-title'>Problem: Add Two Numbers</h2>
              <p className='problem-description'>
                Given two numbers, return their sum. You may assume that the numbers
                are non-negative integers.
              </p>

              <div className='test-case'>
                <h5>Test Case 1:</h5>
                <pre className='test-case-input'>
                  Input: {`(2, 3)`}
                </pre>
                <p className='expected-output'>
                  Expected Output: 5
                </p>
              </div>

              <div className='test-case'>
                <h5>Test Case 2:</h5>
                <pre className='test-case-input'>
                  Input: {`(5, 7)`}
                </pre>
                <p className='expected-output'>
                  Expected Output: 12
                </p>
              </div>
            </div>

            {/* Right Side - Code Editor */}
            <div className='col-md-6 pd_rightside'>
              <CodeEditor />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProblemDetail
