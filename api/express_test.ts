// Import the express framework
import express, { Request, Response } from 'express';

// Initialize an express application
const app = express();

// Define a route handler for GET requests to the root path ('/')
app.get('/api/express_test', (req: Request, res: Response) => {
  // Send the response message
  res.status(200).json({ message: "hello, express js serverless function call!" });
});

// Export the express application as the default export
// This is necessary for Vercel to recognize it as a serverless function
export default app;
