import mongoose from "mongoose";
export const connectdb = async () => {
    console.log(process.env.MONGO_URI);
    if (process.env.MONGO_URI)
        await mongoose.connect(process.env.MONGO_URI);
    console.log("db done babes");
};
//# sourceMappingURL=db.js.map