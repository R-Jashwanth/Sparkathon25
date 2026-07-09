# Sparkathon25 - AI-Powered Shopping Assistant

[![TypeScript](https://img.shields.io/badge/TypeScript-93.7%25-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Python](https://img.shields.io/badge/Python-4.7%25-green?logo=python&logoColor=white)](https://www.python.org/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)
[![Stars](https://img.shields.io/github/stars/R-Jashwanth/Sparkathon25)](https://github.com/R-Jashwanth/Sparkathon25)

An intelligent shopping platform that combines visual search, AI recommendations, and a seamless shopping experience.

## Features

- 🔍 Visual Search: Upload images to find similar products
- 🤖 AI-Powered Recommendations: Personalized product suggestions
- 🛒 Smart Shopping Cart: Real-time price updates and inventory tracking
- 📱 Responsive Design: Works on desktop and mobile devices
- 🔐 Secure Authentication: User account management
- 📊 Order Tracking: Real-time order status updates

## Tech Stack

### Frontend
- React with TypeScript
- Vite for build tooling
- Ant Design for UI components
- Tailwind CSS for styling
- React Router for navigation

### Backend
- FastAPI (Python)
- Uvicorn server
- Pillow for image processing
- scikit-learn for similarity matching

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- Python 3.8 or higher
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Sparkathon25.git
cd Sparkathon25
```

2. Set up the backend:
```bash
cd project/backend
pip install -r requirements.txt
uvicorn app:app --reload --host 0.0.0.0 --port 8000
```

3. Set up the frontend:
```bash
cd project/frontend
npm install
npm run dev
```

4. Access the application:
- Frontend: http://localhost:5173
- Backend API: http://localhost:8000
- API Documentation: http://localhost:8000/docs

## Project Structure

```
Sparkathon25/
├── project/
│   ├── backend/
│   │   ├── app.py
│   │   └── requirements.txt
│   └── frontend/
│       ├── src/
│       │   ├── components/
│       │   ├── styles/
│       │   └── App.tsx
│       └── package.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built for Sparkathon 2025
- Special thanks to all contributors and mentors
