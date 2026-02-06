"use client"

import React from "react"
import { 
  Briefcase, 
  TrendingUp, 
  Shield, 
  Building2, 
  Clock, 
  Users, 
  FileCheck, 
  Handshake,
  ArrowRight,
  CheckCircle,
  Calendar,
  DollarSign
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingSupport } from "@/components/floating-support"
import { BackToTop } from "@/components/back-to-top"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const CLIENT_URL = "https://clients.snwhitehosting.com"

const processSteps = [
  {
    icon: FileCheck,
    title: "1. Contacto inicial",
    description: "Abre un ticket de ventas con informacion basica sobre tu cartera o negocio de hosting."
  },
  {
    icon: Building2,
    title: "2. Valoracion privada",
    description: "Nuestro equipo realiza una valoracion confidencial basada en metricas clave de tu negocio."
  },
  {
    icon: Handshake,
    title: "3. Propuesta de acuerdo",
    description: "Te presentamos una oferta con pagos recurrentes plurianuales y condiciones claras."
  },
  {
    icon: Calendar,
    title: "4. Acuerdo plurianual",
    description: "Firmamos el acuerdo y comienzas a recibir ingresos pasivos de forma regular."
  },
  {
    icon: Users,
    title: "5. Transicion suave",
    description: "Migramos los clientes gradualmente sin afectar su servicio ni experiencia."
  },
  {
    icon: CheckCircle,
    title: "6. Transferencia final",
    description: "Al finalizar el acuerdo, la propiedad se transfiere completamente a SN White Hosting."
  },
]

const benefits = [
  {
    icon: DollarSign,
    title: "Ingresos pasivos garantizados",
    description: "En lugar de un pago unico, recibes pagos mensuales durante toda la duracion del acuerdo plurianual, proporcionando estabilidad financiera a largo plazo."
  },
  {
    icon: Shield,
    title: "Clientes protegidos",
    description: "Nos comprometemos a mantener la calidad del servicio y la satisfaccion de tus clientes existentes. Su experiencia no se vera afectada durante ni despues de la transicion."
  },
  {
    icon: TrendingUp,
    title: "Valoracion justa",
    description: "Utilizamos metodologias profesionales para valorar tu negocio, considerando ingresos recurrentes, base de clientes, crecimiento y potencial futuro."
  },
  {
    icon: Clock,
    title: "Proceso sin prisa",
    description: "No hay presion para cerrar rapidamente. Trabajamos a tu ritmo para asegurar que todas las partes esten satisfechas con los terminos del acuerdo."
  },
]

const faqs = [
  {
    question: "Que tipo de negocios adquieren?",
    answer: "Estamos interesados en empresas de hosting, carteras de clientes de hosting compartido, reseller, VPS, servidores de juegos, y negocios relacionados con servicios de alojamiento web."
  },
  {
    question: "Como funciona el modelo de pago plurianual?",
    answer: "En lugar de un pago unico por tu negocio, establecemos un acuerdo de varios anos donde recibes pagos mensuales recurrentes. Esto te proporciona ingresos pasivos estables durante el periodo acordado."
  },
  {
    question: "Que pasa con mis clientes durante la transicion?",
    answer: "Nos comprometemos contractualmente a mantener la calidad del servicio. Los clientes continuan recibiendo el mismo nivel de soporte y sus servicios no se ven interrumpidos en ningun momento."
  },
  {
    question: "Cuando se transfiere la propiedad completa?",
    answer: "La transferencia total de propiedad ocurre al finalizar el acuerdo plurianual, una vez que se han completado todos los pagos acordados. Hasta entonces, mantienes derechos segun lo estipulado en el contrato."
  },
  {
    question: "La valoracion es confidencial?",
    answer: "Absolutamente. Toda la informacion que compartas durante el proceso de valoracion se trata de forma estrictamente confidencial bajo acuerdo de no divulgacion (NDA)."
  },
  {
    question: "Cual es el tamano minimo de cartera que consideran?",
    answer: "Evaluamos cada caso individualmente. Contactanos para discutir tu situacion especifica y determinar si es una buena oportunidad para ambas partes."
  },
]

export default function AdquisicionesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-muted/30 py-20 lg:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(122,6,6,0.1),transparent_50%)]" />
          <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
                  Adquisicion de Negocios
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  Vendenos tu empresa de hosting
                </h1>
                <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                  Adquirimos empresas de hosting y carteras de clientes con un modelo unico: 
                  pagos recurrentes plurianuales que te garantizan ingresos pasivos durante anos, 
                  no un pago unico.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <a href={`${CLIENT_URL}/submitticket.php?step=2&dession=Sales`}>
                      Solicitar valoracion gratuita
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="bg-transparent" asChild>
                    <a href="#proceso">
                      Ver el proceso
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="relative hidden lg:flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl blur-3xl" />
                <div className="relative flex h-80 w-80 items-center justify-center rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20">
                  <Briefcase className="h-32 w-32 text-primary/40" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="py-6 bg-muted/50 border-y border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                <span>Valoracion confidencial</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span>Ingresos recurrentes</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <span>Clientes protegidos</span>
              </div>
              <div className="flex items-center gap-2">
                <Handshake className="h-4 w-4 text-primary" />
                <span>Acuerdos flexibles</span>
              </div>
            </div>
          </div>
        </section>

        {/* Why Sell Section */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 text-primary border-primary">
                NUESTRO MODELO
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Por que vender a SN White Hosting
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Ofrecemos un enfoque diferente a la adquisicion tradicional que beneficia a todas las partes
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="border-border/50 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 shrink-0">
                        <benefit.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="proceso" className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 text-primary border-primary">
                PROCESO
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Como funciona la adquisicion
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Un proceso transparente y sin presiones disenado para proteger tus intereses
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {processSteps.map((step, index) => (
                <div key={step.title} className="relative bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-shadow">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Points */}
        <section className="py-16 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary-foreground mb-2">Plurianual</div>
                <div className="text-primary-foreground/80">Acuerdos de varios anos con pagos recurrentes</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-foreground mb-2">Confidencial</div>
                <div className="text-primary-foreground/80">Valoracion privada bajo acuerdo NDA</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-foreground mb-2">Sin prisa</div>
                <div className="text-primary-foreground/80">Proceso a tu ritmo sin presiones</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 text-primary border-primary">
                FAQ
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Preguntas frecuentes
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-lg border border-border bg-card overflow-hidden"
                >
                  <summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-foreground hover:bg-muted/50 transition-colors">
                    {faq.question}
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-90" />
                  </summary>
                  <div className="px-6 pb-6 text-muted-foreground">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Listo para valorar tu negocio?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Abre un ticket de ventas y nuestro equipo se pondra en contacto contigo en 24-48 horas 
              para iniciar el proceso de valoracion de forma completamente confidencial.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <a href={`${CLIENT_URL}/submitticket.php?step=2&dession=Sales`}>
                  Abrir ticket de valoracion
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingSupport />
      <BackToTop />
    </div>
  )
}
