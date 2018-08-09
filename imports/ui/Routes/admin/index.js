import React, {Component} from 'react'
import AdminNav from './adminNav'
import {Route,Switch,Link} from "react-router-dom"
import showMessages from './inbox'
import AdminEditAlbum from './adminGallery/albums/adminEditAlbum'
import AdminEditVideo from './adminGallery/videos/adminEditVideo'
import AdminEditStream from './adminGallery/straming/editStreaming'
import AdminAddAlbum from './adminGallery/albums/adminAddAlbums'
import AdminAddStream from './adminGallery/straming/adminAddStreaming'
import AdminAddVideo from './adminGallery/videos/adminAddVideos'
import GlleryIndex from './adminGallery'
import SignUp from '../account/signUp'
class AdminIndex extends Component {
    constructor(props) {
        super(props);
        this.currentTab = this.currentTab.bind(this);
        this.state = {
            nav:''
        };
    }

    currentTab = (tab) => this.setState({nav : tab});
    render() {
        return (
            <div className="adminContainer">


                        <AdminNav currentTab={this.currentTab} />

                        <Switch>
                            {
                                (this.state.nav.length === 0 || this.state.nav === 'inbox')?<Route exact  path={this.props.match.path} component={showMessages}/>:( this.state.nav === 'signUp')?
                                    <Route  path={this.props.match.path} render={(match) => <SignUp match={match.match}/> } />:
                                    <Route  path={this.props.match.path} render={(route) => <GlleryIndex data={this.props.data} match={route.match} nav={this.state.nav}/> }/>
                            }

                            <Route exact  path={this.props.match.path + '/editimage/:id'} render={(route) => <AdminEditAlbum data={this.props.data.getAlbums} match={route.match} nav={this.state.nav}/>}/>
                            <Route exact  path={this.props.match.path + '/editvideo/:id'} render={(route) => <AdminEditVideo data={this.props.data.getVideos} match={route.match} nav={this.state.nav}/>}/>
                            <Route exact  path={this.props.match.path + '/editstream/:id'} render={(route) => <AdminEditStream data={this.props.data.getStreaming} match={route.match} nav={this.state.nav}/>}/>
                            <Route exact  path={this.props.match.path + '/addalbum'} render={(route) => <AdminAddAlbum  match={route.match} />}/>
                            <Route exact  path={this.props.match.path + '/addstream'} render={(route) => <AdminAddStream  match={route.match} />}/>
                            <Route exact  path={this.props.match.path + '/addvideo'} render={(route) => <AdminAddVideo  match={route.match} />}/>

                        </Switch>


            </div>
        )
    }
}

export default AdminIndex