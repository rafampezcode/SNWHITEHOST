"use client"

import { useEffect } from "react"
import Link from "next/link"
import { AlertTriangle, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

type AdminErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function AdminError({ error, reset }: AdminErrorProps) {
  useEffect(() => {
    console.error("Admin route error:", error)
  }, [error])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-xl rounded-lg border border-border bg-card p-6">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-6 w-6 text-destructive mt-0.5" />
          <div className="space-y-3">
            <h1 className="text-xl font-semibold text-foreground">Error en el panel de admin</h1>
            <p className="text-sm text-muted-foreground">
              Se produjo un error de cliente al cargar esta pagina. Puedes reintentar o volver al login.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button onClick={reset}>
                <RefreshCw className="h-4 w-4 mr-2" />
                Reintentar
              </Button>
              <Button variant="outline" asChild>
                <Link href="/admin/login">Ir al login</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
