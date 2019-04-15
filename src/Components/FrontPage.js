import React from 'react'
import './Components.css'
import '../Containers/Homepage/Homepage.css'

const FrontPage = (props) => (
    <div>
        <p className='front-page'> Julie Hodges Web Development</p>
        <span className="cool-line"></span>
        <p className='front-page' onClick={props.handleClick}> Meet Julie</p>
        <div align='center'>
        <a className='front-page' id='portfolio' href="/portfolio" > View Portfolio</a>
        </div>
    </div>
)

export default FrontPage