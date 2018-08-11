import React, {Component} from 'react'
import Slider from 'react-slick'
import {withRouter} from 'react-router-dom'


class Head  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSlide :0,
            nav1: null,
            nav2: null,
            settings :  {

                lazyLoad: true,
                fade:true,
                arrows:false,
                autoplay: true,
                autoplaySpeed: 5000,
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                pauseOnHover: false,
                afterChange: current => this.setState({ currentSlide: current })
            },
            settings2 :  {

                lazyLoad: true,
                arrows:false,
                autoplay: true,
                autoplaySpeed: 5000,
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                pauseOnHover: false,
                afterChange: current => this.setState({ currentSlide: current })


            }
        };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }
    next() {
        this.slider1.slickNext();
        this.slider2.slickNext();
    }
    previous() {
        this.slider1.slickPrev();
        this.slider2.slickPrev();
    }

    scrollInToElement= (id) =>{
        const element = document.getElementById(id);
        element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

    };
    render() {
        return (
            <div className="row headerContainer">
                {console.log(this.props.history)}
                <div className="col-md-6 row headerFirstHalf" >
                    <div className="offset-md-4 col-md-8 " >
                        <h1 className='lead display-4 headTitle'> {this.props.lng.title.toUpperCase()}</h1>
                        <h6 className='lead display-4 headText mt-2'>{this.props.lng.underTitle.toUpperCase()} </h6>
                        <div className='sliderContainer d-flex flex-row'>
                            <div className='headNextPrev d-flex flex-row'>
                                <p className='miniImg'>{this.state.currentSlide +1 + '/4'}  </p>
                                <button  onClick={this.previous} className="btn px-1 m-0"> <i className="fas fa-arrow-left"></i></button>
                                <button onClick={this.next} className="btn px-1 mr-0" > <i className="fas fa-arrow-right"></i></button>
                            </div>



                            <div className=' minImgContainer' >
                                <Slider asNavFor={this.state.nav2}   ref={a => (this.slider1 = a)} {...this.state.settings2}>

                                    <div key={1} className=" minImg"  >
                                        <button className="btn coverBtn"  onClick={() => this.scrollInToElement("reserveId")} >{this.props.lng.reserveNow.toUpperCase()} </button>

                                        <img className='minHeadImg' src="/header/miniImg.jpg" alt=""/>

                                    </div>

                                    <div key={2} className=" minImg"  >
                                        <button   className="btn coverBtn"  onClick={() => this.scrollInToElement("offersId")} >{this.props.lng.ourOffers.toUpperCase()} </button>

                                        <img className='minHeadImg' src="/header/miniImg2.jpg" alt=""/>
                                    </div>
                                    <div key={3} className=" minImg"  >
                                        <button onClick={() => this.props.history.push('gallery/streaming')} className="btn coverBtn"> <i style={{color:'red'}} className="far fa-dot-circle"></i>{this.props.lng.streaming.toUpperCase()} </button>

                                        <img className='minHeadImg' src="/header/miniImg3.jpg" alt=""/>
                                    </div>
                                    <div key={4} className=" minImg"  >
                                        <button className="btn coverBtn"  onClick={() => this.scrollInToElement("galleryId")} >{this.props.lng.gallery.toUpperCase()} </button>

                                        <img className='minHeadImg' src="/header/miniImg4.jpg" alt=""/>
                                    </div>

                                </Slider>

                            </div>

                        </div>
                    </div>
                </div>



                <div  className="col-md-6 m-0 p-0 headMainSlider">
                    <Slider asNavFor={this.state.nav1}  ref={c => (this.slider2 = c)} {...this.state.settings}>

                            <div key={1} className=" mainImgContainer"  >
                                <div className='mainHeadFilter'></div>
                                <img className='headImg' src="/header/miniImg.jpg" alt=""/>

                            </div>

                        <div key={2} className=" mainImgContainer"  >
                            <div className='mainHeadFilter'></div>
                            <img className='headImg' src="/header/miniImg2.jpg" alt=""/>

                        </div>
                        <div key={3} className=" mainImgContainer"  >
                            <div className='mainHeadFilter'></div>
                            <img className='headImg' src="/header/miniImg3.jpg" alt=""/>

                        </div>
                        <div key={4} className=" mainImgContainer"  >
                            <div className='mainHeadFilter'></div>
                            <img className='headImg' src="/header/miniImg4.jpg" alt=""/>

                        </div>

                    </Slider>
                </div >

            </div>
        )
    }
}

export default withRouter(Head)