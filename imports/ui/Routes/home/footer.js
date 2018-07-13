import React from 'react'
import Slider from 'react-slick'
export default Footer = () => {
    const settings = {
        dots: false,
        arrows:false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed:1000,
        vertical: true,
        verticalSwiping: true,
        beforeChange: function(currentSlide, nextSlide) {
            console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function(currentSlide) {
            console.log("after change", currentSlide);
        }
    };

    return (
        <div className=" footerContainer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6 className='footerTitle'> ABOUT US</h6>
                        <div className='footerUnderlined'></div>

                        <p className="footerAbout text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores eligendi explicabo illum nihil nostrum omnis perspiciatis repudiandae suscipit vitae.</p>
                        <div className="d-flex justify-content-around footerSocials">
                            <button className="btn"><i class="fab fa-facebook-f"></i></button>
                            <button className="btn"><i class="fab fa-instagram"></i></button>
                            <button className="btn"><i class="fab fa-youtube"></i></button>
                        </div>

                        <p className='rights' > Ala Edine Mrebai 2018</p>
                    </div>
                    <div className="col-md-4">
                        <h6 className='footerTitle'> RECENT POSTS</h6>


                        <div className='footerUnderlined'></div>
                        <Slider {...settings}>
                            <div className="footerCardContainer d-flex justify-content-start">
                                <div className="footerImgContainer" style={{backgroundImage:"url(/gallery/img1.jpg)",width:'80px' }}></div>
                                    <div className="d-flex flex-column footerCardText">
                                        <p>Lorem ipsum dolor sit.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, voluptatum.</p>

                                    </div>

                            </div>
                            <div className="footerCardContainer d-flex justify-content-start">
                                <div className="footerImgContainer" style={{backgroundImage:"url(/gallery/img1.jpg)" }}></div>

                                <div className="d-flex flex-column footerCardText">
                                    <p>Lorem ipsum dolor sit.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, voluptatum.</p>

                                </div>
                            </div>
                            <div className="footerCardContainer d-flex justify-content-start">
                                <div className="footerImgContainer" style={{backgroundImage:"url(/gallery/img1.jpg)" }}></div>

                                <div className="d-flex flex-column footerCardText">
                                    <p>Lorem ipsum dolor sit.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, voluptatum.</p>

                                </div>
                            </div>
                            <div className="footerCardContainer d-flex justify-content-start">
                                <div className="footerImgContainer" style={{backgroundImage:"url(/gallery/img1.jpg)" }}></div>

                                <div className="d-flex flex-column footerCardText">
                                    <p>Lorem ipsum dolor sit.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, voluptatum.</p>

                                </div>
                            </div>
                            <div className="footerCardContainer d-flex justify-content-start">
                                <div className="footerImgContainer" style={{backgroundImage:"url(/gallery/img1.jpg)" }}></div>

                                <div className="d-flex flex-column footerCardText">
                                    <p>Lorem ipsum dolor sit.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, voluptatum.</p>

                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className="col-md-4">
                        <h6 className='footerTitle'> CONTACT US</h6>
                        <div className='footerUnderlined'></div>
                        <div className="footerContactMe d-flex justify-content-start">
                            <i className=" contactMeIcon fas fa-mobile-alt"></i>
                            <div className="d-flex flex-column footerContactInfo">
                                <p>Phone Number.</p>
                                <p className='footerPhoneVal'>95 355 010</p>
                            </div>
                        </div>

                        <div className="footerContactMe d-flex justify-content-start">
                            <i className="contactMeIcon mailIcon far fa-envelope"></i>
                            <div className="d-flex flex-column footerContactInfo">
                                <p>Email adress</p>
                                <p className='footerEmailAddressVal'>chasseurdimages@gmail.com</p>
                            </div>
                        </div>

                        <div className="footerContactMe d-flex justify-content-start">
                            <i className="contactMeIcon fas fa-map-marker-alt"></i>
                            <div className="d-flex flex-column footerContactInfo">
                                <p>Address</p>
                                <p className='footerAddressVal'>Oued Zarga 9013 , Beja , Tunisie</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}