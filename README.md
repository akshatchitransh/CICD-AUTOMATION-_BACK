# 🚀 FailSense AI

> **AI-Powered CI/CD Failure Analysis Platform**  
> Automatically detects failed GitHub Actions workflows, extracts the most relevant logs, leverages Google Gemini to identify the root cause, and presents actionable debugging insights through a modern analytics dashboard.

<p align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-Backend-black?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-Cache-DC382D?logo=redis&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Google-Gemini-blue)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI/CD-2088FF?logo=github-actions)
![License](https://img.shields.io/badge/License-MIT-green)

</p>

---

# 📖 Overview

Modern software projects rely heavily on CI/CD pipelines to automatically build, test, and deploy applications. While these pipelines improve development velocity, debugging failures remains time-consuming because developers often sift through thousands of log lines to locate the actual issue.

**FailSense AI** streamlines this process by integrating with GitHub Actions, collecting workflow execution logs, extracting critical errors, and using **Google Gemini** to generate concise explanations, identify probable root causes, and recommend fixes.

Instead of manually reading verbose logs, developers receive intelligent summaries and analytics through an interactive dashboard.

---

# ❓ Problem Statement

Debugging CI/CD failures is expensive because:

- Workflow logs can contain thousands of lines.
- Actual errors are buried among warnings and informational logs.
- Developers spend excessive time identifying the root cause.
- GitHub provides logs but not explanations.
- Teams lack centralized visibility into workflow health.

FailSense AI addresses these challenges by combining GitHub APIs, AI-powered log analysis, caching, and real-time dashboards.

---

# ✨ Features

## 🤖 AI Failure Analysis

- AI-generated root cause explanation
- Human-readable debugging summaries
- Suggested fixes
- Intelligent log interpretation
- Failure categorization

---

## ⚙ GitHub Integration

- GitHub Actions support
- Repository integration
- Workflow execution history
- Automatic workflow synchronization
- GitHub API integration

---

## 📊 Analytics Dashboard

- Workflow statistics
- Success vs Failure metrics
- Recent workflow runs
- Repository overview
- Interactive charts
- Historical execution tracking

---

## 📄 Report Generation

Generate downloadable reports containing:

- Workflow metadata
- Execution status
- Failure logs
- AI explanation
- Recommended solution

---

## ⚡ Performance

- Redis caching
- Optimized API requests
- Fast dashboard rendering
- Efficient MongoDB queries

---

# 🏗 System Architecture

```text
                Developer Push
                       │
                       ▼
              GitHub Repository
                       │
                       ▼
              GitHub Actions CI
                       │
              Workflow Execution
                       │
            ┌──────────┴──────────┐
            │                     │
      Success Event         Failure Event
                                    │
                                    ▼
                           GitHub Webhook
                                    │
                                    ▼
                          Express Backend API
                                    │
               ┌────────────────────┼────────────────────┐
               ▼                    ▼                    ▼
        GitHub API            MongoDB Database       Redis Cache
               │
               ▼
      Download Workflow Logs
               │
               ▼
      Critical Log Extraction
               │
               ▼
          Google Gemini AI
               │
               ▼
      Root Cause Analysis
               │
               ▼
        REST API Responses
               │
               ▼
      React Dashboard Frontend
               │
      ├── Analytics
      ├── Workflow Runs
      ├── AI Insights
      ├── Timeline
      └── PDF Reports
```

---

# 🔄 Workflow

```text
Developer pushes code

        │

        ▼

GitHub Actions executes workflow

        │

        ▼

Workflow succeeds or fails

        │

        ▼

Webhook notifies backend

        │

        ▼

Backend downloads workflow logs

        │

        ▼

Important errors are extracted

        │

        ▼

Gemini analyzes failures

        │

        ▼

Analysis stored in MongoDB

        │

        ▼

Dashboard displays AI insights
```

---

# 🧠 AI Pipeline

```text
Workflow Logs

      │

      ▼

Log Cleaning

      │

      ▼

Error Extraction

      │

      ▼

Prompt Engineering

      │

      ▼

Google Gemini

      │

      ▼

Root Cause

      │

      ▼

Suggested Resolution

      │

      ▼

Dashboard Visualization
```

---

# 🛠 Tech Stack

| Layer | Technology |
|--------|------------|
| Frontend | React 19 |
| Language | TypeScript |
| Backend | Express.js |
| Runtime | Node.js |
| Database | MongoDB |
| Cache | Redis |
| AI | Google Gemini |
| Charts | Recharts |
| Animation | Framer Motion |
| PDF | jsPDF |
| CI/CD | GitHub Actions |
| Version Control | Git |

---

# 📂 Project Structure

```text
FailSense-AI

├── frontend
│   ├── src
│   ├── components
│   ├── pages
│   ├── services
│   └── assets
│
├── backend
│   ├── controllers
│   ├── routes
│   ├── services
│   ├── models
│   ├── middleware
│   ├── utils
│   └── config
│
└── README.md
```

---

# 🚀 Local Setup

## Clone Repository

```bash
git clone https://github.com/akshatchitransh/CI-CD-Automation.git
```

---

## Install Dependencies

Frontend

```bash
cd frontend
npm install
```

Backend

```bash
cd backend
npm install
```

---

## Environment Variables

Backend

```env
PORT=

MONGODB_URI=

REDIS_URL=

GEMINI_API_KEY=

GITHUB_TOKEN=

GITHUB_WEBHOOK_SECRET=
```

Frontend

```env
VITE_API_URL=http://localhost:5000
```

---

## Start Backend

```bash
npm run dev
```

---

## Start Frontend

```bash
npm run dev
```

---

# 📱 Dashboard Modules

- Repository Overview
- Workflow Runs
- AI Insights
- Workflow Timeline
- Failure Statistics
- PDF Report Export

---

# 🔒 Security

- Environment-based configuration
- GitHub Webhook verification
- API key isolation
- Redis caching
- Secure database communication
- Input validation
- Error sanitization

---

# ⚡ Performance Optimizations

- Redis cache for repeated requests
- Optimized MongoDB indexing
- Efficient API communication
- Lazy frontend rendering
- Reduced unnecessary re-renders
- Lightweight REST architecture

---

# 📈 Future Improvements

- GitHub OAuth
- Multiple repository support
- Slack integration
- Microsoft Teams notifications
- Email alerts
- Kubernetes deployment
- Docker support
- Self-hosted deployment
- Multi-user authentication
- AI chat assistant
- Workflow trend prediction
- Failure similarity search

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push the branch.
5. Open a Pull Request.

---

# 📜 License

Licensed under the **MIT License**.

---

# 👨‍💻 Author

**Akshat Chitransh**

- GitHub: https://github.com/akshatchitransh

---

## ⭐ Support

If this project helped you, please consider giving it a **⭐ Star**. It helps others discover the project and motivates future development.
