const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://api.blackroad.io';

interface ApiOptions {
  method?: string;
  body?: unknown;
  headers?: Record<string, string>;
  token?: string;
}

class ApiClient {
  private baseUrl: string;
  private token: string | null = null;

  constructor(baseUrl: string) { this.baseUrl = baseUrl; }
  setToken(token: string) { this.token = token; }
  clearToken() { this.token = null; }

  async request<T>(path: string, opts: ApiOptions = {}): Promise<T> {
    const { method = 'GET', body, headers = {}, token } = opts;
    const authToken = token || this.token;
    const res = await fetch(`${this.baseUrl}${path}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
    });
    if (!res.ok) {
      const error = await res.json().catch(() => ({ error: res.statusText }));
      throw new ApiError(res.status, error.error || res.statusText);
    }
    return res.json();
  }

  async getAgents() { return this.request<Agent[]>('/agents'); }
  async getAgent(id: string) { return this.request<Agent>(`/agents/${id}`); }
  async submitTask(agentId: string, task: TaskInput) {
    return this.request<TaskResult>(`/agents/${agentId}/tasks`, { method: 'POST', body: task });
  }
  async health() { return this.request<HealthStatus>('/health'); }
  async ready() { return this.request<ReadyStatus>('/ready'); }
  async login(credentials: { email: string; password: string }) {
    return this.request<AuthResponse>('/auth/login', { method: 'POST', body: credentials });
  }
  async chat(provider: string, messages: ChatMessage[]) {
    return this.request<ChatResponse>(`/v1/${provider}/chat`, { method: 'POST', body: { messages } });
  }
}

class ApiError extends Error {
  status: number;
  constructor(status: number, message: string) { super(message); this.status = status; }
}

interface Agent { id: string; name: string; role: string; status: 'online' | 'offline' | 'busy'; capabilities: string[]; lastSeen: string; }
interface TaskInput { type: string; payload: Record<string, unknown>; priority?: number; }
interface TaskResult { id: string; status: 'queued' | 'running' | 'completed' | 'failed'; result?: unknown; }
interface HealthStatus { status: string; version: string; uptime: number; timestamp: string; }
interface ReadyStatus { status: string; providers: Record<string, string>; }
interface AuthResponse { token: string; user: { id: string; email: string; role: string }; }
interface ChatMessage { role: 'user' | 'assistant' | 'system'; content: string; }
interface ChatResponse { message: ChatMessage; model: string; provider: string; }

export const api = new ApiClient(API_BASE);
export type { Agent, TaskInput, TaskResult, HealthStatus, AuthResponse, ChatMessage, ApiError };
