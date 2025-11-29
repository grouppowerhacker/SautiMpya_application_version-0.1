import React from 'react';

const CommunityForum: React.FC = () => {
    const forumTopics = [
        {
            title: 'Sharing Experiences',
            description: 'Safe space to share and connect with others',
            members: '234 members',
            icon: '💬'
        },
        {
            title: 'Legal Advice',
            description: 'Get information about your legal rights',
            members: '156 members',
            icon: '⚖️'
        },
        {
            title: 'Healing Journey',
            description: 'Support for recovery and healing',
            members: '189 members',
            icon: '❤️'
        },
        {
            title: 'Resource Sharing',
            description: 'Share helpful resources and information',
            members: '278 members',
            icon: '📚'
        }
    ];

    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-teal-600 mb-6">Community Support Forum</h2>
            <p className="text-gray-600 mb-6">
                Connect with others, share experiences, and find support in our safe community spaces.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
                {forumTopics.map((topic, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start space-x-3">
                            <span className="text-2xl">{topic.icon}</span>
                            <div>
                                <h3 className="font-bold text-gray-800">{topic.title}</h3>
                                <p className="text-gray-600 text-sm mb-2">{topic.description}</p>
                                <p className="text-teal-600 text-sm">{topic.members}</p>
                            </div>
                        </div>
                        <button className="mt-3 w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600">
                            Join Discussion
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommunityForum;