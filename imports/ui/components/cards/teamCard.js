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
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, quaerat quam? Ab aperiam blanditiis, consequuntur delectus deleniti dolorem id itaque maiores, nisi placeat possimus provident sapiente soluta, tenetur vel vero.</p>
                </div>

                <div className="teamPerson" style={{backgroundImage:"url(/team/team1.jpg)"}}>
                </div>
                <p className="teamName"> Kabil Nefzi</p>
                <p className="teamDesc"> Customer</p>
            </div>
        )
    }
}

export default TeamCard