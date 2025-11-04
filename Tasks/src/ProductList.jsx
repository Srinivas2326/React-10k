import React from 'react';
import data from './products.json';
import ProductCard from './ProductCard';


class ProductList extends React.Component{
    render(){
        return(
            <div style={{display:"flex"}}>
                {data.map(product=>(
                    <ProductCard 
                        key = {product.id}
                        title = {product.title}
                        price = {product.price}
                        description = {product.description}
                        image = {product.image}
                    />
                ))}

            </div>
        )
    }
}


export default ProductList