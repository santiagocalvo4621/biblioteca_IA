const documentos = [
  {
    titulo: "Inteligencia Artificial",
    autor: "Julio Cesar Ponce Gallegos, Aurora Torres Soto, Fátima Sayuri Quezada Aguilera, Antonio Silva Sprock, Ember Ubeimar Martínez Flor, Ana Casali, Eliana Scheihing, Yván Jesús Túpac Valdivia, Ma. Dolores Torres Soto, Francisco Javier Ornelas Zapata, José Alberto Hernández A., Crizpín Zavala D., Nodari Vakhnia, Oswaldo Pedreño",
    año: 2014,
    descripcion: "Libro que introduce los fundamentos y aplicaciones de la inteligencia artificial.",
    enlace: "libros/Inteligencia Artificial.pdf",
    portada: "portadas/ia.png"
  },
  {
    titulo: "Inteligencia Artificial en la educación universitaria",
    autor: "Francisco J. KROFF, Diego F. Coria, Cristian A. Ferrada",
    año: 2024,
    descripcion: "Estudio sobre el impacto de la IA en la enseñanza universitaria, beneficios y desafíos éticos.",
    enlace: "libros/Inteligencia Artificial en la educación universitaria.pdf",
    portada: "portadas/ia_educacion.png"
  },
  {
    titulo: "La Revolución de la Inteligencia Artificial en la Educación Superior",
    autor: "Silva-Peñafiel, Geovanny Euclides,Castillo-Parra, Byron Fernando,Tixi-Gallegos, Katherine Gissel, Urgiles-Rodríguez, Bladimir Enrique",
    año: 2024,
    descripcion: "Libro que analiza la evolución y el impacto de la IA en la educación superior, incluyendo ética, aplicaciones y casos de estudio.",
    enlace: "libros/La Revolución de la Inteligencia Artificial en la Educación Superior, Geovanny Euclides Silva-Peñafiel, Byron Fernando Castillo-Parra, Katherine Gissel Tixi-Gallegos.pdf",
    portada: "portadas/ia_revolucion.png" 
  },
  {
  titulo: "La Inteligencia Artificial en la Educación Superior",
  autor: "Mariano Hernández Cerón, Carlos Gonzalo Penela",
  año: 2023,
  descripcion: "Informe que analiza el impacto disruptivo de la Inteligencia Artificial Generativa en la educación superior, sus beneficios, retos y transformaciones metodológicas.",
  enlace: "libros/Informe OBS - La Inteligencia Artificial en la Educación Superior.pdf",
  portada: "portadas/ia_obs.png"
},
{
  titulo: "Inteligencia Artificial: Dependencia y la Afección del Pensamiento Crítico",
  autor: "Fátima de los Ángeles Rojas Marín, Jhoel Guilberth Espinoza Padilla, María Fernanda Mendoza Pacheco",
  año: 2024,
  descripcion: "Estudio proyectivo que analiza cómo el uso de IA en la universidad puede generar dependencia tecnológica y afectar el pensamiento crítico en estudiantes.",
  enlace: "libros/INTELIGENCIA ARTIFICIAL DEPENDENCIA Y LA.pdf",
  portada: "portadas/ia_dependencia.png"
},
{
  titulo: "Inteligencia Artificial: Un Enfoque Moderno",
  autor: "Stuart J. Russell, Peter Norvig",
  año: 2004,
  descripcion: "Obra clásica y extensa que aborda los fundamentos teóricos, algoritmos, historia y aplicaciones de la IA, ampliamente utilizada en la enseñanza universitaria.",
  enlace: "libros/inteligencia-artificial-un-enfoque-moderno-stuart-j-russell.pdf",
  portada: "portadas/ia_russell.png"
},
 {
    titulo: "Integración de la Inteligencia Artificial en la Educación Superior: Desafíos y Oportunidades",
    autor: "Fernando Vera",
    año: 2023,
    descripcion: "Estudio sobre cómo docentes perciben la integración de la inteligencia artificial, especialmente ChatGPT, en la educación superior y su impacto en el currículo y la experiencia de aprendizaje.",
     enlace:"libros/Integración de la Inteligencia Artificial en laEducación superior Desafíos y oportunidades.pdf",
    portada: "portadas/ia_integracion.jpg" 
  },
  {
    titulo: "Una revisión sistemática del uso de la inteligencia artificial en la educación",
    autor: "Matilde Bolaño García, Nixon Duarte Acosta",
    año: 2023 ,
    enlace: "libros/Una revisión sistemática del uso de la inteligencia artificial en la educación.pdf",
    descripcion: "Revisión de tendencias, beneficios y desafíos del uso de inteligencia artificial en la educación, enfocada en su aplicación en la personalización del aprendizaje, la retroalimentación y la evaluación estudiantil.",
    portada: "portadas/ia_revision.png"
  }


];

const catalogo = document.getElementById("catalogo");
const buscador = document.getElementById("buscador");

// Creamos y añadimos las tarjetas
documentos.forEach(doc => {
  const card = document.createElement("div");
  card.className = "documento";
  card.innerHTML = ` <img src="${doc.portada}" alt="Portada de ${doc.titulo}" class="portada" />
    <h3>${doc.titulo}</h3>
    <p><strong>Autor:</strong> ${doc.autor}</p>
    <p><strong>Año:</strong> ${doc.año}</p>
    <p>${doc.descripcion}</p>
    <a href="${doc.enlace}" target="_blank">Ver documento</a>`;
  // Guardamos solo título, autor y año como texto de búsqueda
  card.dataset.busqueda = `${doc.titulo} ${doc.autor} ${doc.año}`.toLowerCase();
  catalogo.appendChild(card);
});

// Escucha lo que escribes
buscador.addEventListener("input", () => {
  const texto = buscador.value.toLowerCase();
  const tarjetas = catalogo.querySelectorAll(".documento");

  tarjetas.forEach(card => {
    const contenido = card.dataset.busqueda;
    if (contenido.includes(texto)) {
      card.style.display = ""; // mostrar
    } else {
      card.style.display = "none"; // ocultar
    }
  });
});


