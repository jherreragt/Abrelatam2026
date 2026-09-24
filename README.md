# Abrelatam 2026 — Sitio web oficial

[![Open in Bolt](https://bolt.new/static/open-in-bolt.svg)](https://bolt.new/~/sb1-kdw9ejeg)

Sitio web de la cumbre **Abrelatam ConDatos 2026**, evento que reúne a comunidades de datos abiertos, transparencia y tecnología cívica de Latinoamérica. El sitio incluye información del evento, agenda, pre-registro de participantes, convocatorias, eventos paralelos, zona gastronómica, área de prensa, patrocinadores y un panel de administración para gestionar los registros.

---

## Stack tecnológico

| Capa        | Tecnología                                              |
| ----------- | ------------------------------------------------------- |
| Framework   | React 18 + TypeScript                                   |
| Bundler     | Vite 5                                                  |
| Estilos     | Tailwind CSS 3 + PostCSS                                |
| Enrutado    | React Router 7                                          |
| Iconos      | lucide-react                                            |
| Base de datos / Auth | Supabase (Postgres + RLS)                     |
| Hosting     | Bolt (despliegue automático)                            |

---

## Requisitos

- **Node.js** 18 o superior
- **npm** 9+ (incluido con Node 18)
- Una cuenta de Supabase con un proyecto provisionado

---

## Estructura del proyecto

```
Abrelatam2026/
├── public/              # Archivos estáticos (logos, iconos, fuentes, imágenes)
├── src/
│   ├── components/      # Componentes reutilizables (Navbar, Footer, Card, etc.)
│   ├── context/         # Proveedores de contexto (Auth, Language, Theme)
│   ├── data/            # Datos estáticos (entradas del blog)
│   ├── hooks/           # Hooks personalizados (useSEO)
│   ├── layouts/         # Layouts de página (MainLayout)
│   ├── lib/             # Utilidades (supabase client, assetPath)
│   ├── pages/           # Páginas/rutas del sitio
│   ├── router/          # Definición de rutas
│   ├── types/           # Tipos TypeScript
│   └── assets/          # Assets importados desde código
├── supabase/
│   └── migrations/      # Migraciones de base de datos
├── docs/                # Documentación detallada del proyecto
└── README.md
```

---

## Instalación

```bash
# Clonar el repositorio
git clone <url-del-repo>
cd Abrelatam2026

# Instalar dependencias
npm install
```

---

## Variables de entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
VITE_SUPABASE_URL=https://<tu-proyecto>.supabase.co
VITE_SUPABASE_ANON_KEY=<tu-anon-key>
```

> En Bolt estas variables ya vienen preconfiguradas automáticamente.

---

## Ejecutar en desarrollo

```bash
npm run dev
```

El servidor de desarrollo se inicia en `http://localhost:5173`.

---

## Compilar para producción

```bash
npm run build
```

Los archivos generados se guardan en `dist/`.

Para previsualizar el build localmente:

```bash
npm run preview
```

---

## Lint y type-check

```bash
npm run lint
npm run typecheck
```

---

## Despliegue

El proyecto está configurado para desplegarse automáticamente en **Bolt**. Al guardar cambios, Bolt detecta las actualizaciones y publica el sitio.

Para despliegue manual:

1. Ejecuta `npm run build`
2. Sube el contenido de `dist/` a tu proveedor de hosting estático (Netlify, Vercel, Cloudflare Pages, etc.)
3. Configura las variables de entorno en el panel de tu proveedor

---

## Base de datos (Supabase)

El proyecto usa Supabase como backend. La tabla principal es `registrations`, que almacena los pre-registros de participantes:

| Campo                        | Tipo      | Descripción                     |
| ---------------------------- | --------- | ------------------------------- |
| `id`                         | UUID      | Identificador único (PK)        |
| `nombre_apellido`            | TEXT      | Nombre completo                 |
| `correo_electronico`         | TEXT      | Email (único)                   |
| `pais`                       | TEXT      | País de origen                  |
| `organizacion`               | TEXT      | Organización                    |
| `sector`                     | TEXT      | Sector laboral                  |
| `rango_edad`                 | TEXT      | Rango de edad                   |
| `preferencias_alimentacion`  | TEXT      | Preferencias alimentarias       |
| `financiamiento`             | TEXT      | Tipo de financiamiento          |
| `politica_datos`             | BOOLEAN   | Aceptación de política de datos |

La tabla tiene **Row Level Security (RLS)** activado:
- Inserción pública (`anon`) para que cualquier visitante pueda pre-registrarse
- Lectura, actualización y eliminación solo para usuarios autenticados (panel admin)

---

## Rutas del sitio

| Ruta                          | Página                  |
| ----------------------------- | ----------------------- |
| `/`                           | Inicio                  |
| `/sobre`                      | Sobre el evento         |
| `/agenda`                     | Agenda                  |
| `/convocatorias`              | Convocatorias           |
| `/side-events`                | Eventos paralelos       |
| `/registro`                   | Pre-registro            |
| `/proponer-sesion`            | Proponer una sesión     |
| `/datos-utiles-y-logistica`   | Datos útiles y logística|
| `/codigo-conducta`            | Código de conducta      |
| `/guia-participantes`         | Guía de participantes   |
| `/patrocinadores`             | Patrocinadores          |
| `/prensa`                     | Prensa                  |
| `/contacto`                   | Contacto                |
| `/datos-arte`                 | Datos de arte           |
| `/voluntarios`                | Voluntarios             |
| `/zona-gastronomica`          | Zona gastronómica       |
| `/apoyos`                     | Apoyos del evento       |
| `/admin`                      | Panel de administración|

---

## Documentación detallada

La documentación completa del proyecto se encuentra en el directorio `docs/`:

| Archivo                          | Contenido                          |
| -------------------------------- | ---------------------------------- |
| `docs/01-requerimientos.md`      | Requerimientos del proyecto        |
| `docs/02-arquitectura-informacion.md` | Arquitectura de información  |
| `docs/03-arquitectura-tecnica.md`| Arquitectura técnica               |
| `docs/04-instalacion.md`         | Guía de instalación detallada      |
| `docs/05-configuracion.md`       | Configuración del proyecto         |
| `docs/06-despliegue.md`          | Guía de despliegue                 |
| `docs/07-administracion.md`      | Administración del sistema         |
| `docs/08-proteccion-datos.md`    | Protección de datos y privacidad   |
| `docs/09-pruebas.md`             | Pruebas y calidad                  |
| `docs/10-mantenimiento.md`       | Mantenimiento y soporte            |

---

## Licencia

Este proyecto es desarrollado para la cumbre Abrelatam ConDatos 2026. Todos los derechos reservados a los organizadores del evento.
