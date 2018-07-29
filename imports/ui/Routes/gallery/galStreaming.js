import React from 'react'
import GalCard from '../../components/cards/galCard'
export default GalStreaming = ({data}) => {
    return (
        <div className="row">
            {data.map(item =>
                <div className='offset-md-1 col-md-10'>
                    <GalCard type={'streaming'}  data={item} />

                </div>
            )}
        </div>
    )
}