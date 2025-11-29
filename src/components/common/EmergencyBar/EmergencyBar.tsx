import { Phone } from 'lucide-react';

export function EmergencyBar() {
  const helplines = [
    { country: 'Kenya', number: '1195' },
    { country: 'Nigeria', number: '0800 033 3333' },
    { country: 'South Africa', number: '0800 428 428' },
    { country: 'Ghana', number: '0800 800 800' },
    { country: 'Uganda', number: '0800 200 600' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-red-600 text-white py-2 px-4 z-40 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 flex-wrap text-sm">
        <Phone size={16} className="flex-shrink-0" />
        <span className="font-bold">EMERGENCY:</span>
        {helplines.map((line, i) => (
          <span key={i} className="whitespace-nowrap">
            {line.country} {line.number}
            {i < helplines.length - 1 && ' ·'}
          </span>
        ))}
      </div>
    </div>
  );
}