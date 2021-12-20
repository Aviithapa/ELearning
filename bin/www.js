/**
 * Module dependencies.
 */

const http = require("http");
const app = require("../server");

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (Number.isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.DEV_APP_PORT || "3000");
app.set("port", port);
/**
 * Event listener for HTTP server "error" event.
 */

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);
