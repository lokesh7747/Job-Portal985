import mongoose from "mongoose";
import dotenv from "dotenv";
import { User } from "./models/User.js";
import { Company } from "./models/Company.js";
import { Job } from "./models/Job.js";
import bcrypt from "bcryptjs";
import path from "path";
import { fileURLToPath } from "url";

// Get __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Explicitly load .env
dotenv.config({ path: path.resolve(__dirname, ".env") });

const seedData = async () => {
    try {
        console.log("URI from .env:", process.env.MONGO_URI);
        const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/jobportal";

        await mongoose.connect(mongoUri);
        console.log("MongoDB connected for seeding...");

        // Clear existing data
        await User.deleteMany({});
        await Company.deleteMany({});
        await Job.deleteMany({});
        console.log("Existing data cleared.");

        // Create a Recruiter
        const hashedPassword = await bcrypt.hash("password123", 10);
        const recruiter = await User.create({
            fullname: "John Recruiter",
            email: "recruiter@test.com",
            phoneNumber: 9876543210,
            password: hashedPassword,
            role: "recruiter"
        });
        console.log("Recruiter John created.");

        // Create a Seeker
        const seeker = await User.create({
            fullname: "Jane Seeker",
            email: "seeker@test.com",
            phoneNumber: 1234567890,
            password: hashedPassword,
            role: "student",
            profile: {
                bio: "Experienced Frontend Developer",
                skills: ["React", "JavaScript", "Tailwind CSS"]
            }
        });
        console.log("Seeker Jane created.");

        // Create a Company
        const company = await Company.create({
            name: "Tech Solutions",
            description: "A leading tech company.",
            website: "https://techsolutions.com",
            location: "Bangalore",
            userId: recruiter._id
        });
        console.log("Company 'Tech Solutions' created.");

        // Create Jobs
        const jobs = [
            {
                title: "Frontend Developer",
                description: "Build awesome user interfaces.",
                requirements: ["React", "CSS", "HTML"],
                salary: 12,
                location: "Remote",
                jobType: "Full-time",
                experienceLevel: 2,
                position: 3,
                company: company._id,
                created_by: recruiter._id
            },
            {
                title: "Backend Engineer",
                description: "Scale our distributed systems.",
                requirements: ["Node.js", "MongoDB", "Express"],
                salary: 15,
                location: "Bangalore",
                jobType: "Full-time",
                experienceLevel: 3,
                position: 2,
                company: company._id,
                created_by: recruiter._id
            }
        ];

        await Job.insertMany(jobs);
        console.log("Jobs seeded.");

        console.log("Database seeded successfully!");
        process.exit(0);
    } catch (error) {
        console.error("Seeding error:", error);
        process.exit(1);
    }
};

seedData();
