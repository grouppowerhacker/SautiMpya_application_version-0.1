import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ClipboardCheck, Shield, Heart, Users, Phone, BookOpen } from 'lucide-react';
<<<<<<< HEAD
import { EmergencyContacts } from '@components/sections/emergency-contacts/EmergencyContacts';
import { RiskAssessment } from '@components/sections/risk-assessment/RiskAssessment';

=======
import { EmergencyContacts } from '../../components/sections/emergency-contacts/EmergencyContacts';
import RiskAssessment from "../../components/sections/risk-assessment/RiskAssessment";
>>>>>>> 7e99453b21389384d9d02f81939a84c0a25b7160
export function Home() {
  const quickActions = [
    {
      to: '/chat',
      icon: MessageCircle,
      title: 'Chat Support',
      description: 'Talk with our compassionate AI assistant',
      color: 'from-[#2B9EB3] to-[#1E6A8C]',
      bgColor: 'bg-blue-50'
    },
    {
      to: '/assessment',
      icon: ClipboardCheck,
      title: 'Safety Check',
      description: 'Quick assessment of your situation',
      color: 'from-[#FF6B35] to-[#e55a2b]',
      bgColor: 'bg-orange-50'
    },
    {
      to: '/safety-plan',
      icon: Shield,
      title: 'Safety Plan',
      description: 'Create your personalized safety strategy',
      color: 'from-[#1E6A8C] to-[#155270]',
      bgColor: 'bg-cyan-50'
    },
    {
      to: '/resources',
      icon: BookOpen,
      title: 'Resources',
      description: 'Find help and support services',
      color: 'from-[#10B981] to-[#059669]',
      bgColor: 'bg-green-50'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1E6A8C] via-[#2B9EB3] to-[#1E6A8C] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
            Sauti Mpya
          </h1>
          <p className="text-2xl md:text-3xl text-[#FFD700] mb-4 font-semibold">
            New Voice. New Beginning.
          </p>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-8 opacity-90">
            A safe, confidential space for anyone experiencing relationship concerns or abuse.
            You are not alone. Help is available across Africa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/assessment"
              className="bg-[#FF6B35] hover:bg-[#e55a2b] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Start Safety Check
            </Link>
            <Link
              to="/resources"
              className="bg-white text-[#1E6A8C] hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Find Help Now
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E6A8C] mb-4">
              How We Can Help
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the support that's right for you. All services are completely confidential.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Link
                key={index}
                to={action.to}
                className={`${action.bgColor} rounded-xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-2 border-l-4 border-[#2B9EB3] group`}
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${action.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                  <action.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1E6A8C] mb-3 text-center">
                  {action.title}
                </h3>
                <p className="text-gray-600 text-center text-sm leading-relaxed">
                  {action.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <EmergencyContacts />
        </div>
      </section>

      {/* Quick Risk Assessment */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <RiskAssessment />
        </div>
      </section>

      {/* Safety Message */}
      <section className="py-16 bg-gradient-to-r from-[#2B9EB3] to-[#1E6A8C] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Heart size={48} className="text-[#FFD700]" />
              <Users size={48} className="text-[#FFD700]" />
              <Phone size={48} className="text-[#FFD700]" />
            </div>
            <h3 className="text-3xl font-bold mb-4">You Are Not Alone</h3>
            <p className="text-xl leading-relaxed mb-6 opacity-90">
              Whether you're experiencing emotional abuse, physical violence, controlling behavior,
              or just feeling uncertain about your relationship, this is a judgment-free space
              designed to help you.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-bold text-[#FFD700] mb-2">100% Confidential</h4>
                <p className="text-sm opacity-90">No personal information collected, no login required</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-bold text-[#FFD700] mb-2">Available 24/7</h4>
                <p className="text-sm opacity-90">Access support whenever you need it</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-bold text-[#FFD700] mb-2">Pan-African Support</h4>
                <p className="text-sm opacity-90">Resources for Kenya, Nigeria, South Africa, and more</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}