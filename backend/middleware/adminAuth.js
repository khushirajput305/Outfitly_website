const adminAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.json({ success: false, message: "Token missing or malformed" });
    }

    const token = authHeader.split(" ")[1]; // get the token after Bearer
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (
      decoded.email !== process.env.ADMIN_EMAIL ||
      decoded.password !== process.env.ADMIN_PASSWORD
    ) {
      return res.json({ success: false, message: "Not authorized, login again" });
    }

    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
