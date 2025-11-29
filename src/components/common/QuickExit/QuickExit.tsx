import { AlertCircle } from 'lucide-react';

export function QuickExit() {
  const handleQuickExit = () => {
    if (typeof window !== 'undefined') {
      localStorage.clear();
      sessionStorage.clear();

      window.location.replace('https://www.google.com/search?q=weather');

      setTimeout(() => {
        window.history.replaceState(null, '', 'https://www.google.com');
      }, 0);
    }
  };

  return (
    <button
      onClick={handleQuickExit}
      className="fixed top-4 right-4 z-50 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 shadow-lg transition-all"
      aria-label="Quick exit to Google"
    >
      <AlertCircle size={20} />
      QUICK EXIT
    </button>
  );
}
