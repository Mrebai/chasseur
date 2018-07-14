
export default userSchema =`

 type User {
  _id: String
  email: String
  userName: String
  cart:[cart]

}

type Query {
  user: User

}
`

