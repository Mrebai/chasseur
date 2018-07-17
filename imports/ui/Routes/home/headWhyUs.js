import React, {Component} from 'react'
import Slider from 'react-slick'
class HomeWhyUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex : 0
        };
        this.myInput = this.myInput.bind(this)
    }

    myInput =() => {
        console.log(this.elemHeight)
    } ;
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false,
            autoplay: true,
            autoplaySpeed: 5000,
            fade:true,

            afterChange: () =>
                this.setState(state => ({ updateCount: state.updateCount + 1 })),
            beforeChange: (current, next) => this.setState({ slideIndex: next })
        };


        return (
            <div className="whyUsContainer">
                <h3 className=" SectionTitle ">{this.props.lng.whyUs.toUpperCase()}</h3>
                <div className={'titleUnderlined'}></div>
                {
                    console.log()
                }
                <div className="container">
                    <div className="row mt-4">

                        <div className="col-md-2 col-4" >
                            <button style={(this.state.slideIndex === 0)? {color:'#FF4081',boxShadow:'0 3px 5px #FF4081'} :{color:'#c4c4c4'} } onClick={() => this.slider.slickGoTo(0)}  className="btn whyUsBtn"><i className="fas fa-users"></i></button>
                        </div>
                        <div className="col-md-2 col-4">
                            <button style={(this.state.slideIndex === 1)? {color:'#FF4081',boxShadow:'0 3px 5px #FF4081'} :{color:'#c4c4c4'} }  onClick={() => this.slider.slickGoTo(1)} className="btn whyUsBtn"> <i className="fas fa-camera"></i></button>
                        </div>
                        <div className="col-md-2 col-4">
                            <button style={(this.state.slideIndex === 2)? {color:'#FF4081',boxShadow:'0 3px 5px #FF4081'} :{color:'#c4c4c4'} } onClick={() => this.slider.slickGoTo(2)} className="btn whyUsBtn"><i className="far fa-calendar-alt"></i> </button>
                        </div>
                        <div className="col-md-2 col-4">
                            <button style={(this.state.slideIndex === 3)? {color:'#FF4081',boxShadow:'0 3px 5px #FF4081'} :{color:'#c4c4c4'} } onClick={() => this.slider.slickGoTo(3)} className="btn whyUsBtn"> <i className="fas fa-video"></i> </button>
                        </div>
                        <div className="col-md-2 col-4">
                            <button style={(this.state.slideIndex === 4)? {color:'#FF4081',boxShadow:'0 3px 5px #FF4081'} :{color:'#c4c4c4'} } onClick={() => this.slider.slickGoTo(4)} className="btn whyUsBtn"><i className="fas fa-car"></i></button>
                        </div>
                        <div className="col-md-2 col-4">
                            <button style={(this.state.slideIndex === 5)? {color:'#FF4081',boxShadow:'0 3px 5px #FF4081'} :{color:'#c4c4c4'} } onClick={() => this.slider.slickGoTo(5)} className="btn whyUsBtn"> <i className="fas fa-hand-holding-usd"></i></button>
                        </div>
                    </div>
                </div>

                <Slider ref={slider => (this.slider = slider)} {...settings}>
                    <div>
                        <p className={'whyUsMsg lead'} > {this.props.lng.whyTsText1}</p>
                    </div>
                    <div>
                        <p  className={'whyUsMsg lead'} >  {this.props.lng.whyTsText2} </p>
                    </div>
                    <div>
                        <p  className={'whyUsMsg lead'} >  {this.props.lng.whyTsText3} </p>
                    </div>
                    <div>
                        <p  className={'whyUsMsg lead'} > {this.props.lng.whyTsText4} </p>
                    </div>
                    <div>
                        <p  className={'whyUsMsg lead'} >  {this.props.lng.whyTsText5} </p>
                    </div>
                    <div>
                        <p  className={'whyUsMsg lead'} >  {this.props.lng.whyTsText6} </p>
                    </div>



                </Slider>

            </div>
        )
    }
}

export default HomeWhyUs