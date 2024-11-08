import { NavLink } from "react-router-dom";

export function NavButton({ title, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return `block w-11/12 text-center p-3 lg:p-4 lg:my-3 mx-auto lg:rounded-xl hover:activated ${
          isActive && "activated"
        }`;
      }}
    >
      {title}
    </NavLink>
  );
}
