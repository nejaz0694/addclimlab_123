# Managing & Launching Your Hydrology Lab Website

This guide explains how to manage your website content, switch between themes, and use the Python backend for a dynamic experience.

## 1. How to Launch (Locally)
To start the development server:
1.  Open your terminal in the project directory (`inertial-lagoon`).
2.  Run: `npm run dev`
3.  Open the URL provided (default is `http://localhost:5173`).

## 2. Managing Content (The "Dynamic" Way)
You don't need to touch the complex HTML/JS code to update the website. All site data is centralized in:
**[src/data/labData.js](file:///c:/Users/Administrator/.gemini/antigravity/playground/inertial-lagoon/src/data/labData.js)**

### To update a Team Member's Bio:
1.  Open `labData.js`.
2.  Find the `team` array.
3.  Update the `bio` property for the respective member.
4.  Save the file, and the website will update instantly!

## 3. Themes (Dark & Light Mode)
The website now supports a professional "Dark Mode" and a clean "Light Mode".
- **Default**: Dark Mode (standard for high-end academic sites).
- **Toggle**: Click the **Sun/Moon** icon in the top Navbar to switch.
- **Persistence**: The site remembers your preference even after you refresh the page.

## 4. Static vs. Dynamic
- **Current State (Static)**: The site is a "Static Site" (SPA). This means it's extremely fast and can be hosted for free on platforms like **GitHub Pages**, **Vercel**, or **Netlify**.
- **Dynamic (Python Backend)**: I have provided a Python backend in **/backend/main.py**.
    - **Why use it?**: If you want to store your data in a database (like MySQL) or handle thousands of blog posts.
    - **How to run**: Install FastAPI (`pip install fastapi uvicorn`) and run `python backend/main.py`.

## 5. Making Changes
- **Styling**: All styles are in `src/index.css`.
- **Layout**: The main page structure is in `src/App.jsx`.
- **Components**: Each section (Hero, About, etc.) is a separate file in `src/components/`.
