export interface AIProvider {
  generate(prompt: string): Promise<string>;
}

export class AIProviderImplementation implements AIProvider {
  async generate(prompt: string): Promise<string> {
    return prompt;
  }
}
