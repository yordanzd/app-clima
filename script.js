const input = document.querySelector(".buscador input");
const boton = document.querySelector(".buscador button");

const ciudad = document.querySelector(".ciudad");
const icono = document.querySelector(".icono");

const temperaturaActual = document.querySelector(".temperatura-actual");
const sensacionTermica = document.querySelector(".sensacion-termica");
const temperaturaMinima = document.querySelector(".temperatura-minima");
const temperaturaMaxima = document.querySelector(".temperatura-maxima");

const categoriaGeneral = document.querySelector(".categoria-general");
const descripcionDetallada = document.querySelector(".descripcion-detallada");

const humedad = document.querySelector(".humedad");
const presionAtmosferica = document.querySelector(".presion-atmosferica");
const velocidadViento = document.querySelector(".velocidad-viento");
const direccionViento = document.querySelector(".direccion-viento");
const porcentajeNubosidad = document.querySelector(".porcentaje-nubosidad");
const visibilidad = document.querySelector(".visibilidad");

const horaAmanecer = document.querySelector(".hora-amanecer");
const horaAtardecer = document.querySelector(".hora-atardecer");
const fechaHora = document.querySelector(".fecha-hora");

const apiKey = "Tu_api_key";
const urlBase = "https://api.openweathermap.org/data/2.5/weather";

boton.addEventListener("click", () => {
    const nombreCiudad = input.value;
    if (nombreCiudad === "") return;
    buscarClima(nombreCiudad);
});

async function buscarClima(nombreCiudad) {
    const url = `${urlBase}?q=${nombreCiudad}&appid=${apiKey}&units=metric&lang=es`;

    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();

        if (datos.cod !== 200) {
            alert("Ciudad no encontrada");
            return;
        }

        mostrarDatos(datos);
    } catch (error) {
        alert("Hubo un error al buscar el clima");
        console.log(error);
    }
}

function mostrarDatos(datos) {
    ciudad.textContent = `${datos.name}, ${datos.sys.country}`;
    icono.src = `https://openweathermap.org/img/wn/${datos.weather[0].icon}@2x.png`;

    temperaturaActual.textContent = `${Math.round(datos.main.temp)}°`;
    sensacionTermica.textContent = `${Math.round(datos.main.feels_like)}°`;
    temperaturaMinima.textContent = `${Math.round(datos.main.temp_min)}°`;
    temperaturaMaxima.textContent = `${Math.round(datos.main.temp_max)}°`;

    categoriaGeneral.textContent = datos.weather[0].main;
    descripcionDetallada.textContent = datos.weather[0].description;

    humedad.textContent = `${datos.main.humidity}%`;
    presionAtmosferica.textContent = `${datos.main.pressure} hPa`;
    velocidadViento.textContent = `${datos.wind.speed} km/h`;
    direccionViento.textContent = `${datos.wind.deg}°`;
    porcentajeNubosidad.textContent = `${datos.clouds.all}%`;
    visibilidad.textContent = `${datos.visibility} m`;

    horaAmanecer.textContent = convertirHora(datos.sys.sunrise);
    horaAtardecer.textContent = convertirHora(datos.sys.sunset);
    fechaHora.textContent = convertirHora(datos.dt);
}

function convertirHora(timestamp) {
    const fecha = new Date(timestamp * 1000);
    return fecha.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" });
}