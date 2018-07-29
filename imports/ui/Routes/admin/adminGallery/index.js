import React, {Component} from 'react'
import AdminVideosIndex from './videos'
import AdminStreamIndex from './straming'
import AdminAlbumIndex from './albums'
class GlleryIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="">

                {
                  (this.props.nav === 'videos')? <AdminVideosIndex/>:
                      (this.props.nav === 'streaming')? <AdminStreamIndex/>:
                          (this.props.nav === 'albums')? <AdminAlbumIndex/>:
                              <div></div>

                }
            </div>
        )
    }
}

export default GlleryIndex