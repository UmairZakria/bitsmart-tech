import mongoose from "mongoose";


const MessageSchema = mongoose.Schema({
    fname: {
        type: String
    },
    phone: {
        type: String
    },
    email : {
        type: String
    },
    subject :{
        type: String
    },
    message :{
        type: String
    },
    date: {
        type: Date,
        default: Date.now, 
      },
    

})

const Message = mongoose.models.Message || mongoose.model('Message', MessageSchema)

export default Message ;