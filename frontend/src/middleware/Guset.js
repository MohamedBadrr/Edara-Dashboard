import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getAuthUser } from '../helper.js/Storage';
import { HeaderAdmin } from '../shared/headerAdmin';
import { Footer } from '../shared/footer';


const Guset= () => {
    const auth = getAuthUser();

  return (
    <>
    {
        (!auth) ?  <>  <Outlet />  </>  : <Navigate to={"/"} />  
    }
    </>
  );
}

export default Guset;