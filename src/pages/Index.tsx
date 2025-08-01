import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, MessageSquare, Phone, Users, Zap, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Atiende cada tutor sin perder una sola{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              oportunidad
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Automatiza llamadas y WhatsApps con un agente entrenado con datos reales de la industria veterinaria.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
              Quiero activarlo en mi clínica
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-2">
              Soy una marca, quiero patrocinar clínicas
            </Button>
          </div>
          
          <div className="flex justify-center items-center gap-8 pt-12 opacity-60">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span className="text-sm">Datos seguros</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              <span className="text-sm">Respuesta 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span className="text-sm">+100 clínicas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Problema */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              ¿Tu recepción está <span className="text-red-600">colapsada</span>?
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Llamadas sin responder, mensajes acumulándose, tiempos de espera eternos, clientes impacientes... 
              y cuando logras atender, tienes que escalar información a médicos, farmacia, caja. El caos diario 
              que conoces muy bien.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 pt-12">
              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-6 text-center">
                  <div className="text-red-600 mb-4">
                    <Phone className="h-12 w-12 mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Pierdes ventas por falta de respuesta oportuna
                  </h3>
                </CardContent>
              </Card>
              
              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-6 text-center">
                  <div className="text-red-600 mb-4">
                    <Users className="h-12 w-12 mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    El tutor percibe un mal servicio
                  </h3>
                </CardContent>
              </Card>
              
              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-6 text-center">
                  <div className="text-red-600 mb-4">
                    <Zap className="h-12 w-12 mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Tu equipo está saturado
                  </h3>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Solución */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Agentes inteligentes entrenados con el{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  lenguaje de la industria
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Nuestra solución gestiona automáticamente mensajes y llamadas, resuelve dudas, 
                escala internamente cuando es necesario, y responde 24/7 con el conocimiento 
                específico del sector veterinario.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="text-blue-600 mb-6">
                    <MessageSquare className="h-16 w-16" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Agente de WhatsApp
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Conversación fluida, personalizada y rápida. Resuelve consultas sobre servicios, 
                    precios, disponibilidad y agenda citas de forma natural.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Respuestas instantáneas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Agenda citas automáticamente</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="text-purple-600 mb-6">
                    <Phone className="h-16 w-16" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Agente de Voz
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Atiende llamadas como un asistente real y dispara flujos posteriores 
                    por WhatsApp para dar seguimiento personalizado.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Voz natural y profesional</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Seguimiento automático</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg">
                <CardContent className="p-8">
                  <div className="text-white mb-6">
                    <Zap className="h-16 w-16" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    Integración Total
                  </h3>
                  <p className="text-blue-100 mb-6">
                    <strong>Nuestro diferencial:</strong> No es una IA por canal, 
                    es una IA integrada por proceso. Gestiona toda la experiencia del cliente.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-200" />
                      <span className="text-sm text-blue-100">Escalado inteligente</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-200" />
                      <span className="text-sm text-blue-100">Proceso unificado</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Diferencial contra soluciones genéricas */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              ¿Por qué no usar un <span className="text-orange-600">bot genérico</span>?
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Los bots genéricos no entienden la terminología veterinaria, alucinan respuestas 
              y no escalan internamente. Nosotros entrenamos con la data real de las marcas del sector.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 pt-12">
              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-6 text-center">
                  <div className="text-green-600 mb-4">
                    <Shield className="h-12 w-12 mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Entrenado con productos reales
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Conoce marcas, dosis, indicaciones específicas del sector
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-6 text-center">
                  <div className="text-green-600 mb-4">
                    <CheckCircle className="h-12 w-12 mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Validado por marcas veterinarias
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Información verificada y actualizada constantemente
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-6 text-center">
                  <div className="text-green-600 mb-4">
                    <Users className="h-12 w-12 mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Adaptado al flujo operativo
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Se integra con tu proceso actual sin cambios drásticos
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Clínicas que ya confían en nosotros
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-gray-400 text-4xl mb-4">"</div>
                <p className="text-gray-600 mb-4">
                  "Nuestro equipo puede enfocarse en lo médico mientras el agente maneja las consultas básicas perfectamente."
                </p>
                <div className="font-semibold text-gray-900">
                  Dr. María González
                </div>
                <div className="text-sm text-gray-500">
                  Clínica Veterinaria San Martín
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-gray-400 text-4xl mb-4">"</div>
                <p className="text-gray-600 mb-4">
                  "Las ventas aumentaron 40% al no perder ninguna consulta. Los clientes están más satisfechos."
                </p>
                <div className="font-semibold text-gray-900">
                  Lic. Carlos Ruiz
                </div>
                <div className="text-sm text-gray-500">
                  PetCare Centro
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-gray-400 text-4xl mb-4">"</div>
                <p className="text-gray-600 mb-4">
                  "La diferencia es increíble. Habla como nosotros, conoce nuestros productos y procesos."
                </p>
                <div className="font-semibold text-gray-900">
                  Dra. Ana López
                </div>
                <div className="text-sm text-gray-500">
                  Veterinaria Los Andes
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Deja que tu equipo se enfoque en los pacientes
            </h2>
            
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Activa tu agente inteligente y mejora tu atención, tus ventas y la percepción de tu clínica. 
              Sin complicaciones técnicas, sin cambios drásticos en tu operación.
            </p>
            
            <div className="pt-8">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-4 text-lg font-semibold">
                Agendar activación
              </Button>
            </div>
            
            <p className="text-blue-200 text-sm">
              ✓ Configuración en 24 horas ✓ Soporte incluido ✓ Sin permanencia
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
