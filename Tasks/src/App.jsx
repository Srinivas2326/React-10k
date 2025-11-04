import React from 'react'
import UserInput from './UserInput'
import FruitList from './FruitList'
import StudentList  from './StudentList'
import ProductList from './ProductList'

function App() {
  const fruits = ["Apple", "Banana", "Mango", "Orange"]
  const students = [
    {
      id:1,
      name:"srinivas",
      grade:"A"
    },
    {
      id:2,
      name:"shekar",
      grade:"B"
    },
    {
      id:3,
      name:"raju",
      grade:"C"
    }
  ]
  return (
    <div>
      <h1>Task1</h1>
      <UserInput />
      <h1>Task2</h1>
      <FruitList fruits={fruits}/>
      <h1>Task3</h1>
      <StudentList students={students}/>
      <h1>Task4</h1>
      <ProductList />
    </div>
  )
}

export default App