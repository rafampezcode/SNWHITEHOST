"use client"

import { useEffect, useState } from "react"
import type { ReactNode } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Save, Shield, RefreshCw, LogOut, AlertCircle, CheckCircle } from "lucide-react"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type Theme = "light" | "dark"
type ColorTheme = "blue" | "green" | "orange" | "red" | "cyan"

type SettingsForm = {
  maintenance_enabled: boolean
  maintenance_message: string
  maintenance_duration: string

  promo_enabled: boolean
  promo_message: string
  promo_code: string
  promo_endDate: string // datetime-local string ("YYYY-MM-DDTHH:MM") or ""
  promo_href: string

  announcement_enabled: boolean
  announcement_message: string

  popup_enabled: boolean
  popup_title: string
  popup_message: string
  popup_buttonText: string

  theme: Theme
  colorTheme: ColorTheme
  festiveTheme: string
}

// ---------------------------------------------------------------------------
// Defaults / helpers
// ---------------------------------------------------------------------------

const DEFAULTS: SettingsForm = {
  maintenance_enabled: false,
  maintenance_message: "We are performing scheduled maintenance.",
  maintenance_duration: "1-2 hours",
  promo_enabled: false,
  promo_message: "Special offer available now.",
  promo_code: "WELCOME10",
  promo_endDate: "",
  promo_href: "https://clients.snwhitehosting.com",
  announcement_enabled: false,
  announcement_message: "",
  popup_enabled: false,
  popup_title: "Happy Holidays!",
  popup_message: "Celebrate with us and enjoy special offers this season.",
  popup_buttonText: "Got it!",
  theme: "dark",
  colorTheme: "red",
  festiveTheme: "none",
}

function toDateTimeLocal(value: unknown): string {
  if (!value || typeof value !== "string") return ""
  try {
    const d = new Date(value)
    if (isNaN(d.getTime())) return ""
    return d.toISOString().slice(0, 16)
  } catch {
    return ""
  }
}

function isColorTheme(v: unknown): v is ColorTheme {
  return v === "blue" || v === "green" || v === "orange" || v === "red" || v === "cyan"
}

function fromApiToForm(settings: unknown): SettingsForm {
  if (!settings || typeof settings !== "object") return { ...DEFAULTS }
  const s = settings as Record<string, unknown>
  const m = s.maintenance && typeof s.maintenance === "object" ? (s.maintenance as Record<string, unknown>) : {}
  const p = s.promoBanner && typeof s.promoBanner === "object" ? (s.promoBanner as Record<string, unknown>) : {}
  const a = s.announcement && typeof s.announcement === "object" ? (s.announcement as Record<string, unknown>) : {}
  const fp = s.festivePopup && typeof s.festivePopup === "object" ? (s.festivePopup as Record<string, unknown>) : {}
  const dt = s.defaultTheme && typeof s.defaultTheme === "object" ? (s.defaultTheme as Record<string, unknown>) : {}

  return {
    maintenance_enabled: typeof m.enabled === "boolean" ? m.enabled : DEFAULTS.maintenance_enabled,
    maintenance_message: typeof m.message === "string" ? m.message : DEFAULTS.maintenance_message,
    maintenance_duration: typeof m.duration === "string" ? m.duration : DEFAULTS.maintenance_duration,

    promo_enabled: typeof p.enabled === "boolean" ? p.enabled : DEFAULTS.promo_enabled,
    promo_message: typeof p.message === "string" ? p.message : DEFAULTS.promo_message,
    promo_code: typeof p.code === "string" ? p.code : DEFAULTS.promo_code,
    promo_endDate: toDateTimeLocal(p.endDate),
    promo_href: typeof p.href === "string" ? p.href : DEFAULTS.promo_href,

    announcement_enabled: typeof a.enabled === "boolean" ? a.enabled : DEFAULTS.announcement_enabled,
    announcement_message: typeof a.message === "string" ? a.message : DEFAULTS.announcement_message,

    popup_enabled: typeof fp.enabled === "boolean" ? fp.enabled : DEFAULTS.popup_enabled,
    popup_title: typeof fp.title === "string" ? fp.title : DEFAULTS.popup_title,
    popup_message: typeof fp.message === "string" ? fp.message : DEFAULTS.popup_message,
    popup_buttonText: typeof fp.buttonText === "string" ? fp.buttonText : DEFAULTS.popup_buttonText,

    theme: dt.theme === "light" || dt.theme === "dark" ? dt.theme : DEFAULTS.theme,
    colorTheme: isColorTheme(dt.colorTheme) ? dt.colorTheme : DEFAULTS.colorTheme,
    festiveTheme: typeof dt.festiveTheme === "string" ? dt.festiveTheme : DEFAULTS.festiveTheme,
  }
}

