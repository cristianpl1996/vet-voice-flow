import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle, 
  MessageSquare, 
  Phone, 
  Users, 
  Zap, 
  Shield, 
  Building2, 
  TrendingUp, 
  Clock,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import Logo from "@/components/Logo";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#servicios" className="text-white/80 hover:text-white transition-colors">
                Servicios
              </a>
              <a href="#enfoque" className="text-white/80 hover:text-white transition-colors">
                Enfoque
              </a>
              <a href="#sectores" className="text-white/80 hover:text-white transition-colors">
                Sectores
              </a>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                Agendar →
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-white/10">
              <nav className="flex flex-col space-y-4 pt-4">
                <a href="#servicios" className="text-white/80 hover:text-white transition-colors">
                  Servicios
                </a>
                <a href="#enfoque" className="text-white/80 hover:text-white transition-colors">
                  Enfoque
                </a>
                <a href="#sectores" className="text-white/80 hover:text-white transition-colors">
                  Sectores
                </a>
                <Button className="bg-gradient-primary hover:opacity-90 transition-opacity w-full">
                  Agendar →
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section - Fondo oscuro */}
      <section className="bg-background pt-24 pb-20 px-4">
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="font-heading text-5xl md:text-6xl font-black text-white leading-tight">
              Atiende cada tutor sin perder una sola{" "}
              <span className="gradient-text">
                oportunidad
              </span>
            </h1>
            
            <p className="font-body text-xl md:text-2xl text-foreground-alt max-w-3xl mx-auto leading-relaxed">
              Automatiza llamadas y mensajes con un agente entrenado en el lenguaje real de la industria veterinaria.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button size="lg" className="px-8 py-4 text-lg bg-gradient-primary hover:opacity-90 transition-opacity">
                Activar mi agente en 24h
              </Button>
              <Button variant="secondary" size="lg" className="px-8 py-4 text-lg">
                Soy una marca, quiero patrocinar clínicas
              </Button>
            </div>
            
            <div className="flex justify-center items-center gap-8 pt-12 opacity-80">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm text-foreground-muted">Datos seguros</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <span className="text-sm text-foreground-muted">Respuesta 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm text-foreground-muted">+100 clínicas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Problema - Fondo alternativo */}
      <section className="bg-background-alt py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-heading text-4xl md:text-5xl font-black text-white">
              ¿Tu recepción está <span className="text-secondary">colapsada</span>?
            </h2>
            
            <p className="font-body text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
              Llamadas sin responder, mensajes acumulándose, tiempos de espera eternos, clientes impacientes... 
              y cuando logras atender, tienes que escalar información a médicos, farmacia, caja. El caos diario 
              que conoces muy bien.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 pt-12">
              <Card className="glass border-white/10 shadow-lg hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="text-primary mb-4 bg-gradient-to-br from-primary/10 to-secondary/10 p-3 rounded-lg shadow-inner mx-auto w-fit">
                    <Phone className="h-12 w-12 drop-shadow-md" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2">
                    Pierdes ventas por falta de respuesta oportuna
                  </h3>
                </CardContent>
              </Card>
              
              <Card className="glass border-white/10 shadow-lg hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="text-secondary mb-4 bg-gradient-to-br from-primary/10 to-secondary/10 p-3 rounded-lg shadow-inner mx-auto w-fit">
                    <Users className="h-12 w-12 drop-shadow-md" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2">
                    El tutor percibe un mal servicio
                  </h3>
                </CardContent>
              </Card>
              
              <Card className="glass border-white/10 shadow-lg hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="text-integration mb-4 bg-gradient-to-br from-primary/10 to-secondary/10 p-3 rounded-lg shadow-inner mx-auto w-fit">
                    <Zap className="h-12 w-12 drop-shadow-md" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2">
                    Tu equipo está saturado
                  </h3>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Solución - Fondo oscuro */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-8 mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-black text-white">
                Agentes inteligentes entrenados con el{" "}
                <span className="gradient-text">
                  lenguaje de la industria
                </span>
              </h2>
              
              <p className="font-body text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
                Nuestra solución gestiona automáticamente mensajes y llamadas, resuelve dudas, 
                escala internamente cuando es necesario, y responde 24/7 con el conocimiento 
                específico del sector veterinario.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="glass text-white shadow-xl hover-lift border-white/10">
                <CardContent className="p-8">
                  <div className="text-white mb-6 bg-white/10 p-4 rounded-xl shadow-inner">
                    <MessageSquare className="h-16 w-16 drop-shadow-lg text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-4">
                    Agente de WhatsApp
                  </h3>
                  <p className="text-white/90 mb-6">
                    Conversación fluida, personalizada y rápida. Resuelve consultas sobre servicios, 
                    precios, disponibilidad y agenda citas de forma natural.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-white/80" />
                      <span className="text-sm text-white/80">Respuestas instantáneas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-white/80" />
                      <span className="text-sm text-white/80">Agenda citas automáticamente</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="glass text-white shadow-xl hover-lift border-white/10">
                <CardContent className="p-8">
                  <div className="text-white mb-6 bg-white/10 p-4 rounded-xl shadow-inner">
                    <Phone className="h-16 w-16 drop-shadow-lg text-secondary" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-4">
                    Agente de Voz
                  </h3>
                  <p className="text-white/90 mb-6">
                    Atiende llamadas como un asistente real y dispara flujos posteriores 
                    por WhatsApp para dar seguimiento personalizado.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-white/80" />
                      <span className="text-sm text-white/80">Voz natural y profesional</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-white/80" />
                      <span className="text-sm text-white/80">Seguimiento automático</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="glass text-white shadow-xl hover-lift border-white/10">
                <CardContent className="p-8">
                  <div className="text-white mb-6 bg-white/10 p-4 rounded-xl shadow-inner">
                    <Zap className="h-16 w-16 drop-shadow-lg text-integration" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-4">
                    Integración Total
                  </h3>
                  <p className="text-white/90 mb-6">
                    <strong>Nuestro diferencial:</strong> una sola IA que cubre todo el proceso, no bots aislados por canal. Atiende, escala y resuelve sin descoordinación.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-white/80" />
                      <span className="text-sm text-white/80">Escalado inteligente</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-white/80" />
                      <span className="text-sm text-white/80">Proceso unificado</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Diferencial contra soluciones genéricas - Fondo alternativo */}
      <section className="bg-background-alt py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-heading text-4xl md:text-5xl font-black text-white">
              ¿Por qué un <span className="text-secondary">agente genérico</span> no es suficiente?
            </h2>
            
            <p className="font-body text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
              Los bots genéricos no entienden la terminología veterinaria, alucinan respuestas 
              y no escalan internamente. Nosotros entrenamos con la data real de las marcas del sector.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 pt-12">
              <Card className="glass border-white/10 shadow-lg hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="text-primary mb-4 bg-gradient-to-br from-primary/10 to-secondary/10 p-3 rounded-lg shadow-inner mx-auto w-fit">
                    <Shield className="h-12 w-12 drop-shadow-md" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2">
                    Entrenado con datos reales del sector
                  </h3>
                  <p className="font-body text-foreground-muted text-sm">
                    Conoce marcas, dosis, indicaciones específicas del sector
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass border-white/10 shadow-lg hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="text-secondary mb-4 bg-gradient-to-br from-primary/10 to-secondary/10 p-3 rounded-lg shadow-inner mx-auto w-fit">
                    <CheckCircle className="h-12 w-12 drop-shadow-md" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2">
                    Validado por marcas líderes del sector
                  </h3>
                  <p className="font-body text-foreground-muted text-sm">
                    Información verificada y actualizada constantemente
                  </p>
                </CardContent>
              </Card>
              
              <Card className="glass border-white/10 shadow-lg hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="text-integration mb-4 bg-gradient-to-br from-primary/10 to-secondary/10 p-3 rounded-lg shadow-inner mx-auto w-fit">
                    <Users className="h-12 w-12 drop-shadow-md" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2">
                    Se adapta a tu flujo actual, sin cambios drásticos
                  </h3>
                  <p className="font-body text-foreground-muted text-sm">
                    Se integra con tu proceso actual sin modificaciones complejas
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios - Fondo oscuro */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-black text-white mb-12">
              Clínicas que ya confían en nosotros
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="glass border-white/10 shadow-lg hover-lift">
                <CardContent className="p-6 rounded-xl">
                  <div className="text-primary text-4xl mb-4 font-bold">"</div>
                  <p className="font-body text-foreground-muted mb-4">
                    "Nuestro equipo puede enfocarse en lo médico mientras el agente maneja las consultas básicas perfectamente."
                  </p>
                  <div className="font-heading font-bold text-white">
                    Dr. María González
                  </div>
                  <div className="text-sm text-foreground-muted">
                    Clínica Veterinaria San Martín
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass border-white/10 shadow-lg hover-lift">
                <CardContent className="p-6 rounded-xl">
                  <div className="text-secondary text-4xl mb-4 font-bold">"</div>
                  <p className="font-body text-foreground-muted mb-4">
                    "Las ventas aumentaron 40% al no perder ninguna consulta. Los clientes están más satisfechos."
                  </p>
                  <div className="font-heading font-bold text-white">
                    Lic. Carlos Ruiz
                  </div>
                  <div className="text-sm text-foreground-muted">
                    PetCare Centro
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass border-white/10 shadow-lg hover-lift">
                <CardContent className="p-6 rounded-xl">
                  <div className="text-primary text-4xl mb-4 font-bold">"</div>
                  <p className="font-body text-foreground-muted mb-4">
                    "La diferencia es increíble. Habla como nosotros, conoce nuestros productos y procesos."
                  </p>
                  <div className="font-heading font-bold text-white">
                    Dra. Ana López
                  </div>
                  <div className="text-sm text-foreground-muted">
                    Veterinaria Los Andes
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Barra de Confianza - Fondo alternativo */}
      <section className="bg-background-alt py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-12 text-center">
            <div className="flex items-center gap-3">
              <Building2 className="h-6 w-6 text-primary" />
              <span className="font-heading font-bold text-primary text-xl">+100</span>
              <span className="text-foreground-alt">clínicas activas</span>
            </div>
            <div className="hidden md:block w-px h-12 bg-foreground-muted/30"></div>
            <div className="flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-secondary" />
              <span className="font-heading font-bold text-secondary text-xl">+40%</span>
              <span className="text-foreground-alt">ventas en promedio</span>
            </div>
            <div className="hidden md:block w-px h-12 bg-foreground-muted/30"></div>
            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-primary" />
              <span className="font-heading font-bold text-primary text-xl">24h</span>
              <span className="text-foreground-alt">activación</span>
            </div>
            <div className="hidden md:block w-px h-12 bg-foreground-muted/30"></div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-secondary" />
              <span className="text-foreground-alt">reducción de carga operativa</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Final - Fondo oscuro */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="font-heading text-4xl md:text-5xl font-black text-white">
              Deja que tu equipo se enfoque en los pacientes
            </h2>
            
            <p className="font-body text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Activa tu agente inteligente y mejora tu atención, tus ventas y la percepción de tu clínica. 
              Sin complicaciones técnicas, sin cambios drásticos en tu operación.
            </p>
            
            <div className="pt-8">
              <Button size="lg" className="px-12 py-4 text-lg font-semibold bg-gradient-primary hover:opacity-90 transition-opacity">
                Agendar activación
              </Button>
            </div>
            
            <p className="text-white/80 text-sm">
              ✓ Configuración en 24 horas ✓ Soporte incluido ✓ Sin permanencia
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10 bg-background-alt">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Logo />
            
            <div className="text-white/60 text-sm">
              © 2024 Hubu. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
