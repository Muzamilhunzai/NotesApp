import mongoose from "mongoose";

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/Notesapp", {
             
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);


    }
    catch(error){
        console.error(error);
        process.exit(1);
    }
}

export default connectDB;