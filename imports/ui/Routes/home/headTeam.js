import React, {Component} from 'react'
import TeamCard from '../../components/cards/teamCard'
class HeadTeam  extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="teamContainer ">
                <h3 className=" SectionTitle">{this.props.lng.testimonials.toUpperCase()}</h3>
                <div className={'titleUnderlined'}></div>

                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-4" >
                            <TeamCard color={"#50c05f"} content={this.props.lng.testimonials1} job={this.props.lng.testimonials1Job} />
                        </div>
                        <div className="col-md-4" >
                            <TeamCard color={"#00bbd3"} content={this.props.lng.testimonials2} job={this.props.lng.testimonials2Job}/>
                        </div>
                        <div className="col-md-4" >
                            <TeamCard color={"#fe4565"} content={this.props.lng.testimonials3} job={this.props.lng.testimonials3Job}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeadTeam