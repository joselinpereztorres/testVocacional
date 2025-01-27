//agregar preguntas 
const preguntas = [
    "1. Diseñar programas de computación y explorar nuevas aplicaciones tecnológicas para uso del internet.",
    "2. Criar, cuidar y tratar animales domésticos y de campo.",
    "3. Investigar sobre áreas verdes, medioambiente y cambios climáticos.",
    "4. Ilustrar, dibujar y animar digitalmente.",
    "5. Seleccionar, capacitar y motivar al personal de una organización o empresa.",
    "6. Realizar excavaciones para descubrir restos del pasado.",
    "7. Resolver problemas de cálculo para construir un puente.",
    "8. Diseñar cursos para enseñar a la gente sobre temas de salud e higiene.",
    "9. Tocar un instrumento y componer música",
    "10. Planificar las metas de una organización pública o privada a mediano y largo plazo.",
    "11. Diseñar y planificar la producción masiva de artículos .",
    "12. Diseñar logotipos y portadas de una revista.",
    "13. Organizar eventos y atender a sus asistentes.",
    "14. Atender la salud de personas enfermas",
    "15. Controlar ingresos y egresos de fondos y presentar el balance final de una institución.",
    "16. Hacer experimentos con plantas (frutas, árboles, flores).",
    "17. Concebir planos para viviendas, edificios y ciudadelas.",
    "18. Investigar y probar nuevos productos farmacéuticos.",
    "19. Hacer propuestas y formular estrategias para aprovechar las relaciones económicas entre dos países.",
    "20. Pintar, hacer esculturas, ilustrar libros de arte, etc",
    "21. Elaborar campañas para introducir un nuevo producto al mercado.",
    "22. Examinar y tratar los problemas visuales.",
    "23. Defender a clientes individuales o empresas en juicios de diferente naturaleza",
    "24. Diseñar máquinas que puedan simular actividades humanas.",
    "25. Investigar las causas y efectos de los trastornos emocionales. ",
    "26. Supervisar las ventas de un centro comercial.",
    "27. Atender y realizar ejercicios a personas que tienen limitaciones físicas, problemas de lenguaje, etc.",
    "28. Prepararse para ser modelo profesional.",
    "29. Aconsejar a las personas sobre planes de ahorro e inversiones.",
    "30. Elaborar mapas, planos e imágenes para el estudio y análisis de datos geográficos.",
    "31. Diseñar juegos interactivos electrónicos para computadora.",
    "32. Realizar el control de calidad de los alimentos",
    "33. Tener un negocio propio de tipo comercial",
    "34. Escribir artículos periodísticos, cuentos, novelas y otros.",
    "35. Redactar guiones y libretos para un programa de tv",
    "36. Organizar un plan de distribución y venta de un gran almacén.",
    "37. Estudiar la diversidad cultural en el ámbito rural y urbano.",
    "38. Gestionar y evaluar convenios internacionales de cooperación para el desarrollo social.",
    "39. Crear campañas publicitarias.",
    "40. Trabajar investigando la reproducción de peces, camarones y otros animales marinos.",
    "41. Dedicarse a fabricar productos alimenticios de consumo masivo.",
    "42. Gestionar y evaluar proyectos de desarrollo en una institución educativa y/o fundación.",
    "43. Rediseñar y decorar espacios físicos en viviendas, oficinas y locales comerciales.",
    "44. Rediseñar y decorar espacios físicos en viviendas, oficinas y locales comerciales.",
    "45. Aplicar métodos alternativos a la medicina tradicional, para atender personas con dolencias de diversa índole.",
    "46. Diseñar ropa para niños, jóvenes y adultos de manera sustentable.",
    "47. Investigar organismos vivos para elaborar vacunas.",
    "48. Manejar o dar mantenimiento a dispositivos tecnológicos en aviones, barcos, radares, etc.",
    "49. Estudiar idiomas extranjeros —actuales y antiguos— para hacer traducción.",
    "50. Restaurar piezas y obras de arte.",
    "41. Revisar y dar mantenimiento a artefactos eléctricos, electrónicos y computadoras.",
    "52. Enseñar a niños de cero a cinco años.",
    "53. Investigar y sondear nuevos mercados.",
    "54. Atender la salud dental de las personas.",
    "55. Tratar a niños, jóvenes y adultos con problemas psicológicos.",
    "56. Crear estrategias de promoción y venta de nuevos productos nacionales en el mercado internacional.",
    "57. Planificar y recomendar dietas para personas diabéticas o con sobrepeso.",
    "58. Trabajar en una empresa petrolera en un cargo técnico como control de laproducción.",
    "59. Administrar una empresa (familiar, privada o pública).",
    "60. Tener un taller de reparación y mantenimiento de carros, tractores, etcétera.",
    "61. Ejecutar proyectos de extracción minera y metalúrgica.",
    "62. Asistir a directivos de multinacionales con manejo de varios idiomas.",
    "63. Diseñar programas educativos para niños con discapacidad.",
    "64. Aplicar conocimientos de estadística en investigaciones en diversas áreas (social, administrativa, salud, etcétera).",
    "65. Fotografiar hechos históricos, lugares significativos, rostros, paisajes para el área publicitaria, artística, periodística y social.",
    "66. Trabajar en museos y bibliotecas nacionales e internacionales.",
    "67. Ser parte de un grupo de teatro.",
    "68. Producir cortometrajes, spots publicitarios, programas educativos, de ficción, etc.",
    "69. Estudiar la influencia entre las corrientes marinas y el clima y sus consecuencias ecológicas.",
    "70. Conocer las distintas religiones (su filosofía) y transmitirlas a la comunidad en general.",
    "71. Asesorar a inversionistas en la compra de bienes y acciones en mercados nacionales e internacionales.",
    "72. Estudiar grupos étnicos, sus costumbres, tradiciones, cultura y compartir sus vivencias.",
    "73. Explora el espacio sideral, los planetas, características y componentes.",
    "74. Mejorar la imagen facial y corporal de las personas aplicando diferentes técnicas.",
    "75. Decorar jardines de casas y parques públicos.",
    "76. Administrar y renovar menús de comida en un hotel o restaurante.",
    "77. Trabajar como presentador de televisión, locutor de radio y televisión, animador de programas culturales y concursos.",
    "78. Diseñar y ejecutar programas de turismo.",
    "79. Administrar y ordenar adecuadamente la ocupación del espacio físico de ciudades, países etc., utilizando imágenes de satélite y mapas.",
    "80. Organizar, planificar y administrar centros educativos.",
];

