import React from 'react';


const Banner = ()=>{
    const str = "srinivas"
    return (
        <div>
            <h2>This is the banner</h2>
            <h1>My name is {str}</h1>
            {/* <Cards /> */}
        </div>
    )
}



export const Cards = () =>{
    return(
        <div>
            <div>
                <p>Card1</p>
            </div>
            <div>
                <p>Card2</p>
            </div>
        </div>
    )
}



export default Banner