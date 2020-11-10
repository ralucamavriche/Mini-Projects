import React, { Component } from 'react'
import "../Assets/main.scss"

export default class Main extends Component {
    render() {
        return (
            <div>
                <h1>Projects</h1> 
                <div className="buttons">
                <a className="button btn btn-warning" href="/carousel" role="button">Carusel</a>
                <a className="button btn btn-warning" href="/voting" role="button">Voting</a>
                <a className="button btn btn-warning" href="/map" role="button">GoogleMap</a>

                </div>
                
            </div>
        )
    }
}
