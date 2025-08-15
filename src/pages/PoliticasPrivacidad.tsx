import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Shield, Lock, Eye, Database, CheckCircle, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Logo from "@/components/Logo";

const PoliticasPrivacidad = () => {
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
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-black text-white mb-4">
              POLÍTICAS DE TRATAMIENTO DE DATOS PERSONALES OSYVA INC S.A.S
            </h1>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
              Marzo 15, 2021
            </p>
          </div>

          {/* Content Cards */}
          <div className="space-y-8">
            {/* Advertencia */}

            <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4 mb-4">
              <p className="text-yellow-200 font-semibold">
                LEE CUIDADOSAMENTE ESTAS POLÍTICAS, CONTIENEN INFORMACIÓN IMPORTANTE SOBRE EL MANEJO DE LOS DATOS PERSONALES
              </p>
            </div>
            <Card className="glass border-white/10 shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-bold text-white mb-2">Responsable de las bases de datos:</h3>
                      <p className="text-foreground-muted">OSYVA INC S.A.S</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-2">Dirección:</h3>
                      <p className="text-foreground-muted">Cll 31 No 29 -03 Torre 3 Oficina 204 Pereira-Colombia</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-2">Correo electrónico:</h3>
                      <p className="text-foreground-muted">team@osyva.com</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-2">Sitio Web:</h3>
                      <p className="text-foreground-muted">https://www.osyva.com/</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Introducción */}
            <Card className="glass border-white/10 shadow-lg">
              <CardContent className="p-8">
                <h2 className="font-heading text-2xl font-bold text-white mb-4">
                  Introducción
                </h2>
                <p className="text-foreground-muted leading-relaxed mb-4">
                  OSYVA INC S.A.S en adelante " Osyva INC", identificado con NIT 901400277 - 8, actuando como RESPONSABLE DEL TRATAMIENTO y propietario del Sitio https://www.osyva.com/start (en adelante OSYVA), está comprometido con el respeto y la protección de los datos personales que tenemos a nuestra disposición, por eso, disponemos de la presente Política de Tratamiento de datos personales, para garantizar el adecuado cumplimiento de la Ley 1581 de 2012, el Decreto 1377 de 2013 y las demás disposiciones que reglamentan la materia.
                </p>
                <p className="text-foreground-muted leading-relaxed mb-4">
                  El Usuario que usa los servicios de Osyva INC o simplemente quien acepta el tratamiento de los datos por parte de Osyva INC, debe conocer y aceptar las siguientes Políticas de Tratamiento de Datos personales("Políticas de Datos").
                </p>
                <p className="text-foreground-muted leading-relaxed">
                  Cualquier información del Usuario y/o Empresa se encuentra regulada por los Términos y Condiciones y Políticas de Tratamiento de datos personales de Osyva INC. Osyva INC se reserva el derecho de modificarlas en cualquier momento. Avisaremos de estos cambios por medio de nuestro sitio web o por correo electrónico, dependiendo de la relevancia del cambio realizado. Las modificaciones a las políticas comenzarán a regir desde el momento de su publicación y el uso continuado del servicio por el Usuario en la fecha de última revisión constituirá aceptación de los mismos.
                </p>
              </CardContent>
            </Card>

            {/* Definiciones */}
            <Card className="glass border-white/10 shadow-lg">
              <CardContent className="p-8">
                <h2 className="font-heading text-2xl font-bold text-white mb-4">
                  Definiciones
                </h2>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-bold text-white mb-2">TITULAR:</h3>
                      <p className="text-foreground-muted">Persona natural cuyos datos personales sean objeto de Tratamiento</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-2">BASE DE DATOS:</h3>
                      <p className="text-foreground-muted">Es un conjunto de datos personales almacenados que son objeto de tratamiento.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-2">DATOS PERSONALES:</h3>
                      <p className="text-foreground-muted">Conjunto de información susceptible de relacionarse con una o más personas naturales.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-2">EMPRESAS:</h3>
                      <p className="text-foreground-muted">Se refiere a las personas jurídicas registradas en nuestro Sitio para comercializar sus productos como Laboratorios, Distribuidores o Almacenes.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-2">ALMACÉN:</h3>
                      <p className="text-foreground-muted">Empresas que podrán comprar a otras Empresas registradas, comercializar insumos, agro insumos, agroquímicos y de medicina veterinaria en nuestro Sitio.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-2">DISTRIBUIDOR:</h3>
                      <p className="text-foreground-muted">Empresas que cuentan con materias primas, agroquímicos, agroinsumos, insumos y medicamentos veterinarios para abastecer a los Almacenes.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-2">LABORATORIO:</h3>
                      <p className="text-foreground-muted">Empresa, que podrá acceder al Sitio para ofrecer y comercializar materias primas, agroquímicos, agroinsumos, insumos y medicamentos veterinarios.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-2">DATOS SENSIBLES:</h3>
                      <p className="text-foreground-muted">Aquellos que afectan la intimidad del Titular o cuyo uso indebido puede generar su discriminación.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-2">TRATAMIENTO DE DATOS:</h3>
                      <p className="text-foreground-muted">Cualquier operación o conjunto de operaciones sobre datos personales, tales como la recolección, almacenamiento, uso, circulación o supresión.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-2">RESPONSABLE DEL TRATAMIENTO:</h3>
                      <p className="text-foreground-muted">Persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, decida sobre la base de datos y/o el Tratamiento de los datos.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-2">ENCARGADO DEL TRATAMIENTO:</h3>
                      <p className="text-foreground-muted">Persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, realice el Tratamiento de datos personales por cuenta del Responsable del Tratamiento.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-2">TRANSMISIÓN:</h3>
                      <p className="text-foreground-muted">Cuando Osyva INC comparte sus datos personales con un tercero para que éste cumpla con una tarea o mandato específico.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-2">TRANSFERENCIA:</h3>
                      <p className="text-foreground-muted">Es el envío de los datos personales o bases de datos entre un Responsable del tratamiento hacia otro Responsable.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Objetivo de la Política */}
            <Card className="glass border-white/10 shadow-lg">
              <CardContent className="p-8">
                <h2 className="font-heading text-2xl font-bold text-white mb-4">
                  1. OBJETIVO DE LA POLÍTICA DE TRATAMIENTO DE DATOS
                </h2>
                <p className="text-foreground-muted leading-relaxed">
                  Teniendo en cuenta el derecho consagrado en el artículo 15 de la Constitución Política de 1991 mediante el cual se reconoce el derecho de todas las personas a conocer, actualizar y rectificar las informaciones que se hayan recogido sobre ellas en bancos de datos y en archivos de entidades públicas y privadas y de los deberes legales establecidos por la ley 1581 de 2012 y sus decretos reglamentarios, Osyva INC presenta su Política de Tratamiento de Datos Personales con el fin de comunicar los principios y las finalidades del uso de la información, los mecanismos para consultas y reclamos, las medidas de seguridad y demás aspectos relacionados con el uso y la protección de los datos personales que recolecta.
                </p>
              </CardContent>
            </Card>

            {/* Fundamento Jurídico */}
            <Card className="glass border-white/10 shadow-lg">
              <CardContent className="p-8">
                <h2 className="font-heading text-2xl font-bold text-white mb-4">
                  2. FUNDAMENTO JURÍDICO
                </h2>
                <p className="text-foreground-muted leading-relaxed">
                  Esta Política, su contenido e interpretación debe hacerse teniendo en cuenta las disposiciones de la Constitución Política de 1991, el contenido de la ley 1581 de 2012, sus decretos reglamentarios y las directrices impuestas por la Superintendencia de Industria y Comercio.
                </p>
              </CardContent>
            </Card>

            {/* Alcance */}
            <Card className="glass border-white/10 shadow-lg">
              <CardContent className="p-8">
                <h2 className="font-heading text-2xl font-bold text-white mb-4">
                  3. ALCANCE
                </h2>
                <p className="text-foreground-muted leading-relaxed">
                  Esta Política aplica para todos los datos personales que recolecte la Sociedad Osyva INC dentro de sus actividades ordinarias o para los datos personales a los que haya tenido acceso a través de alianzas con terceros. Esta Política contiene las obligaciones del Responsable del tratamiento de los datos, los derechos de los titulares de la información y cómo ejercerlos. Por lo tanto, es de obligatorio cumplimiento para todos los colaboradores de Osyva INC ya sea en calidad de empleados, contratistas o aliados, así como para los directivos y accionistas de Osyva INC.
                </p>
              </CardContent>
            </Card>

            {/* Principios */}
            <Card className="glass border-white/10 shadow-lg">
              <CardContent className="p-8">
                <h2 className="font-heading text-2xl font-bold text-white mb-4">
                  4. PRINCIPIOS
                </h2>
                <p className="text-foreground-muted leading-relaxed mb-4">
                  Osyva INC está comprometida con la implementación de mecanismos de recolección y almacenamiento de datos personales que garanticen, de manera armónica e integral, los siguientes principios:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white">PRINCIPIO DE LEGALIDAD:</strong>
                      <span className="text-foreground-muted"> El Tratamiento de datos es una actividad reglada en Colombia, que debe sujetarse a lo establecido en la Ley 1581 de 2012, el Decreto 1377 de 2013 y en las demás disposiciones que de desarrollen la materia.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white">PRINCIPIO DE FINALIDAD:</strong>
                      <span className="text-foreground-muted"> El Tratamiento debe obedecer a una finalidad definida, legítima, explicita e informada al Titular, de acuerdo con la Constitución y la Ley.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-integration mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white">PRINCIPIO DE LIBERTAD:</strong>
                      <span className="text-foreground-muted"> El Tratamiento sólo puede ejercerse con el consentimiento, previo, expreso e informado del Titular.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white">PRINCIPIO DE VERACIDAD O CALIDAD:</strong>
                      <span className="text-foreground-muted"> La información sujeta a Tratamiento debe ser veraz, completa, exacta, actualizada, comprobable y comprensible.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white">PRINCIPIO DE TRANSPARENCIA:</strong>
                      <span className="text-foreground-muted"> En el Tratamiento debe garantizarse el derecho del Titular a obtener información acerca de la existencia de datos que le concierne.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-integration mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white">PRINCIPIO DE SEGURIDAD:</strong>
                      <span className="text-foreground-muted"> La información sujeta a Tratamiento se deberá manejar con las medidas técnicas, humanas y administrativas que sean necesarias para otorgar seguridad a los registros.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-white">PRINCIPIO DE CONFIDENCIALIDAD:</strong>
                      <span className="text-foreground-muted"> Todas las personas que intervengan en el Tratamiento de datos personales están obligadas a garantizar la reserva de la información.</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Datos que Recolecta */}
            <Card className="glass border-white/10 shadow-lg">
              <CardContent className="p-8">
                <h2 className="font-heading text-2xl font-bold text-white mb-4">
                  5. DATOS QUE RECOLECTA OSYVA INC
                </h2>
                <p className="text-foreground-muted leading-relaxed mb-4">
                  Dentro del ejercicio ordinario de las actividades de Osyva INC, esta recolecta Datos Personales públicos, privados y semiprivados dependiendo de la relación del TITULAR de la información con Osyva INC.
                </p>
                <p className="text-foreground-muted leading-relaxed mb-4">
                  En este sentido podrá solicitar y recolectar la siguiente información:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-foreground-muted">Datos generales de identificación</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-foreground-muted">Datos específicos de identificación</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-integration rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-foreground-muted">Datos de ubicación relacionados con la actividad comercial</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-foreground-muted">Datos financieros y crediticios</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-foreground-muted">Datos de contenido socioeconómico</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-integration rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-foreground-muted">Datos relacionados con el nivel educativo e historial académico</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-foreground-muted">Datos generales relacionados con afiliación al sistema de seguridad social</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-foreground-muted">Datos de antecedentes judiciales y/o disciplinarios</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-integration rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-foreground-muted">Datos personales de acceso a sistemas de información</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Finalidades del Tratamiento */}
            <Card className="glass border-white/10 shadow-lg">
              <CardContent className="p-8">
                <h2 className="font-heading text-2xl font-bold text-white mb-4">
                  8. FINALIDAD DEL TRATAMIENTO DE LOS DATOS PERSONALES
                </h2>
                <p className="text-foreground-muted leading-relaxed mb-4">
                  Osyva INC en su condición de Responsable y/o Encargado del tratamiento de la información de carácter personal que recopile, almacene, actualice, transmita o suprima datos de sus Usuarios, personas naturales y/o representantes legales de los Laboratorios, Distribuidores y Almacenes registrados, Socios, empleados, proveedores y comunidad en general, les da tratamiento a los datos para las finalidades descritas a continuación:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground-muted">
                      Ofrecer los productos comercializados a través de la plataforma de Osyva.
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground-muted">
                      Almacenar los datos y clasificarlos dentro de sus bases de datos, identificándolos como Usuarios, Almacén, Distribuidor, Laboratorio, Proveedores, Aliados, Empleados, Contratistas, entre otros.
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-integration mt-0.5 flex-shrink-0" />
                    <span className="text-foreground-muted">
                      Compartir información sobre los productos y servicios que comercializa Osyva INC y las empresas registradas.
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground-muted">
                      Gestionar trámites de los TITULARES de la información como solicitudes, quejas y reclamos.
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground-muted">
                      Transferir información del TITULAR a los laboratorios registrados en nuestro Sitio para finalidades de mercadeo.
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Derechos del Titular */}
            <Card className="glass border-white/10 shadow-lg">
              <CardContent className="p-8">
                <h2 className="font-heading text-2xl font-bold text-white mb-4">
                  10. DERECHOS DEL TITULAR DE LA INFORMACIÓN
                </h2>
                <p className="text-foreground-muted leading-relaxed mb-4">
                  Además de los derechos reconocidos por la ley y la jurisprudencia, los titulares de la información tendrán derecho a:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Eye className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground-muted">
                      <strong className="text-white">Acceder:</strong> de forma gratuita a los datos proporcionados que hayan sido objeto de tratamiento.
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Database className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground-muted">
                      <strong className="text-white">Conocer, actualizar y rectificar:</strong> su información frente a datos parciales, inexactos, incompletos, fraccionados, que induzcan a error, o aquellos cuyo tratamiento esté prohibido o no haya sido autorizado.
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-integration mt-0.5 flex-shrink-0" />
                    <span className="text-foreground-muted">
                      <strong className="text-white">Solicitar prueba:</strong> de la autorización otorgada.
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Lock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground-muted">
                      <strong className="text-white">Presentar quejas:</strong> ante la Superintendencia de Industria y Comercio (SIC) por infracciones a lo dispuesto en la normatividad vigente.
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground-muted">
                      <strong className="text-white">Revocar la autorización:</strong> y/o solicitar la supresión del dato, siempre que no exista un deber legal o contractual que impida eliminarlos.
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
                  Para formular una queja, petición, consulta o reclamo el TITULAR de la información puede enviar una comunicación al correo electrónico:
                </p>
                <div className="space-y-2">
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
                    <span className="text-white">+57 310 2523739</span>
                  </div>
                </div>
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

export default PoliticasPrivacidad;
