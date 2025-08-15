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
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import DemoModal from "@/components/DemoModal";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Función para scroll suave a secciones
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Altura aproximada del header
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    // Cerrar menú móvil si está abierto
    setIsMenuOpen(false);
  };

  // Función para scroll al inicio
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Verificar parámetro de URL para abrir modal
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('modal') === 'true') {
      setIsModalOpen(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 glass" style={{ border: "none" }}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo y Navegación */}
            <div className="flex items-center justify-start space-x-8">
              <button
                onClick={scrollToTop}
                className="hidden md:block bg-transparent border-none cursor-pointer"
              >
                <Logo />
              </button>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8" style={{ fontSize: "1.1rem" }}>
                <button
                  onClick={() => scrollToSection('servicios')}
                  className="text-white/80 hover:text-white transition-colors bg-transparent border-none cursor-pointer"
                >
                  Servicios
                </button>
                <button
                  onClick={() => scrollToSection('enfoque')}
                  className="text-white/80 hover:text-white transition-colors bg-transparent border-none cursor-pointer"
                >
                  Enfoque
                </button>
                <button
                  onClick={() => scrollToSection('sectores')}
                  className="text-white/80 hover:text-white transition-colors bg-transparent border-none cursor-pointer"
                >
                  Sectores
                </button>
              </nav>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button size="lg" className="px-6 py-4 text-md bg-gradient-primary hover:opacity-90 transition-opacity prefinery-form-cta" style={{ backgroundColor: "#19191E", color: "#fff" }}>
                Agendar  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-5 w-5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
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
                <button
                  onClick={() => scrollToSection('servicios')}
                  className="text-white/80 hover:text-white transition-colors bg-transparent border-none cursor-pointer text-left"
                >
                  Servicios
                </button>
                <button
                  onClick={() => scrollToSection('enfoque')}
                  className="text-white/80 hover:text-white transition-colors bg-transparent border-none cursor-pointer text-left"
                >
                  Enfoque
                </button>
                <button
                  onClick={() => scrollToSection('sectores')}
                  className="text-white/80 hover:text-white transition-colors bg-transparent border-none cursor-pointer text-left"
                >
                  Sectores
                </button>
                <Button size="lg" className="px-6 py-4 text-md bg-gradient-primary hover:opacity-90 transition-opacity prefinery-form-cta" style={{ backgroundColor: "#19191E", color: "#fff" }}>
                  Agendar  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-5 w-5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section - Fondo oscuro */}
      <section className="bg-background pt-20 pb-0 px-4">
        <div className="container mx-auto px-4 py-10 md:py-20 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="font-heading text-4xl md:text-6xl font-black text-white leading-tight">
              Atiende cada tutor sin perder una sola{" "}
              <span className="gradient-text">
                oportunidad
              </span>
            </h1>

            <p className="font-body text-xl md:text-2xl text-foreground-alt max-w-3xl mx-auto leading-relaxed">
              Automatiza llamadas y mensajes con un agente entrenado en el lenguaje real de la industria veterinaria.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 pb-4">
              <Button
                size="lg"
                className="px-8 py-4 text-lg bg-gradient-primary hover:opacity-90 transition-opacity prefinery-form-cta"
              >
                UNETE <span className="hidden md:inline">A LA LISTA DE ESPERA</span>
              </Button>
            </div>

            <div className="flex justify-center items-center gap-8 pt-0 opacity-80">
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
      <section id="servicios" className="bg-background-alt py-10">
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
      <section id="enfoque" className="bg-background py-20">
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
                  <div className="text-white mb-6 p-4 rounded-xl shadow-inner">
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
                  <div className="text-white mb-6 p-4 rounded-xl shadow-inner">
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
                  <div className="text-white mb-6 p-4 rounded-xl shadow-inner">
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
      <section id="sectores" className="bg-background-alt py-20">
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
              <Button size="lg" className="px-12 py-4 text-lg font-semibold bg-gradient-primary hover:opacity-90 transition-opacity prefinery-form-cta" >
                Registrate en la lista de espera <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-5 w-5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-background-alt">
        <div className="container mx-auto max-w-6xl">
          {/* Top Footer Section */}
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Left Column - Company Info & Socials */}
            <div className="space-y-6" style={{ marginTop: "-10px" }}>
              <div>
                <button
                  onClick={scrollToTop}
                  className="bg-transparent border-none cursor-pointer"
                >
                  <Logo />
                </button>
                <p className="text-white/80 text-sm leading-relaxed">
                  Construimos ecosistemas inteligentes que combinan IA especializada, software a medida e infraestructura interoperable para resolver problemas reales de negocio.
                </p>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/somoshubu/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a rel="noopener noreferrer" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary/80 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/hubu.io/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-integration rounded-full flex items-center justify-center hover:bg-integration/80 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Middle Column - Servicios */}
            <div className="space-y-6">
              <h4 className="font-bold text-white text-lg">Servicios</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-secondary/20 rounded flex items-center justify-center">
                    <Zap className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="text-white/80 text-sm">Modelos de IA</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-integration/20 rounded flex items-center justify-center">
                    <Building2 className="w-4 h-4 text-integration" />
                  </div>
                  <span className="text-white/80 text-sm">Infrastructure</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary/20 rounded flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <span className="text-white/80 text-sm">Ecosistemas</span>
                </div>
              </div>
            </div>

            {/* Right Column - Contacto */}
            <div className="space-y-6">
              <h4 className="font-bold text-white text-lg">Contacto</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary/20 rounded flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-white/80 text-sm">cesar@hubu.com.co</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-secondary/20 rounded flex items-center justify-center">
                    <Phone className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="text-white/80 text-sm">+57 310 2523739</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-integration/20 rounded flex items-center justify-center">
                    <svg className="w-4 h-4 text-integration" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-white/80 text-sm">Pereira, Colombia</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer Section - Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Documentación Card */}
            <Card className="bg-card/50 border-white/10 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-lg">Documentación</h5>
                    <p className="text-white/60 text-sm">Guías técnicas y casos de uso</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20">
                  Ver recursos
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Button>
              </CardContent>
            </Card>

            {/* Comunidad Card */}
            <Card className="bg-card/50 border-white/10 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-integration rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-lg">Comunidad</h5>
                    <p className="text-white/60 text-sm">Únete a nuestra comunidad técnica</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20">
                  Unirse
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Button>
              </CardContent>
            </Card>

            {/* Blog Card */}
            <Card className="bg-card/50 border-white/10 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-integration to-primary rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-lg">Blog</h5>
                    <p className="text-white/60 text-sm">Insights sobre IA y desarrollo</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20">
                  Leer blog
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Enlaces Legales */}
          <div className="border-t border-white/10 pt-8 mb-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-8">
              <span className="text-white/40 text-sm">
                © {new Date().getFullYear()} Hubu. Todos los derechos reservados
              </span>
              <div>
                <Link to="/terminos-condiciones" className="text-white/60 hover:text-white transition-colors text-sm">
                  Términos y condiciones
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/politicas-privacidad" className="text-white/60 hover:text-white transition-colors text-sm">
                  Políticas de privacidad
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Demo Modal */}
      <DemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Index;
