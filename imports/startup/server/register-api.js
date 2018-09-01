import { ApolloServer, gql } from 'apollo-server-express'
import { WebApp } from 'meteor/webapp'
import { getUser } from 'meteor/apollo'

import merge from 'lodash/merge'

import UserSchema from '../../api/users/User.graphql';
import UserResolvers from '../../api/users/resolvers';

import messageSchema from '../../api/messages/messages.graphql';
import messageResolvers from '../../api/messages/resolvers';

import albumSchema from '../../api/albums/albums.graphql';
import albumResolvers from '../../api/albums/resolvers';

import videosSchema from '../../api/videos/videos.graphql';
import videosResolvers from '../../api/videos/resolvers';

import streamingSchema from '../../api/streaming/streaming.graphql';
import streamingResolvers from '../../api/streaming/resolvers';

import postsSchema from '../../api/posts/posts.graphql';
import postsResolvers from '../../api/posts/resolvers';

import writerSchema from '../../api/writer/whiter.graphql';
import writerResolvers from '../../api/writer/resolvers';
//hihihiiivvsqfcfsssdssssfffhssssjhdssszssssssssssssssss
// hiiiicdxcsdcscvcxndssssshhssssssssDdsssssssssssdssssssssss sfsssssdsssdssssssssssdsssssssss
// hiiiicdxcsdcscvcxndssssdsdgrsssssssssssDdssgsgfssfsssssssssssssssdssssssssss sfsssssdsssdssssssssssdsssssssss


const typeDefs = [UserSchema,messageSchema,albumSchema,videosSchema,streamingSchema,postsSchema,writerSchema];



const resolvers = merge(UserResolvers,messageResolvers,albumResolvers,videosResolvers,streamingResolvers,postsResolvers,writerResolvers);

Meteor.users.allow({
    insert: function (userId, doc) {
        return true;
    },
    update: function (userId, doc) {
        return true;
    }
});

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => ({
        user: await getUser(req.headers.authorization)
    })
})

server.applyMiddleware({
    app: WebApp.connectHandlers,
    path: '/graphql'
})

WebApp.connectHandlers.use('/graphql', (req, res) => {
    if (req.method === 'GET') {
        res.end()
    }
})