import { spawn } from "child_process";
import chalk from "chalk";

// Start the MCP server
const server = spawn("node", ["index.js"], {
  stdio: ["pipe", "pipe", "pipe"],
});

console.log(chalk.cyan.bold("Starting MCP Keyword Search Server...\n"));

// Handle server stdout
server.stdout.on("data", (data) => {
  const message = data.toString().trim();

  // Try to parse JSON responses
  try {
    const parsed = JSON.parse(message);

    if (parsed.result?.content) {
      const text = parsed.result.content[0].text;
      console.log(chalk.green.bold("\nSearch Result:"));
      console.log(chalk.gray("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"));
      console.log(chalk.white(text));
      console.log(chalk.gray("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"));
    } else if (parsed.error) {
      console.log(chalk.red.bold("Error:"), parsed.error.message);
    } else {
      console.log(chalk.yellow("ℹServer Response:"), message);
    }
  } catch {
    // Non-JSON server logs
    console.log(chalk.blueBright("SERVER:"), message);
  }
});

// Handle server stderr
server.stderr.on("data", (data) => {
  console.error(chalk.red.bold("ERROR:"), data.toString().trim());
});

// Send request after server starts
setTimeout(() => {
  const request = {
    jsonrpc: "2.0",
    id: 1,
    method: "tools/call",
    params: {
      name: "keyword-search",
      arguments: {
        filePath: "sample.txt",
        keyword: "Tushar",
      },
    },
  };

  console.log(chalk.yellow.bold("\nSending keyword-search request...\n"));
  server.stdin.write(JSON.stringify(request) + "\n");
}, 1200);
