import { Code } from "lucide-react";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo = ({ className = "", showText = true }: LogoProps) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Robot Logo */}
      <div className="w-8 h-8 relative">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Cuerpo del robot (morado vibrante) */}
          <rect x="20" y="30" width="60" height="50" rx="8" fill="#A855F7" />
          
          {/* Cabeza del robot (morado vibrante) */}
          <rect x="25" y="15" width="50" height="25" rx="6" fill="#A855F7" />
          
          {/* Cara del robot (verde vibrante) */}
          <rect x="30" y="20" width="40" height="15" rx="4" fill="#10B981" stroke="white" strokeWidth="1" />
          
          {/* Ojos (curvas sonrientes) */}
          <path d="M 35 25 Q 37 27 39 25" stroke="white" strokeWidth="1.5" fill="none" />
          <path d="M 55 25 Q 57 27 59 25" stroke="white" strokeWidth="1.5" fill="none" />
          
          {/* Triángulo en el cuerpo (verde vibrante) */}
          <polygon points="50,45 45,55 55,55" fill="#10B981" />
          
          {/* Brazos */}
          <rect x="15" y="40" width="8" height="20" rx="4" fill="#A855F7" />
          <rect x="77" y="40" width="8" height="20" rx="4" fill="#A855F7" />
          
          {/* Segmentos grises en los brazos */}
          <rect x="16" y="45" width="6" height="10" rx="2" fill="#9CA3AF" />
          <rect x="78" y="45" width="6" height="10" rx="2" fill="#9CA3AF" />
          
          {/* Base */}
          <rect x="30" y="80" width="40" height="8" rx="4" fill="#374151" />
        </svg>
      </div>
      
      {/* Texto del logo */}
      {showText && (
        <div className="text-xl font-bold text-white">
          <span className="text-gray-300">hub</span>
          <span className="text-purple-400">u</span>
        </div>
      )}
    </div>
  );
};

export default Logo; 