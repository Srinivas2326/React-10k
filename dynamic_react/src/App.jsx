import {Component} from 'react'
import {Message, CounterApp} from './components/Dynamic'


export class App extends Component{
  render(){
    return(
      <div>
        <h1>App</h1>
        <Message />
        <CounterApp />
      </div>
    )
  }
}


