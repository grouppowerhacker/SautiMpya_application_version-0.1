import { Link } from 'react-router-dom';
import { MessageCircle, ClipboardCheck, Shield, Heart } from 'lucide-react';

export function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-[#1E6A8C] mb-6" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
          Sauti Mpya
        </h1>
        <p className="text-2xl text-[#FF6B35] mb-4 font-semibold">
          New Voice. New Beginning.
        </p>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          A safe, confidential space for anyone experiencing relationship concerns or abuse.
          You are not alone. Help is available across Africa.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <Link
          to="/chat"
          className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all transform hover:-translate-y-1 border-t-4 border-[#2B9EB3]"
        >
          <div className="bg-[#2B9EB3] w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
            <MessageCircle size={32} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold text-[#1E6A8C] mb-3 text-center">
            Talk to Us
          </h2>
          <p className="text-gray-600 text-center">
            Chat with a compassionate AI that understands your concerns and offers guidance
          </p>
        </Link>

        <Link
          to="/assessment"
          className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all transform hover:-translate-y-1 border-t-4 border-[#FF6B35]"
        >
          <div className="bg-[#FF6B35] w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
            <ClipboardCheck size={32} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold text-[#1E6A8C] mb-3 text-center">
            Safety Check
          </h2>
          <p className="text-gray-600 text-center">
            Take a quick 8-question assessment to understand your situation better
          </p>
        </Link>

        <Link
          to="/safety-plan"
          className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all transform hover:-translate-y-1 border-t-4 border-[#1E6A8C]"
        >
          <div className="bg-[#1E6A8C] w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
            <Shield size={32} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold text-[#1E6A8C] mb-3 text-center">
            Safety Plan
          </h2>
          <p className="text-gray-600 text-center">
            Create a personalised safety plan and download it as a PDF
          </p>
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto border-l-4 border-[#2B9EB3]">
        <div className="flex items-start gap-4">
          <div className="bg-pink-100 p-3 rounded-full flex-shrink-0">
            <Heart size={32} className="text-[#FF6B35]" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#1E6A8C] mb-3">
              You Are Not Alone
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Whether you're experiencing emotional abuse, physical violence, controlling behavior,
              or just feeling uncertain about your relationship, this is a judgment-free space
              designed to help you.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong className="text-[#1E6A8C]">100% Confidential:</strong> We don't collect any personal information,
              require login, or store your conversations. Your privacy is our priority.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-[#1E6A8C]">Available Across Africa:</strong> Resources and support
              for Kenya, Nigeria, South Africa, Ghana, Uganda, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
