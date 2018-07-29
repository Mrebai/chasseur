import React, {Component} from 'react'
import Slider from 'react-slick'
import HomeImgCard from '../../../components/cards/homeImgCard'
import HomeVideoCard from '../../../components/cards/homeVideoCard'
class HeadGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
            updateCount: 0

        }
    }

    _onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    };

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false,
            adaptiveHeight: true,
            afterChange: () =>
                this.setState(state => ({ updateCount: state.updateCount + 1 })),
            beforeChange: (current, next) => this.setState({ slideIndex: next })
        };
        const opts = {
            height: '240px',
            width: '100%',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0
            }
        };
        const opts2 = {
            height: '500px',
            width: '100%',

        };

        return (
            <div className="headGalleryContainer">
                <h3 className=" SectionTitle">{this.props.lng.gallery.toUpperCase()}</h3>
                <div className={'titleUnderlined'}></div>

                <div className={"reversedSlider container"}>
                    <div className=" optionsBtnGallery d-flex justify-content-around mb-4">
                        <button style={(this.state.slideIndex === 0)? {color:'#FF4081',boxShadow:'0 3px 5px #FF4081'} :{color:'#c4c4c4'} } className="btn" onClick={() => this.slider.slickGoTo(0)}>{this.props.lng.albums.toUpperCase()}</button>
                        <button style={(this.state.slideIndex === 1)? {color:'#FF4081',boxShadow:'0 3px 5px #FF4081'} :{color:'#c4c4c4'} } className="btn" onClick={() => this.slider.slickGoTo(1)}>{this.props.lng.videos.toUpperCase()}</button>
                        <button style={(this.state.slideIndex === 2)? {color:'#FF4081',boxShadow:'0 3px 5px #FF4081'} :{color:'#c4c4c4'} } className="btn" onClick={() => this.slider.slickGoTo(2)}>{this.props.lng.streaming.toUpperCase()}</button>
                    </div>

                    <Slider ref={slider => (this.slider = slider)} {...settings}>
                        <div>
                            <h4 className={'gallerySlideTitle'}> {this.props.lng.latestAlbums.toUpperCase()}</h4>
                            <div className="row">

                                {console.log(this.props.data)}
                                <div className="col-md-4">
                                    <HomeImgCard cardClass='galleryBigCard' data={this.props.data.getAlbums[0]} />
                                </div>
                                <div className="col-md-4">
                                    <HomeImgCard cardClass='gallerySmallCard gallerySmallCardFirst' data={this.props.data.getAlbums[1]}/>
                                    <HomeImgCard cardClass='gallerySmallCard' data={this.props.data.getAlbums[2]}/>
                                </div>
                                <div className="col-md-4">
                                    <HomeImgCard cardClass='gallerySmallCard gallerySmallCardFirst' data={this.props.data.getAlbums[3]}/>
                                    <HomeImgCard cardClass='gallerySmallCard' data={this.props.data.getAlbums[4]}/>
                                </div>
                            </div>
                            <button className="btn gallerySlideViewMoreBtn">{this.props.lng.viewMore.toUpperCase()}</button>

                        </div>
                        <div>
                            <h4 className={'gallerySlideTitle'}> {this.props.lng.newVideos.toUpperCase()}</h4>
                            <div className="row">


                                <div className="col-md-6 mb-2">
                                    <HomeVideoCard type={'video'} data={this.props.data.getVideos[0]}/>
                                </div>
                                <div className="col-md-6 mb-2">
                                    <HomeVideoCard type={'video'} data={this.props.data.getVideos[1]}/>
                                </div>
                                <div className="col-md-6 mb-2">
                                    <HomeVideoCard type={'video'} data={this.props.data.getVideos[2]}/>
                                </div>

                                <div className="col-md-6 mb-2">
                                    <HomeVideoCard type={'video'} data={this.props.data.getVideos[3]}/>
                                </div>
                            </div>
                            <button className="btn gallerySlideViewMoreBtn">{this.props.lng.viewMore.toUpperCase()}</button>


                        </div>
                        <div>
                            <h4 className={'gallerySlideTitle'}> {this.props.lng.liveStream.toUpperCase()}</h4>
                            <div className="row">

                                <div className="col-md-12">

                                    <HomeVideoCard data={this.props.data.getStreaming[0]}/>

                                </div>

                            </div>
                            <button className="btn gallerySlideViewMoreBtn">{this.props.lng.viewMore.toUpperCase()}</button>


                        </div>

                    </Slider>
                </div>
            </div>
        )
    }
}

export default HeadGallery