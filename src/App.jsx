import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { DesktopNavbar } from "./components/navbar/desktop-navbar.jsx";
import { MobileNavbar } from "./components/navbar/mobile-navbar.jsx";
import { TitleDate } from "./components/title-date.jsx";

function App() {
  return (
    <main className="w-screen h-screen bg-gray-700 flex">
      <DesktopNavbar />
      <MobileNavbar />
      <section className="content w-full">
        <TitleDate />
        <Routes>
          <Route path="/" element={<Navigate to="/napi" />} />
          <Route path="/napi" element={<>Napi</>} />
          <Route path="/heti" element={<>Heti</>} />
          <Route path="/havi" element={<>Havi</>} />
        </Routes>
      </section>
    </main>
  );
}

export default App;
