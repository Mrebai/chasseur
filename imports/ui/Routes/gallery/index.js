import React, {Component} from 'react'
import {Route,Switch} from "react-router-dom"
import GalVideos from './galVideo'
import GalAlbums from './galAlbums'
import GalStreaming from './galStreaming'
import GalImg from './galimg'
class GalleryIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className='container'>
                {console.log(this.props.data)}
                <Switch>
                    <Route exact path={this.props.match.path + '/Albums'} render={(match) =>  <GalAlbums match={match.match}  data={this.props.data.getAlbums}/>}  />
                    <Route exact path={this.props.match.path + '/Albums/:id'} render={(match) =>  <GalImg match={match.match}  data={this.props.data.getAlbums}/>}  />
                    <Route exact path={this.props.match.path + '/Streaming'} render={(match) =>  <GalStreaming match={match.match}  data={this.props.data.getStreaming}/>}  />
                    <Route exact path={this.props.match.path + '/Videos'} render={(match) =>  <GalVideos match={match.match}  data={this.props.data.getVideos}/>}  />
                </Switch>

            </div>

        )
    }
}

export default GalleryIndex