import React, {Component} from 'react'
import {Link} from 'react-router-dom'
class HomeImgCard extends Component {
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
            <div className={"imgCardContainer " }>

                <div onMouseEnter={() => {this.animation('bigger')}} onMouseLeave={() => {this.animation('smaller')}} className={"card " + this.props.cardClass + ' ' + this.state.size} style={{backgroundImage:"url(" + this.props.data.thumbnail + ")", backgroundSize:'cover', backgroundPosition:'center' ,backgroundRepeat:"no-repeat"}} >


                    <div className="card-body headCardBody d-flex justify-content-between">
                        <div>
                            <h6 className="card-title">{this.props.data.title}</h6>
                            <p>{this.getDate() }</p>
                        </div>
                        <Link to={'/gallery/albums/' + this.props.data._id} onClick={() => this.expandImage('fixed')} className={ (this.state.size === '')? "btn expandHeadImg ":(this.state.size === 'bigger')? 'btn expandHeadImg biggerExpand' :'btn expandHeadImg smallerExpand'}>
                            <i className="fas fa-expand"></i>
                        </Link>

                    </div>
                </div>
            </div>
        )
    }
}

export default HomeImgCard


