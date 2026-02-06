"use client"

import React from "react"
import { Check, X } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCurrency } from "@/components/currency-provider"
import { cn } from "@/lib/utils"

interface PricingPlan {
  name: string
  description: string
  priceEUR: number
  features: (string | { text: string; included: boolean })[]
  popular?: boolean
  cta: string
  ctaLink: string
}

interface PricingCardsProps {
  plans: PricingPlan[]
}

export function PricingCards({ plans }: PricingCardsProps) {
  const { formatPrice, billingCycle } = useCurrency()

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {plans.map((plan, index) => (
        <Card
          key={index}
          className={cn(
            "relative overflow-hidden border-border/50 bg-card transition-all duration-300 flex flex-col",
            plan.popular && "border-primary shadow-lg lg:scale-105 lg:z-10"
          )}
        >
          {plan.popular && (
            <div className="absolute top-0 right-0">
              <Badge className="rounded-none rounded-bl-lg bg-primary text-primary-foreground">
                Popular
              </Badge>
            </div>
          )}
          
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-2xl text-foreground">{plan.name}</CardTitle>
            <CardDescription className="text-muted-foreground">
              {plan.description}
            </CardDescription>
            
            <div className="mt-4">
              <div className="text-4xl font-bold text-foreground">
                {formatPrice(plan.priceEUR)}
              </div>
              <div className="text-muted-foreground">
                /{billingCycle === "monthly" ? "month" : "year"}
              </div>
              {billingCycle === "annually" && (
                <div className="text-sm text-primary mt-2">
                  {(plan.priceEUR * (1 - 0.15)).toFixed(2)} €/month billed annually
                </div>
              )}
            </div>
          </CardHeader>
          
          <CardContent className="flex flex-col flex-grow">
            <ul className="space-y-3 mb-6 flex-grow">
              {plan.features.map((feature, idx) => {
                const isStringFeature = typeof feature === "string"
                const text = isStringFeature ? feature : feature.text
                const included = isStringFeature ? true : feature.included

                return (
                  <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                    {included ? (
                      <Check className="h-4 w-4 text-primary shrink-0" />
                    ) : (
                      <X className="h-4 w-4 text-muted-foreground shrink-0" />
                    )}
                    <span className={included ? "" : "text-muted-foreground line-through"}>
                      {text}
                    </span>
                  </li>
                )
              })}
            </ul>
            
            <Button
              className={cn("w-full", plan.popular ? "bg-primary" : "")}
              variant={plan.popular ? "default" : "outline"}
              asChild
            >
              <a href={plan.ctaLink} target="_blank" rel="noopener noreferrer">
                {plan.cta}
              </a>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
