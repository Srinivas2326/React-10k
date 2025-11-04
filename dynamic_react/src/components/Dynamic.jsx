import {Component} from 'react'


export class Message extends Component{

    constructor(){
        super()
        this.state = {greet:"hii"}
        this.ClickChange = this.handleClick.bind(this)
    }
    // greet = "hii"
    handleClick(){
        console.log("clicked")
        this.setState({greet:"How are you"})
        console.log(this.state.greet)        
    }
    render(){
        return (
            <div>
                <p>Message</p>
                <p>{this.state.greet}</p>
                <button onClick={this.ClickChange}>Change</button>
            </div>
        )
    }
}



// type 2 and type 3 event binding

export class CounterApp extends Component{
    constructor(){
        super();
        this.state = {count:0}
    }


    increment(){
        if (this.state.count>=10){
            this.setState({count:this.state.count=10})
        }
        else{
            this.setState({count:this.state.count+1})
        }
        
    }


    reset(){
        this.setState({count:this.state.count=0})
    }

    decrement = ()=>{
        if (this.state.count<=0){
            this.setState({count:this.state.count=0})
        }
        else{
            this.setState({count:this.state.count-1})
        }
        
    }



    render(){
        return(
            <div>
                <h2>Counter App</h2>
                <p>Count{this.state.count}</p>
                <button onClick={()=>this.increment()}>Increment</button>
                <button onClick={()=>this.reset()}>Reset</button>
                <button onClick = {this.decrement}>Decrement</button>
            </div>
        )
    }
}