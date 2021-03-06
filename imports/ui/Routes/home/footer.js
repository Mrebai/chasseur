import React from 'react'
import Slider from 'react-slick'
export default Footer = ({lng,data}) => {
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
    };

    return (
        <div className=" footerContainer" id='footerSelector'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6 className='footerTitle'>{lng.aboutUs.toUpperCase()}</h6>
                        <div className='footerUnderlined'></div>

                        <p className="footerAbout text-justify">{lng.aboutUsText}</p>
                        <div className="d-flex justify-content-around footerSocials">
                            <button className="btn"><i className="fab fa-facebook-f"></i></button>
                            <button className="btn"><i className="fab fa-instagram"></i></button>
                            <button className="btn"><i className="fab fa-youtube"></i></button>
                        </div>

                        <p className='rights' > Ala Edine Mrebai 2018</p>
                    </div>
                    <div className="col-md-4">
                        <h6 className='footerTitle'> {lng.recentPosts.toUpperCase()}</h6>


                        <div className='footerUnderlined'></div>
                        <Slider className='slickFooterCOnt'  {...settings }>
                            {
                                data.slice(0,4).map(item =>

                                    <div key={item._id} className="footerCardContainer d-flex justify-content-start">
                                        <div className="footerImgContainer" style={{backgroundImage:"url("+ item.thumbnail  +")",width:'80px' }}></div>
                                        <div className="d-flex flex-column footerCardText">
                                            <p>{item.title}</p>
                                            <p>{item.info}</p>

                                        </div>

                                    </div>

                                )
                            }
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
                                <p className='footerEMailAdd'>{lng.address}</p>
                                <p className='footerAddressVal'>Oued Zarga 9013 , Beja , Tunisie</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}