import type { Message, GroqChatResponse, GroqTranscriptionResponse, AssessmentAnswer, AssessmentAnalysis } from '../types/groq';

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const GROQ_API_BASE = 'https://api.groq.com/openai/v1';

// System prompt for GBV support chat
const CHAT_SYSTEM_PROMPT = `You are a compassionate, empathetic AI counselor specializing in Gender-Based Violence (GBV) support. Your role is to:

1. Listen without judgment and validate the user's feelings
2. Recognize signs of abuse (physical, emotional, sexual, financial, digital)
3. Provide supportive, non-directive guidance
4. NEVER blame the victim or minimize their experience
5. Encourage safety planning and professional help when appropriate
6. Detect high-risk situations (mentions of weapons, threats, physical violence, immediate danger)
7. Be culturally sensitive and respectful of diverse backgrounds
8. Maintain confidentiality and remind users this is a safe space

CRITICAL SAFETY RULES:
- If user mentions immediate danger, weapons, or life-threatening situations, prioritize safety and encourage calling emergency services
- Always remind users that abuse is NEVER their fault
- Suggest professional resources (helplines, shelters, counseling) when appropriate
- Be gentle but clear about the seriousness of abusive behaviors

Respond with empathy, clarity, and actionable support. Keep responses concise but meaningful.`;

// System prompt for assessment analysis
const ASSESSMENT_SYSTEM_PROMPT = `You are an expert in Gender-Based Violence risk assessment. Analyze the user's assessment responses and provide:

1. A clear, compassionate explanation of their risk level
2. Specific insights based on their answers
3. Actionable recommendations tailored to their situation
4. Encouragement and validation
5. Resources they should consider

Be direct but gentle. Focus on empowerment and safety.`;

/**
 * Validate API key is configured
 */
function validateApiKey(): void {
  if (!GROQ_API_KEY || GROQ_API_KEY === 'your_groq_api_key_here') {
    throw new Error(
      'Groq API key is not configured. Please add VITE_GROQ_API_KEY to your .env file.'
    );
  }
}

/**
 * Send chat message to Groq and get AI response
 */
export async function sendChatMessage(messages: Message[]): Promise<string> {
  validateApiKey();

  try {
    const response = await fetch(`${GROQ_API_BASE}/chat/completions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: CHAT_SYSTEM_PROMPT },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: 1024,
        top_p: 1,
        stream: false,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Failed to get response from AI');
    }

    const data: GroqChatResponse = await response.json();
    return data.choices[0]?.message?.content || 'I apologize, but I couldn\'t generate a response. Please try again.';
  } catch (error) {
    console.error('Groq chat error:', error);

    if (error instanceof Error) {
      if (error.message.includes('API key')) {
        throw error; // Re-throw API key errors
      }
      return `I'm having trouble connecting right now. Please try again in a moment. If you're in immediate danger, please call emergency services or use the helpline numbers at the bottom of this page.`;
    }

    return 'An unexpected error occurred. Please try again.';
  }
}

/**
 * Analyze assessment responses and provide AI-powered insights
 */
export async function analyzeAssessment(
  answers: AssessmentAnswer[],
  calculatedScore: number,
  riskLevel: 'low' | 'medium' | 'high'
): Promise<AssessmentAnalysis> {
  validateApiKey();

  const answeredYes = answers.filter(a => a.answer === true);
  const concerningBehaviors = answeredYes.map(a => a.questionText).join('\n- ');

  const prompt = `A user has completed a GBV safety assessment. Here are the details:

Risk Level (calculated): ${riskLevel.toUpperCase()}
Score: ${calculatedScore}/24

Questions answered "Yes":
${concerningBehaviors || 'None'}

Provide:
1. A brief, compassionate analysis of their situation (2-3 sentences)
2. Three specific, actionable recommendations based on their answers

Be empathetic but clear. Focus on safety and empowerment.`;

  try {
    const response = await fetch(`${GROQ_API_BASE}/chat/completions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: ASSESSMENT_SYSTEM_PROMPT },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7,
        max_tokens: 512,
        top_p: 1,
        stream: false,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to analyze assessment');
    }

    const data: GroqChatResponse = await response.json();
    const aiResponse = data.choices[0]?.message?.content || '';

    // Parse the response to extract insights and recommendations
    const lines = aiResponse.split('\n').filter(line => line.trim());
    const recommendations: string[] = [];
    let insights = '';

    let inRecommendations = false;
    for (const line of lines) {
      if (line.match(/^\d+\./)) {
        inRecommendations = true;
        recommendations.push(line.replace(/^\d+\.\s*/, ''));
      } else if (!inRecommendations && line.trim()) {
        insights += line + ' ';
      }
    }

    return {
      riskLevel,
      score: calculatedScore,
      insights: insights.trim() || aiResponse,
      recommendations: recommendations.length > 0 ? recommendations : [
        'Consider reaching out to a trusted friend or family member',
        'Explore the safety planning resources available',
        'Contact a local support helpline for guidance'
      ]
    };
  } catch (error) {
    console.error('Assessment analysis error:', error);

    // Return fallback analysis
    return {
      riskLevel,
      score: calculatedScore,
      insights: 'Your responses have been recorded. Please review the recommendations below and consider reaching out for support.',
      recommendations: [
        'Review the safety resources available on this platform',
        'Consider creating a safety plan',
        'Reach out to a local helpline for personalized support'
      ]
    };
  }
}

/**
 * Transcribe audio to text using Groq Whisper API
 */
export async function transcribeAudio(audioFile: File): Promise<string> {
  validateApiKey();

  try {
    const formData = new FormData();
    formData.append('file', audioFile);
    formData.append('model', 'whisper-large-v3');
    formData.append('language', 'en'); // Can be made dynamic
    formData.append('response_format', 'json');

    const response = await fetch(`${GROQ_API_BASE}/audio/transcriptions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
      },
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Failed to transcribe audio');
    }

    const data: GroqTranscriptionResponse = await response.json();
    return data.text;
  } catch (error) {
    console.error('Transcription error:', error);

    if (error instanceof Error) {
      if (error.message.includes('API key')) {
        throw error;
      }
      throw new Error('Failed to transcribe audio. Please try typing your message instead.');
    }

    throw new Error('An unexpected error occurred during transcription.');
  }
}
