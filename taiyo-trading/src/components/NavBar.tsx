import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    isActive ? "text-taiyo-gold font-semibold font-playfair" : "hover:text-taiyo-gold transition-colors font-playfair";

  return (
    <nav className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center shadow-md border-b border-slate-800">
      <NavLink to="/" className="text-3xl font-bold tracking-wide text-taiyo-gold font-playfair">
        Taiyo Cards
      </NavLink>
      <div className="space-x-6 text-2xl font-medium">
        <NavLink to="/" className={linkStyle}>Marketplace</NavLink>
        <NavLink to="/dashboard" className={linkStyle}>Dashboard</NavLink>
        <NavLink to="/login" className={linkStyle}>Login</NavLink>
      </div>
    </nav>
  );
};
