import React, {Component} from 'react'
import {BrowserRouter,Route,Switch,Link,Redirect} from "react-router-dom"
import Home from './home'
import AdminRoute from './admin'
import GalleryIndex from './gallery'
import {galleryQuery} from '../api/queries'
import Login from './account/signIn'
import SignUp from './account/signUp'
import NotFound from "./notFound404"
import PropTypes from 'prop-types';
import { Query } from "react-apollo";
import {PostList} from "../admin/post/Posts"
import buildGraphQLProvider  from 'ra-data-graphql-simple';
import { Admin, Resource, Delete } from 'react-admin';

class Routes extends Component{
    constructor() {
        super();
        this.state = { dataProvider: null };
    }
    componentDidMount() {
        buildGraphQLProvider({ client:this.props.client }).then(dataProvider => this.setState({ dataProvider }));
    }
     Dogs = ( ) => (
        <Query query={galleryQuery}>
            {({ loading, error, data }) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;

                return (

                    <Switch>
                        <Route exact path={"/"} render={(match) =>  <Home match={match.match}  data={data}/>}  />

                        <Route  path={"/gallery"} render={(match) => <GalleryIndex match={match.match} data={data}/> } />
                        <Route  path={"/signin"} render={(match) => <Login match={match.match} data={data}/> } />
                        <Route component={NotFound}/>
                    </Switch>

                );
            }}
        </Query>
    );


    render(){
        if (!this.state.dataProvider) {
            return <div>Loading</div>;
        }
        return(


                <div>


                    {this.Dogs()}
                </div>



        )
    }

};

Routes.propTypes = {
    data: PropTypes.shape({
        getAlbums:PropTypes.array,
        getVideos:PropTypes.array,
        getStreaming:PropTypes.array,

    })
};

Route.defaultValue= {
    data:{
        getAlbums:[],
        getVideos:[],
        getStreaming:[],

    }
};
export default Routes