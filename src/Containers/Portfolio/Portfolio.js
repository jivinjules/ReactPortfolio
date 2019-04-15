import React from 'react';
import Card from '../../Components/Card/Card'
import './Portfolio.css'

class Portfolio extends React.Component {
      render() {   
        return (
            <div>

                <Card />
                <div className='returnOrMove'>
                <button className='button'><a id='return' href='/'>Return</a></button> <i className="fas fa-arrow-alt-square-right"></i>
                </div>

            </div>
        )
    }
}

export default Portfolio