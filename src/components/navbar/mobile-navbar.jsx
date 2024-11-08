import { NavButton } from "./nav-button";

export function MobileNavbar() {
  return (
    <nav className="flex flex-row md:hidden fixed bottom-0 bg-black text-white w-screen h-12">
      <NavButton title="Napi" to="/napi" />
      <NavButton title="Heti" to="/heti" />
      <NavButton title="Havi" to="/havi" />
    </nav>
  );
}
