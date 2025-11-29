import React, { useState } from 'react';

const AnonymousReport: React.FC = () => {
    const [report, setReport] = useState({
        type: '',
        location: '',
        description: '',
        urgency: 'medium'
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle anonymous report submission
        console.log('Anonymous report:', report);
        alert('Thank you for your report. It has been submitted anonymously.');
        setReport({ type: '', location: '', description: '', urgency: 'medium' });
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-orange-600 mb-4">Anonymous Reporting</h2>
            <p className="text-gray-600 mb-6">
                Report incidents safely and anonymously. Your identity will be protected.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700 mb-2">Type of Incident</label>
                    <select
                        value={report.type}
                        onChange={(e) => setReport(prev => ({ ...prev, type: e.target.value }))}
                        className="w-full p-2 border rounded"
                        required
                    >
                        <option value="">Select type</option>
                        <option value="physical">Physical Violence</option>
                        <option value="emotional">Emotional Abuse</option>
                        <option value="sexual">Sexual Violence</option>
                        <option value="economic">Economic Abuse</option>
                        <option value="harassment">Harassment</option>
                    </select>
                </div>

                <div>
                    <label className="block text-gray-700 mb-2">Location (Optional)</label>
                    <input
                        type="text"
                        placeholder="District, Ward, or Street"
                        className="w-full p-2 border rounded"
                        value={report.location}
                        onChange={(e) => setReport(prev => ({ ...prev, location: e.target.value }))}
                    />
                </div>

                <div>
                    <label className="block text-gray-700 mb-2">Description</label>
                    <textarea
                        placeholder="Describe what happened..."
                        className="w-full p-2 border rounded h-32"
                        value={report.description}
                        onChange={(e) => setReport(prev => ({ ...prev, description: e.target.value }))}
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700 mb-2">Urgency Level</label>
                    <div className="flex space-x-4">
                        {['low', 'medium', 'high'].map(level => (
                            <label key={level} className="flex items-center">
                                <input
                                    type="radio"
                                    name="urgency"
                                    value={level}
                                    checked={report.urgency === level}
                                    onChange={(e) => setReport(prev => ({ ...prev, urgency: e.target.value }))}
                                    className="mr-2"
                                />
                                <span className="capitalize">{level}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600"
                >
                    Submit Anonymous Report
                </button>
            </form>

            <div className="mt-4 p-3 bg-green-50 rounded">
                <p className="text-green-800 text-sm">
                    Your report is completely anonymous. No personal information is collected.
                </p>
            </div>
        </div>
    );
};

export default AnonymousReport;