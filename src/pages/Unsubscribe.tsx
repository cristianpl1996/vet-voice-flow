import { useState } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { CheckCircle, XCircle, Loader2, MailX, Menu, X } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const Unsubscribe = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("mail");
  const token = searchParams.get("token");
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [reason, setReason] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUnsubscribe = async () => {
    if (!email || !token) {
      setErrorMessage("Enlace inválido. El correo o token no se encontraron en la URL.");
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch(
        `https://api.hubu.com.co/email/unsubscribe`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email ? decodeURIComponent(email) : null,
            token,
            reason: reason.trim() || null,
          }),
        }
      );

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data?.message || `Error ${response.status}`);
      }

      setStatus("success");
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Ocurrió un error inesperado.";
      setErrorMessage(message);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header — idéntico al de la landing */}
      <header
        className="fixed top-0 left-0 right-0 z-50 glass"
        style={{ border: "none" }}
      >
        <div className="w-full">
          <div className="container mx-auto max-w-6xl px-4 md:px-6 py-2 flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <button
                onClick={() => navigate("/")}
                className="bg-transparent border-none cursor-pointer"
              >
                <Logo />
              </button>
            </div>

            <div className="hidden md:block">
              <Button
                size="sm"
                className="px-5 py-2 text-sm rounded-full bg-gradient-primary text-white shadow-lg hover:opacity-90 transition-opacity"
                onClick={() => navigate("/")}
              >
                Inicio
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right h-4 w-4 ml-2"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-white/10 container mx-auto max-w-6xl px-4 md:px-6">
              <nav className="flex flex-col space-y-4 pt-4">
                <Button
                  size="lg"
                  className="px-8 py-4 text-lg bg-gradient-primary hover:opacity-90 transition-opacity"
                  onClick={() => { navigate("/"); setIsMenuOpen(false); }}
                >
                  Inicio{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right h-5 w-5"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-4 py-16 pt-32">
        <div className="w-full max-w-md animate-fade-in-up">
          {/* Card */}
          <div className="glass rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            {/* Gradient top bar */}
            <div
              className="h-1 w-full"
              style={{
                background:
                  "linear-gradient(90deg, hsl(245, 79%, 66%), hsl(320, 85%, 60%))",
              }}
            />

            <div className="p-8 space-y-6">
              {/* Icon + title */}
              <div className="text-center space-y-3">
                <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                  <MailX className="w-8 h-8 text-primary" />
                </div>
                <h1 className="font-heading text-2xl font-black text-white">
                  Darse de baja
                </h1>
                <p className="text-foreground-muted text-sm leading-relaxed">
                  Lamentamos que desees dejarnos. Si confirmas la baja, no
                  volverás a recibir correos electrónicos de nuestras campañas y
                  promociones.
                </p>
                {email && (
                  <p className="text-sm">
                    <span className="text-foreground-muted">Correo: </span>
                    <span className="gradient-text font-semibold">{email ? decodeURIComponent(email) : ""}</span>
                  </p>
                )}
              </div>

              {/* States */}
              {status === "idle" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-foreground-muted mb-2">
                      ¿Deseas compartir el motivo?{" "}
                      <span className="text-foreground-muted/60">(Opcional)</span>
                    </label>
                    <textarea
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-primary transition-colors resize-none text-sm"
                      rows={3}
                      placeholder="Cuéntanos por qué te vas..."
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      maxLength={500}
                    />
                  </div>

                  <Button
                    onClick={handleUnsubscribe}
                    className="w-full py-3 text-sm font-semibold rounded-xl text-white hover:opacity-90 transition-opacity"
                    style={{
                      background:
                        "linear-gradient(90deg, hsl(245, 79%, 66%), hsl(320, 85%, 60%))",
                    }}
                  >
                    Confirmar baja
                  </Button>

                  <Link
                    to="/"
                    className="block text-center text-sm text-foreground-muted hover:text-white transition-colors"
                  >
                    Cancelar
                  </Link>
                </div>
              )}

              {status === "loading" && (
                <div className="flex flex-col items-center gap-4 py-4">
                  <Loader2 className="w-10 h-10 text-primary animate-spin" />
                  <p className="text-foreground-muted text-sm">
                    Procesando tu solicitud...
                  </p>
                </div>
              )}

              {status === "success" && (
                <div className="flex flex-col items-center gap-4 py-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                    <CheckCircle className="w-9 h-9 text-green-400" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-white font-semibold">¡Listo!</p>
                    <p className="text-foreground-muted text-sm">
                      Has sido dado de baja exitosamente. Ya no recibirás
                      correos de nuestras campañas.
                    </p>
                  </div>
                  <Link
                    to="/"
                    className="mt-2 text-sm text-primary hover:underline transition-colors"
                  >
                    Volver al inicio
                  </Link>
                </div>
              )}

              {status === "error" && (
                <div className="flex flex-col items-center gap-4 py-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center">
                    <XCircle className="w-9 h-9 text-red-400" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-white font-semibold">
                      Algo salió mal
                    </p>
                    <p className="text-foreground-muted text-sm">
                      {errorMessage}
                    </p>
                  </div>
                  <Button
                    onClick={() => setStatus("idle")}
                    variant="outline"
                    className="mt-2 text-sm border-white/20 text-white hover:bg-white/10"
                  >
                    Intentar de nuevo
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Footer note */}
          <p className="text-center text-xs text-foreground-muted/50 mt-6">
            © {new Date().getFullYear()} Hubu · Todos los derechos reservados
          </p>
        </div>
      </main>
    </div>
  );
};

export default Unsubscribe;
