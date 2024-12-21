# Project Name
CodeAnt.AI (YC W24) Assignment

## Description
This is CodeAnt.AI assignment consisting of a dashboard and a login page built with Next.js, React, TypeScript, Tailwind CSS and Shadcn.

## Tech Stack
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Docker
- Docker Compose

## Prerequisites
Before running this project, make sure you have installed:
- Node.js (version 18.17 or later)
- npm or yarn
- Git

## Installation

1. Clone the repository
```bash
git clone https://github.com/Shreekar11/codeant.git
cd codeant
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Docker Development

1. Clone the repository
```bash
git clone https://github.com/Shreekar11/codeant.git
cd codeant
```

2. Build and start the Docker containers
```
docker-compose up --build
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
npm run test         # Run tests
```

## Project Structure
```
├── src/                   # Source directory
│   ├── app/               # App router directory
│   │   ├── page.tsx       # Home page
│   │   ├── layout.tsx     # Root layout
│   │   └── dashboard/     # Dashboard route
│   │       └── page.tsx   # Dashboard page
│   ├── components/        # React components
│   └── lib/  
│   └── types/             # Type file
├── public/              # Static assets
├── Dockerfile           # Docker configuration
└── docker-compose.yml   # Docker Compose configuration
├── .eslintrc.json       # ESLint configuration
├── .gitignore           # Git ignore rules
├── next.config.js       # Next.js configuration
├── package.json         # Project dependencies
├── README.md            # Project documentation
├── tailwind.config.js   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
```

## Features
- ⚡️ Next.js 14 with App Router
- 💎 TypeScript
- 🎨 Tailwind CSS
- 📱 Responsive Design









