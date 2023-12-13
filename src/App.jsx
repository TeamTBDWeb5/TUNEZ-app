import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home, SharedLayout } from "./pages"

function App() {


  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout/>}>
            <Route index element={<Home/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
