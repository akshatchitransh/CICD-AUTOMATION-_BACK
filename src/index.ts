import express from "express";
import dotenv from "dotenv";
import { connectdb } from "./utils/db.js";

dotenv.config();
const app = express();
app.use(express.json());
connectdb();


app.get('/show',(req:any,res:any)=>{
   res.send({ message: "started" })
})

app.post('/analyse',(req:any,res:any)=>{
   res.send({ message: "analysing" })
})

const PORT = process.env.PORT;
app.listen(PORT,()=>{
   console.log("server started")
});