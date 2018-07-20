import streaming from './streaming'


export default {
    query:{
        getStreaming(obj,args,ctx){
            return streaming.find().fetch();
        }
    },
    mutation:{
        addStreaming(obj,{title,info,link,live},ctx){
            const date = new Date();
            const id = streaming.insert({title,date,info,link,live});
            return streaming.findOne(id);
        },
        editStreaming(obj,{_id,title,info,link,live},ctx){
            const id = streaming.update({_id},{
                $set:{title,info,link,live}
            });
            return streaming.findOne(id);
        },
        toggleLive(obj,{_id,live},ctx){
            const id = streaming.update({_id},{
                $set:{live}
            });
            return streaming.findOne(id);
        },
        deleteStreaming(obj,{_id},ctx){
            const id = streaming.remove(_id);
            return streaming.findOne(id);
        }
    }
}