import "dotenv/config";
import prisma from "@/lib/prisma";

const testDatabase = async () => {
  try {
    console.log("Database connected successfully");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

testDatabase();
