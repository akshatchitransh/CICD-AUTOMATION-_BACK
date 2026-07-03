import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export const analyzeErrors = async (errors: string[]) => {

  const prompt = `
You are a Senior DevOps Engineer.

Analyze these CI/CD errors.

Errors:
${errors.join("\n")}

Return ONLY valid JSON.

{
  "rootCause": "",
  "explanation": "",
  "fix": "",
  "commands": [],
  "confidence": 95
}

Rules:
- Do not return markdown.
- Do not wrap the JSON in \`\`\`.
- Commands must be an array of terminal commands.
- Confidence must be between 0 and 100.
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  const text = response.text ?? "";

  try {

    return JSON.parse(text);

  } catch {

    return {
      rootCause: "Unable to analyze.",
      explanation: text,
      fix: "Try checking the workflow logs manually.",
      commands: [],
      confidence: 0,
    };

  }

};