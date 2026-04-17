import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const analyzeErrors = async (errors: string[]) => {
  const prompt = `
You are a DevOps expert.

These are CI/CD errors:
${errors.join("\n")}

Explain:
- What is the issue
- Why it happened
- Exact steps to fix it
`;

  const response = await client.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      { role: "system", content: "You are an expert CI/CD debugger." },
      { role: "user", content: prompt },
    ],
  });
//@ts-ignore
  return response.choices[0].message.content;
};