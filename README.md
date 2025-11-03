# MCP Keyword Search Server

This project implements a **Model Context Protocol (MCP)** server and client using **Node.js**.  
It allows you to search for a specific keyword within a given text file — demonstrating how MCP tools can communicate via standard input/output.

---

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
  - [1. Clone the repository](#1-clone-the-repository)
  - [2. Install dependencies](#2-install-dependencies)
  - [3. Run the client](#3-run-the-client)
- [How It Works](#how-it-works)
- [Example File](#example-file)
- [Screenshots](#screenshots)
- [License](#license)
- [Contact](#contact)


---

## Features
- Built with `@modelcontextprotocol/sdk`
- Implements a custom MCP tool: `keyword-search`
- Searches text files for specific keywords
- Clean, color-coded output using `chalk`
- Fully open-source and lightweight

---

## Project Structure
mcp-server/<br/>
│<br/>
├── index.js # MCP Server implementation<br/>
├── client.js # Client sending keyword-search requests<br/>
├── sample.txt # Sample input file<br/>
├── package.json<br/>
├── .gitignore<br/>
├── LICENSE<br/>
└── README.md<br/>


---

## Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/TuShArBhArDwA/mcp-keyword-search-server.git
cd mcp-keyword-search-server
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the client
```bash
node client.js
```

> You should see output similar to:

```sql
Starting MCP Keyword Search Server...

Sending keyword-search request...

Search Result:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Found 1 line(s):
This is Tushar
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## How It Works

- The MCP server (index.js) defines a tool keyword-search using the SDK.
- The client (client.js) sends an MCP request with file path and keyword.
- The server reads the file, finds matching lines, and returns the result.

---

## Example File

`sample.txt`
```pgsql
Hello world
This is Tushar
Keyword search test
```
`Example Request:`
```json
{
  "filePath": "sample.txt",
  "keyword": "Tushar"
}
```
`Response`
```pgsql
Found 1 line(s):
This is Tushar
```

---

## Screenshots

<img width="940" height="214" alt="image" src="https://github.com/user-attachments/assets/c4fd6196-2c9e-4b36-812a-f3c82074bb9f" />

> Salesforce Custom Object Screenshot

<img width="594" height="365" alt="image" src="https://github.com/user-attachments/assets/e368f7e6-65b8-43d1-bf61-3982107b39bd" />

> MCP Server Output Screenshot

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact
- **Meet T-Bot** - [Discover My Work](https://t-bot-blush.vercel.app/)
- **Tushar Bhardwaj** - [Portfolio](https://tushar-bhardwaj.vercel.app/)
- **Connect 1:1** - [Topmate](https://topmate.io/tusharbhardwaj)
- **GitHub:** [TuShArBhArDwA](https://github.com/TuShArBhArDwA)
- **LinkedIn:** [Tushar Bhardwaj](https://www.linkedin.com/in/bhardwajtushar2004/)
- **Email:** [tusharbhardwaj2617@example.com](mailto:tusharbhardwaj2617@example.com)
