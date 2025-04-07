// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import apiClient from "../api/apiClients";
// import { apiRouters } from "../api/apiRouters";
// import { toast } from "react-toastify";

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const navigate = useNavigate()
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate if passwords match
//     if (formData.password !== formData.confirmPassword) {
//       toast.error("Passwords do not match!");
//       return; 
//     }

//     try {
//       const response = await apiClient.post(apiRouters.signIn, {
//         userName: formData.name,
//         password: formData.password,
//       });

//       console.log(response.data);
//       if (response.status === 208) {
//         toast.error("Username already exists, try another one.");
//       } else {
//         toast.success("Successfully Signed Up!");
//         navigate('/login')
        
//       }
//     } catch (e) {
//       console.log(e);
//       toast.error("Error signing up. Please try again.");
//     }
//   };

//   return (
//     <div className="container d-flex justify-content-center align-items-center vh-100">
//       <div className="card shadow-lg p-4 w-100" style={{ maxWidth: "400px" }}>
//         <h2 className="text-center mb-4">Create An Account</h2>
//         <form onSubmit={handleSubmit}>
//           {/* Name Field */}
//           <div className="mb-3">
//             <label className="form-label">Full Name</label>
//             <input
//               type="text"
//               className="form-control"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Enter your name"
//               required
//             />
//           </div>

//           {/* Password Field */}
//           <div className="mb-3">
//             <label className="form-label">Password</label>
//             <input
//               type="password"
//               className="form-control"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Enter password"
//               required
//             />
//           </div>

//           {/* Confirm Password Field */}
//           <div className="mb-3">
//             <label className="form-label">Confirm Password</label>
//             <input
//               type="password"
//               className="form-control"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               placeholder="Confirm password"
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <button type="submit" className="btn btn-primary w-100">
//             Sign Up
//           </button>
//         </form>

//         <p className="mt-3 text-center">
//           Already have an account? <Link to={"/login"}>Login</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignUp;



import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiClient from "../api/apiClients";
import { apiRouters } from "../api/apiRouters";
import { toast } from "react-toastify";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    confirmPassword: "",
    role: "USER", // Default role
  });

  const [showRoleSelect, setShowRoleSelect] = useState(false);
  const [accessPassword, setAccessPassword] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAccessSubmit = () => {
    const correctPassword = "enteradmin"; 
    if (accessPassword === correctPassword) {
      toast.success("Admin access granted!");
      setShowRoleSelect(true);
    } else {
      toast.error("Incorrect access password!");
      setShowRoleSelect(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const response = await apiClient.post(apiRouters.signIn, {
        userName: formData.name,
        password: formData.password,
        role: formData.role,
      });

      if (response.status === 208) {
        toast.error("Username already exists, try another one.");
      } else {
        toast.success("Successfully Signed Up!");
        navigate("/login");
      }
    } catch (e) {
      console.log(e);
      toast.error("Error signing up. Please try again.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4 w-100" style={{ maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Create An Account</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
            />
          </div>

          {/* Confirm Password Field */}
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              required
            />
          </div>

          {/* Admin Access Password + Button */}
          {!showRoleSelect && (
            <>
              <div className="mb-3">
                <label className="form-label">Admin Access Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={accessPassword}
                  onChange={(e) => setAccessPassword(e.target.value)}
                  placeholder="Enter admin access password"
                />
              </div>
              <button
                type="button"
                className="btn btn-secondary w-100 mb-3"
                onClick={handleAccessSubmit}
              >
                Submit Admin Access
              </button>
            </>
          )}

          {/* Show role select only if access is granted */}
          {showRoleSelect && (
            <div className="mb-3">
              <label className="form-label">Sign up as</label>
              <select
                className="form-select"
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
              </select>
            </div>
          )}

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>
        </form>

        <p className="mt-3 text-center">
          Already have an account? <Link to={"/login"}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
