import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
  const token = req.headers.token; 

    if (!token) {
      return res.json({ success: false, message: "Not authorised, login again" });
    }

    // 🛠 Fix: Decode must match how the token was signed
   const decoded = jwt.verify(token, process.env.JWT_SECRET);

// Check for admin role or specific email
if (decoded.email !== process.env.ADMIN_EMAIL || decoded.role !== 'admin') {
  return res.status(403).json({ success: false, message: "Not authorized" });
}

    next();
  } catch (error) {
    console.log("Admin Auth Error:", error);
    res.json({ success: false, message: error.message });
  }
};

export default adminAuth;
