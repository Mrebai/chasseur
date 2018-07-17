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

