import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="w-full px-28 bg-base-100 p-4 flex justify-between items-center">
      <div className="text-xl font-bold flex items-center"><span><img src="/public/Selection (3).png" alt="" /></span> City Computer</div>
      <div className="space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "hover:text-blue-500 font-bold text-blue-600"
              : "hover:text-blue-500"
          }>
          Home
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? "hover:text-blue-500 font-bold text-blue-600"
              : "hover:text-blue-500"
          }>
          Services
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "hover:text-blue-500 font-bold text-blue-600"
              : "hover:text-blue-500"
          }>
          About
        </NavLink>
        <NavLink
          to="/documents"
          className={({ isActive }) =>
            isActive
              ? "hover:text-blue-500 font-bold text-blue-600"
              : "hover:text-blue-500"
          }>
          Required Documents
        </NavLink>
        <NavLink
          to="/pricing"
          className={({ isActive }) =>
            isActive
              ? "hover:text-blue-500 font-bold text-blue-600"
              : "hover:text-blue-500"
          }>
          Pricing
        </NavLink>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </nav>
  );
};

export default Header;
