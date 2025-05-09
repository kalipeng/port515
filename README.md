# Interactive Lab Website

## Overview

This project is a redesigned website for the Interactive Lab course, featuring a modern UI, responsive design, and smooth animations. It serves as a platform to showcase both personal projects and classmates' works in an engaging and visually appealing manner.

## Features

- **Modern Design**: Clean and contemporary UI with carefully selected color schemes
- **Fully Responsive**: Seamlessly adapts to all device sizes from mobile to desktop
- **Animated Elements**: Subtle animations enhance the user experience
- **Flask Backend**: Simple Python Flask application for easy deployment
- **Project Showcase**: Dedicated sections for displaying personal and classmates' projects
- **Easy Navigation**: Intuitive menu system for desktop and mobile

## Getting Started

### Prerequisites

- Python 3.7 or higher
- pip package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/interactive-lab.git
   cd interactive-lab
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   
   # On Windows
   venv\Scripts\activate
   
   # On macOS/Linux
   source venv/bin/activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the application:
   ```bash
   python app.py
   ```

5. Open your browser and visit:
   ```
   http://localhost:8080
   ```

## Project Structure

```
/interactive-lab/
│
├── app.py                # Flask application entry point
├── requirements.txt      # Project dependencies
├── Procfile              # For Heroku deployment
│
├── templates/            # HTML templates
│   ├── index.html        # Home page
│   ├── lab.html          # Interactive lab page
│   ├── studio.html       # Studio page
│   └── about.html        # About page
│
└── static/               # Static assets
    ├── css/              # CSS stylesheets
    │   ├── lab.css       # Styles for lab page
    │   └── style.css     # Global styles
    │
    ├── js/               # JavaScript files
    │   └── lab.js        # Interactive functionality
    │
    └── img/              # Image assets
```

## Customization

### Changing the Color Scheme

The main color scheme can be easily modified by updating the color variables in `static/css/lab.css`:

```css
/* Example: Change primary color from green to blue */
#lightgreen-text {
  color: #3498db; /* Change from #2ecc71 to blue */
}

#hero-button, #feature-button {
  background-color: #3498db; /* Change from #2ecc71 to blue */
}
```

### Adding New Projects

To add a new project to the showcase section, edit the `lab.html` file:

1. Locate the `service-features` section
2. Add a new project card following the existing pattern
3. Update the title, description, and link

```html
<div id="feature">
  <i class="fas fa-code fa-3x" style="color: #2ecc71; margin-bottom: 20px;"></i>
  <h2 id="feature-title">New Project</h2>
  <p>Description of your new amazing project</p>
  <a href="your-project-link">
    <button id="feature-button">View Details <i class="fas fa-external-link-alt"></i></button>
  </a>
</div>
```

## Responsive Design

The website is designed to work seamlessly across different devices:

- **Desktop**: Full layout with expanded navigation
- **Tablet**: Adjusted spacing and layout for medium screens
- **Mobile**: Hamburger menu and stacked content for optimal mobile experience

## Deployment

### Deploy to Heroku

1. Make sure you have the Heroku CLI installed and are logged in
2. Create a new Heroku app:
   ```bash
   heroku create your-interactive-lab
   ```

3. Push to Heroku:
   ```bash
   git push heroku main
   ```

4. Open your deployed application:
   ```bash
   heroku open
   ```

### Deploy to Other Platforms

The application can be deployed to any platform that supports Python:

- **Vercel**: Use the Vercel Python runtime
- **AWS**: Deploy using Elastic Beanstalk or EC2
- **DigitalOcean**: Use App Platform or a Droplet

## Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## Acknowledgements

- Font Awesome for the icons
- Google Fonts for typography
- jQuery for interactive elements
- All classmates who contributed their projects

