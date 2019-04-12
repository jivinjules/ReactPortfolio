import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from './Containers/Homepage/Homepage'
import Portfolio from './Containers/Portfolio/Portfolio'
import Footer from './Components/Footer/Footer'

const App = () => (
  <Router>
    <div>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/portfolio' component={Portfolio} />
      <Footer />
      </div>
    </Router>
)
export default App;
