import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, FileText, Shield, Users, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Logo from "@/components/Logo";

const TerminosCondiciones = () => {
  // Scroll al inicio cuando se monta el componente
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass" style={{ border: "none" }}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <ArrowLeft className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Volver al inicio</span>
            </Link>
            <Link to="/">
              <Logo />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="pt-24 pb-16 px-4 mt-16">
        <div className="container mx-auto max-w-4xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mb-6">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-black text-white mb-4">
              TÉRMINOS Y CONDICIONES GENERALES DE USO USUARIO OSYVA INC S.A.S
            </h1>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Febrero 12, 2021
            </p>
          </div>

          {/* Content Cards */}
          <div className="space-y-8">
            {/* Advertencia */}
            <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4 mb-4">
              <p className="text-yellow-200 font-semibold">
                LEE CUIDADOSAMENTE ESTAS CONDICIONES DEL SERVICIO, PORQUE CONTIENEN INFORMACIÓN IMPORTANTE SOBRE TUS DERECHOS Y OBLIGACIONES LEGALES, RELACIONADOS CON EL USO DEL SITIO WEB DENOMINADO "OSYVA", ASÍ COMO LAS OBLIGACIONES DE CUMPLIMIENTO POR LEY.
              </p>
            </div>
            <Card className="glass border-white/10 shadow-lg">
              <CardContent className="p-8">
                <p className="text-foreground-muted leading-relaxed mb-4">
                  Bienvenido a OSYVA, somos un marketplace donde los Usuarios podrán encontrar agroinsumos, insumos y medicamentos veterinarios (en adelante "el Sitio").
                </p>
                <p className="text-foreground-muted leading-relaxed">
                  Los presentes Términos y Condiciones de uso del Sitio, regula el uso que el Usuario haga del Sitio de propiedad de la sociedad por acciones simplificada OSYVA INC S.A.S, (en adelante Osyva INC) identificada con NIT. 901400277 - 8, y los servicios que ofrecemos a través de ellos (colectivamente, el Sitio web y los servicios referidos como nuestro "Sitio").
                </p>
              </CardContent>
            </Card>

            {/* Aplicación de Términos */}
            <Card className="glass border-white/10 shadow-lg">
              <CardContent className="p-8">
                <h2 className="font-heading text-2xl font-bold text-white mb-4">
                  Aplicación de los Términos
                </h2>
                <p className="text-foreground-muted leading-relaxed mb-4">
                  Estos Términos se aplican a los Usuarios de nuestro Sitio, incluyendo a los visitantes del mismo, habiéndose registrado o no. El uso de nuestro Sitio también está sujeto a nuestra actual Política de Tratamiento de Información. El uso de nuestro Sitio como Empresa (definido a continuación) se rige por los términos y condiciones dispuestos para las Empresas. ("Términos y Condiciones Empresas")
                </p>
                <p className="text-foreground-muted leading-relaxed mb-4">
                  Los Usuarios podrán acceder a los servicios del Sitio a través de la página web:  https://www.osyva.com/
                </p>
                <p className="text-foreground-muted leading-relaxed">
                  El Usuario con la aceptación de los presentes términos y condiciones, realizan un contrato vinculante con OSYVA INC a través del cual se regula el acceso de los Usuarios al Sitio, su contenido y servicios.
                </p>
              </CardContent>
            </Card>

            {/* Modificaciones */}
            <Card className="glass border-white/10 shadow-lg">
              <CardContent className="p-8">
                <h2 className="font-heading text-2xl font-bold text-white mb-4">
                  Modificaciones de los Términos
                </h2>
                <p className="text-foreground-muted leading-relaxed mb-4">
                  OSYVA INC podrá modificar estos Términos y Condiciones en cualquier momento con o sin previo aviso. El Usuario debe visitar esta página periódicamente para revisar la última versión vigente de estos Términos, debido a que los mismos son obligatorios.
                </p>
                <p className="text-foreground-muted leading-relaxed">
                  Los Términos y Condiciones vigentes anulan y sustituyen todas las versiones anteriores desde la fecha en que entra a operar.
                </p>
              </CardContent>
            </Card>

            {/* Capacidad */}
            <Card className="glass border-white/10 shadow-lg">
              <CardContent className="p-8">
                <h2 className="font-heading text-2xl font-bold text-white mb-4">
                  Capacidad
                </h2>
                <p className="text-foreground-muted leading-relaxed mb-4">
                  Los servicios sólo están disponibles para personas que tengan capacidad legal para contratar y para obligarse en nombre de la persona jurídica que representan, en caso de aplicar. No podrán utilizar los servicios las personas que no tengan esa capacidad o Usuarios que hayan sido suspendidos temporalmente o inhabilitados definitivamente.
                </p>
                <p className="text-foreground-muted leading-relaxed">
                  En caso de ser el usuario menor de edad, debe obtener con anterioridad el consentimiento de sus padres o representantes legales, quienes serán responsables de los actos que Usted lleve a cabo en nuestro Sitio. Se da por entendido que los menores de edad que accedan y usen el Sitio cuentan con este consentimiento.
                </p>
              </CardContent>
            </Card>

            {/* Definiciones */}
            <Card className="glass border-white/10 shadow-lg">
              <CardContent className="p-8">
                <h2 className="font-heading text-2xl font-bold text-white mb-4">
                  Definiciones
                </h2>
                <p className="text-foreground-muted leading-relaxed mb-4">
                  Para efectos de estos Términos y Condiciones se deberán tener en cuenta las siguientes definiciones, sin importar si se utilizan en forma singular o plural:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-white">A. Usuario:</strong>
                      <span className="text-foreground-muted"> Toda persona natural o jurídica que ingrese a nuestro Sitio para comprar productos ofrecidos por las empresas.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-white">B. Empresas:</strong>
                      <span className="text-foreground-muted"> Se refiere a las personas jurídicas registradas en nuestro Sitio para comercializar sus insumos, agro insumos, agroquímicos y de medicina veterinaria como Laboratorios, Distribuidores o Almacenes.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-integration rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-white">C. Datos personales:</strong>
                      <span className="text-foreground-muted"> Es toda información que permite identificar a una persona natural.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-white">D. Publicidad:</strong>
                      <span className="text-foreground-muted"> Es toda forma de comunicación realizada por parte de Osyva con el fin de brindar información sobre las actividades comerciales o comunicar campañas promocionales sobre los productos que se comercializan.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-white">E. Pasarela de pagos:</strong>
                      <span className="text-foreground-muted"> Servicio que permite la realización de pagos por parte del Proveedor directamente al Operador de la Plataforma a través de medios electrónicos utilizando plataformas tecnológicas.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-integration rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-white">F. Pop - Ups:</strong>
                      <span className="text-foreground-muted"> Ventana o aviso de Internet que emerge de manera automática en cualquier momento cuando el Usuario utiliza la Plataforma.</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Compras en OSYVA */}
            <Card className="glass border-white/10 shadow-lg">
              <CardContent className="p-8">
                <h2 className="font-heading text-2xl font-bold text-white mb-4">
                  COMPRAS EN OSYVA
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-white mb-2">1. Registro del Usuario</h3>
                    <p className="text-foreground-muted leading-relaxed">
                      El Usuario, para su registro deberá suministrar información personal y correo electrónico. El Usuario se compromete a que la información que proporcione a Osyva y durante el tiempo en que haga uso de la Plataforma, será verdadera, precisa y completa, y que la actualizará cuando sea necesario.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">2. Servicios</h3>
                    <p className="text-foreground-muted leading-relaxed mb-4">
                      El Usuario podrá revisar todos los productos ofertados por las Empresas, comparar sus precios y elegir el que más le interese, así como podrá ver ubicación, teléfono de contacto, redes sociales, página web y whatsapp de las Empresas. Para finalizar la compra, es necesario que el Usuario se encuentre registrado.
                    </p>
                    <p className="text-foreground-muted leading-relaxed">
                      El contrato de compraventa entre el Usuario y la Empresa se perfecciona solamente cuando el Usuario presente la oferta de compra mediante la selección del producto y efectúe el pago mediante las modalidades de pago dispuestos en el Sitio.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">2.1. Precios</h3>
                    <p className="text-foreground-muted leading-relaxed">
                      En el Sitio el Usuario encontrará los diferentes productos con su respectivo valor real, definitivo y total a cobrar. Los valores, no incluyen los gastos correspondientes al envío de los productos, que se detallan al momento de confirmar el pedido en el "Método de Envío".
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">2.2. Formas de Pago</h3>
                    <p className="text-foreground-muted leading-relaxed">
                      El Usuario podrá hacer el pago del pedido a través de la pasarela de pagos ePayco. Aplican términos y condiciones de los terceros que los podrá encontrar en el siguiente link: https://epayco.co/terminos/terminos-condiciones/
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">2.3. Métodos de envío</h3>
                    <p className="text-foreground-muted leading-relaxed">
                      La Empresa se compromete a entregar los productos comprados en el Sitio Web a la dirección que el Usuario haya ingresado al momento de realizar la compra. El plazo de la entrega está condicionado al Operador Logístico, término que le será indicado al momento de realizar la compra.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Garantías y Derechos */}
            <Card className="glass border-white/10 shadow-lg">
              <CardContent className="p-8">
                <h2 className="font-heading text-2xl font-bold text-white mb-4">
                  3. Garantías, Derecho de retracto y Reversión de Pago
                </h2>
                <p className="text-foreground-muted leading-relaxed mb-4">
                  Los siguientes derechos deberán ser reclamados directamente a la Empresa registrada. En caso de que la Empresa no responda el reclamo, el Usuario deberá pedir intervención de Osyva para solucionar el requerimiento.
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-white mb-2">3.1. Garantía</h3>
                    <p className="text-foreground-muted leading-relaxed">
                      Si los productos no se ajustan a la calidad, idoneidad o seguridad propia y necesaria, el Usuario gozará de la garantía definida por la Empresa para cada producto o en caso de no haberse indicado, de la garantía legal.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">3.2. Derecho de retracto</h3>
                    <p className="text-foreground-muted leading-relaxed">
                      De conformidad con el artículo 46 de la Ley 1480 de 2011, en las ventas a distancia, es decir aquellas realizadas a través de medios como el comercio electrónico, se le debe informar al COMPRADOR acerca del derecho de retracto y el término que tiene para ejercerlo.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">3.3. Reversión del pago</h3>
                    <p className="text-foreground-muted leading-relaxed">
                      En el caso del Usuario encontrarse en alguno de los supuestos establecidos en la Ley para dar aplicación de la reversión de pago, podrá seguir el procedimiento establecido para estos casos.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Obligaciones del Usuario */}
            <Card className="glass border-white/10 shadow-lg">
              <CardContent className="p-8">
                <h2 className="font-heading text-2xl font-bold text-white mb-4">
                  9. Obligaciones del Usuario
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground-muted">
                      Suministrar solo información veraz y exacta de sus datos personales y de la información de la empresa cuando aplique.
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground-muted">
                      Haber aceptado los presentes Términos Condiciones de Uso.
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-integration mt-0.5 flex-shrink-0" />
                    <span className="text-foreground-muted">
                      Notificar inmediatamente a Osyva de cualquier anomalía.
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground-muted">
                      Tiene capacidad legal para contratar.
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground-muted">
                      Garantiza que no es un delincuente.
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-integration mt-0.5 flex-shrink-0" />
                    <span className="text-foreground-muted">
                      Garantiza que el dinero utilizado para el pago de los productos son lícitos.
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Limitación de Responsabilidad */}
            <Card className="glass border-white/10 shadow-lg">
              <CardContent className="p-8">
                <h2 className="font-heading text-2xl font-bold text-white mb-4">
                  18. Limitación de Responsabilidad
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground-muted">
                      Osyva es un espacio para que los Usuarios puedan contactar a Empresas (Laboratorios, Distribuidores y Almacenes) registradas y encontrar insumos, agro insumos, agroquímicos y medicina veterinaria.
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground-muted">
                      Osyva no es propietaria de los artículos ofertados por las Empresas. Y en consecuencia no interviene en el perfeccionamiento de las negociaciones que realicen los Usuarios y las Empresas, incluyendo la calidad, cantidad e información de los productos.
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-integration rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground-muted">
                      El uso del Sitio es responsabilidad exclusiva del Usuario a su propio riesgo. Osyva no será responsable por los daños y perjuicios que surjan de cualquier espectáculo público a causa del uso o imposibilidad de uso del Sitio.
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground-muted">
                      Toda persona que haga uso de nuestro Sitio debe actuar con prudencia en la compra de los productos.
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contacto */}
            <Card className="glass border-white/10 shadow-lg">
              <CardContent className="p-8">
                <h2 className="font-heading text-2xl font-bold text-white mb-4">
                  Contacto
                </h2>
                <p className="text-foreground-muted leading-relaxed mb-4">
                  Si el Usuario tiene alguna pregunta o comentario acerca de los Términos y Condiciones de Uso y/o Política de Privacidad, puede enviar un correo electrónico a:
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary/20 rounded flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-white">team@osyva.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-secondary/20 rounded flex items-center justify-center">
                      <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="text-white">+57 3102523739</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-integration/20 rounded flex items-center justify-center">
                      <svg className="w-4 h-4 text-integration" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="text-white">Cll 31 No 2404 Torre 3 Oficina 204 Pereira-Colombia</span>
                  </div>
                </div>
                <p className="text-foreground-muted text-sm mt-4">
                  Última Actualización: 12/02/2021
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <Button size="lg" className="px-8 py-4 text-lg bg-gradient-primary hover:opacity-90 transition-opacity">
              <Link to="/" className="flex items-center gap-2">
                Volver al inicio
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TerminosCondiciones;
