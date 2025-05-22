const express = require("express");
const router = express.Router();
const { register, login, getUser, updateUser } = require("../controllers/authController");
const verifyToken = require("../middlewares/authMiddleware");

router.post("/register", register);
router.post("/login", login);
router.get("/me", verifyToken, getUser);
router.put("/me", verifyToken, updateUser);

module.exports = router;

