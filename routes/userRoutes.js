import express from "express";
import { addToPlaylist, changePassword, deleteMyProfile, deleteUser, forgetPassword, getAllUsers, getMyProfile, login, logout, register, removeFromPlaylist, resetPassword, updateProfile, updateUserRole, updateprofilepicture } from "../controllers/userController.js";
import { authorizedAdmin, isAuthenticated } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";
 

const router = express.Router();
// to register new user
router.route("/register").post(singleUpload,register);

//login
router.route("/login").post(login);
//logout
router.route("/logout").get(logout);

//get my profile
router.route("/me").get(isAuthenticated, getMyProfile);

//delete my profile
router.route("/me").delete(isAuthenticated,deleteMyProfile);


//changepassword
router.route("/changepassword").put(isAuthenticated, changePassword);

//update profile
router.route("/updateprofile").put(isAuthenticated,updateProfile);

//update profile picture
router.route("/updateprofilepicture").put(isAuthenticated,singleUpload,updateprofilepicture);


//forget password
router.route("/forgetpassword").post(forgetPassword);

//reset password
router.route("/resetpassword/:token").put(resetPassword);

//add to playlist
router.route("/addtoplaylist").post(isAuthenticated, addToPlaylist);

//removefromplaylist
router.route("/removefromplaylist").delete(isAuthenticated, removeFromPlaylist);

// admin routes
router.route("/admin/users").get(isAuthenticated,authorizedAdmin,getAllUsers)

router.route("/admin/user/:id").put(isAuthenticated,authorizedAdmin,updateUserRole).delete(isAuthenticated,authorizedAdmin,deleteUser)


export default router;