import express from "express";
import dotenv from "dotenv";
import { connectdb } from "./utils/db.js";
import cors from "cors"



dotenv.config();
const app = express();

app.use(cors())
app.use(express.json());
connectdb();


app.get('/show',(req:any,res:any)=>{
   res.send({ message: "started" })
})

app.post('/analyse',(req:any,res:any)=>{
   res.send({ message: "analysing" })
})

app.post("/webhook", (req, res) => {
  console.log("🔥 Webhook Triggered!");

  const data = req.body;

  console.log("FULL BODY:", JSON.stringify(data, null, 2));

  res.sendStatus(200);
});

const PORT = process.env.PORT;
app.listen(PORT,()=>{
   console.log("server started")
});