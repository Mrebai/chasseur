import React from 'react'
import HomeImgCard from '../../components/cards/homeImgCard'
export default GalAlbums = ({data}) => {
    return (
        <div className="row">

                {data.map(item =>
                    <div className="col-md-4">
                        <HomeImgCard cardClass='galleryBigCard' data={item} />
                    </div>
                )}


        </div>
    )
}