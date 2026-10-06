// InsightFusion AI - Main Server
// Enterprise SaaS Architecture with Student AI Copilot & Interactive Verification
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { apiRouter } from './routes/apiRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ extended: true, limit: '25mb' }));

// Mount central API router
app.use('/api', apiRouter);

// Static assets
app.use(express.static(path.join(__dirname, 'public')));

// SPA catch-all
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

export default app;

if (process.env.NETLIFY !== 'true' && !process.env.LAMBDA_TASK_ROOT) {
  app.listen(PORT, () => {
    console.log(`================================================================`);
    console.log(`🚀 INSIGHTFUSION AI — RESEARCH & VERIFICATION PLATFORM`);
    console.log(`💬 Student AI Research Copilot & Fact-Checker Active`);
    console.log(`🌐 Live on: http://localhost:${PORT}`);
    console.log(`================================================================`);
  });
}
