import React, {Component} from 'react'
import GalImgCard from '../../components/cards/galImgCard'
class GalImg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentAlbum: this.props.data.filter(item => item._id === this.props.match.params.id),

        };

    }

    render() {



        return (
            <div className="row">


                {
                    (this.state.currentAlbum.length === 1)?
                        this.state.currentAlbum[0].images.map( img => <GalImgCard img={img}/>
                        ):
                        <p> NO IMAGE FOUND IN THIS ALBUM</p>
                }


            </div>
        )
    }
}

export default GalImg