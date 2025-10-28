import React from 'react';
import './TopNav.css';


class TopNavbar extends React.Component{
    render(){
        return(
            <div className="TopNav">
                <div>
                    <img src="src\assets\imgs\logo.png"/>
                </div>
                <div>
                    <select>
                        <option value="">All Categories</option>
                        <option value="">Groceries</option>
                        <option value="">Drinks</option>
                        <option value="">Chocolates</option>
                    </select>
                    <input type="text" placeholder="Search for more than 20,000 products"></input>
                </div>
                <div>
                    <pre>
                        For Support?
                        +980-34984089
                    </pre>
                </div>
            </div>
        )
    }
}


export default TopNavbar