import React from 'react'
import {BrowserRouter,Route,Switch,Link} from "react-router-dom"
import Home from './home'
import AdminRoute from './admin'
import {clothesQuery} from '../api/queries'

import { Query } from "react-apollo";

export default Routes = ({client,id}) => {




    return(

        <BrowserRouter>
            <div>

                <Switch>
                    <Route exact path={"/"} render={(match) =>  <Home  />}  />
                    <Route  path={"/admin"} component={AdminRoute}/>
                </Switch>


            </div>


        </BrowserRouter>

    )
}