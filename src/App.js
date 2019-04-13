import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from './Containers/Homepage/Homepage'
import Portfolio from './Containers/Portfolio/Portfolio'
import Footer from './Components/Footer/Footer'
import Wrapper from './Components/Wrapper/Wrapper'
import './App.css'
import { sunflower } from './Components/LinkImages'

const background = {
  backgroundImage: `URL(${sunflower})`,
  backgroundSize: "cover",
  height: "100%",
  width: "auto",
  left: '0',
  right: '0'
}

const App = () => (
  <Router>
    <div className='container' style={background}>
      <Wrapper>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/portfolio' component={Portfolio} />
      </Wrapper>
    </div>
    <Footer />

  </Router>
)
export default App;
