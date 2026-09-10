import { AIProviderImplementation } from "@/providers/ai.provider";
import { AIServiceImplementation } from "./ai.service";

const provider = new AIProviderImplementation();

export const aiService = new AIServiceImplementation(provider);
