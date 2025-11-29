import { Shield, Phone, Scale, Heart, AlertTriangle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export function EmergencyResources() {
  const [expandedSection, setExpandedSection] = useState<string | null>('women');

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
              <AlertTriangle size={48} className="text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Emergency Resources</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Immediate help is available. You have the right to be safe, respected, and heard.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 -mt-8">
        {/* Emergency Numbers Card */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-12 border-t-4 border-red-500">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <Phone className="text-red-500" />
            Immediate Help
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-lg border border-red-100">
              <h3 className="font-bold text-red-800 mb-2">National GBV Helpline</h3>
              <p className="text-3xl font-bold text-red-600 mb-2">1195</p>
              <p className="text-sm text-red-700">Toll-free, 24/7 Support in Kenya</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="font-bold text-blue-800 mb-2">Police Emergency</h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">999 / 112</p>
              <p className="text-sm text-blue-700">Immediate Police Assistance</p>
            </div>
          </div>
        </div>

        {/* Rights Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center gap-3">
            <Scale className="text-[#2B9EB3]" />
            Know Your Rights
          </h2>

          {/* Women's Rights */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300">
            <button
              onClick={() => toggleSection('women')}
              className="w-full flex items-center justify-between p-6 bg-gradient-to-r from-purple-600 to-purple-800 text-white"
            >
              <div className="flex items-center gap-4">
                <Heart className="text-purple-200" size={28} />
                <div className="text-left">
                  <h3 className="text-xl font-bold">Women's Rights</h3>
                  <p className="text-purple-200 text-sm">Protection Against Domestic Violence Act</p>
                </div>
              </div>
              {expandedSection === 'women' ? <ChevronUp /> : <ChevronDown />}
            </button>

            {expandedSection === 'women' && (
              <div className="p-8 bg-purple-50">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-purple-900 mb-4 text-lg">You Have The Right To:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Shield size={18} className="text-purple-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Protection Orders:</strong> You can apply for a court order to stop the abuser from coming near you or contacting you.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Shield size={18} className="text-purple-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Safe Housing:</strong> You have the right to remain in your home, or the abuser can be ordered to leave.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Shield size={18} className="text-purple-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Emergency Assistance:</strong> Police must provide assistance and transport to a safe place or hospital.</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-purple-900 mb-4 text-lg">Legal Protections:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Scale size={18} className="text-purple-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Economic Abuse:</strong> It is illegal for a partner to deny you money for household necessities or take your earnings.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Scale size={18} className="text-purple-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Emotional Abuse:</strong> Repeated insults, humiliation, and threats are recognized as violence under the law.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Men's Rights */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300">
            <button
              onClick={() => toggleSection('men')}
              className="w-full flex items-center justify-between p-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white"
            >
              <div className="flex items-center gap-4">
                <Shield className="text-blue-200" size={28} />
                <div className="text-left">
                  <h3 className="text-xl font-bold">Men's Rights</h3>
                  <p className="text-blue-200 text-sm">Equality and Protection Under the Law</p>
                </div>
              </div>
              {expandedSection === 'men' ? <ChevronUp /> : <ChevronDown />}
            </button>

            {expandedSection === 'men' && (
              <div className="p-8 bg-blue-50">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-blue-900 mb-4 text-lg">You Have The Right To:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Shield size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Report Abuse:</strong> Men can also be victims of domestic violence and have the right to report it to the police.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Shield size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Fair Hearing:</strong> You are entitled to a fair hearing in all family and custody matters.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Shield size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Protection:</strong> The law protects all persons from physical and emotional harm, regardless of gender.</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 mb-4 text-lg">Breaking the Silence:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Scale size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Stigma:</strong> Do not let shame prevent you from seeking help. Abuse against men is real and punishable by law.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Scale size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Support:</strong> You have the right to access counseling and support services without discrimination.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>This information is for educational purposes and does not constitute legal advice.</p>
          <p>If you are in immediate danger, please call emergency services immediately.</p>
        </div>
      </div>
    </div>
  );
}
