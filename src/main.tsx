import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// En /asesor el script inline de index.html ya está redirigiendo a WhatsApp:
// no montamos la app para que no alcance a pintarse nada.
if (!window.__hubuAsesorRedirecting) {
  createRoot(document.getElementById("root")!).render(<App />);
}
