
import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";

import {HttpLink} from 'apollo-link-http';
import { ApolloLink, from } from "apollo-boost";
import {InMemoryCache} from "apollo-cache-inmemory";
import { ApolloProvider } from 'react-apollo';
import App from "../../ui/App";
import {BrowserRouter,Route,Switch,Link,Redirect} from "react-router-dom"
import AdminIndex from '../../ui/admin'
import NotFound from "../../ui/Routes/notFound404";

import ApolloClient from 'apollo-boost'


// http link

import {PostList} from "../../ui/admin/post/Posts"
import buildGraphQLProvider  from 'ra-data-graphql-simple';
import { Admin} from 'react-admin';

const client = new ApolloClient({
    uri: Meteor.absoluteUrl('graphql'),
    request: operation =>
        operation.setContext(() => ({
            headers: {
                authorization: Accounts._storedLoginToken()
            }
        }))
});




Meteor.startup(() => {

    buildGraphQLProvider({ client:client }).then(data =>
        render(

            <BrowserRouter>

                <Switch>
                     <Route path={'/admin'} render={() =>

                         <AdminIndex data={data}/>


                        }/>




                    <Route render={(match) =>
                        <ApolloProvider client={client}>
                            <App  client={client}/>
                        </ApolloProvider>
                    }/>
                </Switch>
            </BrowserRouter>


            ,
            document.getElementById('app')
        )

    );

 ;
});
