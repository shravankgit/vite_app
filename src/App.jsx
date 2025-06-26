import React from 'react'
import  FirstPage from './routing/FirstPage'
import SecondPage from './routing/SecondPage'
import ThirdPage from './routing/ThirdPage'
import FourthPage from './routing/FourthPage'
import {Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/abc' element = {<FirstPage/>}/>
        <Route path='/xyz' element = {<SecondPage/>}/>
        <Route path='/mmt' element = {<ThirdPage/>}/>
        <Route path='/ksk' element = {<FourthPage/>}/>
        
      </Routes>
      {/* <FirstPage/>
      <SecondPage/>
      <ThirdPage/>
      <FourthPage/> */}
    </div>
  )
}

export default App