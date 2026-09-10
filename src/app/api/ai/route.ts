import { AIProviderImplementation } from "@/providers/ai.provider";
import { AIServiceImplementation } from "@/services/ai.service";

const provider = new AIProviderImplementation();
const aiService = new AIServiceImplementation(provider);

export async function POST(request: Request) {
  const body = await request.json();

  const result = await aiService.ask(body);

  return Response.json(result);
}
