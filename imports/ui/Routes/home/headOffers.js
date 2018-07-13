import React from 'react';

export default HeadOffers = () => {
    return (
        <div className="headOfferContainer">
            <h3 className=" SectionTitle offersTitle">OUR OFFERS</h3>
            <div className='titleUnderlined'></div>

            <div className="container mt-4">
                <div className="row myOffersContainer">
                    <ul className="list-group offset-sm-1 col-sm-3 p-0 secondaryOffer align-self-center">
                        <li className="list-group-item"> btnCras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Morbi leo risus</li>
                        <li className="list-group-item">Porta ac consectetur ac</li>
                        <li className="list-group-item">Vestibulum at eros</li>

                    </ul>
                    <ul className="list-group col-sm-4 p-0 mainOffer">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Morbi leo risus</li>
                        <li className="list-group-item">Porta ac consectetur ac</li>
                        <li className="list-group-item">Vestibulum at eros</li>

                    </ul>
                    <ul className="list-group col-sm-3  p-0  secondaryOffer align-self-center ">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Morbi leo risus</li>
                        <li className="list-group-item">Porta ac consectetur ac</li>
                        <li className="list-group-item">Vestibulum at eros</li>

                    </ul>
                </div>

            </div>

            <button className="btn ReserveNowBtn mb-4"> RESERVE NOW</button>


        </div>
    )
}