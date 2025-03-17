import mongoose from 'mongoose';

let isConnected = false; // Track the connection state

export const connectDB = async (): Promise<void> => {
  if (isConnected) {
    console.log('Already connected to MongoDB.');
    return;
  }

  const mongoURI = process.env.MONGO_URI;

  if (!mongoURI) {
    throw new Error('MONGO_URI is not defined in environment variables.');
  }

  try {
    // Connect to the MongoDB database
    const connection = await mongoose.connect(mongoURI);
    isConnected = !!connection.connections[0].readyState;
    console.log('Connected to MongoDB successfully.');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};
