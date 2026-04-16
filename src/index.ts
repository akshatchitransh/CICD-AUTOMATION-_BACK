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

app.get("/webhook", (req, res) => {
  console.log("🔥 Webhook Triggered!");

  const data = req.body;

  console.log("FULL BOY:", JSON.stringify(data, null, 2));

  res.send({webhook:"ye wala route woeking"});
});


app.post("/webhook", (req, res) => {
  console.log("🔥 Webhook Triggered!");

  const data = req.body;

  console.log("FULL BODY:", JSON.stringify(data, null, 2));

  res.status(200).send({ message: "Webhook received" });
});


const PORT = process.env.PORT||3000;
app.listen(PORT,()=>{
   console.log("server started")
});