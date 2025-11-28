import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, ClipboardCheck, Shield, Book, Info } from 'lucide-react';

export function Navigation() {
  const location = useLocation();

  const links = [
    { to: '/', label: 'Home', icon: null },
    { to: '/chat', label: 'Chat', icon: MessageCircle },
    { to: '/assessment', label: 'Assessment', icon: ClipboardCheck },
    { to: '/safety-plan', label: 'Safety Plan', icon: Shield },
    { to: '/resources', label: 'Resources', icon: Book },
    { to: '/about', label: 'About', icon: Info },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-[#2B9EB3]">
            Sauti Mpya
          </Link>

          <div className="flex gap-1 md:gap-4">
            {links.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className={`px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 transition-colors ${
                  location.pathname === to
                    ? 'bg-[#2B9EB3] text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {Icon && <Icon size={16} />}
                <span className="hidden sm:inline">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
