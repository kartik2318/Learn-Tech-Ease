import type { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '../../lib/db';

type Data = {
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    await connectDB();
    res.status(200).json({ message: 'Connected to MongoDB successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to connect to MongoDB.' });
  }
}
