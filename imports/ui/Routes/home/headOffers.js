import React from 'react';

export default HeadOffers = ({lng}) => {
    const scrollInToElem= (id) =>{
        const element = document.getElementById(id);
        element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

    };
    return (
        <div className="headOfferContainer" id="offersId">
            <h3 className=" SectionTitle offersTitle">{lng.offers}</h3>
            <div className='titleUnderlined'></div>

            <div className="container mt-4">
                <div className="row myOffersContainer">
                    <ul className="list-group offset-sm-1 col-sm-3 p-0 secondaryOffer align-self-center">
                        <li className="list-group-item"> {lng.offer1}</li>
                        <li className="list-group-item">{lng.offer11}</li>
                        <li className="list-group-item">{lng.offer12}</li>
                        <li className="list-group-item">{lng.offer13}</li>
                        <li className="list-group-item">{lng.offer1Price}</li>

                    </ul>
                    <ul className="list-group col-sm-4 p-0 mainOffer">
                        <li className="list-group-item">{lng.offer2}</li>
                        <li className="list-group-item">{lng.offer21}</li>
                        <li className="list-group-item">{lng.offer22}</li>
                        <li className="list-group-item">{lng.offer23}</li>
                        <li className="list-group-item">{lng.offer2Price}</li>

                    </ul>
                    <ul className="list-group col-sm-3  p-0  secondaryOffer align-self-center ">
                        <li className="list-group-item">{lng.offer3}</li>
                        <li className="list-group-item">{lng.offer31}</li>
                        <li className="list-group-item">{lng.offer32}</li>
                        <li className="list-group-item">{lng.offer33}</li>
                        <li className="list-group-item">{lng.offer3Price}</li>

                    </ul>
                </div>

            </div>
            <div className="d-flex justify-content-center">
                <button onClick={() => scrollInToElem('reserveId')} className="btn ReserveNowBtn mb-4"> {lng.reserveNow}</button>

            </div>


        </div>
    )
}