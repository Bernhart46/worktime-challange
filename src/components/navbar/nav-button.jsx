import { NavLink } from "react-router-dom";

export function NavButton({ title, to }) {
  return (
    <NavLink
      to={to}
      className="block w-11/12 text-center p-3 md:p-4 md:my-3 mx-auto md:rounded-xl hover:activated"
    >
      {title}
    </NavLink>
  );
}
