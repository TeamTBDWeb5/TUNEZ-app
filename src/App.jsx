import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home, SharedLayout } from "./pages"
import Artist from "./pages/Artist"

function App() {


  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout/>}>
            <Route index element={<Home/>}/>
          
            <Route path="/artist/:id" element={<Artist/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
