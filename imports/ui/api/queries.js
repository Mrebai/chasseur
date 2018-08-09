import gql from 'graphql-tag'

export const userQuery = gql`
    query user{
        user{
            _id
            email
            userName
        }
    }
`;



export const galleryQuery = gql`
    query galleryQuery{
        getAlbums {
            _id
            date
            title
            info
            thumbnail
            images
        }
        getVideos {
            _id
            date
            title
            info
            video
        }
        getStreaming {
            _id
            date
            title
            info
            link
            live
        }
        user{
            _id
            email
            userName
        }
    }
`;


export const getMessage = gql`
    query getMessage{
        getMessage{
            _id
            name
            phone
            email
            offer
            resDate
            subject
            message
            date
        }
    }
`;
