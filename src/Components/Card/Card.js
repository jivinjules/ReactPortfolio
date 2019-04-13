import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import projects from '../../projects.json'
import M from "materialize-css";


class Card extends Component {
    state = {
        projects
    }

    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }

    render() {
        return (
            <div className='row'>
        
                
                {this.state.projects.map(project => (
                    <div className='col-md-4' key={project.id} >
                         <div className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator"  src={project.image} alt={project.name} />

                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">{project.name}<i className="material-icons right">more_vert</i></span>
                            <a href={project.link}>Explore {project.name}!</a>

                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">{project.name}<i className="material-icons right">close</i></span>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    </div>
                    </div>
                ))}
        </div>

        )

    }
}
export default Card