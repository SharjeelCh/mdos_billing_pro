import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { performLogout } from '../../auth/authSlice';

const Logout = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(()=>{
    console.log(isAuthenticated)
  })
  const handleLogout = () => {
    dispatch(performLogout());
  };

  return (
    <div>
      {isAuthenticated && (
        <button onClick={handleLogout}>Logout</button>
      )}
    </div>
  );
};

export default Logout;
