import User from "../classes/user.js";

const authMiddleware = async (req, res, next) => {
  const publicRoutes = ["/login", "/register"];
  if (publicRoutes.includes(req.path)) {
    return next();
  }

  const token =
    req.cookies.token || req.headers["authorization"]?.split(" ")[1];

  // test user
  const userResult = await User.getUserWithEmail("asifur@gmail.com");
  User.setCurrentUser(userResult);
  req.errorsnapUser = userResult || null;
  next();
  return;
  // test user

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  jwt.verify(token, "your_secret_key", (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Failed to authenticate token" });
    }

    req.errorsnapUser = new ErrorSnapUser(decoded);

    next();
  });
};

export default authMiddleware;
