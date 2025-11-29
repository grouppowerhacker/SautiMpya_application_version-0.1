import React, { useState } from 'react';

const SafetyPlanBuilder: React.FC = () => {
    const [safetyPlan, setSafetyPlan] = useState({
        safeSpots: [''],
        emergencyContacts: [''],
        codeWord: '',
        escapeRoutes: [''],
        importantDocuments: [''],
    });

    const addSafeSpot = () => {
        setSafetyPlan(prev => ({
            ...prev,
            safeSpots: [...prev.safeSpots, '']
        }));
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-purple-600 mb-4">Safety Plan Builder</h2>

            <div className="space-y-6">
                {/* Safe Locations */}
                <div>
                    <h3 className="font-semibold mb-2">Safe Locations</h3>
                    {safetyPlan.safeSpots.map((spot, index) => (
                        <input
                            key={index}
                            type="text"
                            placeholder="Enter safe location"
                            className="w-full p-2 border rounded mb-2"
                            value={spot}
                            onChange={(e) => {
                                const newSpots = [...safetyPlan.safeSpots];
                                newSpots[index] = e.target.value;
                                setSafetyPlan(prev => ({ ...prev, safeSpots: newSpots }));
                            }}
                        />
                    ))}
                    <button onClick={addSafeSpot} className="text-purple-600">+ Add Safe Location</button>
                </div>

                {/* Emergency Code Word */}
                <div>
                    <h3 className="font-semibold mb-2">Emergency Code Word</h3>
                    <input
                        type="text"
                        placeholder="Enter a code word to use with trusted people"
                        className="w-full p-2 border rounded"
                        value={safetyPlan.codeWord}
                        onChange={(e) => setSafetyPlan(prev => ({ ...prev, codeWord: e.target.value }))}
                    />
                </div>

                <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700">
                    Save Safety Plan
                </button>
            </div>
        </div>
    );
};

export default SafetyPlanBuilder;