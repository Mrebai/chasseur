import React, {Component} from 'react'
import AdminNav from './adminNav'
import {Route,Switch,Link} from "react-router-dom"
import AdminMsgs from './inbox/adminAddMsgs'
import AdminAddAlbum from './adminGallery/albums/adminAddAlbums'
class AdminIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }


    render() {
        return (
            <div className="adminContainer">


                        <AdminNav />

                        <Switch>
                            <Route exact  path={this.props.match.path} component={AdminMsgs}/>
                            <Route  path={this.props.match.path + '/add_album'} component={AdminAddAlbum}/>
                        </Switch>


            </div>
        )
    }
}

export default AdminIndex