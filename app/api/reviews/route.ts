import { NextResponse } from "next/server"

export async function GET() {
  const key = process.env.GOOGLE_PLACES_API_KEY
  if (!key) {
    return NextResponse.json({ error: "Missing GOOGLE_PLACES_API_KEY" }, { status: 500 })
  }

  try {
    const input = encodeURIComponent("SN White Hosting | Marca Blanca de Hosting")
    const findUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${input}&inputtype=textquery&fields=place_id&key=${key}`
    const findRes = await fetch(findUrl)
    const findData = await findRes.json()

    const candidate = findData?.candidates?.[0]
    if (!candidate?.place_id) {
      return NextResponse.json({ error: "Place not found" }, { status: 404 })
    }

    const placeId = candidate.place_id
    const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews,formatted_address,url&key=${key}`
    const detailsRes = await fetch(detailsUrl)
    const detailsData = await detailsRes.json()

    const reviews = detailsData?.result?.reviews ?? []
    const place = {
      name: detailsData?.result?.name,
      address: detailsData?.result?.formatted_address,
      url: detailsData?.result?.url,
    }

    return NextResponse.json({ place, reviews })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
