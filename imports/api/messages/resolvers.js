import messages from './messages'

export default {
    Mutation:{
        sendMsg(obj,{name, phone, email, subject, message},ctx){
            const date = new Date().toISOString();
            const id = messages.insert({name,date, phone, email, subject, message});

            return messages.findOne(id);
        }
    }
}