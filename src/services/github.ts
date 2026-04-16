import axios from "axios";
import AdmZip from "adm-zip";

export const getLogs = async (runId: number) => {
  const owner = "akshatchitransh";
  const repo = "CICD-AUTOMATION-_BACK";

  const url = `https://api.github.com/repos/${owner}/${repo}/actions/runs/${runId}/logs`;

  const res = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
    },
    responseType: "arraybuffer", 
  });

  return res.data;
};

export const extractLogs = (zipBuffer: Buffer) => {
  const zip = new AdmZip(zipBuffer);

  const entries = zip.getEntries();

  let allLogs = "";

  for (const entry of entries) {
    const content = entry.getData().toString("utf-8");
    allLogs += content + "\n\n";
  }

  return allLogs;
};