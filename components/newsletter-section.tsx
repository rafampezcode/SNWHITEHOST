"use client"

import React, { useState } from "react"
import { Mail, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/components/language-provider"

export function NewsletterSection() {
  const { t } = useLanguage()
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Aqui iria la logica de suscripcion
      setIsSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section className="py-16 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
              <Mail className="h-6 w-6 text-primary-foreground" />
              <h3 className="text-2xl font-bold text-primary-foreground">
                {t.newsletter?.title || "Subscribe to our newsletter"}
              </h3>
            </div>
            <p className="text-primary-foreground/80 max-w-md">
              {t.newsletter?.subtitle || "Get exclusive offers, news and hosting tips directly in your email."}
            </p>
          </div>

          {isSubmitted ? (
            <div className="flex items-center gap-2 text-primary-foreground bg-primary-foreground/10 rounded-lg px-6 py-4">
              <CheckCircle className="h-5 w-5" />
              <span className="font-medium">{t.newsletter?.successMessage || "Thank you for subscribing"}</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-2">
              <Input
                type="email"
                placeholder={t.newsletter?.emailPlaceholder || "you@email.com"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                required
              />
              <Button 
                type="submit" 
                variant="secondary"
                className="shrink-0"
              >
                <Send className="h-4 w-4 mr-2" />
                {t.newsletter?.submitButton || "Subscribe"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
