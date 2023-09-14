import { Route, Routes } from 'react-router-dom'
import './App.css'
import Sidebar from './components/layout/Sidebar'
import Board from './components/board/Board'

function App() {

  return (
    <div className="flex gap-2">
      <Sidebar />
      <div className="w-[calc(100% - 4rem)]">
        <Routes>
          <Route path="/" element={<Board />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
