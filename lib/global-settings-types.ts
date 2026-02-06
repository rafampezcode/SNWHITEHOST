export type Theme = "light" | "dark"
export type ColorTheme = "blue" | "green" | "orange" | "red" | "cyan"
export type FestiveTheme = "none" | "valentine" | "christmas" | "halloween" | "easter" | "blackfriday" | "summer" | "newyear" | "stpatricks"

export type GlobalSettings = {
  maintenance: {
    enabled: boolean
    message: string
    duration: string
  }
  promoBanner: {
    enabled: boolean
    message: string
    code: string
    endDate: string | null
    href: string
  }
  announcement: {
    enabled: boolean
    message: string
  }
  festivePopup: {
    enabled: boolean
    title: string
    message: string
    buttonText: string
  }
  defaultTheme: {
    theme: Theme
    colorTheme: ColorTheme
    festiveTheme: FestiveTheme
  }
}

export const defaultGlobalSettings: GlobalSettings = {
  maintenance: {
    enabled: false,
    message: "We are performing scheduled maintenance.",
    duration: "1-2 hours",
  },
  promoBanner: {
    enabled: false,
    message: "Special offer available now.",
    code: "WELCOME10",
    endDate: null,
    href: "https://clients.snwhitehosting.com",
  },
  announcement: {
    enabled: false,
    message: "",
  },
  festivePopup: {
    enabled: false,
    title: "Happy Holidays!",
    message: "Celebrate with us and enjoy special offers this season.",
    buttonText: "Got it!",
  },
  defaultTheme: {
    theme: "light",
    colorTheme: "blue",
    festiveTheme: "none",
  },
}
