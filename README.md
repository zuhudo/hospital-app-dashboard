<div align="center">

# 📊 Hospital Dashboard — React + Vite

[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-blue?logo=vite)](https://vite.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-blue?logo=tailwindcss)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![CI](https://github.com/zuhudo/hospital-app-dashboard/actions/workflows/dashboard-ci.yml/badge.svg)](https://github.com/zuhudo/hospital-app-dashboard/actions/workflows/dashboard-ci.yml)

Admin dashboard for the Hospital & Patient Management System.

[📱 Mobile App](https://github.com/zuhudo/hospital-app-mobile) • [⚙️ Backend](https://github.com/zuhudo/hospital-app-backend) • [🌐 Website](https://github.com/zuhudo/hospital-app-web) • [📖 Wiki](https://github.com/zuhudo/hospital-app-dashboard/wiki)

</div>

## 📋 Features

- 📊 **Dashboard** — Stats, charts, recent appointments
- 👥 **Patients** — Table with search, view, edit, delete
- 👨‍⚕️ **Doctors** — Cards with ratings, availability
- 📅 **Appointments** — Status tracking, filtering
- 📋 **Medical Records** — Patient history browser
- 💰 **Billing** — Revenue tracking, invoices
- ⚙️ **Settings** — Profile, notifications, security
- 🔒 **Auth** — Protected routes with Zustand
- 📈 **Charts** — Recharts data visualization

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [pnpm](https://pnpm.io/) 8+

### Installation

```bash
# Clone the repo
git clone https://github.com/zuhudo/hospital-app-dashboard.git
cd hospital-app-dashboard

# Install dependencies
pnpm install

# Start dev server
pnpm dev
```

The dashboard will be available at `http://localhost:5173`

### Build

```bash
# Type check + build
pnpm build

# Preview production build
pnpm preview
```

## 📁 Project Structure

```
src/
├── api/           # API client
├── components/
│   ├── layout/    # Sidebar, Header, DashboardLayout
│   ├── charts/    # PatientChart, RevenueChart
│   ├── tables/    # PatientTable, AppointmentTable
│   └── ui/        # Button, Card, Input, Modal
├── pages/         # Route pages
│   ├── Dashboard.tsx
│   ├── Patients.tsx
│   ├── Doctors.tsx
│   ├── Appointments.tsx
│   ├── Records.tsx
│   ├── Billing.tsx
│   ├── Settings.tsx
│   └── Login.tsx
├── hooks/         # Custom hooks
├── store/         # Zustand stores
├── types/         # TypeScript types
└── styles/        # Global CSS
```

## 🛠️ Tech Stack

- **React** 19 — UI library
- **Vite** 8 — Build tool
- **TypeScript** 5 — Type safety
- **Tailwind CSS** 4 — Styling
- **Zustand** — State management
- **React Router** — Routing
- **Recharts** — Charts
- **Lucide React** — Icons

## 📖 Documentation

- [Getting Started](https://github.com/zuhudo/hospital-app-dashboard/wiki/Getting-Started)
- [Components](https://github.com/zuhudo/hospital-app-dashboard/wiki/Components)
- [State Management](https://github.com/zuhudo/hospital-app-dashboard/wiki/State-Management)
- [Deployment](https://github.com/zuhudo/hospital-app-dashboard/wiki/Deployment)

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.
