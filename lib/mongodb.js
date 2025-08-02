import mongoose from "mongoose";


const uri = process.env.URI
let isConnected = false;

export default async function connectMongo() {
    if (isConnected) {
        return;
    }

    await mongoose.connect(uri);

    isConnected = true;
}