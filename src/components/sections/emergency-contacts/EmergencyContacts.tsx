import { Phone, MapPin, Clock, Shield } from 'lucide-react';

export function EmergencyContacts() {
    const emergencyContacts = [
        {
            name: 'Police Emergency',
            number: '112',
            type: 'police',
            description: 'National Police Emergency Line',
            available: '24/7',
            countries: ['All African Countries']
        },
        {
            name: 'Medical Emergency',
            number: '114',
            type: 'medical',
            description: 'Ambulance & Medical Emergency',
            available: '24/7',
            countries: ['All African Countries']
        },
        {
            name: 'GBV National Hotline',
            number: '0800-123-456',
            type: 'hotline',
            description: 'Gender-Based Violence Support',
            available: '24/7',
            countries: ['Kenya', 'Tanzania', 'Uganda']
        },
        {
            name: 'Child Helpline',
            number: '116',
            type: 'child',
            description: 'Child Protection & Support',
            available: '24/7',
            countries: ['Multiple Countries']
        },
        {
            name: 'Mental Health Crisis',
            number: '+254-720-123-456',
            type: 'mental',
            description: 'Crisis Counseling & Support',
            available: '24/7',
            countries: ['Kenya', 'Regional']
        },
        {
            name: 'Women Rights Org',
            number: '+255-789-456-123',
            type: 'ngo',
            description: 'Legal Aid & Shelter Referral',
            available: 'Mon-Fri 8AM-6PM',
            countries: ['Tanzania']
        }
    ];

    const getTypeColor = (type: string) => {
        const colors = {
            police: 'bg-red-100 text-red-800 border-red-300',
            medical: 'bg-blue-100 text-blue-800 border-blue-300',
            hotline: 'bg-purple-100 text-purple-800 border-purple-300',
            child: 'bg-green-100 text-green-800 border-green-300',
            mental: 'bg-orange-100 text-orange-800 border-orange-300',
            ngo: 'bg-indigo-100 text-indigo-800 border-indigo-300'
        };
        return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-300';
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-8">
                <div className="bg-red-100 p-3 rounded-full">
                    <Shield size={32} className="text-red-600" />
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-gray-900">Emergency Contacts</h2>
                    <p className="text-gray-600 mt-1">Immediate help when you need it most</p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {emergencyContacts.map((contact, index) => (
                    <div
                        key={index}
                        className="border-2 border-gray-100 rounded-xl p-6 hover:shadow-lg transition-all hover:border-[#2B9EB3] group"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h3 className="font-bold text-gray-900 text-lg group-hover:text-[#1E6A8C]">
                                    {contact.name}
                                </h3>
                                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium border ${getTypeColor(contact.type)}`}>
                                    {contact.type}
                                </span>
                            </div>
                            <Phone size={20} className="text-gray-400 group-hover:text-[#2B9EB3]" />
                        </div>

                        <p className="text-gray-600 text-sm mb-3">{contact.description}</p>

                        <a
                            href={`tel:${contact.number}`}
                            className="block w-full bg-red-500 hover:bg-red-600 text-white text-center py-3 px-4 rounded-lg font-bold text-lg transition-colors mb-3"
                        >
                            {contact.number}
                        </a>

                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                            <Clock size={14} />
                            <span>{contact.available}</span>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <MapPin size={14} />
                            <span>{contact.countries.join(', ')}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-center gap-3">
                    <Shield size={20} className="text-yellow-600 flex-shrink-0" />
                    <div>
                        <h4 className="font-semibold text-yellow-800">Safety First</h4>
                        <p className="text-yellow-700 text-sm">
                            If you're in immediate danger, call emergency services first.
                            Use a safe phone and location when making calls.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}