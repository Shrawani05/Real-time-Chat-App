import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

console.log("Cloud Name:", process.env.CLOUDINAR_CLOUD_NAME);
console.log("API Key:", process.env.CLOUDINAR_API_KEY);
console.log("API Secret Exists:", !!process.env.CLOUDINAR_API_SECRET);

cloudinary.config({
  cloud_name: process.env.CLOUDINAR_CLOUD_NAME,
  api_key: process.env.CLOUDINAR_API_KEY,
  api_secret: process.env.CLOUDINAR_API_SECRET,
});

export default cloudinary;