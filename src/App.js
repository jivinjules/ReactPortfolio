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
  backgroundSize: '100%',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '100% important'
}

const App = () => (
  <Router>
    <div className='container' style={background}>
      <Wrapper>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/portfolio' component={Portfolio} />
      </Wrapper>

      <Footer />
    </div>

  </Router>
)
export default App;
