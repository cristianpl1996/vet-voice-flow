import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, X, CheckCircle, User, Briefcase, Mail, SendHorizontal, Presentation, MessageCircle, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal = ({ isOpen, onClose }: DemoModalProps) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [hasClinic, setHasClinic] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValidPhone, setIsValidPhone] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const { toast } = useToast();

  // Opciones para clínica veterinaria
  const clinicOptions = [
    'Sí',
    'No'
  ];

  // Validar número de teléfono
  const validatePhone = (phone: string) => {
    if (!phone) return false;
    // Validación básica para números con código de país
    const phoneRegex = /^\+[1-9]\d{1,14}$/;
    return phoneRegex.test(phone);
  };

  // Validar email
  const validateEmail = (email: string) => {
    if (!email) return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  useEffect(() => {
    setIsValidPhone(validatePhone(phoneNumber));
  }, [phoneNumber]);

  useEffect(() => {
    setIsValidEmail(validateEmail(email));
  }, [email]);

  // Limpiar formulario
  const resetForm = () => {
    setFullName('');
    setEmail('');
    setHasClinic('');
    setPhoneNumber('');
    setIsValidPhone(false);
    setIsValidEmail(false);
    setIsFormSubmitted(false);
  };

  // Manejar envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidPhone || !isValidEmail || !fullName || !hasClinic) return;

    setIsLoading(true);
    try {
      const response = await fetch('https://n8n.bettercode.com.co/webhook/86fde622-4920-48e3-91d5-db52fa434c54', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: fullName,
          email: email,
          hasClinic: hasClinic,
          phoneNumber: phoneNumber,
          date: new Date().toISOString(),
          status: 'Nuevo',
          channel: 'Landing Page',
        }),
      });

      if (response.ok) {
        // Marcar formulario como enviado exitosamente
        setIsFormSubmitted(true);

        // Mostrar toast de confirmación
        toast({
          title: "¡Formulario enviado exitosamente! ✅",
          description: "Nos pondremos en contacto contigo pronto para agendar tu demostración personalizada.",
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

  // Manejar redirección a presentación
  const handleViewPresentation = () => {
    window.open('https://slides.hubu.com.co', '_blank');
  };

  // Manejar redirección a WhatsApp
  const handleJoinWhatsApp = () => {
    window.open('https://chat.whatsapp.com/KTXzNY274sN5ZaYaJ57qn9?mode=wwt', '_blank');
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
            Formulario de información
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
          {!isFormSubmitted ? (
            <>
              <p className="text-white/80 mb-6 text-center">
                Completa tus datos para agendar una demostración personalizada
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
            {/* Mensaje informativo */}
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/90 text-sm font-medium mb-1">
                    Te contactaremos pronto
                  </p>
                  <p className="text-white/70 text-xs">
                    Con los datos proporcionados, nuestro equipo te contactará para agendar una demostración personalizada de nuestras capacidades.
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

            {/* Correo electrónico */}
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                <Mail className="w-4 h-4 inline mr-2" />
                Correo electrónico
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-primary transition-colors"
                  required
                />
                {email && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    {isValidEmail ? (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    ) : (
                      <X className="w-5 h-5 text-red-400" />
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* ¿Tienes clínica veterinaria? */}
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                <Briefcase className="w-4 h-4 inline mr-2" />
                ¿Tienes clínica veterinaria o pet shop?
              </label>
              <select
                value={hasClinic}
                onChange={(e) => setHasClinic(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                style={{
                  appearance: 'none',
                }}
                required
              >
                <option value="" className="bg-background text-white">Selecciona una opción</option>
                {clinicOptions.map((option) => (
                  <option key={option} value={option} className="bg-background text-white">
                    {option}
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
              disabled={!isValidPhone || !isValidEmail || !fullName || !hasClinic || isLoading}
              className="w-full bg-gradient-primary hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              <SendHorizontal className="w-5 h-5 mr-2" />
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Procesando...
                </div>
              ) : (
                'Enviar información'
              )}
            </Button>
          </form>
            </>
          ) : (
            <>
              {/* Mensaje de éxito */}
              <div className="text-center mb-8">
                <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  ¡Gracias por tu interés!
                </h3>
                <p className="text-white/80">
                  Tu información ha sido enviada exitosamente. Te contactaremos pronto.
                </p>
              </div>

              {/* Cards de opciones */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Card: Ver presentación */}
                <div 
                  onClick={handleViewPresentation}
                  className="group bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-blue-400/30 rounded-xl p-6 cursor-pointer hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                      <Presentation className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2 text-center">
                    Ver presentación
                  </h4>
                  <p className="text-white/70 text-sm text-center mb-4">
                    Descubre todas las funcionalidades de Hubu en nuestra presentación interactiva
                  </p>
                  <div className="flex items-center justify-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Ver ahora
                  </div>
                </div>

                {/* Card: Unirse a WhatsApp */}
                <div 
                  onClick={handleJoinWhatsApp}
                  className="group bg-gradient-to-br from-green-500/20 to-emerald-600/20 border border-green-400/30 rounded-xl p-6 cursor-pointer hover:border-green-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20"
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                      <MessageCircle className="w-6 h-6 text-green-400" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2 text-center">
                    Unirse a la comunidad
                  </h4>
                  <p className="text-white/70 text-sm text-center mb-4">
                    Conecta con otros profesionales veterinarios en nuestra comunidad de WhatsApp
                  </p>
                  <div className="flex items-center justify-center text-green-400 text-sm font-medium group-hover:text-green-300 transition-colors">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Unirse ahora
                  </div>
                </div>
              </div>

              {/* Botón para cerrar */}
              <div className="mt-8 text-center">
                <Button
                  onClick={onClose}
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Cerrar
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DemoModal; 