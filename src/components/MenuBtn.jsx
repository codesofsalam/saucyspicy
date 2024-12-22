
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const MenuBtn = () => {
  return (
    <Link 
      to="/menu" 
      className="inline-block"
    >
      <button
        type="button"
        className="group relative flex items-center gap-2 overflow-hidden rounded-lg bg-black px-6 py-3 transition-all duration-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
      >
        <Menu className="h-5 w-5 text-white transition-transform duration-300 group-hover:rotate-90" />
        <span className="font-medium text-white">
          Our Full Menu
        </span>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black to-gray-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </button>
    </Link>
  );
};

export default MenuBtn;