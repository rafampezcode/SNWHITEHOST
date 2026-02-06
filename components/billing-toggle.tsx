"use client"

import React from "react"
import { useCurrency } from "@/components/currency-provider"
import { useLanguage } from "@/components/language-provider"
import { cn } from "@/lib/utils"

export function BillingToggle() {
  const { billingCycle, setBillingCycle } = useCurrency()
  const { t } = useLanguage()

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
      {/* Billing Cycle Toggle */}
      <div className="flex items-center justify-center gap-4">
        <span className={cn("text-sm sm:text-base font-medium", billingCycle === "monthly" ? "text-foreground" : "text-muted-foreground")}>
          {t.billingToggle.monthly}
        </span>
        
        <button
          type="button"
          onClick={() => setBillingCycle(billingCycle === "monthly" ? "annually" : "monthly")}
          className={cn(
            "relative inline-flex h-10 w-20 items-center rounded-full transition-colors duration-300",
            billingCycle === "annually" ? "bg-primary" : "bg-muted"
          )}
        >
          <span
            className={cn(
              "inline-block h-8 w-8 transform rounded-full bg-white transition-transform duration-300 shadow-md",
              billingCycle === "annually" ? "translate-x-10" : "translate-x-1"
            )}
          />
        </button>

        <div className="flex items-center gap-2">
          <span className={cn("text-sm sm:text-base font-medium", billingCycle === "annually" ? "text-foreground" : "text-muted-foreground")}>
            {t.billingToggle.annually}
          </span>
          {billingCycle === "annually" && (
            <span className="inline-flex items-center rounded-full bg-primary/20 px-2 py-1 text-xs sm:text-sm font-semibold text-primary">
              {t.billingToggle.save15}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
