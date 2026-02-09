"use client"

import { HardDrive, ArrowRight, Check } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { useCurrency } from "@/components/currency-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingSupport } from "@/components/floating-support"
import { BackToTop } from "@/components/back-to-top"
import { Button } from "@/components/ui/button"

const CLIENT_URL = "https://clients.snwhitehosting.com"

export default function StorageBoxPage() {
  const { t } = useLanguage()
  const { currency, formatPrice } = useCurrency()

  const priceEUR = 8.00
  const priceUSD = 9.40

  const displayPrice = currency === "EUR" ? `€${priceEUR.toFixed(2)}` : `$${priceUSD.toFixed(2)}`

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section - Estilizado y minimalista */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-background py-16 lg:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(122,6,6,0.08),transparent_70%)]" />
          
          <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center p-3 mb-4 rounded-xl bg-primary/10">
              <HardDrive className="h-8 w-8 text-primary" />
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              {t.products?.storageBox?.title || t.extras?.storageBox || "Storage Box"}
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t.products?.storageBox?.description || "Expande tu infraestructura sin límites con almacenamiento seguro en la nube."}
            </p>
          </div>
        </section>

        {/* Pricing Card - Centrada y destacada */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
          <div className="mx-auto max-w-xl">
            <div className="relative rounded-2xl border-2 border-primary/20 bg-card/80 backdrop-blur-sm shadow-2xl overflow-hidden">
              {/* Badge Popular */}
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  {t.products?.storageBox?.popular || "Popular"}
                </span>
              </div>

              <div className="p-6 lg:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-2 text-center">
                  {t.products?.storageBox?.planName || "Plan 1TB"}
                </h2>
                <div className="flex items-baseline justify-center gap-2 mb-6">
                  <span className="text-4xl font-bold text-primary">{displayPrice}</span>
                  <span className="text-base text-muted-foreground">{t.services?.perMonth || "/mes"}</span>
                </div>

                {/* Características del protocolo */}
                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="text-xs font-semibold text-foreground/60 uppercase tracking-wide mb-2">
                      {t.products?.storageBox?.transfer || "Transferencia"}
                    </h3>
                    <p className="text-sm text-foreground">
                      {t.products?.storageBox?.transferProtocols || "FTP, FTPS, SFTP, SCP, HTTPS"}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xs font-semibold text-foreground/60 uppercase tracking-wide mb-2">
                      {t.products?.storageBox?.networkMount || "Montaje en Red"}
                    </h3>
                    <p className="text-sm text-foreground">
                      {t.products?.storageBox?.networkMountProtocols || "Samba/CIFS, NFS, WebDAV"}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xs font-semibold text-foreground/60 uppercase tracking-wide mb-2">
                      {t.products?.storageBox?.advancedBackups || "Backups Avanzados"}
                    </h3>
                    <p className="text-sm text-foreground">
                      {t.products?.storageBox?.advancedBackupsTools || "Rsync (SSH), BorgBackup, Restic, Rclone"}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border">
                    <div className="flex items-center justify-center gap-2 text-sm text-foreground">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="font-medium">
                        {t.products?.storageBox?.support247 || "Soporte 24/7 Incluido"}
                      </span>
                    </div>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="w-full"
                  asChild
                >
                  <a href="https://clients.snwhitehosting.com/cart.php?a=confproduct&i=1">
                    {t.common?.orderNow || "Contratar Ahora"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Info adicional - Sin recuadros */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {t.products?.storageBox?.infoTitle || "Almacenamiento en la Nube de Alto Rendimiento"}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              {t.products?.storageBox?.infoDescription || "Ideal para guardar copias de seguridad, archivos multimedia, bases de datos o cualquier tipo de datos que necesites mantener seguros y accesibles desde cualquier lugar."}
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
      <FloatingSupport />
      <BackToTop />
    </div>
  )
}
