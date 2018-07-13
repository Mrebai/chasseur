import React from 'react'
import {BrowserRouter,Route,Switch,Link} from "react-router-dom"
import Home from './home'
import {clothesQuery} from '../api/queries'

import { Query } from "react-apollo";

export default Routes = ({client,id}) => {



    return(
       <div>
           <Home />
       </div>

    )
}