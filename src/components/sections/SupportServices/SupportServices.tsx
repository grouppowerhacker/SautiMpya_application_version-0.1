import React, { useState } from 'react';

const SupportServices: React.FC = () => {
    const [selectedService, setSelectedService] = useState<string>('counseling');

    const services = {
        counseling: {
            title: 'Professional Counseling',
            description: 'Confidential counseling services with trained professionals',
            providers: [
                { name: 'Tanzania Gender Networking Programme', contact: '+255-22-277-3036' },
                { name: 'WAKA Agency Counseling', contact: '+255-754-789-123' },
                { name: 'Mental Health Tanzania', contact: '0800-750-750' }
            ]
        },
        legal: {
            title: 'Legal Assistance',
            description: 'Free legal aid and representation',
            providers: [
                { name: 'Legal and Human Rights Centre', contact: '+255-22-277-3038' },
                { name: 'Tanzania Women Lawyers Association', contact: '+255-22-212-0024' }
            ]
        },
        shelter: {
            title: 'Safe Shelters',
            description: 'Temporary safe accommodation',
            providers: [
                { name: 'Mothers Union Shelter', contact: '+255-784-456-789' },
                { name: 'Child Survival & Development', contact: '+255-22-212-8790' }
            ]
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-indigo-600 mb-6">Support Services</h2>

            {/* Service Type Selector */}
            <div className="flex space-x-4 mb-6">
                {Object.keys(services).map(service => (
                    <button
                        key={service}
                        onClick={() => setSelectedService(service)}
                        className={`px-4 py-2 rounded-lg ${selectedService === service
                            ? 'bg-indigo-600 text-white'
                            : 'bg-gray-200 text-gray-700'
                            }`}
                    >
                        {services[service as keyof typeof services].title}
                    </button>
                ))}
            </div>

            {/* Service Details */}
            <div className="bg-indigo-50 rounded-lg p-6">
                <h3 className="font-bold text-indigo-800 text-xl mb-2">
                    {services[selectedService as keyof typeof services].title}
                </h3>
                <p className="text-gray-700 mb-4">
                    {services[selectedService as keyof typeof services].description}
                </p>

                <div className="space-y-3">
                    {services[selectedService as keyof typeof services].providers.map((provider, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-white rounded">
                            <span className="font-medium">{provider.name}</span>
                            <a
                                href={`tel:${provider.contact}`}
                                className="bg-indigo-500 text-white px-3 py-1 rounded hover:bg-indigo-600"
                            >
                                Call
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SupportServices;