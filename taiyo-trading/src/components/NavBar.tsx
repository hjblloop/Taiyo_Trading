import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    isActive ? "text-green-400 font-semibold" : "hover:text-green-400 transition-colors";

  return (
    <nav className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center shadow-md border-b border-slate-800">
      <NavLink to="/" className="text-xl font-bold tracking-wide text-green-400">
        Taiyo Trading
      </NavLink>
      <div className="space-x-6 text-sm font-medium">
        <NavLink to="/" className={linkStyle}>Marketplace</NavLink>
        <NavLink to="/dashboard" className={linkStyle}>Dashboard</NavLink>
        <NavLink to="/login" className={linkStyle}>Login</NavLink>
      </div>
    </nav>
  );
};
