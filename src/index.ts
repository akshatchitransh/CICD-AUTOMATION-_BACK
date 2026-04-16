import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());

app.get('/show',(req:any,res:any)=>{
   res.send({ message: "started" })
})

app.listen(3000);