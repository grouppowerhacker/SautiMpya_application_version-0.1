# Groq AI Setup Instructions

## Prerequisites

You need a Groq API key to use the AI features in this application. Follow these steps:

### 1. Get Your Groq API Key

1. Visit [https://console.groq.com](https://console.groq.com)
2. Sign up or log in to your account
3. Navigate to API Keys section
4. Create a new API key
5. Copy the API key (it starts with `gsk_`)

### 2. Configure Environment Variables

1. Copy the `.env.example` file to create a new `.env` file:
   ```bash
   cp .env.example .env
   ```

2. Open the `.env` file and replace `your_groq_api_key_here` with your actual Groq API key:
   ```
   VITE_GROQ_API_KEY=gsk_your_actual_api_key_here
   ```

3. Save the file

### 3. Security Notes

- **NEVER** commit the `.env` file to version control
- The `.env` file is already listed in `.gitignore`
- Keep your API key secret and don't share it publicly
- If you accidentally expose your API key, regenerate it immediately in the Groq console

### 4. Verify Setup

Run the development server:
```bash
npm run dev
```

If you see an error about missing API key, double-check that:
- The `.env` file exists in the root directory
- The variable is named exactly `VITE_GROQ_API_KEY`
- There are no extra spaces or quotes around the key
- You've restarted the dev server after creating the `.env` file

## Features Powered by Groq

### Chat Feature
- AI-powered empathetic responses
- Context-aware conversations
- Crisis detection and appropriate escalation
- Voice input with automatic transcription

### Assessment Feature
- AI-generated personalized insights
- Risk-level analysis
- Tailored recommendations based on responses

### Voice Input
- Browser-based audio recording
- Automatic transcription using Groq Whisper API
- Works in both Chat and future features

## Models Used

- **Chat & Assessment**: `llama-3.3-70b-versatile` (Llama 3.3 70B - Production Model)
- **Voice Transcription**: `whisper-large-v3`

## Troubleshooting

### "API key is not configured" error
- Ensure `.env` file exists and contains `VITE_GROQ_API_KEY`
- Restart the dev server after creating `.env`

### Voice recording not working
- Check browser permissions for microphone access
- Voice recording requires HTTPS in production (works on localhost)

### API rate limits
- Groq has rate limits on free tier
- If you hit limits, wait a few minutes before retrying
- Consider upgrading your Groq plan for higher limits
