import React from 'react';

class UserInput extends React.Component{
    constructor(){
        super()
        this.state = {
            username: ""
        }
    }

    handleChange = (event) =>{
        this.setState({username:event.target.value})
    }

    render(){
        return(
            <div>
                <label>Enter your name: </label>
                <input type="text" onChange={this.handleChange}/>

                <h2>Hello, {this.state.username}</h2>
            </div>
        )
    }
}


export default UserInput