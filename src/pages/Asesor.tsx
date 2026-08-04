import { useEffect } from "react";

/**
 * Ruta /asesor?id=<celular>
 *
 * La redirección real la hace el script inline del <head> de index.html, que corre
 * antes de que cargue el bundle. Esta página sólo cubre el caso de navegación del
 * lado del cliente (por ejemplo un <Link> interno) y nunca renderiza nada.
 */
const Asesor = () => {
  useEffect(() => {
    if (window.__hubuAsesorRedirect) window.__hubuAsesorRedirect();
    else window.location.replace("/");
  }, []);

  return null;
};

export default Asesor;