function fromFormToApi(form: SettingsForm) {
  let endDate: string | null = null
  if (form.promo_endDate) {
    try {
      const d = new Date(form.promo_endDate)
      if (!isNaN(d.getTime())) endDate = d.toISOString()
    } catch {
      // keep null
    }
  }

  return {
    maintenance: {
      enabled: form.maintenance_enabled,
      message: form.maintenance_message,
      duration: form.maintenance_duration,
    },
    promoBanner: {
      enabled: form.promo_enabled,
      message: form.promo_message,
      code: form.promo_code,
      endDate,
      href: form.promo_href,
    },
    announcement: {
      enabled: form.announcement_enabled,
      message: form.announcement_message,
    },
    festivePopup: {
      enabled: form.popup_enabled,
      title: form.popup_title,
      message: form.popup_message,
      buttonText: form.popup_buttonText,
    },
    defaultTheme: {
      theme: form.theme,
      colorTheme: form.colorTheme,
      festiveTheme: form.festiveTheme,
    },
  }
}

// ---------------------------------------------------------------------------
// Tailwind class constants
// ---------------------------------------------------------------------------

const inputCls =
  "w-full bg-zinc-800 border border-zinc-700 text-white placeholder:text-zinc-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500 transition-colors"

const selectCls =
  "w-full bg-zinc-800 border border-zinc-700 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500 transition-colors"

// ---------------------------------------------------------------------------
// Main page
// ---------------------------------------------------------------------------

