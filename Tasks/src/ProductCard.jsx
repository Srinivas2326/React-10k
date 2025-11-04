import React from 'react';

class ProductCard extends React.Component{
    render(){
        const {title, price, description, image} = this.props;

        return(
            <div style={{
                border:"1px solid black",
                width:"220px",
                padding:"10px",
                margin:"10px"
            }}>
                <img src={image} alt={title} width="120"/>
                <h3>{title}</h3>
                <p>Price: ₹{price}</p>
                <p>{description}</p>

            </div>
        )
    }
}


export default ProductCard