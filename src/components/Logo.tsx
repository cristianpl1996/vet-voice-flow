import { Code } from "lucide-react";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo = ({ className = "", showText = true }: LogoProps) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Logo Image */}
      <div className="relative mb-2" style={{ width: "auto", height: "3.3rem" }}>
        <img 
          src="/logo.png" 
          alt="Logo" 
          className="w-full h-full object-contain"
          onError={(e) => {
            // Fallback si la imagen no se carga
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              parent.innerHTML = '<div class="w-full h-full bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center"><Code class="w-5 h-5 text-white" /></div>';
            }
          }}
        />
      </div>
    </div>
  );
};

export default Logo; 