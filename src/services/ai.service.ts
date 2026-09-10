import type { AIProvider } from "@/providers/ai.provider";
import type { AIRequest, AIResponse, AIService } from "@/types/ai-service";

export class AIServiceImplementation implements AIService {
  constructor(private provider: AIProvider) {}

  async ask(request: AIRequest): Promise<AIResponse> {
    // validation
    if (!request.prompt || request.prompt.trim() === "") {
      throw new Error("Prompt is required");
    }

    const answer = await this.provider.generate(request.prompt);
    return {
      answer,
    };
  }
}
