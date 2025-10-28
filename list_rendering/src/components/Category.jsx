import React from 'react';
import './Category.css'


const Category = () => {
    const data = [
        {
            image: "https://food-mart-template.vercel.app/images/icon-vegetables-broccoli.png",
            title: "Fruits & Veges"
        },

        {
            image: "https://food-mart-template.vercel.app/images/icon-bread-baguette.png",
            title: "Breads & Sweets"
        },

        {
            image: "https://food-mart-template.vercel.app/images/icon-soft-drinks-bottle.png",
            title: "Drinks & Mojitos"
        },

        {
            image: "https://food-mart-template.vercel.app/images/icon-wine-glass-bottle.png",
            title: "Wines & Beers"
        },

        {
            image: "https://food-mart-template.vercel.app/images/icon-animal-products-drumsticks.png",
            title: "Non-Veg"
        },

        {
            image: "https://food-mart-template.vercel.app/images/icon-bread-herb-flour.png",
            title: "Herbs & Veges"
        },

    ]
    return (
        <div>
            <h3>Category</h3>
            <div className="main-container">
                {data.map((value, index) =>
                    <div key={index} className="card-items">
                        <img src={value.image} alt={value.image} />
                        <h5>{value.title}</h5>
                    </div>)}
            </div>
        </div>
    )
}

export default Category