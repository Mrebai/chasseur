import React from 'react'
import AdminAddVideo from './adminAddVideos'
import AdminVidCard from '../../../../components/adminCards/adminVidCard'
export default AdminVideosIndex = ({data}) => {
    return (
        <div className="container">
            <div className="row">
                {data.map(item => <div key={item._id} className='col-md-6'>
                    <AdminVidCard type={"video"} data={item}/>
                </div>)}
            </div>
        </div>
    )
}