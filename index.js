import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import fs from "fs";

const server = new McpServer({
  name: "keyword-search-server",
  version: "1.0.0",
});

server.tool(
  "keyword-search",
  "Search for a keyword within a text file",
  {
    filePath: z.string().describe("Path to the file to search in"),
    keyword: z.string().describe("Keyword to search for"),
  },
  async ({ filePath, keyword }) => {
    try {
      const data = fs.readFileSync(filePath, "utf8");
      const lines = data.split("\n");
      const results = lines.filter((line) => line.includes(keyword));

      if (results.length === 0) {
        return {
          content: [{ type: "text", text: `No lines found containing '${keyword}'.` }],
        };
      }

      return {
        content: [
          {
            type: "text",
            text: `Found ${results.length} line(s):\n${results.join("\n")}`,
          },
        ],
      };
    } catch (err) {
      return {
        content: [{ type: "text", text: `Error reading file: ${err.message}` }],
        isError: true,
      };
    }
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);