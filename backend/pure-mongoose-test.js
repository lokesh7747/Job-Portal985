import mongoose from "mongoose";

const MONGO_URI = "mongodb://localhost:27017/jobportal";
const test = async () => {
    console.log("Starting connection...");
    try {
        await mongoose.connect(MONGO_URI);
        console.log("SUCCESS: MongoDB connected.");
        process.exit(0);
    } catch (err) {
        console.error("FAILURE:", err.message);
        process.exit(1);
    }
};
test();
