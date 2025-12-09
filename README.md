# React Practice - Unified App

A consolidated React practice project combining all previous exercises into one organized application.

## 🚀 Features

- **Music Player** - Play songs with seekbar, controls, and playlist
- **Student Component** - Display student information and hobbies
- **Counter App** - Simple counter with state management
- **Car Classes** - OOP demonstration with inheritance
- **Routing** - Navigation between different pages
- **Tailwind CSS** - Modern styling

## 📁 Project Structure

```
unified-app/
├── src/
│   ├── pages/          # All page components
│   │   ├── HomePage.jsx
│   │   ├── MusicPlayerPage.jsx
│   │   ├── StudentPage.jsx
│   │   ├── CounterPage.jsx
│   │   └── CarClassPage.jsx
│   ├── components/     # Reusable components (add more here)
│   ├── App.jsx         # Main app with routing
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Static assets (images, music files)
└── package.json
```

## 🛠️ Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Open your browser at `http://localhost:5173`

## 📝 Adding New Components

1. Create a new file in `src/components/` or `src/pages/`
2. Import it in `App.jsx`
3. Add a new route if it's a page
4. Update the navigation bar

Example:
```jsx
// src/pages/MyNewPage.jsx
function MyNewPage() {
  return <div>My New Page Content</div>
}
export default MyNewPage

// Add to App.jsx:
import MyNewPage from './pages/MyNewPage'
// Add route:
<Route path="/my-new-page" element={<MyNewPage />} />
// Add nav link:
<Link to="/my-new-page">My New Page</Link>
```

## 🎯 Next Steps

- Add more components to practice
- Create reusable components in `src/components/`
- Add more pages with different React concepts
- Practice hooks, state management, props, etc.

## 🎨 Tech Stack

- React 19
- Vite
- React Router
- Tailwind CSS
- Lucide React (icons)
