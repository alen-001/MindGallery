import mongoose from "mongoose";

export default async function connectDB() {
    
    try{
        const con=await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${con.connection.host}`);
        console.log(`Using database: ${mongoose.connection.name}`);
        
    }catch(error){
        console.log(`Error ${error.message}`);
        process.exit(1); //1 means exit
    }
   
}