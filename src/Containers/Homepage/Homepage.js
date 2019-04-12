import React from 'react';
import AboutMe from '../../Components/AboutMe'
import FrontPage from '../../Components/FrontPage'

class Homepage extends React.Component {
    state = {
        showFront: true,
        showAbout: false
    }

   handleClick = () => this.setState({showFront: false, showAbout: true})

   return = () => this.setState({showFront: true, showAbout: false})

    render() {
        return (
            <div>
               {this.state.showFront ? <FrontPage handleClick={this.handleClick} /> :  null }
               {this.state.showAbout ? <AboutMe return={this.return}/> :  null }
            </div>
        )
    }
}

export default Homepage