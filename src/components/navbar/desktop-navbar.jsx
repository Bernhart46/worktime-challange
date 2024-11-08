import { NavButton } from "./nav-button";

export function DesktopNavbar() {
  return (
    <nav className="hidden md:flex flex-col h-screen w-full max-w-80 bg-gray-900 text-slate-300 ">
      <h1 className="text-3xl text-center py-10">Időnyilvántartó</h1>
      <hr className="border-slate-600" />
      <NavButton title="Napi" to="/napi" />
      <NavButton title="Heti" to="/heti" />
      <NavButton title="Havi" to="/havi" />
    </nav>
  );
}
