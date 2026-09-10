import {
  type AIProvider,
  AIProviderImplementation,
} from "@/providers/ai.provider";
import type { AIRequest, AIResponse, AIService } from "@/types/ai-service";

class AIServiceImplementation implements AIService {
  constructor(private provider: AIProvider) {}

  async ask(request: AIRequest): Promise<AIResponse> {
    const answer = await this.provider.generate(request.prompt);
    return {
      answer,
    };
  }
}

const provider = new AIProviderImplementation();

export const aiService: AIService = new AIServiceImplementation(provider);
