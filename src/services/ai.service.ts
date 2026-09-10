// types
interface AIResponse {
  answer: string;
  confidence?: number;
  sources?: string[];
}

interface AIRequest {
  prompt: string;
}

export interface AIService {
  ask(request: AIRequest): Promise<AIResponse>;
}

// class

class AIServiceImplementation implements AIService {
  async ask(request: AIRequest): Promise<AIResponse> {
    return {
      answer: request.prompt,
    };
  }
}

export const aiService: AIService = new AIServiceImplementation();
