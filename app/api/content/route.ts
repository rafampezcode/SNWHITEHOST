import { NextResponse } from "next/server"
import { getContentByPath } from "@/lib/content-cms"

export async function GET(request: Request) {
  try {
    const url = new URL(request.url)
    const path = url.searchParams.get("path")

    if (!path) {
      return NextResponse.json({ error: "Missing path query parameter" }, { status: 400 })
    }

    const content = await getContentByPath(path)
    const response = NextResponse.json({ path, content })

    response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
    response.headers.set("Pragma", "no-cache")
    response.headers.set("Expires", "0")

    return response
  } catch (error) {
    console.error("Failed to read content overrides", error)
    return NextResponse.json({ path: null, content: null })
  }
}
