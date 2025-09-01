// filepath: index.js
import connectDB from './src/db/index.js';
// index.js
import app from './app.js'; // Use default import
import dotenv from "dotenv"
connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERROR after DB connection: ", error);
      throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`⚙️ Server is running at port: ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
// ...existing code...



// ...existing code...
