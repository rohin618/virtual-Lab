import React, { useContext} from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuthContext } from './AuthContext';

function RouteProtected({children,role}) {
    const {Auth,Role} = useAuthContext();
    const navigate = useNavigate();
    console.log(Auth)
    console.log(Role)

    if(Auth == null)return <Navigate to={'/login'}/>;
    else if(Auth == localStorage.getItem('Auth_token') && Role == 'ADMIN') return children;
    else if(Auth == localStorage.getItem('Auth_token') && Role == localStorage.getItem('role'))  return children;
    else navigate(-1);
    
    
  return children;
}

export default RouteProtected
