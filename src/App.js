import React, { Component } from "react";
import IndexBody from "./components/IndexBody";
import About from "./pages/About";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

class App extends Component {
  render() {
    return <>
     <Router>
           
           <Routes>
                 <Route exact path='/' element={< IndexBody />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/contact' element={< About />}></Route>
          </Routes>
       </Router>
    </>;
  }
}

export default App;
