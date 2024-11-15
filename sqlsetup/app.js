import express from 'express';
import cors from 'cors';
import { participate,enroll,payment,feedback,healthrecord,session,generate } from './database.js';

const app = express();
app.use(express.json());

app.use(cors({
  origin: "*",
  credentials: true
}));

// Unique route for registering a participant
app.post("/api/register", async (req, res) => {
  await participate(req, res);
  return res.json({ "success": true });
});

// Unique route for enrolling a user in a program
app.post("/api/enrollment", async (req, res) => {
  await enroll(req, res);
  return res.json({ "success": true });
});

app.post("/api/payment", async (req, res) => {
  await payment(req, res);
  return res.json({ "success": true });
});
app.post("/api/feedback", async (req, res) => {
  await feedback(req, res);
  return res.json({ "success": true });
});
app.post("/api/healthrecord", async (req, res) => {
  await healthrecord(req, res);
  return res.json({ "success": true });
});
app.post("/api/session", async (req, res) => {
  await session(req, res);
  return res.json({ "success": true });
});
app.get("/api/generate", async (req, res) => {
  await generate(req, res);
  return res.json({ "success": true });
});


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
