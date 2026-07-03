import express from "express";
import Run from "./models/Run.js";
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

      console.log("ERRORS:");

      console.log(errors.slice(0, 10));

      console.log("Size:", logs.length);

      let aiResponse = {
  rootCause: "AI analysis unavailable.",
  explanation: "",
  fix: "",
  commands: [],
  confidence: 0,
};

      if (errors.length > 0) {

        try {

          aiResponse =
            (await analyzeErrors(errors.slice(0, 5))) ||
            aiResponse;

          console.log("AI RESPONSE:");

          console.log(aiResponse);

        } catch (err) {

          console.log("AI ERROR:");

          console.log(err);

        }

      } else {

        console.log("No errors found for AI analysis");

      }

      await Run.create({

        runId: String(runId),

        repo: req.body.repository?.name || "Unknown Repo",

        status,

        logs: readableLogs,

        errors,

        aiResponse,

      });

      console.log("Saved to MongoDB");

    }

    res.status(200).json({
      message: "ok",
    });

  } catch (err) {

    console.error("WEBHOOK ERROR:", err);

    res.sendStatus(500);

  }

});

app.get("/runs", async (req, res) => {

  try {

    const runs = await Run.find()
      .sort({ createdAt: -1 });

    res.status(200).json(runs);

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });

  }

});

app.get("/runs/:id", async (req, res) => {

  try {

    const run = await Run.findOne({
      runId: req.params.id,
    });

    if (!run) {

      return res.status(404).json({
        message: "Run not found",
      });

    }

    res.status(200).json(run);

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });

  }

});

app.get("/analytics", async (req, res) => {

  const runs = await Run.find();

  const totalRuns = runs.length;

  const failedRuns = runs.filter(
    run => run.status === "failure"
  ).length;

  const successRuns = runs.filter(
    run => run.status === "success"
  ).length;

  const successRate =
    totalRuns === 0
      ? 0
      : ((successRuns / totalRuns) * 100).toFixed(1);

  res.json({
    totalRuns,
    failedRuns,
    successRuns,
    successRate,
  });

});

app.get("/analytics/trend", async (req, res) => {

  const runs = await Run.find().sort({ createdAt: 1 });

  const map = new Map<string, number>();

  runs.forEach((run) => {

    const date = new Date(run.createdAt)
      .toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
      });

    map.set(
      date,
      (map.get(date) || 0) +
        (run.status === "failure" ? 1 : 0)
    );

  });

  const data = Array.from(map.entries()).map(
    ([date, failures]) => ({
      date,
      failures,
    })
  );

  res.json(data);

});

app.listen(PORT,()=>{
   console.log("port listenig")
});