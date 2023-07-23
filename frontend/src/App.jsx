
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import DetailPage from "./pages/DetailPage";
import './App.css';

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/detailPage/:id' element={<DetailPage/>}></Route>
        <Route path='/categoryPage/:category' element={<CategoryPage/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
