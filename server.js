const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const root = __dirname;
const host = process.env.HOST || "localhost";
const port = Number(process.env.PORT) || 4174;
const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mp4": "video/mp4",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

const server = http.createServer((request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { Allow: "GET, HEAD" });
    response.end("Method not allowed");
    return;
  }

  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
  } catch {
    response.writeHead(400);
    response.end("Bad request");
    return;
  }

  const requestedPath = pathname === "/" ? "/index.html" : pathname;
  const filePath = path.resolve(root, `.${requestedPath}`);
  if (filePath !== root && !filePath.startsWith(`${root}${path.sep}`)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(error.code === "ENOENT" ? 404 : 500);
      response.end(error.code === "ENOENT" ? "Not found" : "Server error");
      return;
    }

    response.writeHead(200, {
      "Content-Type": contentTypes[path.extname(filePath)] || "application/octet-stream",
      "X-Content-Type-Options": "nosniff",
      "Cache-Control": "no-cache, no-store, must-revalidate",
      "Pragma": "no-cache",
      "Expires": "0",
    });
    response.end(request.method === "HEAD" ? undefined : content);
  });
});

function listenOnPort(availablePort) {
  const onListen = () => {
    const address = server.address();
    if (address && typeof address !== "string" && address.port === availablePort) {
      console.log(`Apna Cleaning Service preview: http://localhost:${availablePort}`);
    }
  };

  server.once("error", (error) => {
    if (error.code === "EADDRINUSE" && availablePort < port + 20) {
      console.warn(`Port ${availablePort} is already in use; trying ${availablePort + 1}.`);
      listenOnPort(availablePort + 1);
      return;
    }

    if (error.code === "EADDRNOTAVAIL" && host === "localhost") {
      console.warn(`localhost binding is unavailable; falling back to 127.0.0.1 on port ${availablePort}.`);
      server.listen(availablePort, "127.0.0.1", onListen);
      return;
    }

    console.error(`Could not start preview server on port ${availablePort}:`, error.message);
    process.exitCode = 1;
  });

  server.listen(availablePort, host, onListen);
}

listenOnPort(port);
