import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { DesktopNavbar } from "./components/navbar/desktop-navbar.jsx";
import { MobileNavbar } from "./components/navbar/mobile-navbar.jsx";
import { TitleDate } from "./components/title-date.jsx";
import { DailyView } from "./views/daily.jsx";
import { WeeklyView } from "./views/weekly.jsx";
import { MonthlyView } from "./views/monthly.jsx";

function App() {
  return (
    <main className="w-screen h-screen bg-gray-700 flex">
      <DesktopNavbar />
      <MobileNavbar />
      <section className="content w-full">
        <TitleDate />
        <Routes>
          <Route path="/" element={<Navigate to="/napi" />} />
          <Route path="/napi" element={<DailyView />} />
          <Route path="/heti" element={<WeeklyView />} />
          <Route path="/havi" element={<MonthlyView />} />
        </Routes>
      </section>
    </main>
  );
}

export default App;
