import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();
import notesRoutes from "./routes/note.route.js";
const app=express();
const PORT=process.env.PORT || 3000;
app.use(express.json());
app.use("/api/notes",notesRoutes);

app.listen(PORT,()=>{
    connectDB();
    console.log(`Sever started at http://localhost:${PORT}`);
});