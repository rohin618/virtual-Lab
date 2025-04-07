import React, { useContext} from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuthContext } from './AuthContext';

function RouteProtected({children,role}) {
    const {Auth,Role} = useAuthContext();
    const navigate = useNavigate();

    if(Auth == null)return <Navigate to={'/login'}/>;
    else if(Role == 'USER' && localStorage.getItem('role') == 'USER' &&  role == 'USER')return children; 
    else if(Role == 'ADMIN' && localStorage.getItem('role') == 'ADMIN' && role == 'USER' || role == 'ADMIN') return children;
    else navigate(-1);
    
    
  return children;
}

export default RouteProtected
