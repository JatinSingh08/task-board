import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TasksProvider from './context/TasksContext.jsx'
import { BrowserRouter as Router } from "react-router-dom";
import ThemeProvider from './context/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <TasksProvider>
        <Router>
          <App />
        </Router>
      </TasksProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
