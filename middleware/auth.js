import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const header = req.headers.authorization;

  if (!header) {
    return res.status(401).json({ message: "No token" });
  }

  const token = header.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    req.user.id
    req.user.email
    req.user.role
    next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
};

export default authMiddleware;