import albums from './albums'
import videos from "../videos/videos";

export default {
    query:{
        getAlbums(obj,args,ctx){
            return albums.find().fetch();
        }
    },
    mutation:{
        addAlbum(obj,{title,thumbnail,info,images},ctx){
            const date = new Date();
            const id = albums.insert({title,date,thumbnail,info,images});
            return albums.findOne(id);
        },
        editAlbum(obj,{_id,title,thumbnail,info,images},ctx){
            const id = albums.update({_id},{
                $set:{title,thumbnail,info,images}
            });
            return albums.findOne(id);
        },
        deleteAlbum(obj,{_id},ctx){
            const id = albums.remove(_id);
            return albums.findOne(id);
        }
    }
}