import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const WhatsAppBubble = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    // URL de WhatsApp con mensaje predefinido
    const message = encodeURIComponent("¡Hola! Me interesa conocer más sobre Hubu y sus servicios para clínicas veterinarias.");
    const phoneNumber = "573102523739"; // Número de teléfono de Hubu
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Burbuja flotante de WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Tooltip que aparece al hacer hover */}
        <div className={`absolute bottom-16 right-0 bg-gray-900 text-white px-3 py-2 rounded-lg shadow-lg transition-all duration-300 whitespace-nowrap transform translate-y-2 ${
          isOpen ? 'opacity-0 pointer-events-none translate-y-0' : 'opacity-0 group-hover:opacity-100 group-hover:translate-y-0'
        }`}>
          <span className="text-sm">¡Chatea con nosotros!</span>
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>

        {/* Botón principal de WhatsApp */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center transform hover:scale-110"
          aria-label="Abrir chat de WhatsApp"
          style={{
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)'
          }}
        >
          <MessageCircle className="w-8 h-8 text-white" />
          
          {/* Indicador de notificación */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
            <span className="text-xs text-white font-bold">1</span>
          </div>
        </button>

        {/* Panel expandido */}
        {isOpen && (
          <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
            {/* Header del chat */}
            <div className="bg-green-500 text-white px-4 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Hubu</h4>
                  <p className="text-xs text-green-100">En línea</p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="p-1 hover:bg-green-600 rounded-full transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Contenido del chat */}
            <div className="p-4 space-y-4">
              {/* Mensaje de bienvenida */}
              <div className="flex items-start space-x-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-3 h-3 text-white" />
                </div>
                <div className="bg-gray-100 rounded-lg px-3 py-2 max-w-xs">
                  <p className="text-sm text-gray-800">
                    ¡Hola! 👋 Soy el asistente de Hubu. ¿En qué puedo ayudarte con nuestros servicios para clínicas veterinarias?
                  </p>
                </div>
              </div>

              {/* Botones de acción rápida */}
              <div className="space-y-2">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-105 shadow-md hover:shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)'
                  }}
                >
                  <Send className="w-4 h-4" />
                  <span className="text-sm font-medium">Abrir WhatsApp</span>
                </button>
                
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={handleWhatsAppClick}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg transition-all duration-200 text-xs transform hover:scale-105"
                  >
                    📅 Agendar demo
                  </button>
                  <button
                    onClick={handleWhatsAppClick}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg transition-all duration-200 text-xs transform hover:scale-105"
                  >
                    💬 Más información
                  </button>
                </div>
              </div>

              {/* Footer */}
              <div className="text-center">
                <p className="text-xs text-gray-500">
                  Respuesta rápida garantizada
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default WhatsAppBubble;
