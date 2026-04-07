# 🚀 LoanLogic — MSME Lending Decision System

### Live App: https://loanlogic-beta.vercel.app/

## 📸 UI Preview

![LoanLogic UI](./ui)

A full-stack lending decision system built as part of an assignment from **Viito**, designed to evaluate MSME loan applications using a rule-based credit engine.

This project focuses on **clean architecture, explainable decision-making, and real-world financial reasoning**, rather than over-engineering.

---

## 🎯 Project Overview

LoanLogic evaluates loan applications from MSMEs by analyzing financial inputs such as revenue, loan amount, and tenure.

The system computes a **credit score based on repayment capacity** and returns a clear **APPROVED / REJECTED decision along with reason codes**, ensuring transparency.

---

## 🧠 How It Works

```text
User Input → API → Validation → Decision Engine → Score → Decision → Response
```

### Core Logic:

1. **EMI Approximation**

   * EMI = Loan Amount / Tenure
   * (Simplified due to absence of interest rate)

2. **Financial Ratios**

   * EMI / Monthly Revenue → repayment burden
   * Loan Amount / Revenue → exposure risk

3. **Credit Scoring**

   * Start with base score = 100
   * Deduct based on risk thresholds

4. **Decision**

   * Score ≥ 60 → APPROVED
   * Score < 60 → REJECTED

5. **Explainability**

   * Each deduction adds a reason code (e.g., HIGH_EMI_BURDEN)

---

## 🏗️ Architecture

```text
Frontend (React)
      ↓
API Layer (Express)
      ↓
Controller
      ↓
Service Layer
      ↓
Decision Engine (Pure Logic)
      ↓
Database (PostgreSQL via Prisma)
```

---

## ⚙️ Tech Stack

* **Frontend:** React (Vite)
* **Backend:** Node.js, Express
* **Database:** PostgreSQL (Neon)
* **ORM:** Prisma
* **Deployment:** Vercel (frontend), Render (backend)

---

## 📡 API Endpoint

### POST `/api/evaluate`

#### Request Body:

```json
{
  "name": "ABC Traders",
  "pan": "ABCDE1234F",
  "businessType": "Retail",
  "monthlyRevenue": 50000,
  "loanAmount": 200000,
  "tenure": 12
}
```

#### Response:

```json
{
  "decision": "APPROVED",
  "creditScore": 80,
  "reasons": [
    "MODERATE_EMI_BURDEN",
    "LOW_LOAN_AMOUNT"
  ]
}
```

---

## 🧩 Key Design Decisions

* **Rule-based system** instead of ML for:

  * Deterministic behavior
  * Explainability
  * Simplicity for assignment scope

* **Separation of concerns**

  * Controller → request handling
  * Service → orchestration
  * Decision Engine → pure logic

* **Explainable outputs**

  * Each decision includes reasoning codes

---

## ⚠️ Assumptions

* Interest rate not provided → EMI simplified
* No historical credit data
* Static rule-based scoring model

---

## 🚀 Setup Instructions

### 1. Clone repository

```bash
git clone <your-repo-url>
cd LoanLogic
```

---

### 2. Backend setup

```bash
cd server
npm install
```

Create `.env`:

```env
DATABASE_URL=your_database_url
PORT=8080
```

Run:

```bash
npm run dev
```

---

### 3. Frontend setup

```bash
cd client
npm install
npm run dev
```

---

## 🌟 Features

* Real-time loan evaluation
* Explainable decision system
* Clean UI with instant feedback
* Structured backend architecture
* Database persistence

---

## 🔧 Future Improvements

* Use real EMI formula with interest rate
* Add credit history integration
* Introduce ML-based scoring
* Add authentication & user tracking
* Dashboard for application history

---

## 📌 About This Project

This project was built as part of an assignment from **Viito**, with the goal of demonstrating:

* Strong backend fundamentals
* Clear system design
* Practical problem-solving
* Ability to build end-to-end applications

---

## 👨‍💻 Author

**Dilip Asdeo**

---

## 🏁 Final Note

This project focuses on **clarity, correctness, and explainability**, which are critical in financial systems.

---
