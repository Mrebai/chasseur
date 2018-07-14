export default cartSchema = `

type cart{
    _id:ID
    userId: String
    itemId: String
    productId: String!
    name: String!
    img: String
    color: String
    number:Int
    size:String
    price:Float
}

type Mutation {
    addCart(
        itemId: String!
        productId: String!
        name: String!
        img: String!
        color: String
        number:Int
        size:String!
        price:Float
    ): cart

    deleteCart(_id:String!): cart
}
`
