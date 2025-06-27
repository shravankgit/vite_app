import React from 'react'
import  FirstPage from './routing/FirstPage'
import SecondPage from './routing/SecondPage'
import ThirdPage from './routing/ThirdPage'
import FourthPage from './routing/FourthPage'
import {Routes,Route} from 'react-router-dom'
import './App.css'
import NavBar from './NavBar'
import Delhi from './container/Delhi'
import { GiftProvider } from './context/ExampleContext'

const App = () => {
  
  const gift = "Apple"
  
  return (
    <div>
      <NavBar/>
      
      <Routes>
        <Route path='/signup' element = {<FirstPage/>}/>
        <Route path='/view' element = {<SecondPage/>}/>
        <Route path='/mmt' element = {<ThirdPage/>}/>
        <Route path='/ksk' element = {<FourthPage/>}/>
      </Routes>
      
      <h1> Sending Gift to Bangalore</h1>
      
      <GiftProvider>
        <Delhi/>
      </GiftProvider>
      
      {/* <FirstPage/>
      <SecondPage/>
      <ThirdPage/>
      <FourthPage/> */}
      
    </div>
  )
}

export default App