function generarPreguntas() {
    const form = document.getElementById('myForm');
    preguntas.forEach((pregunta, index) => {
        const div = document.createElement('div');
        div.classList.add('pregunta');

        const label = document.createElement('label');
        label.setAttribute('for', `q${index + 1}`);
        label.innerText = pregunta;
        div.appendChild(label);

        const divOpciones = document.createElement('div');
        divOpciones.classList.add('opciones');
        // Opción "Sí"
        const siInput = document.createElement('input');
        siInput.type = 'radio';
        siInput.name = `q${index + 1}`;
        siInput.value = 'si';
        siInput.id = `q${index + 1}_si`;
        divOpciones.appendChild(siInput);
        divOpciones.appendChild(document.createTextNode('Me interesa  '));

        // Opción "No"
        const noInput = document.createElement('input');
        noInput.type = 'radio';
        noInput.name = `q${index + 1}`;
        noInput.value = 'no';
        noInput.id = `q${index + 1}_no`;
        divOpciones.appendChild(noInput);
        divOpciones.appendChild(document.createTextNode('No me interesa'));

        form.appendChild(div);
        div.appendChild(divOpciones)
    });
}


const resArte = [4, 9, 12, 20, 28, 31, 35, 39, 43, 46, 50, 67, 68, 57, 77]; // Ejemplo de otro array con el que comparar
const resCiencias = [6, 13, 23, 25, 34, 37, 42, 49, 55, 63, 66, 70, 72, 78];
const resEcono = [5, 10, 15, 19, 21, 26, 29, 33, 36, 44, 53, 56, 59, 62, 71, 80];
const resTec = [1, 7, 11, 17, 18, 24, 30, 41, 48, 51, 58, 60, 61, 64, 73, 79];
const resSalud = [2, 3, 8, 14, 16, 22, 27, 32, 40, 45, 47, 54, 57, 69, 74, 76];

