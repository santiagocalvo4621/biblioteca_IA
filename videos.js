const videos = [
  {
    titulo: "Introducción a la Inteligencia Artificial",
    fuente: "YouTube",
    autor: "Derivando",
    año: "2021",
    enlace: "https://www.youtube.com/embed/_tA5cinv0U8",
    descripcion: "¿Te has preguntado qué es realmente la inteligencia artificial? En este video exploramos cómo funciona, qué tipos de tareas puede realizar y si de verdad se parece a la inteligencia humana. Descubre de forma clara y sencilla, toman decisiones y nos ayudan en la vida diaria."
  },
  {
    titulo: "IA en educación: Del miedo a la oportunidad",
    fuente: "YouTube",
    autor: "TEDx Talks",
    año: "2023",
    enlace: "https://www.youtube.com/embed/MZhKDt86PX8",
    descripcion: "María Agustina Ibáñez, cofundadora de Evaluados AI, explora cómo la inteligencia artificial está transformando la educación en Latinoamérica, promoviendo modelos de aprendizaje personalizados y actualizados en colaboración con universidades."
  },
  {
    titulo: "Tutorial de inteligencia artificial para cualquier persona",
    fuente: "YouTube",
    autor: "Platzi",
    año: "2025",
    enlace: "https://www.youtube.com/embed/cmep2mdip3k",
    descripcion: "Aprende de forma clara y sencilla las diferencias entre las principales apps y modelos de inteligencia artificial como ChatGPT, Claude y Gemini, y cómo elegir la mejor opción según tus necesidades."
  },
{
  titulo: "La IA en la educación: ¿mejora o perjudica el aprendizaje?",
  fuente: "YouTube",
  autor: "DW Español",
  año: "2024",
  enlace: "https://www.youtube.com/embed/Pka3NixwYmA",
  descripcion: "La inteligencia artificial ha transformado la forma en que aprendemos. Sin embargo, algunas personas consideran que representa un desafío para la educación. Por eso, es importante conocer sus implicaciones. Aquí te contamos todo lo que necesitas saber."
}

];


const catalogo = document.getElementById("catalogo");
const buscador = document.getElementById("buscador");

videos.forEach(video => {
  const contenedor = document.createElement("div");
  contenedor.className = "video";

  contenedor.innerHTML = `
    <h3>${video.titulo}</h3>
    <br>
    <iframe src="${video.enlace}" allowfullscreen></iframe>
    <div class="descripcion-video">
    <p>${video.descripcion}</p>
    </div>
    <div class="video-info">
      <p><strong>Canal:</strong> ${video.autor}</p>
      <p><strong>Año:</strong> ${video.año}</p>
      <p><strong>Fuente:</strong> ${video.fuente}</p>
    </div>
  `;
   contenedor.dataset.busqueda = `${video.titulo} ${video.autor} ${video.año}`.toLowerCase();
  catalogo.appendChild(contenedor); 
});
buscador.addEventListener("input", () => {
  const texto = buscador.value.toLowerCase();
  const tarjetas = catalogo.querySelectorAll(".video");

  tarjetas.forEach(contenedor => {
    const contenido = contenedor.dataset.busqueda;
    if (contenido.includes(texto)) {
      contenedor.style.display = ""; // mostrar
    } else {
      contenedor.style.display = "none"; // ocultar
    }
  });
});


