/// <reference types="vite/client" />

interface Window {
  /** Definido por el script inline de index.html (redirección /asesor -> WhatsApp). */
  __hubuAsesorRedirect?: () => void;
  /** true cuando la carga actual ya está redirigiendo, para no montar React. */
  __hubuAsesorRedirecting?: boolean;
}