const carreras = {
    Arte: ["Diseño Gráfico", "Diseño y Decoración de Interiores", "Diseño de Jardines", "Diseño de Modas",
        "Diseño Textil", "Diseño de Joyas", " Artes Plásticas", "Dibujo Publicitario", "Restauración y Museología", "Modelaje", "Fotografía", "Gestión Gráfica y Publicitaria", "Locución y Publicidad",
        "Producción Audiovisual y Multimedia", "Comunicación y Producción en Radio y Televisión",
        "Diseño del Paisajes", "Cine y Video", "Comunicación Escénica para Televisión", "Música", "Teatro"],

    Ciencias: ["Psicología", "Trabajo Social", "Idiomas", "Educación Internacional", "Historia y Geografía", "Periodismo", "Derecho", "Ciencias Políticas", "Sociología", "Antropología", "Arqueología",
        "Consejería Familiar", "Comunicación y Publicidad", "Administración Educativa", "Educación Especial", "Psicopedagogía",
        "Lingüística", "Educación de Párvulos", "Educador", "Bibliotecología", "Museología",
        "Relaciones Internacionales y Diplomacia", "Comunicación Social con Énfasis en Marketing y Gestión de Empresas", "Redacción Creativa y Publicitaria", "Relaciones Públicas y Comunicación Organizacional", "Hotelería y Turismo", "Teología", "Institución Sacerdotal"],

    Economía: ["Administración de Empresas", "Contabilidad", "Auditoría", "Ventas", "Marketing Estratégico",
        "Gestión y Negocios Internacionales", "Gestión Empresarial", "Gestión Financiera", "Ingeniería Comercial", "Comercio Exterior", "Banca y Finanzas", "Gestión de Recurso Humanos", "Comunicaciones Integradas en Marketing",
        "Administración de Empresas Ecoturísticas y de Hospitalidad", "Ciencias Económicas y Financieras", "Administración y Ciencias Políticas", "Ciencias Empresariales", "Comercio Electrónico", "Emprendimiento", "Liderazgo y Emprendimiento",
        "Gestión de Organismos Públicos (municipios, ministerios) Gestión de Centros Educativos"],

    Tecnología: ["Ingeniería en Sistemas Computacionales", "Geología", "Ingeniería Civil", "Arquitectura", "Electrónica Telemática", "Telecomunicaciones", "Ingeniería Mecatrónica", "Robótica", "Imagen y Sonido",
        "Ingeniería Mecánica", "Ingeniería Industrial", "Física", "Matemáticas Aplicadas", "Ingeniería en Estadística", "Ingeniería Automotriz", "Biotecnología Ambiental",
        "Ingeniería Geográfica", "Carreras Militares", "Marina", "Aviación", "Ejército", "Guardia Nacional",
        "Ingeniería en Costas y Obras Portuarias", "Estadística Informática", "Programación y Desarrollo de Sistemas", "Tecnología en Informática Educativa", "Astronomía", "Ingeniería en Ciencias Geográficas y Desarrollo Sustentable"],

    Salud: ["Biología", "Bioquímica", "Farmacología", "Biología Marina", "Bioanálisis", "Biotecnología",
        "Ciencias Ambientales", "Zootecnia", "Veterinaria", "Nutrición y Estética", "Cosmetología Dietética y Estética",
        "Medicina", "Obstetricia", "Urgencias Médicas", "Odontología", "Enfermería", "Tecnología", "Oceanografía y Ciencias Ambientales", "Agronomía", "Horticultura y Fruticultora", "Ingeniería de alimentos", "Gastronomía", "Cultura Física", "Deportes y Rehabilitación", "Gestión Ambiental",
        "Ingeniería Ambiental", "Optometría", "Homeopatía", "Reflexología"]

};


function procesarRespuestas() {
    const preguntasSeleccionadas = []; // Almacena las preguntas con "Sí"

    // Recorrer las preguntas y almacenar las que tienen respuesta "Sí"
    preguntas.forEach((_, index) => {
        const seleccion = document.querySelector(`input[name="q${index + 1}"]:checked`);
        if (seleccion && seleccion.value === 'si') {
            preguntasSeleccionadas.push(index + 1);
        }
    });

    // Contar coincidencias por área
    const areas = {
        Arte: preguntasSeleccionadas.filter(pregunta => resArte.includes(pregunta)),
        Ciencias: preguntasSeleccionadas.filter(pregunta => resCiencias.includes(pregunta)),
        Economía: preguntasSeleccionadas.filter(pregunta => resEcono.includes(pregunta)),
        Tecnología: preguntasSeleccionadas.filter(pregunta => resTec.includes(pregunta)),
        Salud: preguntasSeleccionadas.filter(pregunta => resSalud.includes(pregunta)),
    };

    // Determinar el área con más coincidencias
    let mayorArea = '';
    let mayorCoincidencias = 0;

    for (const [area, coincidencias] of Object.entries(areas)) {
        if (coincidencias.length > mayorCoincidencias) {
            mayorArea = area;
            mayorCoincidencias = coincidencias.length;
        }
    }

    // Obtener las carreras del área más grande
    const carrerasArea = carreras[mayorArea] || [];

    // Inyectar resultados en el HTML
    const resultadosDiv = document.getElementById('respuesta');
    resultadosDiv.innerHTML = `
        <p class="res">Resultados Obtenidos</p>
        <p>Área con mayor afinidad: <strong class"area">${mayorArea}</strong></p>
        <p class="carreras"">Carreras recomendadas: ${carrerasArea.join(', ')}</p>
    `;

    const res= document.getElementById('resultados');
    res.style.display='block';
}

function empezarTest(){
    const formulario= document.getElementById('pantalla-formulario');
    formulario.style.display='block'
}

function limpiar(){
    const formulario= document.getElementById('myForm');
    formulario.reset();
    const res= document.getElementById('resultados');
    res.style.display='none';

    const primerInput = document.getElementById('q1_si'); // Asumiendo que el primer input tiene el id "nombre"
    primerInput.focus();
    
}

// Llamar a la función para generar las preguntas al cargar la página
document.addEventListener('DOMContentLoaded', generarPreguntas);