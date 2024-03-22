import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        < >
           <Header></Header>
           <Outlet></Outlet>
    
   
            
        </>
    );
};

export default Root;