import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageSquare, X, CheckCircle, User, Briefcase } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal = ({ isOpen, onClose }: DemoModalProps) => {
  const [selectedOption, setSelectedOption] = useState<'voice' | 'whatsapp'>('voice');
  const [fullName, setFullName] = useState('');
  const [profession, setProfession] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValidPhone, setIsValidPhone] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Profesiones completas de la industria veterinaria
  const veterinaryProfessions = [
    // Veterinarios generales y especialistas
    'Veterinario general',
    'Veterinario especialista',
    'Veterinario cirujano',
    'Veterinario dermatólogo',
    'Veterinario cardiólogo',
    'Veterinario oncólogo',
    'Veterinario oftalmólogo',
    'Veterinario ortopedista',
    'Veterinario internista',
    'Veterinario anestesiólogo',
    'Veterinario radiólogo',
    'Veterinario patólogo',
    'Veterinario nutricionista',
    'Veterinario de comportamiento',
    'Veterinario fisioterapeuta',
    'Veterinario rehabilitador',
    'Veterinario homeópata',
    'Veterinario acupunturista',
    
    // Veterinarios por tipo de animal
    'Veterinario de perros y gatos',
    'Veterinario equino',
    'Veterinario de bovinos',
    'Veterinario de porcinos',
    'Veterinario de aves',
    'Veterinario de animales exóticos',
    'Veterinario de reptiles',
    'Veterinario de peces',
    'Veterinario de fauna silvestre',
    'Veterinario de zoológico',
    'Veterinario de animales de granja',
    'Veterinario de animales de compañía',
    'Veterinario de emergencias',
    'Veterinario de campo',
    'Veterinario de producción animal',
    
    // Personal técnico y auxiliar
    'Auxiliar veterinario',
    'Técnico veterinario',
    'Técnico de laboratorio',
    'Técnico de imagenología',
    'Técnico de anestesia',
    'Técnico de radiología',
    'Técnico de ecografía',
    'Técnico de endoscopia',
    'Técnico de fisioterapia',
    'Técnico de rehabilitación',
    'Técnico de emergencias',
    'Técnico de quirófano',
    'Técnico de farmacia veterinaria',
    'Técnico de control de calidad',
    
    // Personal administrativo y gerencial
    'Recepcionista de clínica',
    'Administrador de clínica',
    'Gerente de clínica',
    'Dueño de clínica',
    'Director médico',
    'Coordinador de servicios',
    'Supervisor de personal',
    'Contador de clínica',
    'Recursos humanos',
    'Marketing veterinario',
    'Ventas veterinarias',
    'Atención al cliente',
    
    // Personal de soporte
    'Aseador/a de clínica',
    'Mantenimiento de equipos',
    'Conductor de ambulancia',
    'Personal de seguridad',
    'Personal de limpieza',
    'Personal de cocina (para mascotas)',
    'Personal de grooming',
    'Entrenador de mascotas',
    
    // Personal de laboratorio y farmacia
    'Farmacéutico veterinario',
    'Químico de laboratorio',
    'Microbiólogo veterinario',
    'Parasitólogo',
    'Toxicólogo veterinario',
    'Analista de calidad',
    'Investigador de laboratorio',
    
    // Personal de educación e investigación
    'Profesor de veterinaria',
    'Investigador veterinario',
    'Consultor veterinario',
    'Asesor técnico',
    'Capacitador veterinario',
    'Escritor técnico veterinario',
    'Editor de revistas veterinarias',
    
    // Personal de ventas y distribución
    'Representante de ventas veterinarias',
    'Distribuidor de productos veterinarios',
    'Vendedor de alimentos para mascotas',
    'Vendedor de equipos veterinarios',
    'Vendedor de medicamentos',
    'Vendedor de suplementos',
    
    // Personal de servicios especializados
    'Fotógrafo veterinario',
    'Videógrafo veterinario',
    'Diseñador de productos veterinarios',
    'Desarrollador de software veterinario',
    'Consultor de sistemas veterinarios',
    'Especialista en telemedicina',
    
    // Estudiantes y pasantes
    'Estudiante de veterinaria',
    'Estudiante de técnico veterinario',
    'Pasante de veterinaria',
    'Residente veterinario',
    'Estudiante de auxiliar veterinario',
    
    // Otros roles
    'Otro'
  ];

  // Validar número de teléfono
  const validatePhone = (phone: string) => {
    if (!phone) return false;
    // Validación básica para números con código de país
    const phoneRegex = /^\+[1-9]\d{1,14}$/;
    return phoneRegex.test(phone);
  };

  useEffect(() => {
    setIsValidPhone(validatePhone(phoneNumber));
  }, [phoneNumber]);

  // Limpiar formulario
  const resetForm = () => {
    setFullName('');
    setProfession('');
    setPhoneNumber('');
    setIsValidPhone(false);
  };

  // Manejar envío del formulario de voz
  const handleVoiceSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidPhone || !fullName || !profession) return;

    setIsLoading(true);
    try {
      const response = await fetch('https://n8n.bettercode.com.co/webhook/26cd3c1d-5171-48ca-9f1f-ccb4b7991dae', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: fullName,
          profession: profession,
          phoneNumber: phoneNumber,
          type: 'voice_demo'
        }),
      });

      if (response.ok) {
        // Cerrar modal inmediatamente
        onClose();
        resetForm();

        // Mostrar toast de confirmación
        toast({
          title: "¡Formulario enviado exitosamente! ✅",
          description: "Nuestro agente te contactará pronto para realizar la demostración personalizada.",
          variant: "default",
          duration: 5000,
        });
      } else {
        toast({
          title: "Error al enviar el formulario ❌",
          description: "Por favor, intenta nuevamente. Si el problema persiste, contacta soporte.",
          variant: "destructive",
          duration: 5000,
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error de conexión ❌",
        description: "No se pudo enviar el formulario. Verifica tu conexión e intenta nuevamente.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Manejar redirección a WhatsApp
  const handleWhatsAppRedirect = () => {
    window.open('https://shorturl.at/pMIkp', '_blank');
  };

  // Cerrar modal con Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Limpiar formulario cuando se cierra el modal
  useEffect(() => {
    if (!isOpen) {
      resetForm();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl mx-4 bg-background rounded-2xl shadow-2xl border border-white/10 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 flex-shrink-0">
          <h2 className="text-2xl font-bold text-white">
            Demostración en vivo
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          <p className="text-white/80 mb-6 text-center">
            Elige cómo quieres probar nuestro agente inteligente
          </p>

          {/* Options */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* Voice Option */}
            <Card
              className={`cursor-pointer transition-all duration-200 hover:scale-105 ${selectedOption === 'voice'
                ? 'border-primary'
                : 'border-white/10 hover:border-primary/50'
                }`}
              onClick={() => setSelectedOption('voice')}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${selectedOption === 'voice'
                  ? 'bg-gradient-to-br from-primary to-integration'
                  : 'bg-white/10'
                  }`}>
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-sm md:text-lg font-bold text-white mb-2">
                  <span className="hidden md:inline">
                    Agente de Voz
                  </span>
                  <span className="md:hidden">
                    Agente Voz
                  </span>
                </h3>
                <p className="text-white/60 text-sm hidden md:block">
                  Prueba nuestro agente de voz inteligente
                </p>
              </CardContent>
            </Card>

            {/* WhatsApp Option */}
            <Card
              className={`cursor-pointer transition-all duration-200 hover:scale-105 ${selectedOption === 'whatsapp'
                ? 'border-secondary'
                : 'border-white/10 hover:border-secondary/50'
                }`}
              onClick={() => setSelectedOption('whatsapp')}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${selectedOption === 'whatsapp'
                  ? 'bg-gradient-to-br from-secondary to-integration'
                  : 'bg-white/10'
                  }`}>
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-sm md:text-lg font-bold text-white mb-2">
                  WhatsApp
                </h3>
                <p className="text-white/60 text-sm hidden md:block">
                  Chatea directamente con nuestro agente
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Voice Form */}
          {selectedOption === 'voice' && (
            <form onSubmit={handleVoiceSubmit} className="space-y-4">
              {/* Mensaje informativo */}
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white/90 text-sm font-medium mb-1">
                      Nuestro agente te llamará
                    </p>
                    <p className="text-white/70 text-xs">
                      Con los datos proporcionados, nuestro agente inteligente te contactará para realizar una demostración personalizada de nuestras capacidades.
                    </p>
                  </div>
                </div>
              </div>

              {/* Nombre completo */}
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Nombre completo
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Ingresa tu nombre completo"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>

              {/* Profesión */}
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  <Briefcase className="w-4 h-4 inline mr-2" />
                  Profesión en la industria veterinaria
                </label>
                <select
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                  style={{
                    appearance: 'none',
                  }}
                  required
                >
                  <option value="" className="bg-background text-white">Selecciona tu profesión</option>
                  {veterinaryProfessions.map((prof) => (
                    <option key={prof} value={prof} className="bg-background text-white">
                      {prof}
                    </option>
                  ))}
                </select>
              </div>

              {/* Número de teléfono con selector de país */}
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Número de teléfono
                </label>
                <div className="relative">
                  <PhoneInput
                    international
                    defaultCountry="CO"
                    value={phoneNumber}
                    onChange={(value) => setPhoneNumber(value || '')}
                    placeholder="+57 310 2523739"
                    
                  />
                  {phoneNumber && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      {isValidPhone ? (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      ) : (
                        <X className="w-5 h-5 text-red-400" />
                      )}
                    </div>
                  )}
                </div>
                <p className="text-xs text-white/60 mt-1">
                  Selecciona tu país y ingresa tu número de teléfono
                </p>
              </div>

              <Button
                type="submit"
                disabled={!isValidPhone || !fullName || !profession || isLoading}
                className="w-full bg-gradient-primary hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Procesando...
                  </div>
                ) : (
                  'Iniciar demostración de voz'
                )}
              </Button>
            </form>
          )}

          {/* WhatsApp Redirect */}
          {selectedOption === 'whatsapp' && (
            <div className="space-y-4">

              {/* Mensaje informativo */}
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white/90 text-sm font-medium mb-1">
                      Redirigir a WhatsApp
                    </p>
                    <p className="text-white/70 text-xs">
                      Serás redirigido a WhatsApp para comenzar la conversación con nuestro agente inteligente.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleWhatsAppRedirect}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:opacity-90 transition-opacity"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Abrir WhatsApp
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DemoModal; 