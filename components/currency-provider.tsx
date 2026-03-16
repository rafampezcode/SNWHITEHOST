"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

export type Currency = "EUR" | "USD"
export type BillingCycle = "monthly" | "annually"

interface CurrencyContextType {
  currency: Currency
  billingCycle: BillingCycle
  setCurrency: (currency: Currency) => void
  setBillingCycle: (cycle: BillingCycle) => void
  formatPrice: (priceEUR: number, discount?: number) => string
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined)

const EUR_TO_USD = 1.08 // Exchange rate

// Get initial currency from localStorage
function getInitialCurrency(): Currency {
  if (typeof window === 'undefined') return "EUR"
  const saved = localStorage.getItem("currency") as Currency | null
  return saved === "USD" ? "USD" : "EUR"
}

// Get initial billing cycle from localStorage
function getInitialBillingCycle(): BillingCycle {
  if (typeof window === 'undefined') return "monthly"
  const saved = localStorage.getItem("billingCycle") as BillingCycle | null
  return saved === "annually" ? "annually" : "monthly"
}

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>(getInitialCurrency)
  const [billingCycle, setBillingCycleState] = useState<BillingCycle>(getInitialBillingCycle)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Save currency to localStorage when it changes
  useEffect(() => {
    if (!mounted) return
    localStorage.setItem("currency", currency)
  }, [currency, mounted])

  // Save billing cycle to localStorage when it changes
  useEffect(() => {
    if (!mounted) return
    localStorage.setItem("billingCycle", billingCycle)
  }, [billingCycle, mounted])

  const setCurrency = (cur: Currency) => {
    setCurrencyState(cur)
  }

  const setBillingCycle = (cycle: BillingCycle) => {
    setBillingCycleState(cycle)
  }

  const formatPrice = (priceEUR: number, annualDiscount = 0.15) => {
    let price = priceEUR
    
    // Apply annual discount
    if (billingCycle === "annually") {
      price = price * (1 - annualDiscount)
    }
    
    // Convert to USD if needed
    if (currency === "USD") {
      price = price * EUR_TO_USD
    }

    if (currency === "USD") {
      return `$${price.toFixed(2)}`
    }
    return `${price.toFixed(2)} €`
  }

  // Don't block rendering
  return (
    <CurrencyContext.Provider value={{ currency, billingCycle, setCurrency, setBillingCycle, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  )
}

export function useCurrency() {
  const context = useContext(CurrencyContext)
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider")
  }
  return context
}
