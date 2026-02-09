"server-only"

import { defaultGlobalSettings, type GlobalSettings } from "@/lib/global-settings-types"
import { writeFile, readFile } from "fs/promises"
import { join } from "path"

const CONFIG_FILE = join(process.cwd(), "config.json")

// File-based storage functions
async function readFromFile(): Promise<GlobalSettings> {
  try {
    const content = await readFile(CONFIG_FILE, "utf-8")
    return normalizeGlobalSettings(JSON.parse(content))
  } catch {
    return defaultGlobalSettings
  }
}

async function writeToFile(settings: GlobalSettings): Promise<void> {
  try {
    await writeFile(CONFIG_FILE, JSON.stringify(settings, null, 2), "utf-8")
  } catch (error) {
    console.error("Failed to write config file:", error)
    // Fail silently - file might be read-only in production
  }
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value)
}

function normalizeGlobalSettings(input: unknown): GlobalSettings {
  if (!isPlainObject(input)) {
    return defaultGlobalSettings
  }

  const maintenance = isPlainObject(input.maintenance) ? input.maintenance : {}
  const promoBanner = isPlainObject(input.promoBanner) ? input.promoBanner : {}
  const announcement = isPlainObject(input.announcement) ? input.announcement : {}
  const festivePopup = isPlainObject(input.festivePopup) ? input.festivePopup : {}
  const defaultTheme = isPlainObject(input.defaultTheme) ? input.defaultTheme : {}

  return {
    maintenance: {
      enabled: typeof maintenance.enabled === "boolean" ? maintenance.enabled : defaultGlobalSettings.maintenance.enabled,
      message: typeof maintenance.message === "string" ? maintenance.message : defaultGlobalSettings.maintenance.message,
      duration: typeof maintenance.duration === "string" ? maintenance.duration : defaultGlobalSettings.maintenance.duration,
    },
    promoBanner: {
      enabled: typeof promoBanner.enabled === "boolean" ? promoBanner.enabled : defaultGlobalSettings.promoBanner.enabled,
      message: typeof promoBanner.message === "string" ? promoBanner.message : defaultGlobalSettings.promoBanner.message,
      code: typeof promoBanner.code === "string" ? promoBanner.code : defaultGlobalSettings.promoBanner.code,
      endDate:
        promoBanner.endDate === null || typeof promoBanner.endDate === "string"
          ? promoBanner.endDate
          : defaultGlobalSettings.promoBanner.endDate,
      href: typeof promoBanner.href === "string" ? promoBanner.href : defaultGlobalSettings.promoBanner.href,
    },
    announcement: {
      enabled: typeof announcement.enabled === "boolean" ? announcement.enabled : defaultGlobalSettings.announcement.enabled,
      message: typeof announcement.message === "string" ? announcement.message : defaultGlobalSettings.announcement.message,
    },
    festivePopup: {
      enabled: typeof festivePopup.enabled === "boolean" ? festivePopup.enabled : defaultGlobalSettings.festivePopup.enabled,
      title: typeof festivePopup.title === "string" ? festivePopup.title : defaultGlobalSettings.festivePopup.title,
      message: typeof festivePopup.message === "string" ? festivePopup.message : defaultGlobalSettings.festivePopup.message,
      buttonText: typeof festivePopup.buttonText === "string" ? festivePopup.buttonText : defaultGlobalSettings.festivePopup.buttonText,
    },
    defaultTheme: {
      theme: (defaultTheme.theme === "light" || defaultTheme.theme === "dark") ? defaultTheme.theme : defaultGlobalSettings.defaultTheme.theme,
      colorTheme: (defaultTheme.colorTheme === "blue" || defaultTheme.colorTheme === "green" || defaultTheme.colorTheme === "orange" || defaultTheme.colorTheme === "red" || defaultTheme.colorTheme === "cyan") ? defaultTheme.colorTheme : defaultGlobalSettings.defaultTheme.colorTheme,
      festiveTheme: (defaultTheme.festiveTheme === "none" || defaultTheme.festiveTheme === "valentine" || defaultTheme.festiveTheme === "christmas" || defaultTheme.festiveTheme === "halloween" || defaultTheme.festiveTheme === "easter" || defaultTheme.festiveTheme === "blackfriday" || defaultTheme.festiveTheme === "summer" || defaultTheme.festiveTheme === "newyear" || defaultTheme.festiveTheme === "stpatricks") ? defaultTheme.festiveTheme : defaultGlobalSettings.defaultTheme.festiveTheme,
    },
  }
}

export async function readGlobalSettings(): Promise<GlobalSettings> {
  // Read from config.json file
  return readFromFile()
}

export async function writeGlobalSettings(settings: GlobalSettings) {
  const normalized = normalizeGlobalSettings(settings)
  
  // Write to config.json file
  await writeToFile(normalized)
  return normalized
}

export function mergeGlobalSettings(current: GlobalSettings, next: Partial<GlobalSettings>): GlobalSettings {
  return normalizeGlobalSettings({
    ...current,
    ...next,
    maintenance: {
      ...current.maintenance,
      ...(next.maintenance || {}),
    },
    promoBanner: {
      ...current.promoBanner,
      ...(next.promoBanner || {}),
    },
    announcement: {
      ...current.announcement,
      ...(next.announcement || {}),
    },
    festivePopup: {
      ...current.festivePopup,
      ...(next.festivePopup || {}),
    },
    defaultTheme: {
      ...current.defaultTheme,
      ...(next.defaultTheme || {}),
    },
  })
}
