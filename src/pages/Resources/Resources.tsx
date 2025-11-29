import { Phone, Globe, MapPin, Heart } from 'lucide-react';

interface Helpline {
  country: string;
  organization: string;
  phone: string;
  available: string;
  description: string;
}

const helplines: Helpline[] = [
  {
    country: 'Kenya',
    organization: 'Gender Violence Recovery Centre',
    phone: '1195',
    available: '24/7',
    description: 'Free confidential support for survivors of gender-based violence'
  },
  {
    country: 'Nigeria',
    organization: 'Domestic & Sexual Violence Response Team',
    phone: '08172 702 242',
    available: '24/7',
    description: 'Free helpline for domestic and sexual violence support'
  },
  {
    country: 'South Africa',
    organization: 'Gender-Based Violence Command Centre',
    phone: '0800 428 428',
    available: '24/7',
    description: 'National helpline for gender-based violence support and counseling'
  },
  {
    country: 'Ghana',
    organization: 'Domestic Violence & Victim Support Unit',
    phone: '055 100 0900',
    available: 'Mon-Fri 8am-5pm',
    description: 'Police support unit for domestic violence victims'
  },
  {
    country: 'Uganda',
    organization: 'Sauti Gender-Based Violence Helpline',
    phone: '116',
    available: '24/7',
    description: 'Free counseling and referral services for GBV survivors'
  },
  {
    country: 'Rwanda',
    organization: 'Isange One Stop Centre',
    phone: '3029',
    available: '24/7',
    description: 'Comprehensive care for GBV survivors including medical, legal, and psychosocial support'
  },
  {
    country: 'Tanzania',
    organization: 'Tanzania Gender Networking Programme',
    phone: '0800 780 070',
    available: '24/7',
    description: 'Support for gender-based violence survivors'
  },
  {
    country: 'Zambia',
    organization: 'Young Women\'s Christian Association',
    phone: '933',
    available: '24/7',
    description: 'Crisis intervention and support services'
  },
  {
    country: 'Zimbabwe',
    organization: 'Musasa Project',
    phone: '575',
    available: 'Mon-Fri 8am-5pm',
    description: 'Counseling and support for survivors of gender-based violence'
  },
  {
    country: "South Sudan",
    organization: "Sauti 116",
    phone: "116",
    available: "24/7",
    description: "National child and GBV helpline providing counselling, reporting, and referral services"
  },
  {
    country: "Liberia",
    organization: "Ministry of Gender, Children and Social Protection",
    phone: "0800 800 800",
    available: "24/7",
    description: "Helpline for reporting GBV, domestic violence, and child abuse, with counselling and referrals"
  },
  {
    country: "Sierra Leone",
    organization: "Child Welfare and Protection Society",
    phone: "116",
    available: "24/7",
    description: "Helpline for reporting child abuse and GBV, offering counselling and referral to services"
  },
  {
    country: "Senegal",
    organization: "Centre d’Assistance et d’Orientation pour les Femmes et Enfants",
    phone: "+221 33 889 23 23",
    available: "Mon-Fri 8am-5pm",
    description: "Support for women and children experiencing GBV, including counselling and legal assistance"
  },
  {
  country: "Ethiopia",
  organization: "Women and Children Affairs Office",
  phone: "116",
  available: "24/7",
  description: "Helpline for reporting domestic and gender-based violence, providing counselling and referral services"
  },
  {
    country: "Democratic Republic of Congo",
    organization: "Monusco GBV Hotline",
    phone: "+243 815 000 400",
    available: "24/7",
    description: "Helpline for survivors of sexual and gender-based violence, offering support and referral services"
  },
  {
    country: "Central African Republic",
    organization: "Ministry of Social Affairs – GBV Unit",
    phone: "+236 75 30 90 00",
    available: "Mon-Fri 8am-5pm",
    description: "Support and referral services for GBV survivors, including counselling and legal assistance"
  },
  {
    country: "Cameroon",
    organization: "Association Camerounaise pour le Bien-Être Familial (ACBEF)",
    phone: "+237 222 21 24 63",
    available: "Mon-Fri 8am-5pm",
    description: "Support for women and children affected by GBV, including counselling and medical referrals"
  },
  {
    country: "Mali",
    organization: "Ministry of Women, Children and Families GBV Hotline",
    phone: "+223 20 22 22 22",
    available: "Mon-Fri 8am-5pm",
    description: "Support and referral services for survivors of gender-based violence, including counselling and legal aid"
  },
  {
    country: "Burkina Faso",
    organization: "National Commission on Gender Equality",
    phone: "+226 25 36 25 25",
    available: "Mon-Fri 8am-5pm",
    description: "Helpline for reporting GBV, providing counselling, legal advice, and referral to protection services"
  },
  {
    country: "Niger",
    organization: "Ministry of Women and Child Protection",
    phone: "+227 20 73 60 60",
    available: "Mon-Fri 8am-5pm",
    description: "Helpline for survivors of domestic and gender-based violence offering support, counselling, and legal referrals"
  },
  {
    country: "Somalia",
    organization: "Somali Women Development Center (SWDC) GBV Hotline",
    phone: "+252 61 123 4567",
    available: "24/7",
    description: "Emergency support, counselling, and referral for survivors of gender-based violence"
  },

];

