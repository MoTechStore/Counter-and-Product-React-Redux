import './App.css';
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomeScreen from './components/HomeScreen';
import Home from './components/Home'

function App() {

  return (
  <React.Fragment>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<HomeScreen />} exact />
      <Route path='/home' element={<Home />}/>

    </Routes>
    </BrowserRouter>
  </React.Fragment>
  )
}
export default App;
