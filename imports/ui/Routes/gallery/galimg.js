import React, {Component} from 'react'
import GalImgCard from '../../components/cards/galImgCard'
import {Link} from 'react-router-dom'
import { Tooltip } from 'reactstrap';

class GalImg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentAlbum: this.props.data.filter(item => item._id === this.props.match.params.id),
            tooltipOpen: false
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
    }
    render() {



        return (
            <div>
                <div className="d-flex justify-content-between">
                    <Link id="backTarget" className='imgBackBtn' to={'/gallery/albums'}><i className="fas fa-backward"></i></Link>
                </div>
                <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="backTarget" toggle={this.toggle}>
                    Go back
                </Tooltip>
                <div className="row">


                    {
                        (this.state.currentAlbum.length === 1)?
                            this.state.currentAlbum[0].images.map( img => <GalImgCard img={img}/>
                            ):
                            <p> NO IMAGE FOUND IN THIS ALBUM</p>
                    }


                </div>
            </div>

        )
    }
}

export default GalImg