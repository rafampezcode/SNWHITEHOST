"use client"

import React from "react"
import { Briefcase, TrendingUp, Shield, ArrowRight, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"

const CLIENT_URL = "https://clients.snwhitehosting.com"

export function PortfolioValuationSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="outline" className="mb-4 text-primary border-primary">
              {t.portfolio.acquisitionsBadge}
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {t.portfolio.acquisitionsTitle}
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              {t.portfolio.acquisitionsDescription}
            </p>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{t.portfolio.recurringIncome}</h4>
                  <p className="text-sm text-muted-foreground">{t.portfolio.recurringIncomeDesc}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{t.portfolio.protectedClients}</h4>
                  <p className="text-sm text-muted-foreground">{t.portfolio.protectedClientsDesc}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{t.portfolio.valuationProf}</h4>
                  <p className="text-sm text-muted-foreground">{t.portfolio.valuationProfDesc}</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href={`${CLIENT_URL}/submitticket.php?step=2&dession=Sales`}>
                  {t.portfolio.requestValuation}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent" asChild>
                <a href="/adquisiciones">
                  {t.portfolio.moreInformation}
                </a>
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl blur-3xl" />
            <div className="relative bg-card rounded-2xl border border-border p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                  <Briefcase className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{t.portfolio.businessAcquisition}</h3>
                  <p className="text-sm text-muted-foreground">{t.portfolio.companyName}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">{t.portfolio.paymentModel}</span>
                  <span className="font-semibold text-foreground">{t.portfolio.paymentModelValue}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">{t.portfolio.valuationType}</span>
                  <span className="font-semibold text-foreground">{t.portfolio.valuationTypeValue}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">{t.portfolio.clientContinuity}</span>
                  <span className="font-semibold text-green-600">{t.portfolio.clientContinuityValue}</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-muted-foreground">{t.portfolio.finalTransfer}</span>
                  <span className="font-semibold text-foreground">{t.portfolio.finalTransferValue}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
