import React, {Component} from 'react'
import Slider from 'react-slick'
import HomeImgCard from '../../../components/cards/homeImgCard'
import YouTube from 'react-youtube';
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
                <h3 className=" SectionTitle">GALLERY</h3>
                <div className={'titleUnderlined'}></div>

                <div className={"reversedSlider container"}>
                    <div className=" optionsBtnGallery d-flex justify-content-around mb-4">
                        <button style={(this.state.slideIndex === 0)? {color:'#FF4081',boxShadow:'0 3px 5px #FF4081'} :{color:'#c4c4c4'} } className="btn" onClick={() => this.slider.slickGoTo(0)}>Albums</button>
                        <button style={(this.state.slideIndex === 1)? {color:'#FF4081',boxShadow:'0 3px 5px #FF4081'} :{color:'#c4c4c4'} } className="btn" onClick={() => this.slider.slickGoTo(1)}>Videos</button>
                        <button style={(this.state.slideIndex === 2)? {color:'#FF4081',boxShadow:'0 3px 5px #FF4081'} :{color:'#c4c4c4'} } className="btn" onClick={() => this.slider.slickGoTo(2)}>Streaming</button>
                    </div>

                    <Slider ref={slider => (this.slider = slider)} {...settings}>
                        <div>
                            <h4 className={'gallerySlideTitle'}> LATEST ALBUMS</h4>
                            <div className="row">

                                {console.log(this.state.slideIndex)}
                                <div className="col-md-4">
                                    <HomeImgCard cardClass='galleryBigCard' image={'/gallery/img1.jpg'}/>
                                </div>
                                <div className="col-md-4">
                                    <HomeImgCard cardClass='gallerySmallCard gallerySmallCardFirst' image={'/gallery/img1.jpg'}/>
                                    <HomeImgCard cardClass='gallerySmallCard' image={'/gallery/img1.jpg'}/>
                                </div>
                                <div className="col-md-4">
                                    <HomeImgCard cardClass='gallerySmallCard gallerySmallCardFirst' image={'/gallery/img1.jpg'}/>
                                    <HomeImgCard cardClass='gallerySmallCard' image={'/gallery/img1.jpg'}/>
                                </div>
                            </div>
                            <button className="btn gallerySlideViewMoreBtn">VIEW MORE</button>

                        </div>
                        <div>
                            <h4 className={'gallerySlideTitle'}> NEW VIDEOS</h4>
                            <div className="row">



                                <div className="col-md-6 mb-2">
                                    <div className="embed-responsive embed-responsive-21by9">
                                        <iframe  className="embed-responsive-item" src="https://www.youtube.com/embed/iyLkHIftPis"></iframe>
                                    </div>

                                </div>
                                <div className="col-md-6 mb-2">
                                    <div className="embed-responsive embed-responsive-21by9">
                                        <iframe  className="embed-responsive-item" src="https://www.youtube.com/embed/iyLkHIftPis"></iframe>
                                    </div>

                                </div>
                                <div className="col-md-6 mb-2">
                                    <div className="embed-responsive embed-responsive-21by9">
                                        <iframe  className="embed-responsive-item" src="https://www.youtube.com/embed/iyLkHIftPis"></iframe>
                                    </div>

                                </div>

                                <div className="col-md-6 mb-2">
                                    <div className="embed-responsive embed-responsive-21by9">
                                        <iframe  className="embed-responsive-item" src="https://www.youtube.com/embed/iyLkHIftPis"></iframe>
                                    </div>

                                </div>
                            </div>
                            <button className="btn gallerySlideViewMoreBtn">VIEW MORE</button>


                        </div>
                        <div>
                            <h4 className={'gallerySlideTitle'}> Live Streaming</h4>
                            <div className="row">

                                <div className="col-md-12">

                                        <div className="embed-responsive embed-responsive-21by9">
                                            <iframe  className="embed-responsive-item" src="https://www.youtube.com/embed/iyLkHIftPis"></iframe>
                                        </div>


                                </div>

                            </div>
                            <button className="btn gallerySlideViewMoreBtn">VIEW MORE</button>


                        </div>

                    </Slider>
                </div>
            </div>
        )
    }
}

export default HeadGallery