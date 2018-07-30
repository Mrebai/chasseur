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
                  (this.props.nav === 'videos')? <AdminVideosIndex data={this.props.data.getVideos} />:
                      (this.props.nav === 'streaming')? <AdminStreamIndex  data={this.props.data.getStreaming}/>:
                          (this.props.nav === 'albums')? <AdminAlbumIndex data={this.props.data.getAlbums}/>:
                              <div></div>

                }
            </div>
        )
    }
}

export default GlleryIndex