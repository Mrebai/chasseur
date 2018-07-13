import React, {Component} from 'react'

class HomeVideoCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: ''
        }
    }
    animation = (i) => {
        this.setState({size:i});
    };
    render() {
        return (
            <div className={"imgCardContainer " }>

                <div onMouseEnter={() => {this.animation('bigger')}} onMouseLeave={() => {this.animation('smaller')}} className={"card " + this.props.cardClass + ' ' + this.state.size} style={{backgroundImage:"url(" + this.props.image + ")", backgroundSize:'100% auto', backgroundPosition:'center' ,backgroundRepeat:"no-repeat"}} >

                    <div className="card-body headCardBody d-flex justify-content-between">
                        <div>
                            <h6 className="card-title">Card title</h6>
                            <p>At 1/14/2018 (50)</p>
                        </div>
                        <button onClick={() => this.expandImage('fixed')} className={ (this.state.size === '')? "btn expandHeadImg ":(this.state.size === 'bigger')? 'btn expandHeadImg biggerExpand' :'btn expandHeadImg smallerExpand'}>
                            <i class="fas fa-expand"></i>
                        </button>

                    </div>
                </div>
            </div>
        )
    }
}

export default HomeVideoCard


