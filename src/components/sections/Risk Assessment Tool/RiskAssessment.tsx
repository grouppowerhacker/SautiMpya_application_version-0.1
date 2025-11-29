import React, { useState } from 'react';

const RiskAssessment: React.FC = () => {
    const [answers, setAnswers] = useState<{ [key: number]: string }>({});
    const [showResults, setShowResults] = useState(false);

    const questions = [
        {
            id: 1,
            question: 'Has your partner ever physically hurt you?',
            options: ['Never', 'Rarely', 'Sometimes', 'Often']
        },
        {
            id: 2,
            question: 'Do you feel afraid of your partner?',
            options: ['Never', 'Sometimes', 'Often', 'Always']
        },
        {
            id: 3,
            question: 'Has your partner threatened to harm you or your children?',
            options: ['No', 'Yes, but not seriously', 'Yes, seriously']
        },
        {
            id: 4,
            question: 'Does your partner control your daily activities?',
            options: ['No', 'Sometimes', 'Yes, frequently']
        }
    ];

    const calculateRisk = () => {
        const scores: { [key: string]: number } = {
            'Never': 0, 'No': 0,
            'Rarely': 1, 'Sometimes': 2, 'Yes, but not seriously': 2,
            'Often': 3, 'Always': 4, 'Yes, frequently': 3, 'Yes, seriously': 4
        };

        const totalScore = Object.values(answers).reduce((sum, answer) =>
            sum + (scores[answer] || 0), 0
        );

        if (totalScore >= 12) return { level: 'High Risk', color: 'red', advice: 'Please seek immediate help' };
        if (totalScore >= 6) return { level: 'Medium Risk', color: 'orange', advice: 'Consider making a safety plan' };
        return { level: 'Low Risk', color: 'green', advice: 'Stay aware and trust your instincts' };
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (Object.keys(answers).length === questions.length) {
            setShowResults(true);
        } else {
            alert('Please answer all questions');
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Safety Assessment</h2>

            {!showResults ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                    {questions.map((q) => (
                        <div key={q.id} className="border-b pb-4">
                            <h3 className="font-semibold text-gray-800 mb-3">{q.question}</h3>
                            <div className="space-y-2">
                                {q.options.map(option => (
                                    <label key={option} className="flex items-center">
                                        <input
                                            type="radio"
                                            name={`question-${q.id}`}
                                            value={option}
                                            checked={answers[q.id] === option}
                                            onChange={() => setAnswers(prev => ({ ...prev, [q.id]: option }))}
                                            className="mr-2"
                                        />
                                        {option}
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}

                    <button
                        type="submit"
                        className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600"
                    >
                        Get Assessment
                    </button>
                </form>
            ) : (
                <div className="text-center">
                    <div className={`bg-${calculateRisk().color}-100 border border-${calculateRisk().color}-400 text-${calculateRisk().color}-700 px-4 py-3 rounded mb-4`}>
                        <h3 className="font-bold text-lg">Assessment Result: {calculateRisk().level}</h3>
                        <p className="mt-2">{calculateRisk().advice}</p>
                    </div>
                    <button
                        onClick={() => setShowResults(false)}
                        className="text-red-600 hover:text-red-800"
                    >
                        Take Assessment Again
                    </button>
                </div>
            )}
        </div>
    );
};

export default RiskAssessment;