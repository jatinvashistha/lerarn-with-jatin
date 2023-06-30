import app from "./app.js";
import { connectedDB } from "./config/database.js";
import cloudinary from 'cloudinary';
import Razorpay from "razorpay";
import nodeCron from "node-cron";
import { Stats } from "./models/Stats.js";

connectedDB();

cloudinary.v2.config({
        cloud_name: 'dcdq7kxbl', 
        api_key: '842961535548133', 
        api_secret: '5-_cd3plv3apR51Eq6ZtX_CsfgM' 
      
})

export const instance = new Razorpay({
                key_id:"rzp_test_OrijifVaj9oRLn",
                key_secret: "DPzBnj8PJc0oLUU2A8eTl1PV", 
               });

nodeCron.schedule("0 0 0 5 * *", async () => {
                try {
                  await Stats.create({});
                } catch (error) {
                  console.log(error);
                }
              });  
 

app.listen(process.env.PORT,()=>{
console.log(`server is running on port: ${process.env.PORT}`)
})