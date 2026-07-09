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
- **Professional Design**: Modern developer aesthetic — grid backdrop, ambient glows, monospace accents, and syntax-highlighted code-window project previews
- **SEO & Social**: Meta description, Open Graph / Twitter cards, canonical URL, JSON-LD Person schema, and an SVG favicon
- **Proof Strip**: At-a-glance stats highlighting experience and delivery

## Technologies Used

- HTML5
- CSS3 + **precompiled** Tailwind CSS (`tailwind.built.css`)
- JavaScript (ES6+)
- Swiper.js (for project slider)
- Netlify Forms
- Intersection Observer API
- Google Fonts: Inter + JetBrains Mono


## No Build Process Required (at deploy time)

This is a **static website**. Netlify serves the files directly as-is — the build command is a no-op (`echo`). No Node.js or npm runs on the server.

### Tailwind is precompiled

Instead of shipping the heavy in-browser Tailwind runtime (which caused a flash of unstyled content), the utility classes are **precompiled once** into `tailwind.built.css` and committed to the repo. If you add or change Tailwind classes in `index.html` or `script.js`, regenerate the stylesheet:

```bash
npx tailwindcss@3 -i input.css -o tailwind.built.css --content "./index.html,./script.js" --minify
```

where `input.css` contains the three `@tailwind base; @tailwind components; @tailwind utilities;` directives and your config sets `darkMode: 'class'`. Custom styles and animations live in `style.css`, which loads *after* `tailwind.built.css` so its rules win.

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
├── index.html                        # Main HTML file
├── tailwind.built.css                # Precompiled Tailwind utilities (generated)
├── style.css                         # Custom styles and animations
├── script.js                         # JavaScript functionality
├── favicon.svg                       # SVG favicon (developer monogram)
├── swiper-bundle.min.{css,js}        # Swiper carousel library
├── netlify.toml                      # Netlify configuration
├── _redirects                        # SPA routing for Netlify
├── profile-photo.png                 # Profile photo
├── about.png                         # About section photo
├── Md_Mahade_Hasan_Sabbir_CV.pdf     # CV
├── Md_Mahade_Hasan_Sabbir_Resume.pdf # Resume
└── README.md                         # This file
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