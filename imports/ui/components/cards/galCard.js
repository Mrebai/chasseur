import React, {Component} from 'react'

class GalCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: ''
        }
    }
    animation = (i) => {
        this.setState({size:i});
    };

    getDate = () => {
        const date = new Date(this.props.data.date);
        let year = date.getFullYear();
        let month = date.getMonth()+1;
        let dt = date.getDate();

        if (dt < 10) {
            dt = '0' + dt;
        }
        if (month < 10) {
            month = '0' + month;
        }

        return(year+'-' + month + '-'+dt);
    };
    render() {
        return (
            <div className={"vidCardContainer " }>

                <div  className={"card " + this.props.cardClass + ' ' + this.state.size} >

                    <div className="embed-responsive embed-responsive-21by9">
                        {(this.props.type === 'video')?
                            <iframe  className="embed-responsive-item" src={"https://www.youtube.com/embed/"+ this.props.data.video}/>:
                            <iframe  className="embed-responsive-item" src={"https://www.youtube.com/embed/"+ this.props.data.link}/>
                        }

                    </div>
                    <div className="card-body videoCardBody d-flex justify-content-between">
                        <div>
                            <h6 className="card-title">{this.props.data.title}</h6>
                            <p>{this.getDate() }</p>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default GalCard


