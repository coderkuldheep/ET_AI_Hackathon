import admin from "../config/firebaseAdmin.js";
import User from "../models/User.js";
import { generateToken } from "../services/authService.js";

export const googleLogin = async (req, res) => {
  try {
    const { idToken } = req.body;

    if (!idToken) {
      return res.status(400).json({
        success: false,
        message: "Firebase token missing",
      });
    }

    const decoded = await admin.auth().verifyIdToken(idToken);

    let user = await User.findOne({
      firebaseUID: decoded.uid,
    });

    if (!user) {
      user = await User.create({
        firebaseUID: decoded.uid,
        name: decoded.name || "User",
        email: decoded.email,
        profilePicture: decoded.picture || "",
      });
    } else {
      user.lastLogin = new Date();
      await user.save();
    }

    const token = generateToken(user);

    return res.json({
      success: true,
      token,
      user,
    });
  } catch (err) {
    console.error(err);

    res.status(401).json({
      success: false,
      message: "Authentication failed",
    });
  }
};