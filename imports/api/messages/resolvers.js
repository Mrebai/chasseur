import messages from './messages'

export default {
    Mutation:{
        sendMsg(obj,{name, phone, email, subject, message},ctx){
            const id = messages.insert({name, phone, email, subject, message});

            return messages.findOne(id);
        }
    }
}