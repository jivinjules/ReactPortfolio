import React from 'react'
import './Footer.css'
import Moment from 'react-moment'

class Footer extends React.Component {
    render() {
        // const dateToFormat = 'MMMM D, YYYY, h:mm a';
        return (
           <p className='footer'>Copyright © 2019   <Moment format='MMMM D, YYYY, h:mm a'>{this.props.dateToFormat}</Moment></p>
        )
    }
}

export default Footer