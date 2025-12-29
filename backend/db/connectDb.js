import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongodb is connected!")
    }
    catch(error){
        console.log("Error in Connectng MongoDb", error);
    }
}

export default connectDB;