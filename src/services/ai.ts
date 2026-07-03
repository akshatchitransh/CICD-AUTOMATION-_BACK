import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export const analyzeErrors = async (errors: string[]) => {

const prompt = `
You are a Senior DevOps Engineer.

Analyze the following CI/CD workflow errors.

Errors:

${errors.join("\n")}

Return ONLY valid JSON.

Do NOT write markdown.
Do NOT wrap the response inside \`\`\`.
Do NOT explain anything outside JSON.

Schema:

{
  "rootCause": "",
  "explanation": "",
  "fix": "",
  "commands": [
    ""
  ],
  "confidence": 95
}

Rules:

- commands must contain executable terminal commands.
- confidence must be an integer from 0 to 100.
- explanation should be concise.
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

const raw = response.text ?? "";

const cleaned = raw
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();

try {

  return JSON.parse(cleaned);

} catch {

  return {
    rootCause: "Unable to analyze.",
    explanation: cleaned,
    fix: "Check workflow logs manually.",
    commands: [],
    confidence: 0,
  };

}

};