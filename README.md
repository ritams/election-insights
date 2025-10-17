# [Election Insights](https://electioninsights.in)

A modern, responsive web platform for election science research and data analysis from the Santhanam Lab at IISER Pune.

![Election Insights](https://img.shields.io/badge/Status-Active-brightgreen) ![License](https://img.shields.io/badge/License-MIT-blue)

## 📊 Overview

Election Insights is a comprehensive platform that showcases research on democratic elections, political science data analysis, and electoral statistics. The platform features research publications, interactive data visualizations, and educational content about election science.

## ✨ Features

- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Research Publications**: Showcase of academic papers and research findings
- **Blog System**: Dynamic blog posts with markdown support
- **Interactive Visualizations**: Data-driven insights and statistics
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🛠 Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Styling**: Custom CSS with CSS Variables and modern design system
- **Icons**: Lucide icons
- **Typography**: Inter and Space Grotesk fonts
- **Math Rendering**: MathJax for mathematical equations
- **Deployment**: GitHub Pages / Netlify
- **Version Control**: Git with GitHub

## 🚀 Getting Started

### Prerequisites

- A web browser (Chrome, Firefox, Safari, Edge)
- Git (for version control)
- A code editor (VS Code, Sublime Text, etc.)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/election-insights.git
   cd election-insights
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - No build process required - it's pure HTML/CSS/JS

3. **Development workflow**
   - Make changes to HTML, CSS, or JavaScript files
   - Refresh browser to see changes
   - Use browser dev tools for debugging

## 📝 Adding a New Blog Post

**Important**: All blog additions must be done through a Pull Request (PR) to maintain quality and review standards.

### Step-by-Step Guide for Adding a Blog

#### Step 1: Fork the Repository
1. Go to the [Election Insights repository](https://github.com/your-username/election-insights) on GitHub
2. Click the **"Fork"** button in the top-right corner
3. This creates a copy of the repository in your GitHub account

#### Step 2: Clone Your Fork
```bash
# Replace 'your-username' with your actual GitHub username
git clone https://github.com/your-username/election-insights.git
cd election-insights
```

#### Step 3: Create a New Branch
```bash
# Create and switch to a new branch for your blog post
git checkout -b add-blog-[blog-title-slug]
# Example: git checkout -b add-blog-election-statistics-2024
```

#### Step 4: Create the Blog Content

1. **Create the markdown file** in the `blogs/` directory:
   ```bash
   # Navigate to blogs directory
   cd blogs

   # Create your blog file (use descriptive filename)
   touch "Your Blog Title Here.md"
   ```

2. **Write your blog content** in Markdown format:
   ```markdown
   ---
   title: "Your Blog Title"
   date: "2024-10-XX"
   author: "Your Name"
   excerpt: "Brief description of your blog post"
   tags: ["tag1", "tag2"]
   ---

   # Your Blog Title

   ## Introduction

   Your blog content here...

   ## Section 1

   More content...

   ## Conclusion

   Final thoughts...
   ```

3. **Update the blogs.json file**:
   - Open `blogs/blogs.json`
   - Add your blog entry in the following format:
   ```json
   {
     "title": "Your Blog Title",
     "file": "Your-Blog-Title-Here.md",
     "date": "2024-10-XX",
     "author": "Your Name",
     "excerpt": "Brief description",
     "tags": ["research", "elections"]
   }
   ```

#### Step 5: Test Your Changes

1. **Open the website locally**:
   - Open `index.html` in your browser
   - Navigate to the Blogs section
   - Verify your blog appears and displays correctly

2. **Check mobile responsiveness**:
   - Use browser dev tools to test on different screen sizes
   - Ensure images and formatting look good on mobile

#### Step 6: Commit and Push Your Changes

```bash
# Add your new files
git add blogs/"Your-Blog-Title-Here.md"
git add blogs/blogs.json

# Commit with a descriptive message
git commit -m "Add new blog: Your Blog Title

- Added markdown content for blog post
- Updated blogs.json with new entry
- Tested display and mobile responsiveness"

# Push to your fork
git push origin add-blog-[blog-title-slug]
```

#### Step 7: Create a Pull Request

1. **Go to the original repository** on GitHub
2. Click **"Pull requests"** tab
3. Click **"New pull request"** button
4. Click **"compare across forks"**
5. Select your fork and the branch you created
6. Click **"Create pull request"**

#### Step 8: Fill Out the Pull Request

**Title**: `Add blog: [Your Blog Title]`

**Description**:
```markdown
## Description
Added a new blog post about [brief description].

## Changes Made
- Added `blogs/[filename].md` with blog content
- Updated `blogs/blogs.json` with new blog entry

## Testing
- Verified blog displays correctly on desktop and mobile
- Checked that navigation and links work properly

## Screenshots (optional)
[Add screenshots if relevant]
```

#### Step 9: Wait for Review

- The maintainers will review your PR
- They may request changes or ask questions
- Once approved, your blog will be merged and published!

## 📋 Blog Guidelines

### Content Requirements
- **Academic Integrity**: Ensure all content is original or properly cited
- **Accuracy**: Verify facts and data accuracy
- **Clarity**: Write in clear, accessible language
- **Relevance**: Content should relate to election science or political analysis

### Technical Requirements
- **Markdown Format**: Use proper markdown syntax
- **Images**: Place images in the `assets/` directory
- **Math**: Use LaTeX syntax for mathematical equations (MathJax enabled)
- **Links**: Test all links and references

### File Naming
- Use kebab-case for filenames: `your-blog-title-here.md`
- Keep filenames descriptive but not too long
- Match the filename in `blogs.json` exactly

## 🏗 Project Structure

```
election-insights/
├── index.html              # Homepage
├── insights.html           # Data insights page
├── blogs.html              # Blog listing page
├── publications.html       # Research publications
├── learnmore.html          # Educational content
├── team.html              # Team information
├── media.html             # Media coverage
├── style.css              # Main stylesheet
├── app.js                 # Main JavaScript
├── blogs/                 # Blog content
│   ├── blogs.json         # Blog metadata
│   └── *.md               # Individual blog posts
├── assets/                # Images and media
│   └── ...                # Images, logos, etc.
└── CNAME                  # Domain configuration
```

## 🎨 Design System

### Colors
- **Primary**: Purple accent (`--clr-accent-primary`)
- **Secondary**: Light purple (`--clr-accent-secondary`)
- **Background**: White/light gray gradient
- **Text**: Dark gray hierarchy

### Typography
- **Headings**: Space Grotesk (various weights)
- **Body**: Inter (300-700 weights)
- **Monospace**: For code and math

### Components
- Cards, buttons, navigation, forms
- Responsive grid system
- Smooth animations and transitions

## 🚀 Deployment

The site is automatically deployed via:
- **GitHub Pages**: For repository hosting
- **Netlify**: For advanced features and analytics

### Manual Deployment

```bash
# Build (if needed - currently static)
# Deploy to GitHub Pages
git push origin main
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Types of Contributions
- **Blog Posts**: Share research findings or analysis
- **Bug Fixes**: Report and fix technical issues
- **Feature Requests**: Suggest new functionality
- **Documentation**: Improve guides and documentation

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **M. S. Santhanam** - Principal Investigator, IISER Pune
- **Ritam Pal** - Research Scholar
- **Aanjaneya Kumar** - Research Scholar

## 📞 Contact

- **Email**: [santh@iiserpune.ac.in](mailto:santh@iiserpune.ac.in)
- **Website**: [IISER Pune](https://www.iiserpune.ac.in)
- **Lab**: [Santhanam Lab](https://sites.iiserpune.ac.in/~santh)

## 🙏 Acknowledgments

- Research funded by IISER Pune
- Built with modern web technologies
- Inspired by the need for transparent election analysis

---

*Made with ❤️ at IISER Pune*
