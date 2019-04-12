import React from 'react';

const AboutMe = (props) => (
    <div>
        <p id="intro">After a fulfilling career as a science teacher, I am entering the world of technology to pursue a career in web development, with a focus on cryptocurrencies. As our emergent digital economy integrates
        and transforms our existing financial infrastructures, it is crucial to have developers with a deep understanding of blockchain technology. I have a passion for coding, cryptoassets, and blockchain
        technology. I desire to use my understanding of cryptocurrency, ability to learn and synthesize new information quickly, and coding skills to further this emergent technology and make sure it executes
        flawlessly. With ten years experience within education, I am an efficient problem-solver and able to thrive in fast-paced, highly demanding situations. </p>
        <button onClick={props.return}>Return</button>
    </div>
)

export default AboutMe