import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, ClipboardCheck, Shield, Book, Info, AlertTriangle } from 'lucide-react';
import { useEmergency } from '../../../hooks/';

export function Navigation() {
  const location = useLocation();
  const { triggerEmergency } = useEmergency();

  const links = [
    { to: '/', label: 'Home', icon: null },
    { to: '/chat', label: 'Chat Support', icon: MessageCircle },
    { to: '/assessment', label: 'Safety Check', icon: ClipboardCheck },
    { to: '/safety-plan', label: 'Safety Plan', icon: Shield },
    { to: '/resources', label: 'Resources', icon: Book },
    { to: '/about', label: 'About', icon: Info },
  ];

  const handleEmergencyClick = () => {
    triggerEmergency({
      type: 'navigation_emergency',
      location: 'user_initiated',
      timestamp: new Date(),
    });
    // Redirect to emergency page
    window.location.href = '/emergency';
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-[#2B9EB3] to-[#1E6A8C] rounded-full flex items-center justify-center">
              <Shield size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#1E6A8C]">Sauti Mpya</h1>
              <p className="text-xs text-[#FF6B35] -mt-1">Safe Space. New Voice.</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2 transition-all duration-200 ${location.pathname === to
                  ? 'bg-[#2B9EB3] text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-[#1E6A8C]'
                  }`}
              >
                {Icon && <Icon size={16} />}
                <span>{label}</span>
              </Link>
            ))}

            {/* Emergency Button */}
            <button
              onClick={handleEmergencyClick}
              className="ml-4 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold flex items-center space-x-2 transition-colors shadow-md"
            >
              <AlertTriangle size={16} />
              <span>Emergency</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={handleEmergencyClick}
              className="p-2 bg-red-500 text-white rounded-lg"
            >
              <AlertTriangle size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-4">
          <div className="grid grid-cols-3 gap-2">
            {links.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className={`p-3 rounded-lg text-xs font-medium flex flex-col items-center space-y-1 transition-all ${location.pathname === to
                  ? 'bg-[#2B9EB3] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {Icon && <Icon size={18} />}
                <span className="text-center">{label.split(' ')[0]}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}