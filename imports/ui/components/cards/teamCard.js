import React, {Component} from 'react'

class TeamCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opacity: '.7'
        }
    }

    render() {
        return (
            <div className="teamCardContainer">
                <div className="teamOverLine" style={{backgroundColor:this.props.color}}>
                </div>
                <div className="speech-bubble">
                    <p>{this.props.content}</p>
                </div>

                <div className="teamPerson" style={{backgroundImage:"url(/team/team1.jpg)"}}>
                </div>
                <p className="teamName"> Kabil Nefzi</p>
                <p className="teamDesc"> {this.props.job}</p>
            </div>
        )
    }
}

export default TeamCard