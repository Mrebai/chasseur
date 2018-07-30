import React from 'react'
import AdminAddAlbum from './adminAddAlbums'
import AdminAlbCard from '../../../../components/adminCards/adminAlbCard'
export default AdminAlbumIndex = ({data}) => {
    return (
        <div className="container">
            <div className="row">
                {data.map(item => <div key={item._id} className='col-md-6'>
                    <AdminAlbCard data={item}/>
                </div>)}
            </div>
        </div>
    )
}