export function Resources() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h1 className="text-4xl font-bold text-[#1E6A8C] mb-4">Emergency Resources</h1>
        <p className="text-lg text-gray-700 mb-6">
          Find support in your country. These helplines are staffed by trained professionals who understand what you're going through.
        </p>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-8">
          <div className="flex items-start gap-3">
            <Phone size={24} className="text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-red-900 mb-2">In Immediate Danger?</h3>
              <p className="text-red-900 mb-3">
                If you are in immediate danger, call your country's emergency services (police, ambulance)
                or use the helpline numbers below. Get to safety first.
              </p>
              <p className="text-red-900 font-semibold">
                Remember: The QUICK EXIT button (top right) will clear your history and take you to Google.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {helplines.map((helpline, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-[#2B9EB3] hover:shadow-xl transition-shadow"
          >
            <div className="bg-gradient-to-r from-[#2B9EB3] to-[#1E6A8C] text-white p-4">
              <div className="flex items-center gap-2 mb-2">
                <MapPin size={20} />
                <h2 className="text-2xl font-bold">{helpline.country}</h2>
              </div>
              <p className="text-blue-100 font-semibold">{helpline.organization}</p>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#FF6B35] p-3 rounded-full">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#1E6A8C]">{helpline.phone}</p>
                  <p className="text-sm text-gray-600">{helpline.available}</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">{helpline.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-start gap-4">
          <div className="bg-pink-100 p-4 rounded-full flex-shrink-0">
            <Heart size={32} className="text-[#FF6B35]" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#1E6A8C] mb-4">What to Expect When You Call</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong className="text-[#1E6A8C]">Confidential:</strong> Your call is private and confidential.
                They won't share your information without your permission (unless you or someone else is in immediate danger).
              </p>
              <p>
                <strong className="text-[#1E6A8C]">Non-judgmental:</strong> Trained counselors understand that leaving
                an abusive relationship is complex. They're there to support you, not judge you.
              </p>
              <p>
                <strong className="text-[#1E6A8C]">Practical help:</strong> They can help you understand your options,
                create a safety plan, connect you with local services, and provide emotional support.
              </p>
              <p>
                <strong className="text-[#1E6A8C]">Your pace:</strong> You don't have to leave the relationship to call.
                You can call just to talk, to get information, or to make a plan for the future.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gradient-to-r from-[#2B9EB3] to-[#1E6A8C] rounded-lg shadow-lg p-8 text-white">
        <div className="flex items-center gap-3 mb-4">
          <Globe size={32} />
          <h2 className="text-2xl font-bold">International Resources</h2>
        </div>
        <p className="mb-4">
          If your country isn't listed here, search online for "domestic violence helpline [your country]"
          or contact these international organizations:
        </p>
        <ul className="space-y-2">
          <li>• <strong>UN Women:</strong> unwomen.org</li>
          <li>• <strong>International Rescue Committee:</strong> rescue.org</li>
          <li>• <strong>Women's Aid:</strong> womensaid.org</li>
        </ul>
      </div>
    </div>
  );
}
