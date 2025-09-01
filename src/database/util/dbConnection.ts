import mongoose from 'mongoose';
import dotEnv from 'dotenv';

dotEnv.config();

export const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log('Database Connected Successfully');
  } catch (error) {
    console.log(error);
    throw error;
  }
};
