import React from 'react'
import './Components.css'
import '../Containers/Homepage/Homepage.css'

const FrontPage = (props) => (
    <div>
        <p className='front-page'> <strong>Julie Hodges Web Development</strong></p>
        <span className="cool-line"></span>
        <p className='front-page' onClick={props.handleClick}><strong> Meet Julie</strong></p>
        <div align='center'>
        <a className='front-page' id='portfolio' href="/portfolio" > View Portfolio</a>
        </div>
    </div>
)

export default FrontPage