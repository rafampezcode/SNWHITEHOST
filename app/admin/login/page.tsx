"use client"

import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Lock, User, AlertCircle, Shield } from "lucide-react"

export default function AdminLoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [checkingSession, setCheckingSession] = useState(true)
  const router = useRouter()

  useEffect(() => {
    let mounted = true

    const checkSession = async () => {
      try {
        const response = await fetch("/api/admin/check", { cache: "no-store" })
        if (mounted && response.ok) {
          router.replace("/admin")
          return
        }
      } catch {
        // allow normal login flow
      } finally {
        if (mounted) setCheckingSession(false)
      }
    }

    checkSession()

    return () => {
      mounted = false
    }
  }, [router])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username.trim(), password: password.trim() }),
      })

      const data = await res.json().catch(() => ({}))

      if (res.ok) {
        router.replace("/admin")
        router.refresh()
      } else {
        setError(typeof data.error === "string" ? data.error : "Credenciales incorrectas")
      }
    } catch {
      setError("Error de conexión. Inténtalo de nuevo.")
    } finally {
      setLoading(false)
    }
  }

  if (checkingSession) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-zinc-700 border-t-zinc-300" />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-zinc-800 border border-zinc-700 mb-4">
            <Shield className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white">Panel de Administración</h1>
          <p className="text-zinc-500 mt-1 text-sm">SN White Hosting</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-2xl">
          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <div className="flex items-start gap-2.5 rounded-lg bg-red-950/60 border border-red-500/30 px-3 py-2.5 text-sm text-red-300">
                <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div className="space-y-1.5">
              <label htmlFor="username" className="block text-xs font-medium text-zinc-400 uppercase tracking-wider">
                Usuario
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500 pointer-events-none" />
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="ADMIN"
                  required
                  autoComplete="username"
                  className="w-full bg-zinc-800 border border-zinc-700 text-white placeholder:text-zinc-600 rounded-lg px-3 py-2.5 pl-9 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="password" className="block text-xs font-medium text-zinc-400 uppercase tracking-wider">
                Contraseña
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500 pointer-events-none" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  autoComplete="current-password"
                  className="w-full bg-zinc-800 border border-zinc-700 text-white placeholder:text-zinc-600 rounded-lg px-3 py-2.5 pl-9 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500 transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-zinc-900 font-semibold rounded-lg px-4 py-2.5 text-sm hover:bg-zinc-100 active:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors mt-2"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="animate-spin rounded-full h-4 w-4 border-2 border-zinc-400 border-t-zinc-800 inline-block" />
                  Entrando...
                </span>
              ) : (
                "Iniciar sesión"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
