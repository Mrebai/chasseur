import React from 'react'
import Slider from 'react-slick'
export default AddAlbumImgs = ({images,mainImage,setMainImg,deleteImage}) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="albumImgsSlider" style={{overflow:'hidden'}}>

                    <Slider {...settings}>
                        {
                            images.map((img,key)=>
                                <div key={key}>
                                    <img  style={{ height: '200px',width:'auto',margin:'auto',display:'block' }}  src={img} alt="no image"/>
                                    {
                                        (img === mainImage)? <div className="d-flex justify-content-center" >   <button onClick={() => deleteImage(img)} className="btn btn-link">   <i className="far fa-trash-alt"></i></button></div>:
                                        <div className="d-flex justify-content-center">
                                            <button onClick={() => setMainImg(img)} className="btn btn-link mr-1">   <i className="fas fa-thumbtack"></i></button>
                                            <button  onClick={() => deleteImage(img)} className="btn btn-link ml-1">   <i className="far fa-trash-alt"></i></button>
                                        </div>
                                    }


                                </div>

                            )
                        }
                    </Slider>


        </div>
    )
}