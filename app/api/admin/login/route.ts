import { cookies } from "next/headers"
import { NextResponse } from "next/server"

const ADMIN_USERNAME = "ADMIN"
const ADMIN_PASSWORD = "ADMIN"

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json()
    const normalizedUsername = typeof username === "string" ? username.trim() : ""
    const normalizedPassword = typeof password === "string" ? password.trim() : ""

    if (normalizedUsername === ADMIN_USERNAME && normalizedPassword === ADMIN_PASSWORD) {
      // Create a simple session token
      const sessionToken = Buffer.from(`${username}:${Date.now()}`).toString("base64")
      
      const cookieStore = await cookies()
      cookieStore.set("admin_session", sessionToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24, // 24 hours
        path: "/",
      })

      return NextResponse.json({ success: true })
    }

    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
