import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import DetailPage from './pages/DetailPage'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/categorypage/:category" element={<CategoryPage />}/>
        <Route path="/detailpage/:id" element={<DetailPage />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
