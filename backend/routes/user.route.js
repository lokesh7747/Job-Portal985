import express from "express";
import { getUserById, login, logout, register, updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

import { mixedUpload, singleUpload } from "../utils/multer.js";

const router = express.Router();

router.route("/register").post(singleUpload, register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").post(isAuthenticated, mixedUpload, updateProfile);
router.route("/get/:id").get(isAuthenticated, getUserById);

export default router;
