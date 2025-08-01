import { Log } from "./logger";

async function main() {
  console.log("🟢 App started.");

  try {
    // Simulate error
    throw new Error("received string, expected bool");

  } catch (err: any) {
    await Log("backend", "error", "handler", err.message);
  }
}

main();
