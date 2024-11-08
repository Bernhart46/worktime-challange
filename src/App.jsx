import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <main className="w-screen h-screen bg-gray-700">
      <nav></nav>
      <section className="content">
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
