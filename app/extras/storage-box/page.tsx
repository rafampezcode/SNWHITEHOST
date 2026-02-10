"use client"

import { HardDrive, ArrowRight, Check } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { useCurrency } from "@/components/currency-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingSupport } from "@/components/floating-support"
import { BackToTop } from "@/components/back-to-top"
import { Button } from "@/components/ui/button"

export default function StorageBoxPage() {
  const { t } = useLanguage()
  const { currency } = useCurrency()

  const storageBoxPlans = [
    {
      name: t.products?.storageBox?.plans?.plan1TB || "Storage Box - 1TB Plan",
      priceEUR: 8.00,
      priceUSD: 9.40,
      cartId: "18"
    },
    {
      name: t.products?.storageBox?.plans?.plan5TB || "Storage Box - 5TB Plan",
      priceEUR: 30.00,
      priceUSD: 35.75,
      cartId: "19"
    },
    {
      name: t.products?.storageBox?.plans?.plan10TB || "Storage Box - 10TB Plan",
      priceEUR: 52.00,
      priceUSD: 62.00,
      cartId: "20"
    },
    {
      name: t.products?.storageBox?.plans?.plan20TB || "Storage Box - 20TB Plan",
      priceEUR: 101.00,
      priceUSD: 120.35,
      cartId: "21"
    }
  ]

  const commonDescription = t.products?.storageBox?.fullDescription || "Expand your infrastructure without limits! Our Storage Box is the perfect solution for storing your backups off-server or having an extra hard drive in the cloud. Transfer: FTP, FTPS, SFTP, SCP, HTTPS. Network Mount: Samba/CIFS, NFS, WebDAV. Advanced Backups: Rsync (SSH), BorgBackup, Restic, Rclone. 24/7 Support Included"

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

        {/* Pricing Cards - Grid de Planes */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {storageBoxPlans.map((plan, index) => {
                const displayPrice = currency === "EUR" 
                  ? `€${plan.priceEUR.toFixed(2)}` 
                  : `$${plan.priceUSD.toFixed(2)}`

                return (
                  <div key={index} className="relative rounded-2xl border-2 border-primary/20 bg-card/80 backdrop-blur-sm shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                    {index === 0 && (
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                          {t.products?.storageBox?.popular || "Popular"}
                        </span>
                      </div>
                    )}

                    <div className="p-6">
                      <div className="text-center mb-4">
                        <div className="inline-flex items-center justify-center p-2 rounded-lg bg-primary/10 mb-3">
                          <HardDrive className="h-6 w-6 text-primary" />
                        </div>
                        <h2 className="text-lg font-bold text-foreground mb-3">
                          {plan.name}
                        </h2>
                        <div className="flex items-baseline justify-center gap-2">
                          <span className="text-3xl font-bold text-primary">{displayPrice}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{t.pricing?.monthly || "Monthly"}</span>
                      </div>

                      <div className="space-y-3 mb-6 text-xs">
                        <p className="text-foreground/80 leading-relaxed">
                          {commonDescription}
                        </p>
                      </div>

                      <Button 
                        size="sm" 
                        className="w-full"
                        asChild
                      >
                        <a href={`https://clients.snwhitehosting.com/cart.php?a=confproduct&i=${plan.cartId}`}>
                          {t.common?.orderNow || "Contratar Ahora"}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                )
              })}
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
