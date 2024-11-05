// eslint-disable-next-line no-unused-vars
import React from "react";
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
// import {Route} from "react-router-dom";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Enrollment from "./components/Enrollment";
import Event from "./components/Event";
import Feedback from "./components/Feedback";
import Instructor from "./components/Instructor";
import Participant from "./components/Participant";
import Payment from "./components/Payment";
import Session from "./components/Session";


import { BrowserRouter as Router,Route,Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
       <Route exact path = "/" element={<Home/>} />
       <Route exact path = "/about" element={<About/>} />
       <Route exact path = "/project" element={<Project/>} />
       <Route exact path = "/contact" element={<Contact/>} />
       <Route exact path="/register" element={<Register/>}/>
       <Route exact path="/enrollment" element={<Enrollment/>}/>
       <Route exact path="/event" element={<Event/>}/>
       <Route exact path="/feedback" element={<Feedback/>}/>
       <Route exact path="/instructor" element={<Instructor/>}/>
       <Route exact path="/participant" element={<Participant/>}/>
       <Route exact path="/payment" element={<Payment/>}/>
       <Route exact path="/session" element={<Session/>}/>

      </Routes>
      </Router>
      
    </div>   
  );
}

// export default App;
