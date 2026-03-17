import { NextResponse } from "next/server"
import { getContentByPathAndLanguage } from "@/lib/content-cms"
import type { Language } from "@/lib/translations"

export async function GET(request: Request) {
  try {
    const url = new URL(request.url)
    const path = url.searchParams.get("path")
    const languageParam = url.searchParams.get("lang")
    const language: Language = ["en", "es", "de", "nl"].includes(languageParam ?? "")
      ? (languageParam as Language)
      : "en"

    if (!path) {
      return NextResponse.json({ error: "Missing path query parameter" }, { status: 400 })
    }

    const content = await getContentByPathAndLanguage(path, language)
    const response = NextResponse.json({ path, language, content })

    response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
    response.headers.set("Pragma", "no-cache")
    response.headers.set("Expires", "0")

    return response
  } catch (error) {
    console.error("Failed to read content overrides", error)
    return NextResponse.json({ path: null, content: null })
  }
}
