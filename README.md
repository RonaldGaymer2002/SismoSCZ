# Riesgo Sísmico — Santa Cruz (Bolivia) 🌎📈

Este proyecto es una plataforma web interactiva y profesional diseñada para el monitoreo en tiempo real de la actividad sísmica en el Departamento de Santa Cruz (Bolivia), así como para la simulación avanzada de desastres sísmicos urbanos. Está optimizado para la defensa académica y presentaciones técnicas ante tribunales docentes.

Despliegue oficial en GitHub Pages: 👉 [https://ronaldgaymer2002.github.io/SismoSCZ/](https://ronaldgaymer2002.github.io/SismoSCZ/)

---

## 🚀 Características Principales

### 1. Monitoreo en Tiempo Real (Datos del USGS)
- Consulta y descarga dinámica de datos desde la API oficial de la **USGS (United States Geological Survey)**.
- Filtros interactivos por rango de fechas (desde el año 2000 hasta el presente) y por magnitud mínima de sismo.
- Modos de visualización intercambiables en caliente: **Mapa de Calor (Heatmap)**, **Epicentros individuales** o ambos de forma simultánea.
- Exportación instantánea del catálogo filtrado en formato **CSV**.

### 2. Soporte Multilingüe Integrado (9 Idiomas)
Soporte completo de traducción dinámica (en caliente, sin recargar la página) para lenguas nativas y extranjeras:
- Español, Inglés, Quechua (Runasimi), Aymara, Guaraní, Francés, Portugués, Chino y Japonés.

### 3. Modo Simulación Sísmica Profesional
Al activar el modo simulación, la plataforma se desconecta de los datos reales para no mezclar registros y ofrece un laboratorio de pruebas físicas:
- **Mapa Limpio:** Se remueven temporalmente los círculos punteados de riesgo y los sismos de la USGS para un análisis visual despejado.
- **Fijación de Epicentro por Mira:** Al hacer clic en el mapa se coloca un marcador en forma de mira roja de alta precisión.
- **Gatillo de Inicio:** La simulación se detona manualmente pulsando el botón **Iniciar Simulación**, evitando activaciones accidentales al hacer clic en otros marcadores.
- **Rango de Magnitudes Dinámico:** Deslizador interactivo con rangos ajustados según el tipo de sismo:
  - **Sismo Leve / Tremor:** Magnitud de $0.1$ a $5.0$.
  - **Terremoto Catastrófico:** Magnitud de $5.0$ a $12.0$.

### 4. Animaciones y Sonido Reactivo
- **Sacudida de Pantalla (Screen Shake):** Dependiendo de la magnitud seleccionada, el mapa vibra con tres intensidades de CSS diferentes:
  - `shake-mild` (Magnitud < 4.0): Vibración suave durante 1.5s.
  - `shake-moderate` (Magnitud 4.0 - 7.0): Sacudida notable durante 3.0s.
  - `shake-violent` (Magnitud >= 7.0): Vibración catastrófica durante 5.0s.
- **Sirena de Alerta Integrada:** Si la magnitud es $\ge 5.0$, se reproduce un sonido de alarma de evacuación de 15 segundos:
  - **Prioridad local:** Utiliza el archivo `sirena.mp3` si está en la carpeta del proyecto.
  - **Fallback Sintético:** Si el archivo falta, genera la sirena wagneriana mediante osciladores nativos de la **Web Audio API** (sin dependencias ni descargas).
  - Incluye botón flotante de **Silenciar Sirena 🔇**.

### 5. Base de Datos de Rascacielos Reales (Santa Cruz de la Sierra)
Carga los 12 edificios más altos y emblemáticos de la ciudad en sus coordenadas GPS reales:
1. *Green Tower (Torre 1)* (140 m) · Equipetrol Norte
2. *Torre Platinum II* (136 m) · Equipetrol Norte
3. *Macororó 16 y 17 (City Park)* (133 m) · Av. Busch
4. *Green Tower (Torre 2)* (130 m) · Equipetrol Norte
5. *Torre Mercantil Santa Cruz* (125 m) · Av. Banzer y 4to Anillo
6. *Condominio La Casona* (124 m) · 2do Anillo
7. *World Trade Center* (122 m) · Colinas del Urubó
8. *Torre Manzana 40* (120 m) · Equipetrol Norte
9. *Ambassador Business Center* (108 m) · Av. San Martín
10. *Torre Dúo* (107 m) · Equipetrol Norte
11. *Condominio La Riviera* (103 m) · Beauty Plaza
12. *Palacio de Justicia* (100 m) · Av. Monseñor Rivero

**Características Interactivas de los Edificios:**
- **Ficha Técnica en Hover:** Al pasar el cursor, aparece una ventana emergente (Tooltip) con los datos del edificio (altura, pisos, uso principal y habitantes/flujo diario).
- **Cálculo Físico de Daños (Clic):** Tras el terremoto, al hacer clic en los edificios se reporta su estado estructural recalculado por la distancia al epicentro y magnitud (Estable 🟢, Dañado 🟡, Derrumbado 🔴).

### 6. Estimación Demográfica de Bajas (Censo INE)
- Basado en los datos de población del área metropolitana de Santa Cruz de la Sierra (~2,033,000 habitantes).
- Aplica fórmulas matemáticas exponenciales de atenuación según la magnitud del sismo y la distancia geográfica al epicentro para calcular un estimado aproximado de **Fallecidos** y **Heridos** en tiempo real.

### 7. Sismógrafo Dinámico e Interactivo (Header)
- Un sismógrafo constante dibujado con `<canvas>` HTML5 adorna el encabezado.
- Dibuja continuamente una cuadrícula y una aguja con tinta roja.
- **Reacción Física:** La aguja aumenta su oscilación vertical de forma proporcional a la magnitud del sismo simulado, sincronizándose con la sacudida del mapa.

---

## 🛠️ Estructura del Proyecto

El proyecto está diseñado bajo buenas prácticas de desarrollo web frontend, modularizado en tres archivos limpios:

```bash
SismosSCZ/
├── index.html        # Estructura del Dashboard y Maquetación semántica.
├── styles.css        # Hoja de estilos con soporte día/noche y animaciones de sacudida.
├── app.js            # Lógica de la plataforma, llamadas de API, algoritmos de cálculo y audio.
├── sirena.mp3        # Archivo local de audio para la alarma de evacuación.
└── README.md         # Documentación técnica del proyecto.
```

---

## 💻 Requisitos e Instalación

El proyecto es **100% estático y libre de dependencias pesadas**, lo que permite ejecutarlo de forma local sin servidores adicionales o bases de datos complejas.

1. Descarga o clona este repositorio:
   ```bash
   git clone https://github.com/RonaldGaymer2002/SismoSCZ.git
   ```
2. Asegúrate de tener el archivo `sirena.mp3` en el mismo directorio.
3. Abre el archivo `index.html` haciendo doble clic en él en cualquier navegador web moderno (Chrome, Edge, Firefox, Brave, Safari).

---

## 🌐 Despliegue en GitHub Pages

El proyecto está configurado para ejecutarse directamente como un sitio estático en **GitHub Pages**.
- La rama de despliegue es `main`.
- El archivo de entrada es `index.html` (ubicado en el directorio raíz `/`), lo que garantiza un acceso limpio sin errores 404.
