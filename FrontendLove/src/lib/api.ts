const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3333";

interface RequestOptions {
  method?: string;
  body?: unknown;
  headers?: Record<string, string>;
}

class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

async function request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
  const token = localStorage.getItem("gymflow_token");
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...options.headers,
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const res = await fetch(`${API_URL}${endpoint}`, {
    method: options.method || "GET",
    headers,
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({ message: "Erro desconhecido" }));
    throw new ApiError(data.message || `Erro ${res.status}`, res.status);
  }

  if (res.status === 204) return {} as T;
  return res.json();
}

export const api = {
  get: <T>(url: string) => request<T>(url),
  post: <T>(url: string, body?: unknown) => request<T>(url, { method: "POST", body }),
  put: <T>(url: string, body?: unknown) => request<T>(url, { method: "PUT", body }),
  patch: <T>(url: string, body?: unknown) => request<T>(url, { method: "PATCH", body }),
  delete: <T>(url: string) => request<T>(url, { method: "DELETE" }),
};

export { ApiError };
