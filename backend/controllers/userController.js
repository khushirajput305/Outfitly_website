import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
//import createToken from "../utils/createToken.js";

import userModel from "../models/userModel.js";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

//route for user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User Doesn't Exists" });
    }
      const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid Credentials" });
    }
     const token = createToken(user._id);
    res.json({
      success: true,
      message: "Login Successful",
      token
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// route for user registration
 const registerUser = async (req, res) => {
  try {
    let { name, email, password } = req.body;
    name = name.trim();
    email = email.trim().toLowerCase();

    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ success: false, message: "Please enter a valid email" });
    }

    if (!validator.isStrongPassword(password)) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters long and include a mix of uppercase, numbers, and symbols",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({ name, email, password: hashedPassword });
    const user = await newUser.save();

    const token = createToken(user._id);

    res.status(201).json({
      success: true,
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
  console.log("Register Error:", error); // This will show the real error
  res.status(500).json({ success: false, message: error.message }); // expose reason
}

};



export { loginUser, registerUser };
