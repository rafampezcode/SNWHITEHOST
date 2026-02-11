"use client"

import { Share2, MapPin, Mail, Home } from "lucide-react"
import { LegalSidebar } from "@/components/legal-sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ReferralProgramAgreementPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
      <Header />
      <div className="container max-w-7xl mx-auto py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-2">
          <Link href="/">
            <Button variant="outline" size="sm" className="gap-2">
              <Home className="h-4 w-4" />
              {t.legal.backToHome}
            </Button>
          </Link>
        </div>

        <div className="mb-16 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20">
            <Share2 className="h-10 w-10 text-primary" />
          </div>
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/80">Programa de</span>
              <span className="mx-2 text-foreground">Afiliados</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Términos y condiciones del programa de afiliados
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          <LegalSidebar currentPath="/referral-program-agreement" />

          <div className="lg:col-span-1">
            <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none ">
              <style jsx global>{`
                .prose h2 {
                  font-size: 2rem;
                  font-weight: 700;
                  margin-top: 3rem;
                  margin-bottom: 1.5rem;
                  color: hsl(var(--foreground));
                  }
                .prose h3 {
                  font-size: 1.5rem;
                  font-weight: 600;
                  margin-top: 2rem;
                  margin-bottom: 1rem;
                  color: hsl(var(--primary));
                }
                .prose p {
                  margin-bottom: 1.25rem;
                  line-height: 1.8;
                  color: hsl(var(--foreground));
                }
                .prose ul {
                  margin-top: 1rem;
                  margin-bottom: 1.5rem;
                  padding-left: 1.5rem;
                }
                .prose li {
                  margin-bottom: 0.75rem;
                  color: hsl(var(--foreground));
                }
                .prose section {
                  margin-bottom: 3rem;
                }
                .prose strong {
                  color: hsl(var(--foreground));
                }
              `}</style>
              <section className="mb-8">
                <h2>1. Descripción General del Programa</h2>
                <p>
                  El Programa de Afiliados de SN WHITE HOSTING™ permite a los partners generar comisiones recurrentes mediante la referencia de nuevos clientes. Este acuerdo establece los términos y condiciones aplicables a todos los participantes del programa.
                </p>
                <p>
                  Las comisiones se calculan sobre servicios de facturación continua y recurrente, con un modelo escalonado que recompensa el crecimiento y mantenimiento de una base de clientes activos.
                </p>
              </section>

              <section className="mb-8">
                <h2>2. Comisión Base</h2>
                <p>
                  Todos los partners de SN WHITE HOSTING™ comienzan con una comisión recurrente del <strong>10%</strong> sobre el importe neto de los servicios calificados.
                </p>
                <h3>2.1. Servicios Incluidos</h3>
                <p>Las comisiones se aplican únicamente a los siguientes servicios de facturación recurrente:</p>
                <ul>
                  <li>Hosting compartido</li>
                  <li>Servidores de juegos</li>
                  <li>Planes reseller</li>
                  <li>Servicios de correo electrónico</li>
                </ul>
                <h3>2.2. Cálculo de Comisiones</h3>
                <p>
                  Las comisiones se calculan sobre el importe neto del servicio, excluyendo impuestos, tasas de registro, tarifas de instalación u otros cargos no recurrentes.
                </p>
                <h3>2.3. Mantenimiento de Comisión</h3>
                <p>
                  La comisión permanece activa únicamente mientras el cliente referido mantenga al menos un servicio activo y en estado de pago correcto. La suspensión, cancelación o impago del servicio resulta en la pérdida de la comisión correspondiente.
                </p>
              </section>

              <section className="mb-8">
                <h2>3. Escalado Automático de Comisiones</h2>
                <p>
                  El porcentaje de comisión aumenta automáticamente en función del número de clientes activos referidos, aplicándose de forma retroactiva a todos los clientes activos del partner.
                </p>
                <h3>3.1. Escala de Comisiones</h3>
                <div className="overflow-x-auto my-4">
                  <table className="min-w-full border-collapse border border-border">
                    <thead className="bg-muted">
                      <tr>
                        <th className="border border-border px-4 py-2 text-left">Clientes Activos</th>
                        <th className="border border-border px-4 py-2 text-left">Comisión Aplicable</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border px-4 py-2">1 – 30</td>
                        <td className="border border-border px-4 py-2 font-semibold">10%</td>
                      </tr>
                      <tr>
                        <td className="border border-border px-4 py-2">31 – 60</td>
                        <td className="border border-border px-4 py-2 font-semibold">15%</td>
                      </tr>
                      <tr>
                        <td className="border border-border px-4 py-2">61 – 80</td>
                        <td className="border border-border px-4 py-2 font-semibold">20%</td>
                      </tr>
                      <tr>
                        <td className="border border-border px-4 py-2">81 – 150</td>
                        <td className="border border-border px-4 py-2 font-semibold">25%</td>
                      </tr>
                      <tr className="bg-primary/5">
                        <td className="border border-border px-4 py-2">151 o más</td>
                        <td className="border border-border px-4 py-2 font-semibold">30%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3>3.2. Aplicación Retroactiva</h3>
                <p>
                  El porcentaje alcanzado se aplica a <strong>todos los clientes activos</strong> del partner, no únicamente a los clientes nuevos o adicionales.
                </p>
                <h3>3.3. Revisión Mensual</h3>
                <p>
                  La revisión del tramo de comisión se realiza mensualmente, en base al número de clientes activos durante ese periodo de facturación.
                </p>
              </section>

              <section className="mb-8">
                <h2>4. Validación de Clientes Referidos</h2>
                <p>
                  Para que un cliente sea considerado válido y genere comisión, deben cumplirse todos los siguientes requisitos:
                </p>
                <h3>4.1. Requisitos de Validación</h3>
                <ul>
                  <li>Haber contratado los servicios exclusivamente mediante el enlace oficial de referido del partner</li>
                  <li>Estar correctamente registrado por el sistema de seguimiento en el momento del alta</li>
                  <li>Mantener al menos un servicio activo durante un mínimo de 30 días</li>
                  <li>Estar al corriente de pago en el momento de la revisión mensual</li>
                </ul>
                <h3>4.2. Exclusiones de Clientes</h3>
                <p>No se contabilizarán como clientes referidos válidos:</p>
                <ul>
                  <li>Clientes registrados manualmente por el equipo interno de SN WHITE HOSTING™</li>
                  <li>Clientes con cuentas existentes previamente en la plataforma</li>
                  <li>Altas realizadas sin referencia válida del enlace de afiliado</li>
                  <li>Clientes con servicios cancelados, suspendidos o en estado de impago</li>
                </ul>
                <h3>4.3. Limitación de Responsabilidad</h3>
                <p>
                  SN WHITE HOSTING™ no se responsabiliza por referencias no registradas correctamente debido a bloqueadores de cookies, cookies deshabilitadas, extensiones de navegador u otros factores externos al control de la empresa.
                </p>
              </section>

              <section className="mb-8">
                <h2>5. Ajustes de Nivel y Mantenimiento de Tramo</h2>
                <h3>5.1. Descenso de Tramo</h3>
                <p>
                  Si un partner desciende de tramo durante <strong>dos meses consecutivos</strong>, la comisión se ajustará automáticamente al nivel correspondiente según el número de clientes activos en ese momento.
                </p>
                <h3>5.2. Recuperación de Tramo</h3>
                <p>
                  El partner podrá recuperar o mejorar su tramo de comisión en cualquier momento al alcanzar nuevamente el volumen de clientes activos requerido para el tramo superior.
                </p>
                <h3>5.3. Base de Cálculo</h3>
                <p>
                  El cálculo del tramo se basa exclusivamente en los clientes activos durante la revisión mensual, sin considerar clientes históricos inactivos o cancelados.
                </p>
              </section>

              <section className="mb-8">
                <h2>6. Exclusiones de Comisión</h2>
                <p>
                  No generarán comisión en ningún caso los siguientes conceptos:
                </p>
                <ul>
                  <li>Pagos únicos o de una sola vez</li>
                  <li>Tarifas de alta, instalación o configuración</li>
                  <li>Servicios no recurrentes o puntuales</li>
                  <li>Impuestos, tasas gubernamentales o cargos regulatorios</li>
                  <li>Servicios contratados para uso interno del propio partner</li>
                  <li>Transacciones derivadas de actividades fraudulentas, abusivas o engañosas</li>
                </ul>
                <p className="mt-4">
                  SN WHITE HOSTING™ se reserva el derecho de retener, ajustar o cancelar comisiones en caso de detectar prácticas fraudulentas, autopromoción abusiva, captación engañosa o uso indebido del programa de afiliados.
                </p>
              </section>

              <section className="mb-8">
                <h2>7. Forma y Periodicidad de Pago de Comisiones</h2>
                <h3>7.1. Métodos de Pago</h3>
                <p>Las comisiones generadas podrán abonarse mediante las siguientes modalidades:</p>
                <ul>
                  <li>
                    <strong>Saldo interno en la cuenta del partner:</strong> Sin importe mínimo requerido. Las comisiones se acreditarán automáticamente en el saldo de la cuenta del partner.
                  </li>
                  <li>
                    <strong>Transferencia bancaria directa:</strong> Sujeto a un importe mínimo acumulado de 50 € (cincuenta euros). El partner deberá proporcionar los datos bancarios válidos para recibir el pago.
                  </li>
                </ul>
                <h3>7.2. Periodicidad de Liquidación</h3>
                <p>
                  La liquidación de comisiones se realiza mensualmente, durante los primeros 10 días hábiles del mes siguiente al periodo de facturación correspondiente.
                </p>
                <h3>7.3. Verificación de Pagos</h3>
                <p>
                  Todas las comisiones están sujetas a verificación y validación de las transacciones subyacentes. SN WHITE HOSTING™ se reserva el derecho de retener el pago de comisiones hasta completar cualquier investigación sobre actividad sospechosa.
                </p>
              </section>

              <section className="mb-8">
                <h2>8. Conductas Prohibidas</h2>
                <p>Los partners no podrán realizar las siguientes actividades:</p>
                <ul>
                  <li>Publicar enlaces de afiliado en listas de correo no solicitadas o spam</li>
                  <li>Utilizar técnicas de phishing, engaño o tergiversación para obtener referencias</li>
                  <li>Crear cuentas fraudulentas o falsas para generar comisiones</li>
                  <li>Manipular el sistema de seguimiento o las cookies de referencia</li>
                  <li>Realizar autorreferencias o referencias circulares</li>
                  <li>Ofrecer incentivos que contradigan las políticas de SN WHITE HOSTING™</li>
                  <li>Utilizar el nombre o marca de SN WHITE HOSTING™ sin autorización expresa</li>
                </ul>
                <p className="mt-4">
                  El incumplimiento de estas restricciones resultará en la suspensión inmediata del programa y la pérdida de todas las comisiones pendientes.
                </p>
              </section>

              <section className="mb-8">
                <h2>9. Responsabilidades Fiscales</h2>
                <p>
                  Los partners son responsables del cumplimiento de todas las obligaciones fiscales y tributarias derivadas de las comisiones recibidas. SN WHITE HOSTING™ no es responsable de la retención, declaración o pago de impuestos en nombre del partner.
                </p>
                <p>
                  En jurisdicciones donde sea legalmente requerido, SN WHITE HOSTING™ emitirá los documentos fiscales correspondientes y podrá retener los impuestos aplicables según la legislación vigente.
                </p>
              </section>

              <section className="mb-8">
                <h2>10. Suspensión y Terminación</h2>
                <h3>10.1. Derecho de Suspensión</h3>
                <p>
                  SN WHITE HOSTING™ se reserva el derecho de suspender o terminar la participación de cualquier partner en el programa en los siguientes casos:
                </p>
                <ul>
                  <li>Violación de los términos de este acuerdo</li>
                  <li>Actividad fraudulenta o engañosa</li>
                  <li>Impago o mora en servicios contratados como cliente</li>
                  <li>Conducta que dañe la reputación de SN WHITE HOSTING™</li>
                  <li>Inactividad continuada por más de 12 meses</li>
                </ul>
                <h3>10.2. Pérdida de Comisiones</h3>
                <p>
                  En caso de suspensión o terminación, todas las comisiones pendientes de pago podrán ser retenidas de forma permanente. Las comisiones ya abonadas no serán objeto de devolución, salvo en casos de fraude comprobado.
                </p>
                <h3>10.3. Terminación Voluntaria</h3>
                <p>
                  El partner podrá terminar su participación en el programa en cualquier momento mediante notificación escrita a SN WHITE HOSTING™. Las comisiones acumuladas hasta la fecha de terminación serán abonadas según lo establecido en este acuerdo.
                </p>
              </section>

              <section className="mb-8">
                <h2>11. Modificación de Condiciones</h2>
                <p>
                  SN WHITE HOSTING™ se reserva el derecho de modificar las condiciones de este Programa de Afiliados, incluyendo pero no limitado a:
                </p>
                <ul>
                  <li>Porcentajes de comisión</li>
                  <li>Escalas de tramos</li>
                  <li>Servicios incluidos o excluidos</li>
                  <li>Métodos y periodicidad de pago</li>
                  <li>Requisitos de validación de clientes</li>
                </ul>
                <p className="mt-4">
                  Cualquier modificación será notificada a los partners con un <strong>mínimo de 30 días naturales de antelación</strong> a través del correo electrónico registrado y mediante anuncio en el área de clientes.
                </p>
                <p>
                  La continuación de la participación en el programa tras la notificación de cambios constituye la aceptación de las nuevas condiciones.
                </p>
              </section>

              <section className="mb-8">
                <h2>12. Limitación de Responsabilidad</h2>
                <p>
                  SN WHITE HOSTING™ no será responsable de:
                </p>
                <ul>
                  <li>Pérdida de comisiones por factores técnicos fuera de su control</li>
                  <li>Errores en el seguimiento de referencias causados por bloqueadores o software de terceros</li>
                  <li>Decisiones comerciales de los clientes referidos que resulten en cancelaciones de servicio</li>
                  <li>Daños indirectos, consecuentes o incidentales derivados de la participación en el programa</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2>13. Propiedad Intelectual</h2>
                <p>
                  El uso del nombre, logotipo, marca o materiales de marketing de SN WHITE HOSTING™ está sujeto a aprobación previa por escrito. Los partners recibirán acceso a materiales promocionales aprobados que podrán utilizar exclusivamente para la promoción de servicios de SN WHITE HOSTING™.
                </p>
                <p>
                  Cualquier uso no autorizado de la propiedad intelectual de SN WHITE HOSTING™ resultará en la terminación inmediata del programa.
                </p>
              </section>

              <section className="mb-8">
                <h2>14. Resolución de Disputas</h2>
                <p>
                  Cualquier disputa relacionada con este acuerdo deberá ser notificada por escrito a través del sistema de soporte de SN WHITE HOSTING™ dentro de los 30 días siguientes al evento que la origine.
                </p>
                <p>
                  SN WHITE HOSTING™ investigará la disputa y emitirá una decisión final en un plazo de 15 días hábiles. La decisión de SN WHITE HOSTING™ será definitiva y vinculante.
                </p>
              </section>

              <section className="mb-8">
                <h2>15. Aceptación y Vigencia</h2>
                <p>
                  Al participar en el Programa de Afiliados de SN WHITE HOSTING™, el partner acepta quedar vinculado por los términos de este acuerdo.
                </p>
                <p>
                  Este acuerdo entra en vigor en la fecha de registro del partner en el programa y permanece vigente hasta su terminación según lo establecido en la Sección 10.
                </p>
                <p className="text-sm text-muted-foreground mt-6 pt-6 border-t border-border">
                  <strong>Fecha de Última Actualización:</strong> 13 de enero de 2026
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Fecha de Vigencia:</strong> 13 de enero de 2026
                </p>
              </section>

              <div className="mt-12 p-6 rounded-lg border bg-card">
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">SN SOLUTIONS LLC</p>
                      <p className="text-muted-foreground">1209 Mountain Road Pl NE, Ste N</p>
                      <p className="text-muted-foreground">Albuquerque, New Mexico, 87110, USA</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:legal@snwhitehosting.com" className="text-primary hover:underline">
                      legal@snwhitehosting.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </div>
      )
      }