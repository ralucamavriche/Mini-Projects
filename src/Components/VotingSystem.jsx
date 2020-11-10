import React, { Component } from 'react';
import '../Assets/voting.scss';

export default class VotingSystem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            languages: [
                { name: "Php", votes: 0 },
                { name: "Python", votes: 0 },
                { name: "Go", votes: 0 },
                { name: "Java", votes: 0 }
            ]
        }
    }

    handleClick = (i) => {
        let newLanguages = [...this.state.languages];
		newLanguages[i].votes++;
		// function swap(array, i, j) {
		// 	var temp = array[i];
		// 	array[i] = array[j];
		// 	array[j] = temp;
		// }
		this.setState({languages: newLanguages});
    }

    render() {

        return (
            <div className="container">
                <h1 className="title">Vote Your Language!</h1>
                <div className="boxs">
                    {
                        this.state.languages.map((lang, index) =>
                            <div key={index} className="box">
                                <p className="votesCount">{lang.votes}</p>
                                <p className="languagesTitle">{lang.name}</p>
                                <button className="voteButton"
                                   onClick={this.handleClick.bind(this, index)}
                                >Click Here</button>
                            </div>

                        )}

                </div>

            </div>
        )
    }
}
