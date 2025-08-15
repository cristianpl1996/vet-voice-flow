import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0D0D12 0%, #1A1A1F 100%)' }}>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-white mb-4">Oops! Página no encontrada</p>
        <a href="/" className="text-primary hover:text-primary/80 underline">
          Volver a la página principal
        </a>
      </div>
    </div>
  );
};

export default NotFound;
