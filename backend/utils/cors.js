export function setCorsHeaders(req, res, next) {
  const allowedOrigins = [process.env.FRONTEND_LINK, "http://127.0.0.1:3000"];
  const origin = req.headers.origin;
  const publicPaths = ["/error-logs", "/upload"];

  if (req.method === "OPTIONS") {
    if (publicPaths.includes(req.path) || allowedOrigins.includes(origin)) {
      res.setHeader(
        "Access-Control-Allow-Origin",
        req.path === "/error-logs" ? "*" : origin
      );
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, PATCH, DELETE, OPTIONS"
      );
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
      );
      res.setHeader("Access-Control-Allow-Credentials", "true");
      return res.status(204).end();
    } else {
      return res.status(403).end();
    }
  }

  if (publicPaths.includes(req.path)) {
    res.setHeader("Access-Control-Allow-Origin", "*");
  } else if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  } else {
    res.setHeader("Access-Control-Allow-Origin", "null");
  }

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
}
