export interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface GroqChatResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Array<{
    index: number;
    message: {
      role: string;
      content: string;
    };
    finish_reason: string;
  }>;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

export interface GroqTranscriptionResponse {
  text: string;
}

export interface AssessmentAnswer {
  questionId: number;
  answer: boolean;
  questionText: string;
  weight: number;
}

export interface AssessmentAnalysis {
  riskLevel: 'low' | 'medium' | 'high';
  score: number;
  insights: string;
  recommendations: string[];
}

export interface GroqError {
  error: {
    message: string;
    type: string;
    code?: string;
  };
}
