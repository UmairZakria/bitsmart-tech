import mongoose from "mongoose";


const AdminSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required:true

    },
    password : {
        type: String,
        required:true
    }
})

const Admin = mongoose.models.Admin || mongoose.model('Admin',AdminSchema)

export default Admin ;