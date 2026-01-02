import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-100 shadow-md px-6 py-4">
      <ul className="flex justify-center gap-8">
        {["/", "/about", "/products", "/contact"].map((path, index) => {
          const labels = ["Home", "About", "Products", "Contact"];

          return (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                    : "text-gray-600 hover:text-blue-500 transition"
                }
              >
                {labels[index]}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
