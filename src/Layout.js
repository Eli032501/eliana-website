import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="Layout">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
