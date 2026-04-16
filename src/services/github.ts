import axios from "axios";

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