import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar";

const SharedLayout = () => {
  return (
    <main className="shared-layout">
      <Navbar/>
    <Outlet/>
    </main>
  )
}

export default SharedLayout;