import React from 'react';


class FruitList extends React.Component{
    render(){
        return(
            <div>
                <h2>Fruits List: </h2>
                <ul>
                    {this.props.fruits.map((fruit, index)=>(
                        <li key={index}>{fruit}</li>
                    ))}
                </ul>
            </div>
        )
    }
}


export default FruitList