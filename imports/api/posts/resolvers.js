import posts from "./posts";
import streaming from "../streaming/streaming";

    let start = 0;
export default {

    Query:{
        allPosts(obj,args,ctx){
            console.log(args);
            return posts.find({},{skip:args.perPage * args.page, limit:args.perPage }).fetch();
        },


        _allPostsMeta(obj,args,ctx){



            return {count :  Math.ceil(posts.find().count()/args.perPage) };
        }
    },

    Post : {
        id: (post) => {
            return (post._id)
        }
    },
    Mutation:{
        createPost(obj,{title},ctx){
            const id = posts.insert({title});
            return posts.findOne(id);
        }
    }

}