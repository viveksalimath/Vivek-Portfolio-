# Vivek Salimath - Portfolio

A modern, interactive portfolio website showcasing data science, machine learning, and full-stack development projects. Built with React and Vite for optimal performance and developer experience.

## 🎯 Features

- **Project Portfolio**: Showcase of 6+ completed projects spanning GenAI, ML, Web Development, and Python
- **Professional Experience**: Timeline view of internships and work experience
- **Technical Skills**: Comprehensive skill display organized by category
- **Responsive Design**: Fully responsive layout with smooth animations
- **Dark Theme**: Modern dark UI with accent colors for visual hierarchy
- **Intersection Observer**: Smooth reveal animations as sections come into view
- **Direct Links**: Quick access to GitHub repositories and external projects

## 🛠️ Tech Stack

- **Frontend**: React 18+ with Hooks
- **Build Tool**: Vite
- **Styling**: Custom CSS with a dark theme
- **Icons**: Lucide React for elegant SVG icons
- **Node.js**: v16+ recommended

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/viveksalimath/Vivek-Portfolio-.git
cd Vivek-Portfolio-
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173/
```

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally

## 📂 Project Structure

```
Vivek-Portfolio-/
├── src/
│   ├── App.jsx          # Main portfolio component
│   └── main.jsx         # React entry point
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── package.json         # Dependencies and scripts
└── README.md            # This file
```

## 🎨 Sections

### 1. **Hero Section**
Introduction with social links (GitHub, LinkedIn, Email, Phone)

### 2. **Featured Projects** (6 Projects)
- Virtual Assistant (J.A.R.V.I.S) - GenAI
- Apple Stock Forecast - Time-Series ML
- Django School Management System - Full-Stack Web
- Customer Churn Prediction - Classification ML
- Hotel Management System - Python CLI
- Data Science Projects Hub - ML Reference

### 3. **Experience Timeline**
- Data Science & AI/ML Intern at ExcelR
- Additional experience entries with detailed bullet points

### 4. **Technical Skills**
- Categories: ML/AI, Web Development, Data Engineering, Tools & Others
- Skills with proficiency indicators

### 5. **Education**
- Academic background and qualifications

### 6. **Call-to-Action**
- Download resume button
- Contact information

## 🚀 Customization

To modify the portfolio content, edit the data structures in [src/App.jsx](src/App.jsx):

- **Projects**: Update the `projects` array
- **Experience**: Modify the `experience` array  
- **Skills**: Update the `skills` data
- **Personal Info**: Edit contact details and social links

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

This creates an optimized build in the `dist/` directory.

### Deploy to Popular Platforms

- **Vercel**: Push to GitHub and connect repo to Vercel
- **Netlify**: Drag & drop the `dist/` folder
- **GitHub Pages**: Configure GitHub Actions for CI/CD
- **Any Static Host**: Upload contents of `dist/` folder

## ✨ Key Features Explained

### Smooth Animations
Uses Intersection Observer API to trigger reveal animations when sections enter the viewport:
```javascript
function useInView() {
  // Detects when component is in view
  // Triggers opacity and transform transitions
}
```

### Responsive Design
Mobile-first CSS ensures the portfolio looks great on all device sizes.

### Performance
- Vite for fast builds and HMR (Hot Module Replacement)
- Code splitting for optimal load times
- Lightweight lucide-react icons

## 📧 Contact

- **Email**: vivek@gmail.com
- **GitHub**: [viveksalimath](https://github.com/viveksalimath)
- **LinkedIn**: [Vivek Salimath](https://linkedin.com/in/viveksalimath)



## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Powered by [Vite](https://vitejs.dev/)
- Icons by [Lucide React](https://lucide.dev/)
