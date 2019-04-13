import React from 'react'
import './Footer.css'
import Moment from 'react-moment'
import { github, email, linkedin, stackoverflow } from '../../Components/LinkImages/index.js'

class Footer extends React.Component {
    render() {

        return (

            <span>
                <div className="footer">
                    <a href="https://github.com/jivinjules" >
                        <img className="links" src={github} alt='github' />
                    </a>
                    <a href="https://www.linkedin.com/in/julie-hodges-920391159/">

                        <img className="links" src={linkedin} alt='linkedin' />
                    </a>
                    <a href="https://stackoverflow.com/users/9638821/julie-hodges?tab=profile" >

                        <img className="links" src={stackoverflow} alt='stackoverflow' />
                    </a>
                    <a href="mailto:juliehodges05@gmail.com?Subject=web%20development" >

                        <img className="links" src={email} alt='email' />
                    </a>
                    <p>Copyright © 2019   <Moment format='MMMM D, YYYY, h:mm A'>{this.props.dateToFormat}</Moment></p>
                </div>
            </span>
        )
    }
}

export default Footer