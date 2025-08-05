# Hubu Landing Page

Una landing page moderna inspirada en el diseño de Better Code, con fondo oscuro, mejor UX/UI y responsive design.

## Características

- 🎨 **Diseño moderno**: Fondo oscuro con gradientes y efectos glass
- 📱 **Responsive**: Se adapta perfectamente a todos los dispositivos
- ⚡ **Performance**: Optimizada para velocidad de carga
- 🎯 **UX/UI mejorada**: Animaciones suaves y transiciones elegantes
- 🔧 **Fácil personalización**: Componentes modulares y configurables

## Personalización

### Reemplazar el Logo

Para reemplazar el logo placeholder con tu logo real:

1. **Opción 1 - Usando imagen:**
   ```tsx
   // En src/components/Logo.tsx
   const Logo = ({ className = "", showText = true }: LogoProps) => {
     return (
       <div className={`flex items-center space-x-2 ${className}`}>
         <img 
           src="/tu-logo.png" 
           alt="Tu Logo" 
           className="w-8 h-8 object-contain"
         />
         {showText && (
           <span className="text-xl font-bold text-white">Tu Marca</span>
         )}
       </div>
     );
   };
   ```

2. **Opción 2 - Usando SVG:**
   ```tsx
   // En src/components/Logo.tsx
   const Logo = ({ className = "", showText = true }: LogoProps) => {
     return (
       <div className={`flex items-center space-x-2 ${className}`}>
         <svg className="w-8 h-8" viewBox="0 0 100 100">
           {/* Tu SVG aquí */}
         </svg>
         {showText && (
           <span className="text-xl font-bold text-white">Tu Marca</span>
         )}
       </div>
     );
   };
   ```

### Personalizar Colores

Los colores se definen en `src/index.css`:

```css
:root {
  --primary: 194 100% 44%; /* Azul principal */
  --secondary: 306 70% 49%; /* Rosa/morado */
  --background: 220 64% 8%; /* Fondo oscuro */
  /* ... más colores */
}
```

### Personalizar Contenido

El contenido principal está en `src/pages/Index.tsx`. Puedes modificar:

- Títulos y subtítulos
- Descripciones de servicios
- Textos de CTA
- Información de contacto

## Estructura del Proyecto

```
src/
├── components/
│   ├── Logo.tsx          # Componente del logo
│   └── ui/               # Componentes de UI (shadcn/ui)
├── pages/
│   └── Index.tsx         # Página principal
├── index.css             # Estilos globales y variables CSS
└── main.tsx             # Punto de entrada
```

## Tecnologías Utilizadas

- **React 18** con TypeScript
- **Vite** para build y desarrollo
- **Tailwind CSS** para estilos
- **shadcn/ui** para componentes
- **Lucide React** para iconos

## Scripts Disponibles

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## Mejoras Implementadas

### UX/UI
- ✅ Fondo oscuro moderno
- ✅ Efectos glass y gradientes
- ✅ Animaciones suaves
- ✅ Hover effects
- ✅ Scrollbar personalizada

### Responsive Design
- ✅ Mobile-first approach
- ✅ Menú hamburguesa para móviles
- ✅ Grids adaptativos
- ✅ Tipografía responsive

### Performance
- ✅ Componentes optimizados
- ✅ CSS variables para consistencia
- ✅ Lazy loading de componentes
- ✅ Animaciones CSS puras

## Próximos Pasos

1. **Reemplazar logo**: Usa el componente `Logo.tsx`
2. **Personalizar contenido**: Modifica textos en `Index.tsx`
3. **Ajustar colores**: Cambia variables en `index.css`
4. **Agregar analytics**: Integra Google Analytics o similar
5. **SEO**: Optimiza meta tags y estructura

## Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## Licencia

MIT License - ver archivo LICENSE para detalles.