export default function AdminSettingsPage() {
  const router = useRouter()
  const [form, setForm] = useState<SettingsForm>({ ...DEFAULTS })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [loggingOut, setLoggingOut] = useState(false)

  useEffect(() => {
    let mounted = true

    const init = async () => {
      try {
        const authRes = await fetch("/api/admin/check", { cache: "no-store" })
        if (!mounted) return

        if (!authRes.ok) {
          router.replace("/admin/login")
          return
        }

        const settingsRes = await fetch("/api/admin/settings", { cache: "no-store" })
        if (mounted && settingsRes.ok) {
          const data = await settingsRes.json()
          setForm(fromApiToForm(data?.settings))
        }
      } catch {
        if (mounted) setError("No se pudieron cargar los ajustes.")
      } finally {
        if (mounted) setLoading(false)
      }
    }

    init()

    return () => {
      mounted = false
    }
  }, [router])

  const handleSave = async () => {
    setSaving(true)
    setError("")
    setSuccess("")

    try {
      const res = await fetch("/api/admin/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ settings: fromFormToApi(form) }),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        throw new Error(typeof data.error === "string" ? data.error : "Error al guardar")
      }

      setForm(fromApiToForm(data.settings))
      setSuccess("Ajustes guardados correctamente.")
      setTimeout(() => setSuccess(""), 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al guardar los ajustes.")
    } finally {
      setSaving(false)
    }
  }

  const handleLogout = async () => {
    setLoggingOut(true)
    try {
      await fetch("/api/admin/logout", { method: "POST" })
    } catch {
      // ignore
    }
    router.replace("/admin/login")
  }

  const set = <K extends keyof SettingsForm>(key: K, value: SettingsForm[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }))

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-zinc-700 border-t-zinc-300" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-900/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="flex h-14 items-center justify-between">
            <div className="flex items-center gap-3">
              <Link
                href="/admin"
                className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors px-2 py-1.5 rounded-lg hover:bg-zinc-800"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Panel</span>
              </Link>
              <div className="h-4 w-px bg-zinc-700" />
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-zinc-500" />
                <span className="font-semibold text-sm text-white">Configuración</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleLogout}
                disabled={loggingOut}
                className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white disabled:opacity-50 transition-colors px-3 py-1.5 rounded-lg hover:bg-zinc-800"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">{loggingOut ? "Saliendo..." : "Cerrar sesión"}</span>
              </button>
              <button
                onClick={handleSave}
                disabled={saving}
                className="flex items-center gap-1.5 text-sm bg-white text-zinc-900 font-semibold px-3 py-1.5 rounded-lg hover:bg-zinc-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {saving ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                <span className="hidden sm:inline">{saving ? "Guardando..." : "Guardar"}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 sm:px-6 py-8 space-y-5">
        {/* Notifications */}
        {error && (
          <div className="flex items-start gap-2.5 rounded-xl bg-red-950/60 border border-red-500/30 px-4 py-3 text-sm text-red-300">
            <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
            <span>{error}</span>
          </div>
        )}
        {success && (
          <div className="flex items-start gap-2.5 rounded-xl bg-green-950/60 border border-green-500/30 px-4 py-3 text-sm text-green-300">
            <CheckCircle className="h-4 w-4 mt-0.5 shrink-0" />
            <span>{success}</span>
          </div>
        )}

        {/* ── Maintenance ── */}
        <Section title="Modo mantenimiento" description="Muestra una pantalla de mantenimiento a todos los visitantes.">
          <Toggle
            label="Activar modo mantenimiento"
            checked={form.maintenance_enabled}
            onChange={(v) => set("maintenance_enabled", v)}
            warning={form.maintenance_enabled ? "⚠ El sitio no será visible para los usuarios mientras esté activo." : ""}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Mensaje">
              <textarea
                value={form.maintenance_message}
                onChange={(e) => set("maintenance_message", e.target.value)}
                rows={2}
                className={inputCls + " resize-none"}
                placeholder="We are performing scheduled maintenance."
              />
            </Field>
            <Field label="Duración estimada">
              <input
                type="text"
                value={form.maintenance_duration}
                onChange={(e) => set("maintenance_duration", e.target.value)}
                className={inputCls}
                placeholder="1-2 hours"
              />
            </Field>
          </div>
        </Section>

        {/* ── Announcement bar ── */}
        <Section title="Barra de anuncio" description="Una línea de texto fina en la parte superior del sitio.">
          <Toggle
            label="Activar barra de anuncio"
            checked={form.announcement_enabled}
            onChange={(v) => set("announcement_enabled", v)}
          />
          <Field label="Mensaje del anuncio">
            <input
              type="text"
              value={form.announcement_message}
              onChange={(e) => set("announcement_message", e.target.value)}
              className={inputCls}
              placeholder="Texto del anuncio público..."
            />
          </Field>
        </Section>

        {/* ── Promo banner ── */}
        <Section title="Banner promocional" description="Banner destacado con código de descuento y fecha de fin.">
          <Toggle
            label="Activar banner promocional"
            checked={form.promo_enabled}
            onChange={(v) => set("promo_enabled", v)}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Mensaje">
              <input
                type="text"
                value={form.promo_message}
                onChange={(e) => set("promo_message", e.target.value)}
                className={inputCls}
                placeholder="Special offer available now."
              />
            </Field>
            <Field label="Código de descuento">
              <input
                type="text"
                value={form.promo_code}
                onChange={(e) => set("promo_code", e.target.value)}
                className={inputCls}
                placeholder="WELCOME10"
              />
            </Field>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="URL del enlace">
              <input
                type="url"
                value={form.promo_href}
                onChange={(e) => set("promo_href", e.target.value)}
                className={inputCls}
                placeholder="https://clients.snwhitehosting.com"
              />
            </Field>
            <Field label="Fecha de expiración (opcional)">
              <input
                type="datetime-local"
                value={form.promo_endDate}
                onChange={(e) => set("promo_endDate", e.target.value)}
                className={inputCls}
              />
            </Field>
          </div>
        </Section>

        {/* ── Festive popup ── */}
        <Section title="Popup festivo" description="Un popup que aparece cuando los visitantes aterrizan en la web.">
          <Toggle
            label="Activar popup festivo"
            checked={form.popup_enabled}
            onChange={(v) => set("popup_enabled", v)}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Título">
              <input
                type="text"
                value={form.popup_title}
                onChange={(e) => set("popup_title", e.target.value)}
                className={inputCls}
                placeholder="Happy Holidays!"
              />
            </Field>
            <Field label="Texto del botón">
              <input
                type="text"
                value={form.popup_buttonText}
                onChange={(e) => set("popup_buttonText", e.target.value)}
                className={inputCls}
                placeholder="Got it!"
              />
            </Field>
          </div>
          <Field label="Mensaje del popup">
            <textarea
              value={form.popup_message}
              onChange={(e) => set("popup_message", e.target.value)}
              rows={2}
              className={inputCls + " resize-none"}
              placeholder="Celebrate with us this season."
            />
          </Field>
        </Section>

        {/* ── Theme ── */}
        <Section title="Tema del sitio" description="Apariencia predeterminada para todos los visitantes nuevos.">
          <div className="grid gap-4 sm:grid-cols-3">
            <Field label="Tema base">
              <select
                value={form.theme}
                onChange={(e) => set("theme", e.target.value as Theme)}
                className={selectCls}
              >
                <option value="dark">Oscuro</option>
                <option value="light">Claro</option>
              </select>
            </Field>
            <Field label="Color de acento">
              <select
                value={form.colorTheme}
                onChange={(e) => set("colorTheme", e.target.value as ColorTheme)}
                className={selectCls}
              >
                <option value="blue">Azul</option>
                <option value="green">Verde</option>
                <option value="orange">Naranja</option>
                <option value="red">Rojo</option>
                <option value="cyan">Cian</option>
              </select>
            </Field>
            <Field label="Tema festivo">
              <select
                value={form.festiveTheme}
                onChange={(e) => set("festiveTheme", e.target.value)}
                className={selectCls}
              >
                <option value="none">Ninguno</option>
                <option value="valentine">San Valentín</option>
                <option value="christmas">Navidad</option>
                <option value="halloween">Halloween</option>
                <option value="easter">Pascua</option>
                <option value="blackfriday">Black Friday</option>
                <option value="summer">Verano</option>
                <option value="newyear">Año Nuevo</option>
                <option value="stpatricks">St. Patrick&apos;s</option>
              </select>
            </Field>
          </div>
        </Section>

        {/* Bottom save */}
        <div className="flex justify-end pb-10">
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 bg-white text-zinc-900 font-semibold px-5 py-2.5 rounded-lg hover:bg-zinc-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
          >
            {saving ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
            {saving ? "Guardando..." : "Guardar ajustes"}
          </button>
        </div>
      </main>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Reusable sub-components
// ---------------------------------------------------------------------------

function Section({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: ReactNode
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 space-y-4">
      <div>
        <h2 className="font-semibold text-white">{title}</h2>
        <p className="text-sm text-zinc-500 mt-0.5">{description}</p>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  )
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-medium text-zinc-400">{label}</label>
      {children}
    </div>
  )
}

function Toggle({
  label,
  checked,
  onChange,
  warning,
}: {
  label: string
  checked: boolean
  onChange: (v: boolean) => void
  warning?: string
}) {
  return (
    <div className="space-y-2">
      <label className="flex items-center gap-3 cursor-pointer select-none">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only"
        />
        {/* Track */}
        <div
          className={`relative w-10 h-6 rounded-full transition-colors shrink-0 ${
            checked ? "bg-white" : "bg-zinc-700"
          }`}
        >
          {/* Knob */}
          <div
            className={`absolute top-1 h-4 w-4 rounded-full transition-all ${
              checked ? "left-5 bg-zinc-900" : "left-1 bg-zinc-400"
            }`}
          />
        </div>
        <span className="text-sm text-zinc-300">{label}</span>
      </label>
      {warning && (
        <div className="flex items-center gap-1.5 text-xs text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-lg px-3 py-2">
          {warning}
        </div>
      )}
    </div>
  )
}
