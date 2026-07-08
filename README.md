# 🚀 FailSense AI — AI Powered CI/CD Failure Analyzer

> Automatically detects failed GitHub Actions workflows, downloads logs, extracts critical errors, analyzes failures using Gemini AI, and provides actionable fixes through a modern analytics dashboard.


---

# 📌 Problem

Debugging failed CI/CD pipelines is often slow because developers manually inspect thousands of workflow log lines to identify the root cause.

**FailSense AI automates this entire process.**

It detects failed GitHub Actions workflows in real time, extracts only the important error logs, analyzes them using Gemini AI, and presents developer-friendly fixes through an interactive dashboard.

---

# ✨ Features

- 🔥 GitHub Webhook Integration
- 🤖 Gemini AI powered failure analysis
- 📥 Automatic GitHub Actions log download
- 🧠 Intelligent error extraction & filtering
- 📊 Analytics Dashboard
- 📈 Failure Trend Graphs
- 🔍 Search & Filter workflow runs
- 📄 PDF Export of AI Reports
- 📱 Fully Responsive UI
- ⚡ Near Real-Time Monitoring

---

# 🏗 Architecture

```text
                   GitHub Repository
                           │
                           │ Push / Pull Request
                           ▼
                 GitHub Actions Workflow
                           │
                  Workflow Failed ❌
                           │
                           ▼
                  GitHub Webhook Event
                           │
                           ▼
                Express Backend Server
                           │
          ┌────────────────┴───────────────┐
          │                                │
          ▼                                ▼
 Download Workflow Logs          Extract Error Logs
          │                                │
          └──────────────┬─────────────────┘
                         ▼
                 Filter Critical Errors
                         │
                         ▼
                Gemini AI Analysis
                         │
                         ▼
                    MongoDB Storage
                         │
                         ▼
                React Dashboard UI
                         │
     ┌──────────────┬───────────────┐
     ▼              ▼               ▼
 Workflow Runs   AI Insights   Analytics
```

---

# ⚙ Tech Stack

## Frontend

- React 19
- TypeScript
- Tailwind CSS
- React Router
- Recharts
- jsPDF
- Lucide Icons

---

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Gemini API
- GitHub REST API

---

## DevOps

- GitHub Actions
- GitHub Webhooks
- Render
- Vercel

---

# 📂 Folder Structure

```
Frontend
│
├── components
├── pages
├── router
├── services
└── utils

Backend
│
├── models
├── routes
├── services
├── utils
└── index.ts
```

---

# ⚡ Workflow

### 1️⃣ Developer pushes code

↓

### 2️⃣ GitHub Actions executes workflow

↓

### 3️⃣ Workflow fails

↓

### 4️⃣ GitHub sends Webhook

↓

### 5️⃣ Backend downloads workflow logs

↓

### 6️⃣ Important errors extracted

↓

### 7️⃣ Gemini AI generates

- Root Cause
- Explanation
- Fix
- Commands
- Confidence Score

↓

### 8️⃣ Results stored in MongoDB

↓

### 9️⃣ Dashboard updates

---

# 📊 Dashboard

- Total Runs
- Failed Runs
- Success Runs
- Success Rate
- Failure Trends
- Search Workflows
- AI Reports
- PDF Export

---

# 🚀 Optimisations

- Reduced API latency by **98.3% (349ms → 6ms)** using Redis caching.
- Reduced LLM token usage by **95%+** using intelligent CI/CD log filtering.
- Limited AI context to the **Top 5** critical errors for faster inference.
- Added MongoDB indexing for efficient workflow retrieval.
- Eliminated unnecessary GitHub polling using Webhooks.

---

# 📈 Future Improvements

- BullMQ Background Jobs
- Real-time Dashboard (WebSockets)
- Multi Repository Support
- Slack & Discord Notifications
- Docker Deployment
- Kubernetes Support
- Prometheus & Grafana Monitoring

---


# 🧠 AI Output

The AI generates

- Root Cause
- Detailed Explanation
- Fix
- Shell Commands
- Confidence Score

Example

```json
{
  "rootCause": "...",
  "explanation": "...",
  "fix": "...",
  "commands": [],
  "confidence": 95
}
```

---

# 👨‍💻 Author

**Akshat Chitransh**

GitHub:
https://github.com/akshatchitransh/CICD-AUTOMATION-_BACK/edit/main/README.md

LinkedIn:
https://linkedin.com/in/geekyakshat
Frontend
https://ci-cd-automation-frontend.vercel.app/

Backend
cd-automation-back.onrender.com

---

# ⭐ If you like this project, consider giving it a star!
