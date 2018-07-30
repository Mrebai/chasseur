import gql from 'graphql-tag'

// create item mutation
export const sendMsg = gql`
    mutation sendMsg(
    $name: String!
    $phone: Int!
    $email: String!
    $subject: String!
    $message:String!
  
    ){
        sendMsg(
            name: $name
            phone: $phone
            email: $email
            subject: $subject
            message:$message
        ){
            _id
        }
    }
`;

// create item mutation
export const addAlbum = gql`
    mutation addAlbum(
    $title: String!
    $info: String!
    $thumbnail: String!
    $images: [String]!
    ){
        addAlbum(
            title: $title
            info: $info
            thumbnail: $thumbnail
            images: $images
        ){
            _id
        }
    }
`;

export const addVideo = gql`
    mutation addVideo(
    $title: String!
    $info: String!
    $video: String!

    ){
        addVideo(
            title: $title
            info: $info
            video: $video
        ){
            _id
        }
    }
`;

export const addStreaming = gql`
    mutation addStreaming(
    $title: String!
    $info: String!
    $link: String!
    $live:Boolean

    ){
        addStreaming(
            title: $title
            info: $info
            link: $link
            live:$live
        ){
            _id
        }
    }
`;

// delete mutations

export const deleteAlbum = gql`
    mutation deleteAlbum(
        $id:String!
    ){
        deleteAlbum(
            _id:$id
        ){
            _id
        }
    }
`;

export const deleteVideo = gql`
    mutation deleteVideo(
    $id:String!
    ){
        deleteVideo(
            _id:$id
        ){
            _id
        }
    }
`;


export const editAlbum = gql`
    mutation editAlbum(
    $id: String!
    $title: String!
    $info: String!
    $thumbnail: String!
    $images: [String]!
    ){
        editAlbum(
            _id: $id
            title: $title
            info: $info
            thumbnail: $thumbnail
            images: $images
        ){
        _id
        }
    }
`;

export const editVideo = gql`
    mutation editVideo(
    $id: String!
    $title: String!
    $info: String!
    $video: String!
    ){
        editVideo(
            _id: $id
            title: $title
            info: $info
            video: $video
        ){
            _id
        }
    }
`;