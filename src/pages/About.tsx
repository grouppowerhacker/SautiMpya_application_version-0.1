import { Shield, Lock, Heart, Users } from 'lucide-react';

export function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-[#1E6A8C] mb-6">About Sauti Mpya</h1>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <strong className="text-[#2B9EB3]">Sauti Mpya</strong> means "New Voice" in Swahili.
            This platform was created to provide confidential, accessible support for anyone
            experiencing relationship concerns or abuse across Africa.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-gradient-to-br from-blue-50 to-white border-l-4 border-[#2B9EB3] p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#2B9EB3] p-2 rounded-full">
                  <Heart size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1E6A8C]">Our Mission</h3>
              </div>
              <p className="text-gray-700">
                To provide immediate, compassionate support and resources to survivors of
                relationship abuse, helping them recognise danger signs and access help safely.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white border-l-4 border-[#FF6B35] p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#FF6B35] p-2 rounded-full">
                  <Users size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1E6A8C]">Who We Serve</h3>
              </div>
              <p className="text-gray-700">
                Anyone experiencing emotional, physical, financial, or sexual abuse in intimate
                relationships across Kenya, Nigeria, South Africa, Ghana, Uganda, and beyond.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-[#1E6A8C] mb-4 mt-8">Your Privacy & Safety</h2>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg mb-6">
            <div className="flex items-start gap-3">
              <Shield size={32} className="text-green-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-green-900 mb-3">What We DON'T Do</h3>
                <ul className="space-y-2 text-green-900">
                  <li>✓ <strong>No registration or login required</strong> - use completely anonymously</li>
                  <li>✓ <strong>No personal data collected</strong> - we don't ask for your name, location, or contact info</li>
                  <li>✓ <strong>No conversation storage</strong> - chat messages are not saved anywhere</li>
                  <li>✓ <strong>No cookies or tracking</strong> - we don't track your activity</li>
                  <li>✓ <strong>No connection to law enforcement</strong> - we don't report to police unless you request it</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-6">
            <div className="flex items-start gap-3">
              <Lock size={32} className="text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Safety Features</h3>
                <ul className="space-y-2 text-blue-900">
                  <li>• <strong>QUICK EXIT button:</strong> Immediately clears your browsing history and redirects to Google</li>
                  <li>• <strong>No saved data:</strong> Your safety plans and assessments exist only in your browser session</li>
                  <li>• <strong>Mobile-first design:</strong> Access safely from any phone or device</li>
                  <li>• <strong>Emergency helplines:</strong> Always visible at the bottom of every page</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-[#1E6A8C] mb-4 mt-8">Important Information</h2>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold text-amber-900 mb-3">We Are Not a Crisis Service</h3>
            <p className="text-amber-900 mb-3">
              Sauti Mpya provides information and self-help tools, but we cannot respond to emergencies.
            </p>
            <p className="text-amber-900">
              <strong>If you are in immediate danger:</strong> Call emergency services (police, ambulance)
              or contact the helplines listed on our Resources page.
            </p>
          </div>

          <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Browser History & Device Safety</h3>
            <p className="text-gray-700 mb-3">
              While we've designed this site to be as safe as possible, we cannot control what your browser
              or device saves. Here are some tips:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Use the <strong>QUICK EXIT</strong> button frequently</li>
              <li>• Browse in Private/Incognito mode</li>
              <li>• Clear your browser history after each visit</li>
              <li>• Consider using a public computer or library if your device isn't safe</li>
              <li>• Delete downloaded PDFs after saving them to a secure location</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-[#1E6A8C] mb-4 mt-8">Understanding Abuse</h2>

          <p className="text-gray-700 mb-4">
            Abuse takes many forms. It's not always physical violence. Abuse can include:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white border-2 border-[#2B9EB3] p-4 rounded-lg">
              <h4 className="font-bold text-[#1E6A8C] mb-2">Emotional/Psychological</h4>
              <p className="text-sm text-gray-600">
                Constant criticism, humiliation, gaslighting, threats, intimidation, isolation from loved ones
              </p>
            </div>
            <div className="bg-white border-2 border-[#2B9EB3] p-4 rounded-lg">
              <h4 className="font-bold text-[#1E6A8C] mb-2">Physical</h4>
              <p className="text-sm text-gray-600">
                Hitting, slapping, pushing, choking, restraining, or any form of physical harm
              </p>
            </div>
            <div className="bg-white border-2 border-[#2B9EB3] p-4 rounded-lg">
              <h4 className="font-bold text-[#1E6A8C] mb-2">Sexual</h4>
              <p className="text-sm text-gray-600">
                Forced or coerced sexual activity, refusing to use contraception, reproductive coercion
              </p>
            </div>
            <div className="bg-white border-2 border-[#2B9EB3] p-4 rounded-lg">
              <h4 className="font-bold text-[#1E6A8C] mb-2">Financial</h4>
              <p className="text-sm text-gray-600">
                Controlling all money, preventing work, stealing, running up debt in your name
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#2B9EB3] to-[#1E6A8C] rounded-lg p-8 text-white mt-8">
            <h3 className="text-2xl font-bold mb-4">You Deserve to Be Safe</h3>
            <p className="text-lg leading-relaxed mb-4">
              No matter your gender, age, background, or circumstances - you deserve to be treated with
              respect, kindness, and dignity. Abuse is never your fault.
            </p>
            <p className="text-lg leading-relaxed">
              Whether you're ready to leave, exploring your options, or just need someone to listen -
              we're here for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
