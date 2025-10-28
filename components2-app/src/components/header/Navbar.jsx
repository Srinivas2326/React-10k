import React from 'react';


class Navbar extends React.Component{
    shopFirstName = "COLO"
    shopLastName = "SHOP"
    render(){
        return(
            <nav>
                <div>
                    <span>{this.shopFirstName}</span>
                    <span>{this.shopLastName}</span>
                </div>

                <div>
                    <ul>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>Promotion</li>
                        <li>Pages</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar