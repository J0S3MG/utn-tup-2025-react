# Trabajo Práctico: Aplicación de Recetas de Cocina
## React + Material-UI + React Router DOM

### 📋 Información General

**Asignatura:** Programación IV
**Modalidad:** Individual  

---

## 🎯 Objetivos de Aprendizaje

Al completar este trabajo práctico, el estudiante será capaz de:

1. ✅ Crear una aplicación React multi-página utilizando React Router DOM
2. ✅ Implementar Context API para manejo de estado global
3. ✅ Utilizar Material-UI para crear interfaces modernas y responsivas
4. ✅ Trabajar con datos JSON locales
5. ✅ Aplicar buenas prácticas de componentización y organización de código
6. ✅ Implementar navegación entre páginas con parámetros dinámicos
7. ✅ Crear layouts responsivos utilizando Grid y Stack de Material-UI

---

## 📝 Descripción del Proyecto

Deberás desarrollar una **aplicación web de recetas de cocina** que permita visualizar un catálogo de recetas y ver el detalle de cada una. La aplicación debe tener una interfaz moderna, intuitiva y completamente responsive.

### Funcionalidades Principales

#### 1. **Página de Listado de Recetas** (`/recetas`)
- Mostrar todas las recetas disponibles en formato de tarjetas (cards)
- Cada tarjeta debe incluir:
  - Imagen de la receta
  - Título de la receta
  - Tiempo de preparación
  - Dificultad (Fácil, Media, Difícil)
  - Número de porciones
  - Botón "Ver Receta" que navega al detalle
- Las tarjetas deben mostrarse en un grid responsive:
  - 1 columna en móvil (xs)
  - 2 columnas en tablet (sm y md)
  - 3 columnas en desktop (lg y xl)

#### 2. **Página de Detalle de Receta** (`/recetas/:id`)
- Mostrar la información completa de una receta específica:
  - Imagen destacada (tamaño grande)
  - Título de la receta
  - Descripción breve
  - Información general (tiempo, dificultad, porciones)
  - **Lista de Ingredientes:**
    - Cantidad
    - Unidad de medida
    - Nombre del ingrediente
  - **Proceso de Preparación:**
    - Pasos numerados
    - Instrucciones claras para cada paso
  - Botón "Volver al Listado" para regresar

#### 3. **Navegación**
- Barra de navegación superior presente en todas las páginas
- Debe incluir:
  - Logo o nombre de la aplicación
  - Enlaces de navegación
  - Diseño responsive (menú hamburguesa opcional en móvil)

---

## 🏗️ Estructura del Proyecto

### Estructura de Carpetas Requerida

```
src/
├── components/
│   ├── recetas/
│   │   ├── RecetaCard.jsx          # Tarjeta individual de receta
│   │   ├── RecetasList.jsx         # Lista de todas las recetas
│   │   ├── RecetaDetalle.jsx       # Vista detallada de una receta
│   │   └── IngredientesList.jsx    # Lista de ingredientes
│   └── layout/
│       └── Navbar.jsx              # Barra de navegación
├── contexts/
│   └── RecetasContext.jsx          # Context para manejo de recetas
├── data/
│   └── recetas.json                # Archivo JSON con las recetas
├── pages/
│   ├── RecetasListPage.jsx         # Página de listado
│   └── RecetaDetallePage.jsx       # Página de detalle
├── App.jsx                          # Configuración de rutas
└── main.jsx                         # Punto de entrada
```

### Arquitectura de Componentes

```
App
├── Navbar (común en todas las páginas)
└── Routes
    ├── RecetasListPage
    │   └── RecetasList
    │       └── RecetaCard (múltiples instancias)
    └── RecetaDetallePage
        └── RecetaDetalle
            └── IngredientesList
```

---

## 📊 Estructura de Datos

### Archivo `recetas.json`

El archivo debe contener un array de objetos con la siguiente estructura:

```json
[
  {
    "id": 1,
    "titulo": "Pasta Carbonara",
    "descripcion": "Receta clásica italiana de pasta con salsa cremosa de huevo y panceta",
    "imagen": "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400",
    "tiempoPreparacion": "30 minutos",
    "dificultad": "Media",
    "porciones": 4,
    "ingredientes": [
      { "cantidad": "400", "unidad": "g", "nombre": "Spaghetti" },
      { "cantidad": "200", "unidad": "g", "nombre": "Panceta o tocino" },
      { "cantidad": "4", "unidad": "unidades", "nombre": "Huevos" },
      { "cantidad": "100", "unidad": "g", "nombre": "Queso parmesano rallado" },
      { "cantidad": "1", "unidad": "pizca", "nombre": "Pimienta negra" },
      { "cantidad": "1", "unidad": "pizca", "nombre": "Sal" }
    ],
    "pasos": [
      "Cocinar la pasta en agua hirviendo con sal hasta que esté al dente",
      "Mientras tanto, cortar la panceta en cubos pequeños y dorarla en una sartén",
      "Batir los huevos con el queso parmesano rallado y pimienta",
      "Escurrir la pasta reservando un poco del agua de cocción",
      "Mezclar la pasta caliente con la panceta fuera del fuego",
      "Agregar la mezcla de huevo y queso, mezclando rápidamente",
      "Si es necesario, agregar un poco del agua de cocción para crear una salsa cremosa",
      "Servir inmediatamente con más queso parmesano y pimienta"
    ],
    "categoria": "Platos Principales"
  },
  {
    "id": 2,
    "titulo": "Ensalada César",
    "descripcion": "Ensalada fresca con lechuga romana, crutones caseros y aderezo césar",
    "imagen": "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400",
    "tiempoPreparacion": "20 minutos",
    "dificultad": "Fácil",
    "porciones": 2,
    "ingredientes": [
      { "cantidad": "1", "unidad": "unidad", "nombre": "Lechuga romana grande" },
      { "cantidad": "100", "unidad": "g", "nombre": "Pechuga de pollo" },
      { "cantidad": "50", "unidad": "g", "nombre": "Queso parmesano" },
      { "cantidad": "2", "unidad": "tazas", "nombre": "Crutones" },
      { "cantidad": "4", "unidad": "cucharadas", "nombre": "Aderezo césar" }
    ],
    "pasos": [
      "Lavar y secar la lechuga romana",
      "Cortar la lechuga en trozos medianos",
      "Cocinar la pechuga de pollo a la plancha y cortarla en tiras",
      "En un bowl grande, mezclar la lechuga con el aderezo",
      "Agregar el pollo, crutones y queso parmesano",
      "Mezclar bien y servir inmediatamente"
    ],
    "categoria": "Ensaladas"
  }
]
```

**Nota:** El JSON debe incluir **mínimo 6 recetas diferentes** con datos completos.

---

## 🛠️ Requisitos Técnicos

### 1. **Dependencias Requeridas**

Tu proyecto debe incluir las siguientes dependencias (ya instaladas en el proyecto guía):

```json
{
  "dependencies": {
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-router-dom": "^7.8.2",
    "@mui/material": "^7.3.2",
    "@mui/icons-material": "^7.3.2",
    "@emotion/react": "^11.14.0",
    "@emotion/styled": "^11.14.1"
  }
}
```

### 2. **React Router DOM**

Debes implementar las siguientes rutas:

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/` | `RecetasListPage` | Página principal (listado) |
| `/recetas` | `RecetasListPage` | Listado de recetas |
| `/recetas/:id` | `RecetaDetallePage` | Detalle de una receta específica |

**Ejemplo de implementación:**

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<RecetasListPage />} />
        <Route path="/recetas" element={<RecetasListPage />} />
        <Route path="/recetas/:id" element={<RecetaDetallePage />} />
      </Routes>
    </Router>
  );
}
```

### 3. **Context API**

Debes crear un Context para manejar las recetas:

```jsx
// RecetasContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

const RecetasContext = createContext(null);

export const RecetasProvider = ({ children }) => {
  const [recetas, setRecetas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Cargar recetas desde el archivo JSON
    fetch('/src/data/recetas.json')
      .then(response => response.json())
      .then(data => {
        setRecetas(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error al cargar recetas:', error);
        setIsLoading(false);
      });
  }, []);

  // Función para obtener una receta por ID
  const getRecetaById = (id) => {
    return recetas.find(receta => receta.id === parseInt(id));
  };

  return (
    <RecetasContext.Provider value={{ recetas, isLoading, getRecetaById }}>
      {children}
    </RecetasContext.Provider>
  );
};

export const useRecetas = () => {
  return useContext(RecetasContext);
};
```

### 4. **Componentes de Material-UI Requeridos**

Debes utilizar **al menos** los siguientes componentes de Material-UI:

#### Para el Listado:
- `Container`: Contenedor principal
- `Grid`: Sistema de grillas responsive
- `Card`, `CardMedia`, `CardContent`, `CardActions`: Para las tarjetas de recetas
- `Typography`: Para textos con estilos consistentes
- `Button`: Botones de acción
- `Chip`: Para mostrar dificultad, tiempo, etc.
- `Stack`: Para organizar elementos verticalmente/horizontalmente

