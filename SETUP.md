# Quick Setup Guide

## Local Development

### 1. Clone Repository
```bash
git clone https://github.com/mgadelrab/grocery-price-compare.git
cd grocery-price-compare
```

### 2. Setup Frontend
```bash
cd frontend
npm install
npm run dev
```

### 3. Setup Backend (new terminal)
```bash
cd worker
npm install
npm run dev
```

Visit `http://localhost:3000` - Frontend
Visit `http://localhost:8787` - Backend

## Deploy to Production

See [docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md)