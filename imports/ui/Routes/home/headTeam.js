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
                <h3 className=" SectionTitle">TESTIMONIALS</h3>
                <div className={'titleUnderlined'}></div>

                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-4" >
                            <TeamCard color={"#50c05f"}/>
                        </div>
                        <div className="col-md-4" >
                            <TeamCard color={"#00bbd3"}/>
                        </div>
                        <div className="col-md-4" >
                            <TeamCard color={"#fe4565"}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeadTeam