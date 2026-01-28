
import './App.css'
import Navbar from './Navbar'
import Home from './home'
import Contact from './Contact'
import About from './About'
import Reg from './reg'
import Layout from './layout'
import Count from './count'
import Form from './from'
import { Route, Routes } from 'react-router'
import Fetch from './fetch'

function App() {
  return (
    <>
    <Count/>
    <Form/>
      <Navbar />
      <Fetch/>
      <Routes element={<Layout/>}>
        <Route path="/" element={<Home/>
      }/>
        <Route path="/Contact/:num" element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/reg' element={<Reg/>}/>

      </Routes>
    </>
  )
}

export default App
