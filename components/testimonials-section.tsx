"use client"

import React, { useEffect, useState } from "react"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/components/language-provider"

// Local curated reviews (displayed on home as requested)
const testimonials = [
  {
    name: "Armando Angeles",
    role: "Cliente",
    content:
      "Excelente atención, el servicio es muy rápido, es estable y el soporte técnico es personalizado. ¡Muy satisfechos con la compra! Esperamos crecer y tener una relación de largo plazo con snwhitehosting",
    rating: 5,
    avatar: "AA",
  },
  {
    name: "José ladrón león",
    role: "Local Guide",
    content:
      "La mejor experiencia que hemos tenido con un proveedor de alojamiento. Dani ha sido un verdadero salvavidas durante todo el proceso de migración. Su profesionalismo, paciencia y dominio técnico marcaron una diferencia enorme...",
    rating: 5,
    avatar: "JL",
  },
  {
    name: "Martín Gómez",
    role: "Local Guide",
    content:
      "Me ha encantado la dedicación y empeño de Daniel en que todo vaya bien y funcione. Sin duda poca gente con tanta dedicación y devoción como él. Ha sido una muy buena decisión trabajar con él. Enhorabuena Daniel.",
    rating: 5,
    avatar: "MG",
  },
]

export function TestimonialsSection() {
  const { t } = useLanguage()
  const [reviews, setReviews] = useState<any[] | null>(null)
  const [placeUrl, setPlaceUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true
    const fetchReviews = async () => {
      setLoading(true)
      try {
        const res = await fetch('/api/reviews')
        if (!res.ok) throw new Error('No se pudo obtener reseñas')
        const data = await res.json()
        if (!mounted) return
        setReviews(data.reviews ?? [])
        setPlaceUrl(data.place?.url ?? null)
      } catch (err: any) {
        setError(err?.message ?? 'Error')
      } finally {
        setLoading(false)
      }
    }

    fetchReviews()
    return () => {
      mounted = false
    }
  }, [])

  return (
    <section className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.testimonials.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.testimonials.subtitle}
          </p>
            <div className="mt-6">
              <Button asChild variant="outline" size="sm">
                <a
                  href="https://www.google.com/maps/place/SN+White+Hosting+%7C+Marca+Blanca+de+Hosting/@8.723869,-88.9790519,4z/data=!4m8!3m7!1s0x6f9faf350680ad31:0x752674a0ca518630!8m2!3d8.723869!4d-88.979052!9m1!1b1!16s%2Fg%2F11xmdf_b05?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Leer reseñas en Google
                </a>
              </Button>
            </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {loading && (
            <div className="col-span-full text-center">Cargando reseñas...</div>
          )}

          {/* Silent fallback on error: show local testimonials when API fails */}

          {!loading && reviews && reviews.length > 0
            ? reviews.map((r, index) => (
                <Card
                  key={index}
                  className="relative overflow-hidden border-border/50 bg-card hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10" />

                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "h-4 w-4",
                            i < (r.rating ?? 0)
                              ? "fill-yellow-400 text-yellow-400"
                              : "fill-muted text-muted"
                          )}
                        />
                      ))}
                    </div>

                    <p className="text-muted-foreground mb-6 text-sm leading-relaxed">"{r.text}"</p>

                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm">
                        {r.author_name?.split(' ').map((n: string) => n[0]).slice(0,2).join('')}
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{r.author_name}</div>
                        <div className="text-xs text-muted-foreground">{r.relative_time_description}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            : testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="relative overflow-hidden border-border/50 bg-card hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10" />

                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "h-4 w-4",
                            i < testimonial.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "fill-muted text-muted"
                          )}
                        />
                      ))}
                    </div>

                    <p className="text-muted-foreground mb-6 text-sm leading-relaxed">"{testimonial.content}"</p>

                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{testimonial.name}</div>
                        <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
        </div>
      </div>
    </section>
  )
}
