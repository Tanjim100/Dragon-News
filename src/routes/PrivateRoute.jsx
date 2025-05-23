import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../pages/Loading';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    const location = useLocation();

    if(loading)
    {
        return <Loading/>;
    }
    if(user && user?.email)
    {
        return children;
    }
    return (
        <div>
            <Navigate state={location.pathname} to="/auth/login"/>
        </div>
    );
};

export default PrivateRoute;