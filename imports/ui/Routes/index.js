import React from 'react'
import {BrowserRouter,Route,Switch,Link,Redirect} from "react-router-dom"
import Home from './home'
import AdminRoute from './admin'
import GalleryIndex from './gallery'
import {galleryQuery} from '../api/queries'
import Login from './account/signIn'
import SignUp from './account/signUp'
import { Query } from "react-apollo";

export default Routes = ({user,id}) => {

    const Dogs = ( ) => (
        <Query query={galleryQuery}>
            {({ loading, error, data }) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;

                return (

                    <Switch>
                        <Route exact path={"/"} render={(match) =>  <Home match={match.match}  data={data}/>}  />
                        <Route  path={"/admin"} render={(match) =>
                            (user._id)?    <AdminRoute match={match.match} data={data}/> : <Redirect to='/' />
                         } />
                        <Route  path={"/gallery"} render={(match) => <GalleryIndex match={match.match} data={data}/> } />
                        <Route  path={"/signin"} render={(match) => <Login match={match.match} data={data}/> } />

                    </Switch>

                );
            }}
        </Query>
    );



    return(

        <BrowserRouter>
            <div>


                {Dogs()}
            </div>


        </BrowserRouter>

    )
}