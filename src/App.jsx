import { Route, Routes } from 'react-router-dom'
import './App.css'
import Board from './components/board/Board'

function App() {

  return (
      <div className="w-full">
        <Routes>
          <Route path="/" element={<Board />} />
        </Routes>
      </div>
    
  )
}

export default App
