import React from 'react'
import GalCard from '../../components/cards/galCard'

export default GalVideo = ({data}) => {
    return (

            <div className="row">
                {data.map(item =>
                    <div className='col-md-6'>
                        <GalCard  type={'video'} data={item} />

                    </div>
                 )}
            </div>

    )
}