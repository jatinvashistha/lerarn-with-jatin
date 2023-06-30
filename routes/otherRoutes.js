import express from "express";
 
import { authorizeSubscribers, authorizedAdmin, isAuthenticated } from "../middlewares/auth.js";
import { contact, courseRequest, getDashboardStats } from "../controllers/otherController.js";

const router = express.Router();
 
// contact form
router.route("/contact").post(contact)

// request form
router.route("/courserequest").post(courseRequest)

//get admin dashboard states
router.route( "/admin/stats").get(isAuthenticated,authorizedAdmin,getDashboardStats)



export default router;