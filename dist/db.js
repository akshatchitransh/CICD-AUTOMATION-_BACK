import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        requir: true
    },
    password: {
        type: String
    }
});
const userMOdel = mongoose.model("User", userSchema);
//# sourceMappingURL=db.js.map