import React from 'react'
import './App.css'
import {originals,upComingMalayalam,malayalam,tamil,hindi,action} from './urls'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/NavBar/Navbar'
import RowPost from './Components/RowPost/RowPost'
import { ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='App'>
      <ToastContainer />
      <Navbar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={upComingMalayalam} title='Upcoming Malayalam' isSmall/>
      <RowPost url={malayalam} title='Malayalam' isSmall/>
      <RowPost url={tamil} title='Tamil' isSmall/>
      <RowPost url={hindi} title='Hindi' isSmall/>
      <RowPost url={action} title='Action' isSmall />
    </div>
  )
}

export default App
