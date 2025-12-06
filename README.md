# BKalafat Portfolio

A modern React + Vite portfolio website for bkalafat.com

## Features

- ⚡ **Fast** - Built with Vite for instant dev server and optimized production builds
- 🎨 **Modern UI** - Clean, responsive design with Bento grid layout
- 🚀 **Easy Deployment** - One-click deployment to Cloudflare Pages
- 📱 **Mobile Friendly** - Responsive design that works on all devices
- 🔐 **Secure** - HTTPS/SSL by default with Cloudflare

## Project Structure

```
src/
├── components/
│   ├── BentoGrid.jsx    # Main grid layout component
│   ├── Hero.jsx         # Hero/landing section
│   ├── ProjectCard.jsx  # Project showcase cards
│   ├── ProjectHub.jsx   # Project gallery/hub
│   └── Footer.jsx       # Footer component
├── App.jsx              # Main app component
├── main.jsx             # Entry point
└── index.css            # Global styles
```

## Quick Start

### Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint code
npm lint
```

## 🚀 Deployment

See **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** for complete step-by-step instructions to deploy to bkalafat.com.

**TL;DR:**
1. Push code to GitHub
2. Connect to Cloudflare Pages
3. Add custom domain bkalafat.com
4. Done! 🎉

## Technologies

- **React 19** - UI framework
- **Vite 7** - Build tool and dev server
- **CSS3** - Styling with custom components
- **ESLint** - Code quality

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Environment Setup

No API keys or environment variables required for basic setup.
