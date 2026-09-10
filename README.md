# AI Service Architecture

A small TypeScript project for building a clean, extensible AI service architecture.

The goal is to separate:

- API / Route responsibilities
- Business logic
- AI provider communication
- AI contracts and types

This makes the system easier to test, extend, and replace with different AI providers.

## Current Architecture

```text
Route
  │
  ▼
AIService
  │
  ▼
AIProvider
  │
  ▼
AI Model / Provider
```

### Responsibilities

#### Route

The route is responsible only for handling the request and calling the service.

It should not contain:

- Business logic
- AI provider logic
- Validation logic
- Error-handling logic related to the AI domain

Example:

```ts
aiService.ask(request);
```

---

#### AIService

`AIService` represents the application's AI business layer.

```ts
export interface AIService {
  ask(request: AIRequest): Promise<AIResponse>;
}
```

The service should be independent from the specific AI provider.

---

#### AIProvider

`AIProvider` represents the communication layer with an AI model/provider.

```ts
export interface AIProvider {
  generate(prompt: string): Promise<string>;
}
```

This abstraction allows the underlying provider to be replaced later.

For example:

```text
AIService
   │
   ├── OpenAIProvider
   │
   ├── AnthropicProvider
   │
   └── LocalAIProvider
```

The service should not need to know which provider is being used.

## Contracts

### AIRequest

```ts
interface AIRequest {
  prompt: string;
}
```

Represents the input received by the AI service.

### AIResponse

```ts
interface AIResponse {
  answer: string;
  confidence?: number;
  sources?: string[];
}
```

Represents the normalized response returned by the AI service.

## Current Implementation

The current service implementation is intentionally simple:

```ts
class AIServiceImplementation implements AIService {
  async ask(request: AIRequest): Promise<AIResponse> {
    return {
      answer: request.prompt,
    };
  }
}

export const aiService: AIService = new AIServiceImplementation();
```

This is currently a placeholder implementation.

No real AI provider has been connected yet.

## Design Goals

The project will gradually introduce:

- Dependency inversion
- Provider abstraction
- Input validation
- Error handling
- AI provider integration
- Testable business logic
- Replaceable AI providers

The important principle is:

> The business layer should depend on abstractions, not on a specific AI provider.

## Roadmap

```text
[x] Define AIRequest
[x] Define AIResponse
[x] Define AIService contract
[x] Implement AIService
[x] Define AIProvider contract

[ ] Implement AIProvider
[ ] Inject AIProvider into AIService
[ ] Add validation
[ ] Add domain-level error handling
[ ] Connect a real AI model
[ ] Add Server/API route
[ ] Add tests
[ ] Add provider replacement tests
```

## Project Structure

The target structure will look approximately like:

```text
src/
├── services/
│   └── ai.service.ts
│
├── providers/
│   └── ai.provider.ts
│
└── ...
```

The architecture will evolve as new responsibilities are introduced.
