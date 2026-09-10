### route.ts:

- HTTP request را دریافت می‌کند
- input را می‌گیرد
- service را صدا می‌زند
- HTTP response می‌دهد

### ai.service.ts:

- ارتباط با LLM
- ask()
- مدیریت خطاهای مربوط به AI
- بعداً چیزهایی مثل prompt / structured output

**business logic اینجا نیست.**

‍‍```
HTTP
↓
route.ts
↓
aiService.ask(message)
↓
LLM
