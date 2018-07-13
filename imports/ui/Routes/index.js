import React from 'react'
import {BrowserRouter,Route,Switch,Link} from "react-router-dom"
import Home from './meteor build --server-only ../new_package && mv ../new_package/*.tar.gz package.tar.gzhome'
import {clothesQuery} from '../api/queries'

import { Query } from "react-apollo";

export default Routes = ({client,id}) => {

     allClothes = ( ) => (
        <Query query={clothesQuery}>
            {({ loading, error, data }) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;

                return (
                    <BrowserRouter>
                        <div>

                            <Switch>
                                <Route exact path={"/"} render={(match) =>  <Home />}  />

                            </Switch>


                        </div>


                    </BrowserRouter>
                );
            }}
        </Query>
    );

    return(
       <div>
           {
               allClothes()
           }
       </div>

    )
}