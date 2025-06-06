# Interactive Lab Portfolio Website

## Overview

A modern, responsive Flask web application showcasing Interactive Lab course projects and classmates' works. Features a bilingual interface with clean design, smooth animations, and mobile-friendly navigation.

## ✨ Features

- **🏠 Personal Homepage**: Minimalist design with custom button interactions and typography
- **🧪 Interactive Lab Section**: Comprehensive project showcase with 4+ course projects
- **👥 Classmates Gallery**: Direct links to fellow students' portfolio websites
- **📱 Responsive Design**: Seamlessly adapts to desktop, tablet, and mobile devices
- **🎨 Modern UI**: Clean typography, smooth animations, and professional styling
- **🌐 Bilingual Interface**: Support for English and Chinese content
- **⚡ Fast Loading**: Optimized static assets and efficient Flask routing

## 🚀 Quick Start

### Prerequisites

- Python 3.7 or higher
- pip package manager

### Installation & Setup

1. **Clone or download the project**:
   ```bash
   git clone <your-repo-url>
   cd port515
   ```

2. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the application**:
   ```bash
   python app.py
   ```

4. **Access the website**:
   - Open your browser and visit: `http://localhost:8080`
   - Lab section: `http://localhost:8080/lab`
   - Studio page: `http://localhost:8080/studio`
   - About page: `http://localhost:8080/about`

## 📁 Project Structure

```
port515/
├── app.py                    # Flask application with routes
├── requirements.txt          # Python dependencies
├── README.md                # Project documentation
│
├── templates/               # HTML templates
│   ├── index.html          # Homepage with personal branding
│   ├── lab.html            # Interactive lab projects showcase
│   ├── studio.html         # Studio page
│   ├── about.html          # About page
│   └── nav.html            # Navigation component
│
└── static/                 # Static assets
    ├── css/                # Stylesheets
    │   ├── style.css       # Main homepage styles
    │   ├── lab.css         # Lab section styles
    │   └── nav.css         # Navigation styles
    │
    └── js/                 # JavaScript files
        ├── script.js       # Homepage interactions
        └── lab.js          # Lab section functionality
```

## 🎯 Current Features

### Homepage (`/`)
- **Personal Branding**: Features "彭天怡" (Kelly Peng) with interactive hover effects
- **Custom Typography**: Multiple Google Fonts and Adobe Typekit integration
- **Minimalist Navigation**: Clean menu with hover effects
- **Responsive Design**: Mobile-friendly layout

### Lab Section (`/lab`)
- **Project Showcase**: 4 Interactive Lab projects including:
  - Web Prototype Design (Figma)
  - Responsive Website Practice
  - Personal Website Optimization
  - Additional course projects
- **Classmates Gallery**: Direct links to 14+ classmate portfolios
- **Modern UI**: Green accent theme with Font Awesome icons
- **Smooth Animations**: Hover effects and transitions

### Additional Pages
- **Studio** (`/studio`): Placeholder for studio work
- **About** (`/about`): Personal information page

## 🛠️ Customization

### Adding New Projects

Edit `templates/lab.html` and add a new project card in the `service-features` section:

```html
<div id="feature">
  <i class="fas fa-your-icon fa-3x" style="color: #2ecc71; margin-bottom: 20px;"></i>
  <h2 id="feature-title">Your Project Title</h2>
  <p>Project description here</p>
  <a href="your-project-url">
    <button id="feature-button">View Details <i class="fas fa-external-link-alt"></i></button>
  </a>
</div>
```

### Updating Personal Information

- **Homepage**: Edit `templates/index.html` to change personal branding
- **Navigation**: Update menu items in both `index.html` and `lab.html`
- **Styling**: Modify CSS files in `static/css/` for design changes

### Adding Classmates' Work

In `templates/lab.html`, add new buttons in the `section-buttons` div:

```html
<button class="product-button">
  <a href="student-portfolio-url">Student Name <i class="fas fa-external-link-alt"></i></a>
</button>
```

## 🎨 Styling Guide

### Color Scheme
- **Primary Green**: `#2ecc71` (buttons, accents)
- **Text**: Black on white background
- **Hover Effects**: Subtle background changes

### Typography
- **Homepage**: Multiple font families including Liu Jian Mao Cao, Raleway, Roboto
- **Lab Section**: Noto Sans font family
- **Navigation**: Monospace fonts

### Responsive Breakpoints
- **Desktop**: Full navigation and layout
- **Tablet**: Adjusted spacing and typography
- **Mobile**: Hamburger menu and stacked content

## 🚀 Deployment Options

### Local Development
```bash
python app.py
# Runs on http://localhost:8080
```

### Production Deployment

#### Heroku
1. Install Heroku CLI
2. Create `Procfile`:
   ```
   web: python app.py
   ```
3. Deploy:
   ```bash
   heroku create your-app-name
   git push heroku main
   ```

#### Other Platforms
- **Vercel**: Use Vercel's Python runtime
- **DigitalOcean**: App Platform or Droplet
- **AWS**: Elastic Beanstalk or EC2

## 🔧 Technical Details

- **Backend**: Flask 2.3.3
- **Frontend**: HTML5, CSS3, JavaScript (jQuery)
- **Icons**: Font Awesome 5.15.4
- **Fonts**: Google Fonts + Adobe Typekit
- **Responsive**: CSS Grid and Flexbox

## 📝 Development Notes

- Flask automatically serves static files from `/static/` directory
- Templates use Jinja2 syntax with `url_for()` for proper routing
- Debug mode enabled for development (disable for production)
- Cross-platform compatibility (Windows, macOS, Linux)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Test locally: `python app.py`
5. Commit: `git commit -m "Add feature"`
6. Push: `git push origin feature-name`
7. Create a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Interactive Lab course instructors and classmates
- Font Awesome for icons
- Google Fonts and Adobe Typekit for typography
- Flask community for excellent documentation

---

*Built with ❤️ by Kelly Peng (彭天怡)*

