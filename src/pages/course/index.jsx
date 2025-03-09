import React, { useState } from 'react';
import { Shield, Lock, Book, Code, Server, Clock, Database, Activity, Cpu, Globe, UserCheck, AlertTriangle, ChevronRight, CheckCircle, Circle } from 'lucide-react';
import './course.css';
const SecuredComputingCourse = () => {
  const [expandedModule, setExpandedModule] = useState(null);
  const [enrolled, setEnrolled] = useState(false);
  const [selectedModule, setSelectedModule] = useState(null);
  
  const modules = [
    {
      id: 1,
      title: "Foundations of Cybersecurity",
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      description: "Core principles and concepts of modern cybersecurity",
      topics: [
        "Security Models and Frameworks",
        "Threat Intelligence and Analysis",
        "Risk Assessment Methodologies",
        "Security Architecture Design"
      ],
      duration: "4 weeks",
      problems: [
        { id: 101, title: "Security Policy Implementation", difficulty: "Easy", completed: false },
        { id: 102, title: "Threat Model Construction", difficulty: "Medium", completed: false },
        { id: 103, title: "Risk Assessment Matrix", difficulty: "Medium", completed: false },
        { id: 104, title: "Defense-in-Depth Strategy", difficulty: "Hard", completed: false },
        { id: 105, title: "Security Control Categorization", difficulty: "Easy", completed: false }
      ]
    },
    {
      id: 2,
      title: "Cryptography and Secure Communications",
      icon: <Lock className="w-6 h-6 text-purple-500" />,
      description: "Advanced encryption techniques and secure data transmission",
      topics: [
        "Modern Encryption Algorithms",
        "Public Key Infrastructure (PKI)",
        "Quantum Cryptography Fundamentals",
        "Secure Channel Protocols"
      ],
      duration: "3 weeks",
      problems: [
        { id: 201, title: "Implement AES-256 Encryption", difficulty: "Medium", completed: false },
        { id: 202, title: "Certificate Chain Validation", difficulty: "Hard", completed: false },
        { id: 203, title: "Key Exchange Protocol", difficulty: "Medium", completed: false },
        { id: 204, title: "Quantum-Safe Key Generation", difficulty: "Hard", completed: false },
        { id: 205, title: "Hash Function Collision Resistance", difficulty: "Medium", completed: false }
      ]
    },
    {
      id: 3,
      title: "Secure Software Development",
      icon: <Code className="w-6 h-6 text-green-500" />,
      description: "Building security into the development lifecycle",
      topics: [
        "Secure Coding Practices",
        "OWASP Top 10 Vulnerabilities",
        "Static and Dynamic Code Analysis",
        "DevSecOps Implementation"
      ],
      duration: "5 weeks",
      problems: [
        { id: 301, title: "SQL Injection Prevention", difficulty: "Easy", completed: false },
        { id: 302, title: "Cross-Site Scripting Mitigation", difficulty: "Medium", completed: false },
        { id: 303, title: "API Security Implementation", difficulty: "Medium", completed: false },
        { id: 304, title: "Secure Authentication System", difficulty: "Hard", completed: false },
        { id: 305, title: "SAST Tool Integration", difficulty: "Medium", completed: false }
      ]
    },
    {
      id: 4,
      title: "Network Security & Defense",
      icon: <Server className="w-6 h-6 text-red-500" />,
      description: "Protecting network infrastructure against advanced threats",
      topics: [
        "Zero Trust Architecture",
        "Advanced Firewall Configurations",
        "Intrusion Detection/Prevention Systems",
        "Software-Defined Network Security"
      ],
      duration: "4 weeks",
      problems: [
        { id: 401, title: "Firewall Rule Optimization", difficulty: "Medium", completed: false },
        { id: 402, title: "IDS Pattern Recognition", difficulty: "Hard", completed: false },
        { id: 403, title: "Zero Trust Implementation", difficulty: "Hard", completed: false },
        { id: 404, title: "Network Segmentation Design", difficulty: "Medium", completed: false },
        { id: 405, title: "Packet Analysis Challenge", difficulty: "Medium", completed: false }
      ]
    },
    {
      id: 5,
      title: "Cloud Security Engineering",
      icon: <Database className="w-6 h-6 text-cyan-500" />,
      description: "Securing multi-cloud and hybrid environments",
      topics: [
        "Cloud Security Posture Management",
        "Containerization Security",
        "Serverless Security",
        "Identity and Access Management in Cloud"
      ],
      duration: "3 weeks",
      problems: [
        { id: 501, title: "IAM Policy Design", difficulty: "Medium", completed: false },
        { id: 502, title: "Container Escape Prevention", difficulty: "Hard", completed: false },
        { id: 503, title: "Cloud Storage Encryption", difficulty: "Easy", completed: false },
        { id: 504, title: "Serverless Function Security", difficulty: "Medium", completed: false },
        { id: 505, title: "Multi-Cloud Security Strategy", difficulty: "Hard", completed: false }
      ]
    },
    {
      id: 6,
      title: "Cyber Threat Intelligence",
      icon: <Activity className="w-6 h-6 text-amber-500" />,
      description: "Identifying and analyzing emerging threats",
      topics: [
        "Threat Hunting Methodologies",
        "Malware Analysis Techniques",
        "Indicators of Compromise (IoCs)",
        "Threat Intelligence Platforms"
      ],
      duration: "3 weeks",
      problems: [
        { id: 601, title: "Malware Signature Development", difficulty: "Hard", completed: false },
        { id: 602, title: "IOC Extraction Algorithm", difficulty: "Medium", completed: false },
        { id: 603, title: "Threat Feed Integration", difficulty: "Easy", completed: false },
        { id: 604, title: "APT Attribution Analysis", difficulty: "Hard", completed: false },
        { id: 605, title: "Intelligence Report Generation", difficulty: "Medium", completed: false }
      ]
    },
    {
      id: 7,
      title: "Advanced Penetration Testing",
      icon: <AlertTriangle className="w-6 h-6 text-orange-500" />,
      description: "Ethical hacking techniques to identify vulnerabilities",
      topics: [
        "Red Team Operations",
        "Advanced Exploitation Techniques",
        "Post-Exploitation Strategies",
        "Purple Team Exercises"
      ],
      duration: "4 weeks",
      problems: [
        { id: 701, title: "Exploit Development", difficulty: "Hard", completed: false },
        { id: 702, title: "Lateral Movement Techniques", difficulty: "Medium", completed: false },
        { id: 703, title: "Privilege Escalation Challenge", difficulty: "Hard", completed: false },
        { id: 704, title: "Social Engineering Assessment", difficulty: "Medium", completed: false },
        { id: 705, title: "Red Team Operation Planning", difficulty: "Hard", completed: false }
      ]
    },
    {
      id: 8,
      title: "Quantum-Secure Computing",
      icon: <Cpu className="w-6 h-6 text-indigo-500" />,
      description: "Preparing for post-quantum cryptographic challenges",
      topics: [
        "Post-Quantum Cryptographic Algorithms",
        "Quantum-Resistant Systems",
        "Quantum Key Distribution",
        "Quantum Computing Threats"
      ],
      duration: "2 weeks",
      problems: [
        { id: 801, title: "Lattice-Based Cryptography", difficulty: "Hard", completed: false },
        { id: 802, title: "Quantum Algorithm Simulation", difficulty: "Hard", completed: false },
        { id: 803, title: "Post-Quantum Key Exchange", difficulty: "Medium", completed: false },
        { id: 804, title: "Quantum-Resistant Protocol Design", difficulty: "Hard", completed: false },
        { id: 805, title: "QKD Protocol Implementation", difficulty: "Hard", completed: false }
      ]
    },
    {
      id: 9,
      title: "AI Security & Privacy",
      icon: <Globe className="w-6 h-6 text-pink-500" />,
      description: "Securing machine learning systems and AI applications",
      topics: [
        "Adversarial Machine Learning",
        "AI Model Privacy Protection",
        "Secure AI Deployment",
        "AI Ethics and Governance"
      ],
      duration: "3 weeks",
      problems: [
        { id: 901, title: "Adversarial Attack Detection", difficulty: "Hard", completed: false },
        { id: 902, title: "Model Poisoning Prevention", difficulty: "Medium", completed: false },
        { id: 903, title: "Differential Privacy Implementation", difficulty: "Hard", completed: false },
        { id: 904, title: "Federated Learning Security", difficulty: "Medium", completed: false },
        { id: 905, title: "AI Model Watermarking", difficulty: "Medium", completed: false }
      ]
    },
    {
      id: 10,
      title: "Security Governance & Compliance",
      icon: <UserCheck className="w-6 h-6 text-teal-500" />,
      description: "Managing security programs and ensuring regulatory compliance",
      topics: [
        "Security Frameworks (NIST, ISO, etc.)",
        "Privacy Regulations (GDPR, CCPA)",
        "Security Metrics and KPIs",
        "Security Awareness Training"
      ],
      duration: "3 weeks",
      problems: [
        { id: 1001, title: "Compliance Gap Analysis", difficulty: "Medium", completed: false },
        { id: 1002, title: "Privacy Impact Assessment", difficulty: "Medium", completed: false },
        { id: 1003, title: "Security Metrics Dashboard", difficulty: "Easy", completed: false },
        { id: 1004, title: "Security Program Maturity Model", difficulty: "Hard", completed: false },
        { id: 1005, title: "Third-Party Risk Assessment", difficulty: "Medium", completed: false }
      ]
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case "Easy": return "text-green-500";
      case "Medium": return "text-yellow-500";
      case "Hard": return "text-red-500";
      default: return "text-gray-500";
    }
  };

  const handleSolveProblem = (moduleId, problemId) => {
    // In a real application, this would navigate to the problem solving page
    console.log(`Solving problem ${problemId} from module ${moduleId}`);
  };
  
  const handleEnroll = () => {
    setEnrolled(true);
    setSelectedModule(modules[0]);
  };

  if (enrolled && selectedModule) {
    return (
      <div className="max-w-6xl mx-auto p-6 bg-gray-50 rounded-xl shadow-lg">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-t-xl">
          <h1 className="text-3xl font-bold text-white mb-2">Advanced Secured Computing</h1>
          <p className="text-blue-100">Problem sets for mastering cybersecurity concepts</p>
        </div>
        
        <div className="flex flex-col md:flex-row bg-white rounded-b-xl">
          {/* Module Selection Sidebar */}
          <div className="w-full md:w-64 border-r border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <h3 className="font-medium text-gray-700">Course Modules</h3>
            </div>
            <div className="overflow-y-auto max-h-96">
              {modules.map(module => (
                <div 
                  key={module.id}
                  className={`flex items-center p-3 cursor-pointer hover:bg-gray-50 border-l-4 ${selectedModule.id === module.id ? 'border-blue-500 bg-blue-50' : 'border-transparent'}`}
                  onClick={() => setSelectedModule(module)}
                >
                  <div className="mr-3">
                    {module.icon}
                  </div>
                  <div className="text-sm font-medium">
                    {module.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Problem List */}
          <div className="flex-1 p-4">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-800">{selectedModule.title}</h2>
              <p className="text-gray-600 text-sm">{selectedModule.description}</p>
            </div>
            
            <div className="overflow-y-auto max-h-96">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Problem</th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Difficulty</th>
                    <th className="text-right py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {selectedModule.problems.map(problem => (
                    <tr key={problem.id} className="hover:bg-gray-50">
                      <td className="py-3 px-4">
                        {problem.completed ? 
                          <CheckCircle className="w-5 h-5 text-green-500" /> : 
                          <Circle className="w-5 h-5 text-gray-300" />
                        }
                      </td>
                      <td className="py-3 px-4 font-medium text-gray-900">{problem.title}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 text-xs rounded-full ${getDifficultyColor(problem.difficulty)} bg-opacity-10`}>
                          {problem.difficulty}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <button 
                          className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                          onClick={() => handleSolveProblem(selectedModule.id, problem.id)}
                        >
                          Solve
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 rounded-xl shadow-lg">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-t-xl">
        <h1 className="text-3xl font-bold text-white mb-2">Advanced Secured Computing</h1>
        <p className="text-blue-100">Comprehensive curriculum for modern cybersecurity professionals</p>
        <div className="flex items-center mt-4">
          <Clock className="h-5 w-5 text-blue-100 mr-2" />
          <span className="text-blue-100">34 weeks • 10 modules • Certificate upon completion</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-white rounded-b-xl">
        {modules.map(module => (
          <div 
            key={module.id}
            className={`border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md ${expandedModule === module.id ? 'md:col-span-2' : ''}`}
          >
            <div 
              className="flex items-center justify-between p-4 cursor-pointer bg-white hover:bg-gray-50"
              onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
            >
              <div className="flex items-center">
                <div className="p-2 rounded-full bg-gray-100 mr-3">
                  {module.icon}
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{module.title}</h3>
                  <p className="text-sm text-gray-500">{module.description}</p>
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <Clock className="w-4 h-4 mr-1" />
                {module.duration}
              </div>
            </div>
            
            {expandedModule === module.id && (
              <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Topics Covered:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {module.topics.map((topic, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <div className="w-1 h-1 rounded-full bg-blue-500 mr-2"></div>
                      {topic}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-3 border-t border-gray-200 flex justify-between">
                  <div className="text-sm text-gray-500">
                    <span className="font-medium">{module.problems.length}</span> practice problems
                  </div>
                  <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                    View Module Details
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-6 bg-gray-800 rounded-xl p-6 text-center">
        <h2 className="text-xl font-bold text-white mb-2">Ready to become a cybersecurity expert?</h2>
        <p className="text-gray-300 mb-4">Enroll now and start your journey into advanced secured computing</p>
        <button 
          className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-colors"
          onClick={handleEnroll}
        >
          Enroll in Course
        </button>
      </div>
    </div>
  );
};

export default SecuredComputingCourse;