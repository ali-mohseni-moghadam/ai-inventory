export interface AIResponse {
  answer: string;
  confidence?: number;
  sources?: string[];
}

export interface AIRequest {
  prompt: string;
}

export interface AIService {
  ask(request: AIRequest): Promise<AIResponse>;
}
