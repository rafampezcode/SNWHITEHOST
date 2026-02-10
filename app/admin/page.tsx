"use client"

import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import {
  Palette,
  PartyPopper,
  LogOut,
  Moon,
  Sun,
  Heart,
  Snowflake,
  Ghost,
  Egg,
  Tag,
  Flower2,
  Sparkles,
  Clover,
  Check,
  AlertCircle,
  AlertTriangle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { useTheme, type FestiveTheme, type ColorTheme } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { defaultGlobalSettings, type GlobalSettings } from "@/lib/global-settings-types"

const colorThemes: { id: ColorTheme; name: string; color: string }[] = [
  { id: "blue", name: "Blue (Default)", color: "bg-blue-500" },
  { id: "green", name: "Green", color: "bg-green-500" },
  { id: "orange", name: "Orange", color: "bg-orange-500" },
  { id: "red", name: "Red", color: "bg-red-500" },
  { id: "cyan", name: "Cyan", color: "bg-cyan-500" },
]

const festiveThemes: { id: FestiveTheme; name: string; icon: React.ElementType; description: string }[] = [
  { id: "none", name: "None (Disabled)", icon: Palette, description: "No festive effects" },
  { id: "valentine", name: "Valentine's Day", icon: Heart, description: "Subtle hearts + pink accent" },
  { id: "christmas", name: "Christmas", icon: Snowflake, description: "Gentle snowflakes + blue winter accent" },
  { id: "halloween", name: "Halloween", icon: Ghost, description: "Pumpkins + orange accent" },
  { id: "easter", name: "Easter", icon: Egg, description: "Colorful eggs + purple accent" },
  { id: "blackfriday", name: "Black Friday", icon: Tag, description: "Gold stars + gold accent" },
  { id: "summer", name: "Summer Sale", icon: Flower2, description: "Sunny vibes + red summer accent" },
  { id: "newyear", name: "New Year", icon: Sparkles, description: "Fireworks + golden accent" },
  { id: "stpatricks", name: "St. Patrick's Day", icon: Clover, description: "Clovers + green accent" },
]

export default function AdminDashboard() {
  const router = useRouter()
  const { theme, colorTheme, festiveTheme, setTheme, setColorTheme, setFestiveTheme } = useTheme()
  const [authenticated, setAuthenticated] = useState<boolean | null>(null)
  const [settings, setSettings] = useState<GlobalSettings>(defaultGlobalSettings)
  const [settingsLoading, setSettingsLoading] = useState(true)
  const [settingsError, setSettingsError] = useState("")
  const [settingsSaved, setSettingsSaved] = useState("")

  useEffect(() => {
    // Check if user is authenticated
    fetch("/api/admin/check")
      .then((res) => {
        if (res.ok) {
          setAuthenticated(true)
        } else {
          router.push("/admin/login")
        }
      })
      .catch(() => {
        router.push("/admin/login")
      })
  }, [router])

  useEffect(() => {
    if (!authenticated) {
      return
    }

    const loadSettings = async () => {
      try {
        setSettingsLoading(true)
        setSettingsError("")
        const response = await fetch("/api/admin/settings")
        if (!response.ok) {
          throw new Error("Failed to load settings")
        }
        const data = await response.json()
        if (data?.settings) {
          // Merge with defaults to ensure all properties exist
          setSettings({
            ...defaultGlobalSettings,
            ...data.settings,
            festivePopup: {
              ...defaultGlobalSettings.festivePopup,
              ...data.settings.festivePopup,
            },
          })
        }
      } catch {
        setSettingsError("Unable to load global settings.")
      } finally {
        setSettingsLoading(false)
      }
    }

    loadSettings()
  }, [authenticated])

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" })
    router.push("/admin/login")
    router.refresh()
  }

  const handleSaveSettings = async () => {
    try {
      setSettingsError("")
      setSettingsSaved("")
      setSettingsLoading(true)
      
      // Include current theme settings as defaults for all users
      const settingsToSave = {
        ...settings,
        defaultTheme: {
          theme,
          colorTheme,
          festiveTheme,
        },
      }
      
      const response = await fetch("/api/admin/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ settings: settingsToSave }),
      })

      if (!response.ok) {
        throw new Error("Failed to save settings")
      }

      const data = await response.json()
      if (data?.settings) {
        setSettings(data.settings)
      }

      setSettingsSaved("Settings and themes updated successfully! New visitors will see these themes by default. Refresh the main site to see changes.")
      
      // Auto-clear success message after 5 seconds
      setTimeout(() => setSettingsSaved(""), 5000)
    } catch {
      setSettingsError("Unable to save global settings. Check database connection.")
    } finally {
      setSettingsLoading(false)
    }
  }

  const handlePreviewSite = () => {
    window.open("/", "_blank")
  }

  if (authenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/logo.png"
                alt="SN White Hosting"
                width={150}
                height={40}
                className="h-8 w-auto"
              />
              <Badge variant="secondary">Admin Panel</Badge>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Theme Management</h1>
          <p className="text-muted-foreground mt-2">
            Manage your website's appearance and enable festive themes for special occasions.
          </p>
          <div className="mt-4 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>🎨 Global Theme Settings:</strong> The themes you select here will become the default for all new visitors. 
              Existing users who have customized their themes will keep their preferences. Click "Save Settings" to apply changes globally.
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Appearance Mode Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Moon className="h-5 w-5 text-primary" />
                Appearance Mode
              </CardTitle>
              <CardDescription>
                Choose the default light or dark mode for new visitors
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setTheme("dark")}
                  className={cn(
                    "flex items-center gap-3 rounded-lg border p-3 text-left transition-all festive-hover",
                    theme === "dark"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  )}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                    <Moon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-foreground">Dark</div>
                    <div className="text-sm text-muted-foreground">Default for the site</div>
                  </div>
                  {theme === "dark" && (
                    <Check className="h-5 w-5 text-primary shrink-0" />
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setTheme("light")}
                  className={cn(
                    "flex items-center gap-3 rounded-lg border p-3 text-left transition-all festive-hover",
                    theme === "light"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  )}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                    <Sun className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-foreground">Light</div>
                    <div className="text-sm text-muted-foreground">Brighter interface</div>
                  </div>
                  {theme === "light" && (
                    <Check className="h-5 w-5 text-primary shrink-0" />
                  )}
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Color Theme Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-primary" />
                Color Theme
              </CardTitle>
              <CardDescription>
                Change the primary color scheme of your website
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {colorThemes.map((ct) => (
                  <button
                    key={ct.id}
                    type="button"
                    onClick={() => setColorTheme(ct.id)}
                    className={cn(
                      "flex items-center gap-3 p-3 rounded-lg border transition-all festive-hover",
                      colorTheme === ct.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    )}
                  >
                    <div className={cn("h-8 w-8 rounded-full", ct.color)} />
                    <span className="font-medium text-foreground">{ct.name}</span>
                    {colorTheme === ct.id && (
                      <Check className="h-5 w-5 text-primary ml-auto" />
                    )}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Festive Theme Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PartyPopper className="h-5 w-5 text-primary" />
                Festive Themes
              </CardTitle>
              <CardDescription>
                Subtle effects with animated particles and light accent color changes for special occasions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 max-h-96 overflow-y-auto pr-2">
                {festiveThemes.map((ft) => (
                  <button
                    key={ft.id}
                    type="button"
                    onClick={() => setFestiveTheme(ft.id)}
                    className={cn(
                      "flex items-start gap-3 p-3 rounded-lg border transition-all text-left festive-hover",
                      festiveTheme === ft.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    )}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                      <ft.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-foreground">{ft.name}</div>
                      <div className="text-sm text-muted-foreground">{ft.description}</div>
                    </div>
                    {festiveTheme === ft.id && (
                      <Check className="h-5 w-5 text-primary shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Global Settings */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Global Website Settings</CardTitle>
            <CardDescription>
              Control maintenance mode, promo banner, and announcements across the site.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                <strong>Banner Priority:</strong> Maintenance mode overrides all other banners. 
                When disabled, announcements and promo banners can be shown together.
              </p>
            </div>

            {settingsLoading ? (
              <div className="text-sm text-muted-foreground">Loading settings...</div>
            ) : (
              <>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-foreground">Maintenance Mode</div>
                      <div className="text-sm text-muted-foreground">
                        Show a maintenance banner across the site.
                      </div>
                    </div>
                    <Switch
                      checked={settings.maintenance.enabled}
                      onCheckedChange={(checked) =>
                        setSettings((prev) => ({
                          ...prev,
                          maintenance: { ...prev.maintenance, enabled: checked },
                        }))
                      }
                    />
                  </div>
                  <Input
                    value={settings.maintenance.message}
                    onChange={(event) =>
                      setSettings((prev) => ({
                        ...prev,
                        maintenance: { ...prev.maintenance, message: event.target.value },
                      }))
                    }
                    placeholder="Maintenance message"
                  />
                  <Input
                    value={settings.maintenance.duration}
                    onChange={(event) =>
                      setSettings((prev) => ({
                        ...prev,
                        maintenance: { ...prev.maintenance, duration: event.target.value },
                      }))
                    }
                    placeholder="Expected duration (e.g., 1-2 hours, 30 minutes)"
                  />
                </div>

                <div className="border-t border-border pt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-foreground">Promo Banner</div>
                      <div className="text-sm text-muted-foreground">
                        Configure the promotional banner shown at the top of the site.
                      </div>
                    </div>
                    <Switch
                      checked={settings.promoBanner.enabled}
                      onCheckedChange={(checked) =>
                        setSettings((prev) => ({
                          ...prev,
                          promoBanner: { ...prev.promoBanner, enabled: checked },
                        }))
                      }
                    />
                  </div>
                  <Textarea
                    value={settings.promoBanner.message}
                    onChange={(event) =>
                      setSettings((prev) => ({
                        ...prev,
                        promoBanner: { ...prev.promoBanner, message: event.target.value },
                      }))
                    }
                    placeholder="Promo message"
                  />
                  <div className="grid gap-4 md:grid-cols-2">
                    <Input
                      value={settings.promoBanner.code}
                      onChange={(event) =>
                        setSettings((prev) => ({
                          ...prev,
                          promoBanner: { ...prev.promoBanner, code: event.target.value },
                        }))
                      }
                      placeholder="Promo code"
                    />
                    <Input
                      value={settings.promoBanner.href}
                      onChange={(event) =>
                        setSettings((prev) => ({
                          ...prev,
                          promoBanner: { ...prev.promoBanner, href: event.target.value },
                        }))
                      }
                      placeholder="Promo link"
                    />
                    <Input
                      type="datetime-local"
                      value={
                        settings.promoBanner.endDate
                          ? new Date(settings.promoBanner.endDate).toISOString().slice(0, 16)
                          : ""
                      }
                      onChange={(event) => {
                        const value = event.target.value
                        setSettings((prev) => ({
                          ...prev,
                          promoBanner: {
                            ...prev.promoBanner,
                            endDate: value ? new Date(value).toISOString() : null,
                          },
                        }))
                      }}
                      placeholder="Promo end date"
                    />
                  </div>
                </div>

                <div className="border-t border-border pt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-foreground">Announcement</div>
                      <div className="text-sm text-muted-foreground">
                        Show a short announcement message in the maintenance banner area.
                      </div>
                    </div>
                    <Switch
                      checked={settings.announcement.enabled}
                      onCheckedChange={(checked) =>
                        setSettings((prev) => ({
                          ...prev,
                          announcement: { ...prev.announcement, enabled: checked },
                        }))
                      }
                    />
                  </div>
                  <Textarea
                    value={settings.announcement.message}
                    onChange={(event) =>
                      setSettings((prev) => ({
                        ...prev,
                        announcement: { ...prev.announcement, message: event.target.value },
                      }))
                    }
                    placeholder="Announcement message"
                  />
                </div>

                <div className="border-t border-border pt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-foreground">Festive Popup</div>
                      <div className="text-sm text-muted-foreground">
                        Show a themed popup when a festive theme is active (only once per session).
                      </div>
                    </div>
                    <Switch
                      checked={settings.festivePopup?.enabled ?? false}
                      onCheckedChange={(checked: boolean) =>
                        setSettings((prev) => ({
                          ...prev,
                          festivePopup: { ...prev.festivePopup, enabled: checked },
                        }))
                      }
                    />
                  </div>
                  <Input
                    value={settings.festivePopup?.title ?? ""}
                    onChange={(event) =>
                      setSettings((prev) => ({
                        ...prev,
                        festivePopup: { ...prev.festivePopup, title: event.target.value },
                      }))
                    }
                    placeholder="Popup title"
                  />
                  <Textarea
                    value={settings.festivePopup?.message ?? ""}
                    onChange={(event) =>
                      setSettings((prev) => ({
                        ...prev,
                        festivePopup: { ...prev.festivePopup, message: event.target.value },
                      }))
                    }
                    placeholder="Popup message"
                  />
                  <Input
                    value={settings.festivePopup?.buttonText ?? ""}
                    onChange={(event) =>
                      setSettings((prev) => ({
                        ...prev,
                        festivePopup: { ...prev.festivePopup, buttonText: event.target.value },
                      }))
                    }
                    placeholder="Button text (e.g., Got it!)"
                  />
                </div>
              </>
            )}

            {settingsError && (
              <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                  <p className="text-sm font-medium text-red-800 dark:text-red-200">{settingsError}</p>
                </div>
              </div>
            )}
            
            {settingsSaved && (
              <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
                  <p className="text-sm font-medium text-green-800 dark:text-green-200">{settingsSaved}</p>
                </div>
              </div>
            )}

            <div className="flex justify-end gap-3 pt-4">
              <Button 
                variant="outline" 
                onClick={handlePreviewSite}
                disabled={settingsLoading}
              >
                Preview Site
              </Button>
              <Button 
                onClick={handleSaveSettings} 
                disabled={settingsLoading}
              >
                {settingsLoading ? "Saving..." : "Save Settings"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Live Preview Status */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Active Banners & Messages</CardTitle>
            <CardDescription>Live preview of what users see on the website</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {settings.maintenance.enabled && (
              <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900">
                <div className="flex items-center gap-2 text-red-800 dark:text-red-200">
                  <AlertTriangle className="h-4 w-4" />
                  <span className="text-sm font-medium">Maintenance Mode Active</span>
                </div>
                <p className="mt-2 text-sm text-red-700 dark:text-red-300">{settings.maintenance.message}</p>
                {settings.maintenance.duration && (
                  <p className="mt-1 text-xs text-red-600 dark:text-red-400">Duration: {settings.maintenance.duration}</p>
                )}
              </div>
            )}

            {!settings.maintenance.enabled && settings.announcement.enabled && settings.announcement.message && (
              <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900">
                <div className="flex items-center gap-2 text-blue-800 dark:text-blue-200">
                  <PartyPopper className="h-4 w-4" />
                  <span className="text-sm font-medium">Announcement Active</span>
                </div>
                <p className="mt-2 text-sm text-blue-700 dark:text-blue-300">{settings.announcement.message}</p>
              </div>
            )}

            {settings.promoBanner.enabled && (
              <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                <div className="flex items-center gap-2 text-foreground">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Promo Banner Active</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{settings.promoBanner.message}</p>
                {settings.promoBanner.code && (
                  <div className="mt-2 inline-flex items-center gap-2 text-sm">
                    <span className="text-muted-foreground">Code:</span>
                    <span className="rounded bg-primary/10 px-2 py-0.5 font-mono font-bold text-primary">
                      {settings.promoBanner.code}
                    </span>
                  </div>
                )}
              </div>
            )}

            {settings.festivePopup?.enabled && (
              <div className="rounded-lg border border-purple-200 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-900">
                <div className="flex items-center gap-2 text-purple-800 dark:text-purple-200">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-sm font-medium">Festive Popup Enabled</span>
                </div>
                <p className="mt-2 text-sm text-purple-700 dark:text-purple-300">
                  <strong>{settings.festivePopup?.title}</strong> - {settings.festivePopup?.message}
                </p>
                <p className="mt-1 text-xs text-purple-600 dark:text-purple-400">
                  Will show when a festive theme is active
                </p>
              </div>
            )}

            {!settings.maintenance.enabled && !settings.announcement.enabled && !settings.promoBanner.enabled && (
              <div className="text-center py-8 text-muted-foreground">
                <p className="text-sm">No active banners or messages</p>
                <p className="text-xs mt-1">Enable maintenance mode, announcements, or promo banner above</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Current Status */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Current Configuration</CardTitle>
            <CardDescription>Your website is currently using these settings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Mode:</span>
                <Badge variant="outline">{theme === "dark" ? "Dark" : "Light"}</Badge>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Color Theme:</span>
                <Badge variant="outline" className="capitalize">{colorTheme}</Badge>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Festive Theme:</span>
                <Badge variant={festiveTheme === "none" ? "outline" : "default"} className="capitalize">
                  {festiveTheme === "none" ? "Disabled" : festiveTheme}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
