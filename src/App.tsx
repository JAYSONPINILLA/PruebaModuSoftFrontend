import { useState } from 'react'
import './App.css'
import EmployeByDepartment from './components/EmployeByDepartment';
import CreateDepartment from './components/CreateDepartment';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <hr />
        <CreateDepartment/>
      </div>
    </>
  )
}

export default App
