import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
import { api } from "@/lib/api";

interface User {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "PERSONAL" | "STUDENT";
  studentId: string | null;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  updateUser: (user: User) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchMe = useCallback(async () => {
    try {
      const data = await api.get<User>("/me");
      setUser(data);
    } catch {
      localStorage.removeItem("gymflow_token");
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("gymflow_token");
    if (token) {
      fetchMe();
    } else {
      setLoading(false);
    }
  }, [fetchMe]);

  const login = async (email: string, password: string) => {
    const data = await api.post<{ token: string; user: User }>("/session", { email, password });
    localStorage.setItem("gymflow_token", data.token);
    setUser(data.user);
  };

  const logout = () => {
    localStorage.removeItem("gymflow_token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, updateUser: setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
