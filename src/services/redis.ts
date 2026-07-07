import { createClient } from "redis";
import dotenv from "dotenv";

dotenv.config();

const client = createClient({
  url: process.env.REDIS_URL || "redis://localhost:6379",
});

client.on("connect", () => {
  console.log("🟢 Redis Connected");
});

client.on("ready", () => {
  console.log("✅ Redis Ready");
});

client.on("error", (err) => {
  console.error("🔴 Redis Error:", err);
});

client.on("reconnecting", () => {
  console.log("🟡 Redis Reconnecting...");
});

(async () => {
  try {
    await client.connect();
    console.log("🏓 Redis Ping:", await client.ping());
  } catch (err) {
    console.error("❌ Failed to connect Redis:", err);
  }
})();

export default client;