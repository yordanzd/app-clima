# App Clima

Una aplicación web para consultar el clima actual de cualquier ciudad, construida con HTML, CSS y JavaScript vanilla, consumiendo la API de OpenWeatherMap.

## Descripción

App Clima permite buscar una ciudad y obtener información detallada sobre las condiciones climáticas actuales: temperatura, sensación térmica, humedad, viento, y más, todo en tiempo real mediante una llamada a una API externa.

## Características

- 🔍 Búsqueda de clima por nombre de ciudad
- 🌡️ Temperatura actual, sensación térmica, mínima y máxima
- ☁️ Categoría y descripción detallada del clima
- 🖼️ Ícono representativo de las condiciones climáticas
- 💧 Datos atmosféricos: humedad, presión, viento, nubosidad y visibilidad
- 🌅🌇 Horarios de amanecer y atardecer
- 🎨 Diseño personalizado con variables CSS en tema claro

## Estructura del proyecto

```
app-clima/
├── index.html    # Estructura de la página
├── styles.css    # Estilos y paleta de colores
└── script.js     # Lógica de conexión con la API y renderizado de datos
```

## Tecnologías utilizadas

- HTML5
- CSS3 (variables CSS / custom properties)
- JavaScript (vanilla, `fetch()` y `async/await`)
- [OpenWeatherMap API](https://openweathermap.org/api)

## Cómo usar

1. Clona o descarga este repositorio.
2. Obtén tu propia API key gratuita en [OpenWeatherMap](https://openweathermap.org/api).
3. Reemplaza el valor de `apiKey` en `script.js` con tu clave.
4. Abre el archivo `index.html` en tu navegador.
5. Escribe el nombre de una ciudad y presiona "Buscar".

## Notas

- Este proyecto requiere conexión a internet para funcionar, ya que consulta datos en tiempo real.
