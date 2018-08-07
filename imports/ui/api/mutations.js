import gql from 'graphql-tag'

// create item mutation
export const sendMsg = gql`
    mutation sendMsg(
    $name: String!
    $phone: Int!
    $email: String!
    $offer: String!
    $resDate: String
    $subject: String!
    $message:String!
  
    ){
        sendMsg(
            name: $name
            phone: $phone
            email: $email
            offer: $offer
            resDate: $resDate
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


export const deleteMsg = gql`
    mutation deleteMsg(
    $id:String!
    ){
        deleteMsg(
            _id:$id
        ){
            _id
        }
    }
`;


export const deleteStreaming = gql`
    mutation deleteStreaming(
    $id:String!
    ){
        deleteStreaming(
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

export const editStreaming = gql`
  mutation editStreaming(
      $id: String!
      $title: String!
      $info: String!
      $link: String!
  ){
      editStreaming(
          _id: $id
          title: $title
          info: $info
          link: $link
      ){
          _id
      }
  }
`;

export const toggleLive = gql`
  mutation toggleLive(
      $id:String!
      $live:Boolean
  ){
      toggleLive(
          _id:$id
          live:$live
      ){
          _id
      }
  }
`;