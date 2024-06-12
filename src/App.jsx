import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Form from './component/Form'
import './component/Form.css'
import Firstnavbar from './component/Firstnavbar'
import Content from './component/Content'
import Footer from './component/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Firstnavbar/>
      <Form/>
      <Navbar/>
      <Content/>
      <Footer/>
    
    </>
  )
}

export default App
