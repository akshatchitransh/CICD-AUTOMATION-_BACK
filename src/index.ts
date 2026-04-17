import express from "express";
import dotenv from "dotenv";
import { connectdb } from "./utils/db.js";
import cors from "cors"
import { getLogs, extractLogs, filterErrors } from "./services/github.js";

import { analyzeErrors } from "./services/ai.js";


dotenv.config();
const app = express();
const PORT = process.env.PORT||3535

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


app.post("/webhook", async (req, res) => {
  try {
    const runId = req.body.workflow_run?.id;
    const status = req.body.workflow_run?.conclusion;

    console.log("Run ID:", runId);
    console.log("Status:", status);

    if (status === "failure") {

      const logs = await getLogs(runId);

      const readableLogs = extractLogs(logs);

      const errors = filterErrors(readableLogs);

      console.log(" ERRORS:");
      console.log(errors.slice(0, 10));

      console.log("Size:", logs.length);

      // 🔥 AI PART START
      if (errors.length > 0) {
        const aiResponse = await analyzeErrors(errors.slice(0, 5));

        console.log("AI RESPONSE:");
        console.log(aiResponse);
      } else {
        console.log("No errors found for AI analysis");
      }
      
    }

    res.status(200).json({ message: "ok" });

  } catch (err) {
    console.error("ERROR:", err);
    res.sendStatus(500);
  }
});

app.listen(PORT,()=>{
   console.log("port listenig")
});