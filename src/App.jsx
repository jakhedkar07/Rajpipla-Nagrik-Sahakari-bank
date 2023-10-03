import { useState } from 'react'
import Navigation from './components/Navigation/Navigation';
// import Footer from './components/Footer/Footer';
// import MyCarousel from './components/Carousel/Carousel'
// import Card from './components/Cards/Cards';
import Home from './components/Home/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { BrowserRouter as Router, Route,Routes,Outlet} from 'react-router-dom';
import Contact  from './components/Contacts/Contact';
import Footer from './components/Footer/Footer';
import * as React from "react";
import * as ReactDOM from "react-dom";
import History from './components/History/History';
import Locker from './components/Locker/Locker';
import { Founder } from './components/Founders/Founder';
import Vision from './components/Vision/Vision';
import Deposits from './Deposits/Deposits';
import Financial from './components/Financials/Financial';
import FD from './components/Fixeddeposit/FD';
import Goldloan from './components/Goldloan/Goldloan';
import Vehicleloan from './components/VehicleLoan/Vehicleloan';
import Houseloan from './components/HouseLoan/Houseloan';
import Business from './components/Business loan/business';
import Education from './components/Edcuation loan/Education';
import RTGS from './components/RTGS/RTGS';
import DD from './components/DD/DD';
import Calculator from './components/Calculator/Calculator';
import Savings from './components/Savings A/c/Savings';
import Current from './components/Current A/c/Current';
import Solar from './components/Solar/Solar';
import Nsckvp from './components/NSCKVP/Nsckvp';
import Recurring from './components/Recurring Desposit/Recurring';
function App() {
  return (
       <Router>
        {/* Define your routes */}
        <Navigation/>
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/History" element={<History/>}/>
          <Route path="/Founder" element={<Founder/>}/>
          <Route path="/Vision" element={<Vision/>}/>
          <Route path="/Deposits" element={<Deposits/>}/>
          <Route path="/Savings" element={<Savings/>}/>
          <Route path="/Current" element={<Current/>}/>
          <Route path="/Recurring" element={<Recurring/>}/>
          <Route path="/Goldloan" element={<Goldloan/>}/>
          <Route path="/Vehicleloan" element={<Vehicleloan/>}/>
          <Route path="/Nsckvp" element={<Nsckvp/>}/>
          <Route path="/Houseloan" element={<Houseloan  title="Home loan(For Commercial Construction)" tenure="20 Years" interestrate="11.50%"/>}/>
          <Route path="/Houseloan1" element={<Houseloan  title="Home loan(For New Construction)" tenure="20 Years" interestrate="9.5%"/>}/>
          <Route path="/Houseloan2" element={<Houseloan  title="Home loan(House maintenance)" tenure="10 Years" interestrate="11%"/>}/>
          <Route path="/Business" element={<Business/>}/>
          <Route path="/Education" element={<Education/>}/>
          <Route path="/Solar" element={<Solar/>}/>
          <Route path="/FD" element={<FD/>}/>
          <Route path="/Contact"  element={<Contact/>} />
          <Route path="/Locker"  element={<Locker/>} />
          <Route path="/Financial"  element={<Financial/>} />
          <Route path="/RTGS"  element={<RTGS/>} />
          <Route path="/DD"  element={<DD/>} />
          <Route path="/Calculator"  element={<Calculator/>} />
        </Routes>
        <Footer/>
        <Outlet/>
    </Router>
    
  )
}

export default App