#### Para el Detalle:
- `Container`, `Paper`: Contenedor principal
- `Typography`: Títulos y textos
- `Divider`: Separadores visuales
- `List`, `ListItem`, `ListItemText`: Para ingredientes y pasos
- `Chip`: Para etiquetas de información
- `IconButton`: Botones con iconos
- Iconos de `@mui/icons-material`: `AccessTime`, `Restaurant`, `People`, etc.

### 5. **Navegación**

#### Navegar al detalle:
```jsx
import { useNavigate } from 'react-router-dom';

function RecetaCard({ receta }) {
  const navigate = useNavigate();

  const handleVerReceta = () => {
    navigate(`/recetas/${receta.id}`);
  };

  return (
    <Card>
      {/* Contenido de la card */}
      <CardActions>
        <Button onClick={handleVerReceta}>Ver Receta</Button>
      </CardActions>
    </Card>
  );
}
```

#### Obtener el ID de la URL:
```jsx
import { useParams } from 'react-router-dom';

function RecetaDetallePage() {
  const { id } = useParams();
  const { getRecetaById } = useRecetas();
  const receta = getRecetaById(id);

  // Renderizar detalles...
}
```

---

## 🎨 Diseño y UX

### Requisitos de Diseño

1. **Responsive Design:**
   - Mobile-first approach
   - Debe verse bien en dispositivos de 320px hasta 1920px de ancho
   - Las imágenes deben adaptarse al contenedor

2. **Paleta de Colores:**
   - Usa los colores de Material-UI o personaliza el tema
   - Mantén consistencia en toda la aplicación

3. **Tipografía:**
   - Usa las variantes de Typography de Material-UI:
     - `h3` o `h4` para títulos principales
     - `h5` o `h6` para subtítulos
     - `body1` para texto normal
     - `body2` para texto secundario

4. **Espaciado:**
   - Usa el sistema de espaciado de MUI (múltiplos de 8px)
   - Padding consistente: `sx={{ p: 2 }}`, `sx={{ py: 3 }}`
   - Margin: `sx={{ mb: 2 }}`, `sx={{ mt: 4 }}`

5. **Cards:**
   - Elevation consistente (2 o 3)
   - Border radius estándar
   - Hover effects opcionales

### Ejemplo de Card de Receta

```jsx
function RecetaCard({ receta }) {
  const navigate = useNavigate();

  return (
    <Card sx={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      transition: 'transform 0.2s',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: 4
      }
    }}>
      <CardMedia
        component="img"
        height="200"
        image={receta.imagen}
        alt={receta.titulo}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" gutterBottom>
          {receta.titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {receta.descripcion}
        </Typography>
        <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
          <Chip 
            icon={<AccessTime />} 
            label={receta.tiempoPreparacion} 
            size="small" 
            variant="outlined"
          />
          <Chip 
            label={receta.dificultad}
            size="small"
            color={
              receta.dificultad === 'Fácil' ? 'success' :
              receta.dificultad === 'Media' ? 'warning' : 'error'
            }
          />
        </Stack>
        <Stack direction="row" spacing={1}>
          <Chip 
            icon={<People />} 
            label={`${receta.porciones} porciones`}
            size="small"
            variant="outlined"
          />
        </Stack>
      </CardContent>
      <CardActions>
        <Button 
          size="small" 
          variant="contained" 
          fullWidth
          onClick={() => navigate(`/recetas/${receta.id}`)}
        >
          Ver Receta
        </Button>
      </CardActions>
    </Card>
  );
}
```

---

## ✅ Criterios de Evaluación

### Funcionalidad (40%)

| Criterio | Puntos |
|----------|--------|
| Listado de recetas funcional con datos del JSON | 10 |
| Navegación al detalle de receta funciona correctamente | 10 |
| Detalle muestra toda la información requerida | 10 |
| Context API implementado correctamente | 10 |

### Diseño y UX (30%)

| Criterio | Puntos |
|----------|--------|
| Diseño responsive en mobile, tablet y desktop | 10 |
| Uso correcto de Material-UI (Cards, Grid, Stack, etc.) | 10 |
| Interfaz intuitiva y atractiva visualmente | 10 |

### Código y Organización (20%)

| Criterio | Puntos |
|----------|--------|
| Estructura de carpetas según lo especificado | 5 |
| Componentes bien organizados y reutilizables | 5 |
| Código limpio y comentado cuando sea necesario | 5 |
| Buenas prácticas de React (hooks, props, etc.) | 5 |

### Extras y Calidad (10%)

| Criterio | Puntos |
|----------|--------|
| README.md con instrucciones de instalación y uso | 3 |
| Manejo de estados de carga (loading) | 2 |
| Manejo de errores (receta no encontrada) | 2 |
| Animaciones o transiciones sutiles | 3 |

---

## 🚀 Instrucciones de Entrega

### 1. **Formato de Entrega**

Debes entregar el proyecto de una de las siguientes formas:

**Opción A: Repositorio Git (Recomendado)**
- Crea un repositorio público en GitHub/GitLab
- Incluye un archivo `README.md` con:
  - Nombre del proyecto
  - Descripción
  - Instrucciones de instalación
  - Instrucciones de ejecución
  - Screenshots o GIF del proyecto funcionando
- Envía el link del repositorio

**Opción B: Archivo Comprimido**
- Comprimir la carpeta del proyecto (sin `node_modules`)
- Nombrar el archivo: `TP_Recetas_ApellidoNombre.zip`
- Incluir `README.md` con instrucciones

### 2. **README.md Requerido**

```markdown
# Aplicación de Recetas - [Tu Nombre]

## Descripción
Breve descripción del proyecto (2-3 líneas)

## Tecnologías Utilizadas
- React 19.1.1
- React Router DOM 7.8.2
- Material-UI 7.3.2
- Vite

## Instalación

1. Clonar el repositorio
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Ejecutar el proyecto:
   ```bash
   npm run dev
   ```
4. Abrir en el navegador: `http://localhost:5173`

## Estructura del Proyecto
(Describir brevemente la estructura de carpetas)

## Funcionalidades
- Listado de recetas con cards responsivas
- Detalle de cada receta con ingredientes y pasos
- Navegación entre páginas
- (Otras funcionalidades extra que hayas agregado)

## Screenshots
(Agregar capturas de pantalla)

## Autor
[Tu Nombre] - [Tu Email/GitHub]
```

### 3. **Checklist Pre-Entrega**

Antes de entregar, verifica que:

- [ ] El proyecto ejecuta sin errores (`npm run dev`)
- [ ] Todas las rutas funcionan correctamente
- [ ] El JSON tiene al menos 6 recetas completas
- [ ] La navegación entre páginas funciona
- [ ] El diseño es responsive (probado en diferentes tamaños)
- [ ] Los componentes de Material-UI están correctamente implementados
- [ ] El Context API está funcionando
- [ ] El código está limpio y organizado
- [ ] El `README.md` está completo
- [ ] No hay archivos innecesarios (como `node_modules`)

---

## 💡 Consejos y Recomendaciones

### 1. **Comienza por lo Básico**
- Primero crea la estructura de carpetas
- Luego implementa el Context y carga de datos
- Después crea el listado simple
- Finalmente agrega el detalle y estilos

### 2. **Testea Constantemente**
- Prueba cada componente que crees
- Verifica la responsive design con las herramientas del navegador (F12)
- Prueba en diferentes navegadores si es posible

### 3. **Reutiliza Componentes**
- Si un componente se repite, crea uno reutilizable
- Pasa datos mediante props
- Mantén los componentes pequeños y enfocados

### 4. **Usa la Documentación**
- [Documentación de React Router DOM](https://reactrouter.com/)
- [Documentación de Material-UI](https://mui.com/)
- Guía de Material-UI incluida en el proyecto: `GUIA-MATERIAL-UI.md`
- Guía de React Router DOM incluida en el proyecto: `GUIA-REACT-ROUTER-DOM.md`

### 5. **Gestión del Tiempo**
Se recomienda distribuir el tiempo así:
- **30%**: Configuración, estructura y carga de datos
- **30%**: Página de listado con diseño
- **30%**: Página de detalle completa
- **10%**: Pulido, documentación y testing

---

## 🌟 Funcionalidades Extra (Opcionales)

Si terminas antes y quieres agregar valor al proyecto, considera estas mejoras:

### Nivel Básico (+5 puntos extra)
- Agregar una página de "Inicio" con una descripción de la aplicación
- Agregar un footer con información de contacto
- Implementar un componente de "Receta no encontrada" (404)

### Nivel Intermedio (+10 puntos extra)
- Buscador de recetas por título
- Filtros por categoría o dificultad
- Agregar favoritos usando localStorage
- Botón "Compartir" que copie el link al portapapeles

### Nivel Avanzado (+15 puntos extra)
- Implementar un modal/dialog para ver recetas sin cambiar de página
- Sistema de calificación de recetas (con estrellas)
- Modo oscuro/claro (dark mode)
- Animaciones avanzadas con Framer Motion
- Print-friendly CSS para imprimir recetas

---

## 📚 Recursos Adicionales

### Imágenes para Recetas
Puedes usar imágenes gratuitas de:
- [Unsplash](https://unsplash.com/s/photos/food)
- [Pexels](https://www.pexels.com/search/food/)
- [Pixabay](https://pixabay.com/images/search/food/)

### Iconos
Material-UI incluye una amplia biblioteca de iconos:
```jsx
import { 
  Restaurant, 
  AccessTime, 
  People,
  LocalDining,
  Kitchen,
  MenuBook
} from '@mui/icons-material';
```

### Inspiración de Diseño
- [Dribbble - Recipe App](https://dribbble.com/search/recipe-app)
- [Awwwards - Food Websites](https://www.awwwards.com/websites/food/)

---

## ❓ Preguntas Frecuentes

### 1. ¿Puedo cambiar la estructura de datos del JSON?
Sí, puedes agregar campos adicionales, pero **no elimines** los campos requeridos especificados en el enunciado.

### 2. ¿Puedo usar CSS personalizado además de Material-UI?
Sí, pero la mayor parte del diseño debe estar hecho con Material-UI mediante el sistema `sx` o `styled-components`.

### 3. ¿Qué hago si una receta no existe?
Debes mostrar un mensaje amigable indicando que la receta no fue encontrada y un botón para volver al listado.

### 4. ¿Puedo agregar más páginas?
Sí, pero asegúrate de que las páginas principales (listado y detalle) estén completas y funcionales primero.

### 5. ¿Debo implementar un backend?
No, este trabajo práctico se centra en el frontend. Los datos se leen desde un archivo JSON local.

---

## ✨ Ejemplo de Resultado Final

Tu aplicación debería tener una apariencia similar a:

**Listado de Recetas:**
```
┌─────────────────────────────────────────────────────┐
│                  🍽️ Recetas de Cocina              │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ┌──────┐  ┌──────┐  ┌──────┐                    │
│  │ img  │  │ img  │  │ img  │                    │
│  │      │  │      │  │      │                    │
│  │Pasta │  │Ensala│  │Pizza │                    │
│  │Carbo-│  │da    │  │      │                    │
│  │nara  │  │César │  │Marga-│                    │
│  │      │  │      │  │rita  │                    │
│  │⏱️ 30min│ │⏱️ 20min│ │⏱️ 45min│                    │
│  │🔥Media │ │🟢Fácil│ │🔥Media │                    │
│  │👥4 porc│ │👥2 porc│ │👥6 porc│                    │
│  │[Ver]  │  │[Ver]  │  │[Ver]  │                    │
│  └──────┘  └──────┘  └──────┘                    │
│                                                     │
│  ┌──────┐  ┌──────┐  ┌──────┐                    │
│  │ ...  │  │ ...  │  │ ...  │                    │
└─────────────────────────────────────────────────────┘
```

**Detalle de Receta:**
```
┌─────────────────────────────────────────────────────┐
│  [← Volver]                                         │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ┌───────────────────────────────────────────────┐ │
│  │                                               │ │
│  │         IMAGEN GRANDE DE LA RECETA            │ │
│  │                                               │ │
│  └───────────────────────────────────────────────┘ │
│                                                     │
│  Pasta Carbonara                                    │
│  Receta clásica italiana...                         │
│                                                     │
│  ⏱️ 30 min    🔥 Media    👥 4 porciones            │
│                                                     │
│  ────────────────────────────────────────────────   │
│                                                     │
│  📝 Ingredientes                                    │
│  • 400 g - Spaghetti                               │
│  • 200 g - Panceta                                 │
│  • 4 unidades - Huevos                             │
│  ...                                                │
│                                                     │
│  👨‍🍳 Preparación                                     │
│  1. Cocinar la pasta...                            │
│  2. Dorar la panceta...                            │
│  3. Batir los huevos...                            │
│  ...                                                │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## 🎓 Evaluación Final

Este trabajo práctico será evaluado considerando:

1. **Cumplimiento de requisitos funcionales**
2. **Calidad del código y organización**
3. **Diseño y experiencia de usuario**
4. **Correcta implementación de las tecnologías requeridas**
5. **Documentación y presentación**

**¡Mucha suerte con tu proyecto!** 🚀

