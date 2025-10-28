import React from 'react';
import Header from './components/header/Header'
import Banner from './components/sections/Banner'
import Footer from './components/footer/Footer'
import ListCategory from './components/Category';


class App extends React.Component{
  render(){
    return(
      <div>
        {/* <Header />
        <Banner />
        <Footer /> */}
        <ListCategory />
      </div>
    )
  }
}


export default App