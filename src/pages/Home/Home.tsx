import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ClipboardCheck, Shield, Heart, Users, Phone, BookOpen } from 'lucide-react';
import { RiskAssessment } from '@components/sections/risk-assessment/RiskAssessment';
import { useAuth } from '@contexts/AuthContext';

export function Home() {
  const { user } = useAuth();
  const displayName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'Friend';

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
      <section className="relative bg-gradient-to-r from-[#1E6A8C] via-[#2B9EB3] to-[#1E6A8C] text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
            Welcome, {displayName}
          </h1>
          <p className="text-xl md:text-3xl text-[#FFD700] mb-4 font-semibold">
            New Voice. New Beginning.
          </p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8 opacity-90">
            A safe, confidential space for anyone experiencing relationship concerns or abuse.
            You are not alone. Help is available across Africa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/chat"
              className="bg-[#FF6B35] hover:bg-[#e55a2b] text-white font-bold py-3 px-8 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Get Immediate Support
            </Link>
            <Link
              to="/resources"
              className="border-2 border-white text-white hover:bg-white hover:text-[#1E6A8C] font-bold py-3 px-8 rounded-full transition-all duration-200"
            >
              Emergency Resources
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Can Help
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the support that's right for you. All services are completely confidential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <Link
                  key={index}
                  to={action.to}
                  className={`${action.bgColor} rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1 border border-gray-100`}
                >
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${action.color} mb-4`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{action.title}</h3>
                  <p className="text-gray-600">{action.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Risk Assessment Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <RiskAssessment />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Sauti Mpya
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide immediate, confidential support tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart size={32} className="text-[#2B9EB3]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Compassionate Support</h3>
              <p className="text-gray-600">Our AI assistant provides empathetic, non-judgmental guidance</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield size={32} className="text-[#10B981]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Complete Privacy</h3>
              <p className="text-gray-600">Your conversations are confidential and secure</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users size={32} className="text-[#FF6B35]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Availability</h3>
              <p className="text-gray-600">Access support whenever you need it</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}