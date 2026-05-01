# Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript featuring professional animations and interactive elements.

## Features

- **Single Page Application**: Full-screen sections with smooth scrolling
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Typing Animation**: Dynamic text animation in hero section
- **Project Slider**: Interactive swiper carousel for projects
- **Scroll Animations**: Elements animate into view as you scroll
- **Contact Form**: Integrated with Netlify Forms for easy deployment
- **Professional Design**: Clean, modern design with gradient backgrounds and images

## Technologies Used

- HTML5
- CSS3 (Tailwind CSS)
- JavaScript (ES6+)
- Swiper.js (for project slider)
- Netlify Forms
- Intersection Observer API

## Required Images

To complete the professional look, add the following images to your root directory:

1. **profile-photo.jpg** - Your profile photo for the hero section (recommended: 400x400px, square format)
2. **hero-bg.jpg** - Background image for hero section (recommended: high resolution landscape)
3. **about-photo.jpg** - Photo for about section (recommended: 400x400px or similar)
4. **aminship-project.jpg** - Screenshot/image for Aminship project
5. **property-management-project.jpg** - Screenshot/image for Property Management project
6. **auction-app-project.jpg** - Screenshot/image for Auction Application project
7. **Md_Mahade_Hasan_Sabbir_Resume.pdf** - Your resume PDF file

## No Build Process Required

This is a **static website** that requires **no build process**. No Node.js, npm, or any build tools are needed. Netlify serves the files directly as-is.

## Color Scheme

- **Primary Colors**: Blue (#3b82f6), Light Blue (#06b6d4), Green (#10b981)
- **Neutral Colors**: Black (#000000), White (#ffffff), Gray variants

## Deployment to Netlify

1. **Connect Repository**: Link your GitHub repository to Netlify
2. **Build Settings**:
   - Build command: `echo 'No build required'`
   - Publish directory: `.` (root directory)
3. **Environment Variables**: No environment variables required
4. **Form Handling**: Netlify Forms is automatically configured

## File Structure

```
portfolio/
├── index.html                      # Main HTML file
├── style.css                       # Custom styles and animations
├── script.js                       # JavaScript functionality
├── netlify.toml                    # Netlify configuration
├── _redirects                      # SPA routing for Netlify
├── profile-photo.jpg              # Your profile photo
├── hero-bg.jpg                    # Hero background image
├── about-photo.jpg                # About section photo
├── *-project.jpg                  # Project screenshots
├── Md_Mahade_Hasan_Sabbir_CV.pdf  # Your CV
├── Md_Mahade_Hasan_Sabbir_Resume.pdf # Your Resume
└── README.md                       # This file
```

## Browser Support

- Chrome 58+
- Firefox 55+
- Safari 11+
- Edge 79+

## Performance

- Lightweight (no heavy frameworks)
- Optimized images and assets
- Fast loading times
- Mobile-first responsive design

## Contact

For questions or suggestions, please use the contact form on the website.