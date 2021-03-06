import React from 'react';
import {JulieImage} from '../Components/LinkImages/index'

const AboutMe = (props) => (
    <div>
        <p id="intro"><img className='profile' src={JulieImage} alt='julie' />After a fulfilling career as a science teacher, I have entered the world of technology to pursue a career in web development, with a focus on education and cryptocurrencies. As our emergent digital economy integrates
        and transforms our existing financial infrastructures, it is crucial to have developers with a deep understanding of blockchain technology. I have a passion for coding, teaching, cryptoassets, and blockchain
        technology. I desire to use my understanding of cryptocurrency, ability to learn and synthesize new information quickly, and coding skills to further this emergent technology and make sure it executes
        flawlessly. With ten years experience within education, I am an efficient problem-solver and able to thrive in fast-paced, highly demanding situations. <br /> <button className='button' onClick={props.return}>Return</button></p>
       
    </div>
)

export default AboutMe