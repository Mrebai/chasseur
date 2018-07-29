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
    }
`;


export const clothesQuery = gql`
    query clothes($gender:String $tags:[String] $search:String $minPrice:Int $maxPrice:Int ){
        clothes(gender:$gender tags:$tags search:$search minPrice:$minPrice maxPrice:$maxPrice){
            _id
            name
            productId
            price
            description
            sizes
            tag
            gender
            comingSoon
            availability
            images
            mainImage
        }
    }
`;
