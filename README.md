# 🏦 Vault Finance Platform

## 🔗 Live Link
<a href="https://vault-gamma-cyan.vercel.app/" alt="live link">
  Vault
</a>


## 📜 Project Summary
Vault is a modern, full-featured personal finance management platform designed to help users effectively track their transactions, manage their budgets, and gain intelligent insights into their financial habits. The platform blends traditional financial tools with cutting-edge AI and interactive UI features to create a seamless and smart money-management experience.

## 🔑 Core Functionality

### 💳 Transaction Management
- Users can **add**, **edit**, **delete**, and **view** transactions.
- Select individual or all transactions at once for bulk operations.
- Each selection action logs the transaction ID for tracking.

### 🔍 Advanced Filtering Options
Transactions can be filtered dynamically based on:
- **Search keywords**
- **Transaction type** (income/expense)
- **Recurrence** (recurring/non-recurring)

### 📊 Budget Tracking
- Users can set monthly budgets and receive alerts when nearing or exceeding these limits, helping maintain financial discipline.

### 🤖 AI-Powered Receipt Scanning
- Integrated with the **Google Gemini API**, allowing users to upload physical receipts.
- The AI automatically extracts and fills transaction details, reducing manual entry and improving accuracy.

### 📈 Monthly Financial Reports & Insights
- The platform generates visual and textual reports summarizing monthly financial activity, including spending insights and suggestions powered by AI.

### 📉 Data Visualization
- Users can understand their spending patterns through visually rich graphs and charts, identifying overspending categories to make informed financial decisions.

### 📱 Responsive and Intuitive UI
- Built with responsive design in mind, the interface works smoothly across mobile and desktop devices, offering a clean and user-friendly experience.

### 🔒 Security and Performance
- Integrates **ArcJet** for rate limiting, bot protection, and API abuse prevention.
- Uses **Clerk** for secure user authentication.



## 🧱 Technology Stack

- Next.js
- ShadCN UI
- Prisma (ORM)
- Supabase - PostgreSQL (database)
- Google Gemini API (receipt OCR + insights)
- ArcJet (security)
- Resend (budget usage notifications and montly insights)
- Clerk (authentication)
- Vercel (deployment)

## ⚙️ Development Setup
The project uses modern developer tooling, including environment variable setup for sensitive keys, Prisma for managing the database schema, and Vercel for deployment. The backend can optionally be hosted on platforms like Render or Heroku.

## 👥 Contributions & Licensing
Vault is an open-source project licensed under the **MIT License**. Contributions are encouraged via pull requests or issue reports, promoting community involvement and transparency.

## 🎯 Conclusion
Vault Finance Platform is a smart, secure, and scalable solution for anyone looking to take control of their finances. Its blend of manual and AI-driven features, alongside real-time visual feedback and an elegant UI, positions it as a powerful tool in the personal finance space.
