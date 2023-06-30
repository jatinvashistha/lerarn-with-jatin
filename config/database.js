import mongoose from "mongoose";




export const connectedDB = async()=>{
 const {connection} = await mongoose.connect(process.env.MONGO_URI)

 console.log(`database connect with ${connection.host}`)
}

// export const connectedDB = async()=>{
//  await mongoose.connect(
//   "mongodb+srv://jatin:jatin@cluster0.qo91mex.mongodb.net/?retryWrites=true&w=majority",
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     }
//   )
//   .then(() => {
//     console.log(`Connected to MongoDB Atlas  `);
//   })
//   .catch((err) => {
//     console.error('Error connecting to MongoDB Atlas:', err);
//   });
  
// }
