import React, {Component} from 'react'
import AdminNav from './adminNav'
import {Route,Switch,Link} from "react-router-dom"
import AdminMsgs from './inbox/adminAddMsgs'
import AdminEditAlbum from './adminGallery/albums/adminEditAlbum'
import AdminEditVideo from './adminGallery/videos/adminEditVideo'
import GlleryIndex from './adminGallery'
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
                                (this.state.nav.length === 0 || this.state.nav === 'inbox')?<Route exact  path={this.props.match.path} component={AdminMsgs}/>:
                                    <Route  path={this.props.match.path} render={(route) => <GlleryIndex data={this.props.data} match={route.match} nav={this.state.nav}/> }/>
                            }

                            <Route exact  path={this.props.match.path + '/editimage/:id'} render={(route) => <AdminEditAlbum data={this.props.data.getAlbums} match={route.match} nav={this.state.nav}/>}/>
                            <Route exact  path={this.props.match.path + '/editvideo/:id'} render={(route) => <AdminEditVideo data={this.props.data.getVideos} match={route.match} nav={this.state.nav}/>}/>
                        </Switch>


            </div>
        )
    }
}

export default AdminIndex