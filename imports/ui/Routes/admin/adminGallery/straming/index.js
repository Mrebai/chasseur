import React from 'react'
import AdminStrCard from '../../../../components/adminCards/adminStrCard'
export default AdminStreamIndex  = ({data}) => {
    return (
        <div className="container">
            <div className="row">
                {data.map(item => <div key={item._id} className='col-md-6'>
                    <AdminStrCard data={item}/>
                </div>)}
            </div>
        </div>
    )
}