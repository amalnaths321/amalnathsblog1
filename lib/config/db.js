import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://amalnaths907:amalnaths3215@cluster0.ukt0y.mongodb.net/blog-app');
    console.log("DB Connected");
}