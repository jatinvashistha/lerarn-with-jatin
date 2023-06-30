 import express from "express";
 import { addLecture, createCourse, deleteCourse, deleteLecture, getAllCourses,getCourseLectures } from "../controllers/courseController.js";
import singleUpload from "../middlewares/multer.js";
import { authorizeSubscribers, authorizedAdmin, isAuthenticated } from "../middlewares/auth.js";
 
 const router = express.Router();

 // Get All courses without lectures
router.route("/courses").get(getAllCourses);
// create new course - only admin
router.route("/createcourse").post(isAuthenticated,authorizedAdmin,singleUpload,createCourse);

//add lecture,delete course, get course details
router.route("/course/:id")
.get(isAuthenticated,authorizeSubscribers,getCourseLectures)
.post(isAuthenticated,authorizedAdmin,singleUpload,addLecture)
.delete(isAuthenticated,authorizedAdmin, deleteCourse )

//delete lecture

router.route("/lecture").delete(isAuthenticated,authorizedAdmin,deleteLecture);

 

export default router;