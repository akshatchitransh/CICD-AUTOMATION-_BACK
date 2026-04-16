import mongoose from "mongoose";

export const connectdb = async()=>{
    await mongoose.connect("")
    console.log("db done babes")
}