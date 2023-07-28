import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import UserPage from "./pages/UserPage/UserPage";
import { userContext } from "./Context/context";
import './App.css';
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SearchPage from "./pages/SearchPage/SearchPage";

function App() {
  const [user, setUser] = useState({})

  return (
    <>
    <userContext.Provider value= {{user, setUser}}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/search' element={<SearchPage/>}></Route>
        <Route path='/user/:id' element={<UserPage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/profile' element={<ProfilePage/>}></Route> 
        <Route path='/detailPage/:id' element={<DetailPage/>}></Route>
        <Route path='/categoryPage/:category' element={<CategoryPage/>}></Route>
      </Routes>
    </BrowserRouter>
    </userContext.Provider>
    </>
  )
}

export default App
