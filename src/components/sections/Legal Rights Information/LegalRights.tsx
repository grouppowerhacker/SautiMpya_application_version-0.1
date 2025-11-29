import React from 'react';

const LegalRights: React.FC = () => {
    const legalRights = [
        {
            title: 'Right to Protection',
            description: 'You have the right to be protected from all forms of violence.',
            law: 'Sexual Offences Special Provisions Act, 1998'
        },
        {
            title: 'Right to Privacy',
            description: 'Your personal information and case details must be kept confidential.',
            law: 'The Law of Evidence Act'
        },
        {
            title: 'Right to Legal Aid',
            description: 'You are entitled to free legal assistance if you cannot afford it.',
            law: 'Legal Aid Act, 2017'
        },
        {
            title: 'Right to Medical Care',
            description: 'You have the right to receive medical treatment and counseling.',
            law: 'Health Policy Guidelines'
        }
    ];

    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-green-600 mb-6">Your Legal Rights</h2>

            <div className="grid md:grid-cols-2 gap-6">
                {legalRights.map((right, index) => (
                    <div key={index} className="border-l-4 border-green-500 pl-4">
                        <h3 className="font-bold text-gray-800 mb-2">{right.title}</h3>
                        <p className="text-gray-600 mb-2">{right.description}</p>
                        <p className="text-sm text-green-600">{right.law}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LegalRights;