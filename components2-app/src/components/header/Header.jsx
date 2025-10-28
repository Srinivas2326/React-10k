import React from 'react';
import TopNavbar from './topNavbar';
import Navbar from './Navbar'


class Header extends React.Component{
    render(){
        return(
            <header>
                <TopNavbar />
                <Navbar />
            </header>
            
        )
    }
}


export default Header