Sauti Mpya (New Voice)

A confidential, mobile-first, pan-African web application offering support for relationship concerns and abuse.

Sauti Mpya delivers instant, anonymous guidance with no login, no tracking, and no stored data.

🌍 Features

6 Core Pages

Warm, welcoming African-inspired landing page

Real-time, compassionate AI chatbot

8-question safety assessment with immediate risk scoring

Interactive safety plan builder with downloadable PDF

Emergency helplines for Kenya, Nigeria, South Africa, Ghana, Uganda, and more

Privacy & trust information page

Critical Safety Features

QUICK EXIT button on every page (clears history and redirects to Google)

Persistent emergency helpline bar

Zero cookies, zero localStorage, zero tracking

Completely anonymous — no login or registration

Pan-African Design

Color palette: Trust teal (#2B9EB3), Compassion blue (#1E6A8C), Warm earth orange (#FF6B35)

Risk indicators: Green (low), Amber (medium), Red (high)

Subtle African pattern overlay

Typography: Nunito Sans (headings) + Open Sans (body)

Mobile-first and fully responsive

📁 Project Structure
Sauti-v2/
├── src/
│   ├── components/
│   │   ├── EmergencyBar.tsx      # Emergency helpline display
│   │   ├── Layout.tsx            # Main layout wrapper
│   │   ├── Navigation.tsx        # Navigation menu
│   │   └── QuickExit.tsx         # Quick exit button
│   ├── pages/
│   │   ├── Home.tsx              # Landing page
│   │   ├── Chat.tsx              # AI chatbot interface
│   │   ├── Assessment.tsx        # Safety assessment
│   │   ├── SafetyPlan.tsx        # Safety plan builder
│   │   ├── Resources.tsx         # Emergency helplines
│   │   └── About.tsx             # Privacy & trust info
│   ├── App.tsx                   # Main app component
│   ├── main.tsx                  # Entry point
│   └── index.css                 # Global styles
├── public/                       # Static assets
├── index.html                    # HTML template
├── package.json                  # Dependencies
├── tailwind.config.js            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── vite.config.ts                # Vite configuration

🛠️ Local Development
Prerequisites

Node.js 18+ and npm

Installation
git clone https://github.com/YOUR_USERNAME/Sauti-v2.git
cd Sauti-v2

# Install dependencies
npm install

# Start the development server
npm run dev


The application will run at http://localhost:5173.

Available Scripts
npm run dev        # Start dev server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run linter
npm run typecheck  # TypeScript checks

📋 Tech Stack

Frontend: React 18 + TypeScript

Routing: React Router v7

Styling: Tailwind CSS

PDF Generation: jsPDF

Icons: Lucide React

Backend (optional): Supabase

Build Tool: Vite

Hosting: Vercel (recommended)

🚀 Deployment
Deploy to Vercel (Recommended)

Manual Deployment
git init
git add .
git commit -m "Initial commit: Sauti Mpya application"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/Sauti-v2.git
git push -u origin main


Then:

Visit vercel.com

Sign in with GitHub

Create a new project

Import your repository

Deploy (Vite settings auto-detected)

Deploy to Netlify
npm install -g netlify-cli
npm run build
netlify deploy --prod

🔒 Privacy & Security

No authentication — fully anonymous

No database — nothing stored

No tracking — no cookies, no analytics, no localStorage

QUICK EXIT button for immediate safety

100% client-side — everything happens in the browser

Open-source and fully auditable

🌍 Supported Countries

Emergency helplines included for:

Kenya (1195) • Nigeria (0800 033 3333) • South Africa (0800 428 428) • Ghana (0800 800 800) • Uganda (0800 200 600) • Rwanda (3512) • Tanzania (116) • Zambia (933) • Zimbabwe (0712 763 772)

🎯 Assessment Features

The 8-question assessment checks indicators of:

Physical violence

Threats

Fear and intimidation

Controlling behavior

Verbal/emotional abuse

Financial control

Sexual coercion

Social isolation

Risk levels:

High Risk (≥10) — immediate safety concerns

Moderate Risk (5–9) — notable warning signs

Low Risk (<5) — few or no indicators

💬 AI Chatbot

The chatbot:

Detects risk signals in user messages

Responds empathetically and without judgment

Suggests relevant tools (assessment, safety plan, helplines)

Never stores or transmits conversations

📄 Safety Plan

The interactive safety plan helps users identify:

Safe people

Safe locations

Important documents

Essential items

Warning signs to leave

Emergency code words

One-click PDF export included.

🤝 Contributing

This is a life-saving project — contributions are welcome:

Additional country helplines

Translations (future)

Accessibility improvements

Security enhancements

Bug fixes & optimizations

How to Contribute

Fork the repository

Create a feature branch (git checkout -b feature/your-feature)

Commit your changes

Push your branch

Open a Pull Request

⚠️ Important Notice

Sauti Mpya is NOT an emergency service.

In immediate danger:

Call local emergency services

Use helplines listed in the Resources page

📝 License

MIT License — use freely to support safety and awareness.

👥 Authors

Created with urgency and compassion to support survivors across Africa.

"New Voice. New Beginning."
Your safety matters. Your voice matters. You are not alone.