import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Define tus traducciones aquí
const resources = {
  en: {
    translation: {
      request: "Request a quote",
      contact: "Contact",
      about: "About us",
      supply: "Supply Chain Solutions.",
      supply_msg: "We deliver essential supply chain solutions to the world's leading companies.",
      reaching: "Reaching Across The World.",
      reaching_msg: "Whatever you need, we've got it handled.",
      client: "The client always comes first.",
      client_msg: "We offer real-time shipment tracking information, competitive pricing, and guaranteed delivery security.",
      explore: "Explore our solutions",
      connect: "Connect with us",
      ground: "Ground",
      ground_msg: "Our ground freight services are not only fast but also efficient and consistently reliable.",
      air: "Air",
      air_msg: "Air freight is one of the fastest and most reliable ways of transportation.",
      ocean: "Ocean",
      ocean_msg: "We entrust our cargo to the world's most elite ocean freight liners.",
      view_details: "View details »",
      home_ground_title: "The shortest and secure routes for your shipments.",
      home_ground_msg: "Our ground freight services are not only swift but also efficient and consistently dependable. With routes spanning all states in the United States, we ensure your products are delivered safely and securely. Your trust is our top priority, and we guarantee that everything you ship arrives in your hands without fail.",
      home_air_title: "Air Freight, Simplified.",
      home_air_msg: "It is a fact that air freight is one of the fastest and most reliable modes of transportation. We are focused on creating reliable transport lines with the best companies in the world. Our air freight service is among the fastest and safest in the world. If you are looking for reliability and efficiency, you are looking for K&BD LOGISTICS.",
      home_ocean_title: "Easy Ocean Freight Solutions.",
      home_ocean_msg: "Our ocean freight is handled by the most capable carriers. We maintain and cultivate the best relationships to ensure meticulously cared-for transportation, guaranteeing you will always receive your goods exactly as you expect them.",
      cookies_btn: "Accept cookies",
      cookies: "accept cookies",
      cookies_msg: "This website is currently under development.\n" +
        "              Feel free to interact and learn more as the solution is finished.\n" +
        "              Please note that the main functionalities will not be released\n" +
        "              until after the testing phase is completed.\n" +
        "              And of course be kind and ",
      // GROUND-CARGO
      ground_cargo_theme: "Ground Cargo Service",
      ground_cargo_title: "Reliable Roads to You",
      ground_cargo_msg1: "At K&BD-LOGISTICS, we’ve built a strong network to ensure your deliveries arrive safely and on time. For\n" +
        "  years, we've worked diligently to create a system that guarantees no shipment is ever overlooked. By partnering with\n" +
        "  us, you can carry on with your business, confident that your products will always reach your clients as needed. Our\n" +
        "  reach extends throughout North America and parts of Europe, ensuring we can serve customers in key locations. Whether\n" +
        "  it's day or night, rain or shine, we are committed to delivering your goods without delay—because your satisfaction is\n" +
        "  our priority.",
      ground_cargo_msg2: " If your area isn't currently in our network, don’t hesitate to ask. We’re always open to exploring new opportunities\n" +
        "  and discussing how we can meet your shipping needs. We look forward to building a lasting partnership with you and\n" +
        "  helping your business thrive.",
      explore_ocean: "Explore ocean cargo",
      explore_air: "Explore air cargo",
      explore_ground: "Explore ground cargo",

      // OCEAN-CARGO
      ocean_cargo_theme: "Ocean Cargo Service",
      ocean_cargo_title: "Hassle-Free Ocean Freight Solutions",
      ocean_cargo_msg1: "At K&BD-LOGISTICS, we collaborate with some of the most trusted ocean carriers globally, ensuring that your shipments are handled with precision and care. Thanks to our partnerships with key players across multiple shipping alliances, we’re able to provide consistent availability for your cargo at highly competitive rates. Our priority is to ensure that your goods are not only transported efficiently but also delivered on schedule, giving you the confidence to focus on other aspects of your business. Whether you’re shipping large volumes or smaller loads, our solutions are designed to meet your needs without compromising on quality.",
      ocean_cargo_msg2: "With our advanced tracking system, you can follow the journey of your cargo from departure to final destination, providing complete transparency throughout the supply chain. Being ranked among the top 100 NVOCCs, highlighting our expertise and commitment to excellence. This visibility and reliability ensure that you always know where your shipments are, reducing uncertainty and helping you make informed decisions every step of the way. At K&BD-LOGISTICS, we’re not just moving cargo—we’re streamlining your logistics for long-term success.",

      // air-CARGO
      air_cargo_theme: "Air Cargo Service",
      air_cargo_title: "Air Cargo Simplified",
      air_cargo_msg1: "At K&BD-LOGISTICS, we understand the importance of your belongings and are committed to delivering each shipment with the utmost care to its destination. We are certified by the Transportation Security Administration (TSA) and the Federal Maritime Commission (FMC), as well as approved by the Indirect Air Carrier (IAC) and are members of the International Air Transport Association (IATA). Our air freight forwarding service is ideal for shipments over 150 pounds that can’t be handled by traditional couriers. We offer both domestic and international shipping options, with domestic services typically taking one to two days—although weather-related delays can sometimes occur.",
      air_cargo_msg2: "K&BD is dedicated to meeting our customers' needs, no matter the challenges. This is why we’ve partnered with some of the most reputable airlines to ensure shipments to and from the United States and Canada reach destinations worldwide. With access to over 300 locations, we provide exceptional global coverage. Our services are tailored to suit the diverse requirements and timeframes of our clients. We handpick the carriers that best match your specific shipping needs, setting us apart from many other air freight forwarding companies.",
      air_cargo_msg3: "In addition, our knowledgeable logistics team will guide you through the process, informing you about regulations, such as which items are allowed and which are considered contraband in certain countries, ensuring that your shipments comply with all international laws.",

      //STEPS-FORM
      info: "Info",
      details: "Details",
      preferences: "Preferences",
      complete: "Complete",
      previous: "Previous",
      next: "Next",
      preview: "Preview",
      close: "Close",
      submit: "Submit",
      send: "Send",
      error_msg1: "All fields are required, be sure to fill each space with specific information!",
      error_msg2: " This is a required field",

      //STEP-1
      name: "Name",
      email: "Email",
      address: "address",
      phone: "Phone",
      message: "Message",

      //STEP-2
      origin: "Origin",
      destiny: "Destiny",
      service: "Type of Service",
      movement: "Movement Types",
      d_to_d: "Door-to-Door",
      d_to_p: "Door-to-Port",
      p_to_p: "Port-to-Port",
      p_to_d: "Port-to-Door",

      //STEP-3
      long: "Long",
      high: "High",
      wide: "Wide",
      weight: "Weight",
      dimension_define: "Define cargo dimensions.",
      dimension_weight: "Define weight of the cargo?",
      product: "Product",
      product_define: "Define, what kind of product",
      full_truck: "Full truck",
      ltl: "LTL",
      lcl: "LCL",
      drayage: "Drayage",
      amount: "Amount",
      many_cargoes: "Different dimensions for cargoes",
      equipment: "Equipment",
      trailer_size: "Trailer size",
      equipment_type: "Equipment type",
      equipment_size: "Equipment size",
      full_container: "Full Container",
      container_size: "Container size",
      commodity: "Commodity",
      other: "other",
      dimensions: "Dimensions",


      //STEP-4
      comments: "Comments",
      cleary_msg: "Before submitting your request, please feel free to provide any details or comments you think are relevant.",
      review: "Review your data",
      category: "Category",

      //CONTACT-US
      contact_msg: "Describe your situation in the form below, and we will respond shortly with professional assistance. If needed, we can schedule a meeting.",
      contact_msg2: "Your information and the provided description have been submitted successfully. We will contact you within 24 hours on business days.",
      contact_msg3: "An error occurred while submitting your information. Please try again later. You can also make a phone call or write directly to ",
      drop: "Drop us a line!",
      talk: "Let’s talk!",
      contact_you: "Would you like us to contact you? Consider it done!",

      //ABOUT-US
      text_1: "Welcome to our logistics company, where we specialize in providing comprehensive transportation solutions to meet your needs. With a focus on efficiency, reliability, and customer satisfaction, we offer a range of services to ensure your shipments are delivered safely and on time.",
      text_2: "With over 20 years of experience in the industry, our team includes seasoned veterans who bring deep connections and strong relationships with a wide network of transport companies. Our company offers three main types of transportation services:",
      text_3: "Our ocean freight services are designed to handle large shipments with ease. We partner with leading carriers to ensure your goods are transported across the seas securely and efficiently.",
      text_4: "Our ground freight services cover extensive routes across all states, providing swift and dependable transportation for your cargo. Whether it’s full truckload (FTL) or less than truckload (LTL), we have you covered.",
      text_5: "Our air freight services are among the fastest and most reliable in the industry. We collaborate with top airlines to guarantee timely delivery of your urgent shipments.",
      text_6: "We also offer flexible delivery options to cater to your specific requirements:",
      text_7: "Comprehensive service where we handle the entire transport process from the seller’s door to the buyer’s door, ensuring convenience and minimal responsibility for both parties.",
      text_8: "We manage the transport from the exporter’s premises to the port of origin, providing flexibility for exporters who need assistance with initial logistics.",
      text_9: "Cost-effective service where we transport goods between ports, ideal for experienced shippers who can handle inland logistics and customs clearance.",
      text_10: "We handle the transport from the port of destination to the importer’s premises, managing the final leg of the journey.",
      text_11: "At our company, we understand the importance of reliable and efficient logistics. Our team of professionals is committed to providing top-notch services, ensuring your cargo is handled with the utmost care and precision. We pride ourselves on our ability to adapt to the unique needs of each client, delivering tailored solutions that drive success.",
      text_12: "Thank you for choosing us as your logistics partner. We look forward to supporting your business and ensuring your shipments reach their destinations without a hitch.",
      strong_text_1: "Maritime Transportation:",
      strong_text_2: "Terrestrial Transportation:",
      strong_text_3: "Aerial Transportation:",
      strong_text_4: "Door-to-Door:",
      strong_text_5: "Door-to-Port:",
      strong_text_6: "Port-to-Port:",
      strong_text_7: "Port-to-Door:"
    }
  },
  es: {
    translation: {
      // HOME AND PRINCIPALCOMPONENTS
      request: "Solicitar cotización",
      contact: "Contacto",
      about: "Sobre nosotros",
      supply: "Soluciones en cadena de suministro.",
      supply_msg: "Ofrecemos soluciones esenciales en cadena de suministro a las principales empresas del mundo.",
      reaching: "Alcance global.",
      reaching_msg: "Lo que necesites, nosotros lo manejamos.",
      client: "El cliente siempre es primero.",
      client_msg: "Ofrecemos información de seguimiento en tiempo real, precios competitivos y seguridad garantizada en la entrega.",
      explore: "Explora nuestras soluciones",
      connect: "Conéctate con nosotros",
      ground: "Terrestre",
      ground_msg: "Nuestros servicios de transporte terrestre no solo son rápidos, sino también eficientes y consistentemente confiables.",
      air: "Aéreo",
      air_msg: "El transporte de cargas aéreo es una de las formas más rápidas y confiables de transporte.",
      ocean: "Marítimo",
      ocean_msg: "Confiamos nuestro cargamento a las líneas de transporte marítimo más elitistas del mundo.",
      view_details: "Ver detalles »",
      home_ground_title: "Las rutas más cortas y seguras para sus embarques.",
      home_ground_msg: "Con rutas que abarcan todos los Estados Unidos, garantizamos que sus embarques se entreguen de manera segura y puntual. Su confianza es nuestra máxima prioridad, y le garantizamos que todos los embargues llegarán al destino acordado en el menor tiempo posible.",
      home_air_title: "Transporte aéreo, simplificado.",
      home_air_msg: "Nos enfocamos en crear líneas de transporte confiables con las mejores empresas del mundo. Nuestro servicio de transporte aéreo es uno de los más rápidos y seguros del mundo. Si buscas confiabilidad y eficiencia, estás buscando a K&BD LOGISTICS.",
      home_ocean_title: "Soluciones fáciles de transporte marítimo.",
      home_ocean_msg: "Mantenemos y cultivamos las mejores relaciones para asegurar un transporte meticulosamente cuidado, garantizando que siempre recibirás tus mercancías tal como las esperas.",
      cookies_btn: "Aceptar cookies",
      cookies: "acepta las cookies",
      cookies_msg: "Este sitio web está actualmente en desarrollo.\n" +
        "              Siéntete libre de interactuar y aprender más a medida que la solución se vaya completando.\n" +
        "              Ten en cuenta que las funcionalidades principales no se liberarán\n" +
        "              hasta que se complete la fase de pruebas.\n" +
        "              Y, por supuesto, sé amable y ",
      // GROUND-CARGO
      ground_cargo_theme: "Servicio de Carga Terrestre",
      ground_cargo_title: "Rutas Garantizadas hacia Ti",
      ground_cargo_msg1: "En K&BD-LOGISTICS, hemos construido una sólida red para asegurar que tus entregas lleguen de manera segura y puntual. Durante años, hemos trabajado diligentemente para crear un sistema que garantice que ningún envío pase desapercibido. Al asociarte con nosotros, puedes continuar con tu negocio con la confianza de que tus productos siempre llegarán a tus clientes según lo necesiten. Nuestro alcance se extiende por toda América del Norte y partes de Europa, asegurando que podamos atender a clientes en ubicaciones clave. Ya sea de día o de noche, llueva o truene, estamos comprometidos a entregar tus mercancías sin demora, porque tu satisfacción es nuestra prioridad.",
      ground_cargo_msg2: "Si tu área no está actualmente en nuestra red, no dudes en preguntar. Siempre estamos abiertos a explorar nuevas oportunidades y discutir cómo podemos satisfacer tus necesidades de envío. Esperamos construir una relación duradera contigo y ayudar a que tu negocio prospere.",
      explore_ocean: "Explorar carga marítima",
      explore_air: "Explorar carga aérea",
      explore_ground: "Explorar carga terrestre",

      // OCEAN-CARGO
      ocean_cargo_theme: "Servicio de Carga Marítima",
      ocean_cargo_title: "Soluciones de Transporte Marítimo sin Complicaciones",
      ocean_cargo_msg1: "En K&BD-LOGISTICS, colaboramos con algunos de los transportistas marítimos más confiables a nivel mundial, asegurando que tus envíos se manejen con precisión y cuidado. Gracias a nuestras asociaciones con actores clave en múltiples alianzas navieras, podemos ofrecer disponibilidad constante para tu carga a tarifas altamente competitivas. Nuestra prioridad es garantizar que tus mercancías no solo se transporten de manera eficiente, sino que también se entreguen a tiempo, dándote la confianza para centrarte en otros aspectos de tu negocio. Ya sea que estés enviando grandes volúmenes o cargas más pequeñas, nuestras soluciones están diseñadas para satisfacer tus necesidades sin comprometer la calidad.",
      ocean_cargo_msg2: "Con nuestro sistema de seguimiento avanzado, puedes seguir el trayecto de tu carga desde la salida hasta su destino final, proporcionando total transparencia a lo largo de la cadena de suministro. Estar clasificados entre los 100 mayores NVOCC, destacando nuestra experiencia y compromiso con la excelencia. Esta visibilidad y confiabilidad aseguran que siempre sepas dónde están tus envíos, reduciendo la incertidumbre y ayudándote a tomar decisiones informadas en cada paso del camino. En K&BD-LOGISTICS, no solo movemos carga: estamos optimizando tu logística para el éxito a largo plazo.",

      // AIR-CARGO
      air_cargo_theme: "Servicio de Carga Aérea",
      air_cargo_title: "Carga Aérea",
      air_cargo_msg1: "En K&BD-LOGISTICS, entendemos la importancia de tus pertenencias y nos comprometemos a entregar cada envío con el máximo cuidado a su destino. Estamos certificados por la Administración de Seguridad en el Transporte (TSA) y la Comisión Marítima Federal (FMC), así como aprobados por el Transportista Aéreo Indirecto (IAC) y somos miembros de la Asociación Internacional de Transporte Aéreo (IATA). Nuestro servicio de carga aérea es ideal para envíos de más de 150 libras que no pueden ser manejados por mensajeros tradicionales. Ofrecemos opciones de envío tanto nacionales como internacionales, con servicios domésticos que generalmente toman de uno a dos días, aunque a veces pueden ocurrir retrasos relacionados con el clima.",
      air_cargo_msg2: "K&BD está dedicado a satisfacer las necesidades de nuestros clientes, sin importar los desafíos. Por eso, hemos establecido asociaciones con algunas de las aerolíneas más reputadas para asegurar que los envíos hacia y desde Estados Unidos y Canadá lleguen a destinos en todo el mundo. Con acceso a más de 300 ubicaciones, proporcionamos una cobertura global excepcional. Nuestros servicios están diseñados para adaptarse a los diversos requisitos y plazos de nuestros clientes. Seleccionamos cuidadosamente los transportistas que mejor se adapten a tus necesidades específicas de envío, lo que nos distingue de muchas otras empresas de transporte aéreo de carga.",
      air_cargo_msg3: "Además, nuestro equipo logístico experto te guiará a lo largo del proceso, informándote sobre las regulaciones, como cuáles artículos están permitidos y cuáles se consideran contrabando en ciertos países, asegurando que tus envíos cumplan con todas las leyes internacionales.",

      //STEPS-FORM
      info: "Información",
      details: "Detalles",
      preferences: "Preferencias",
      complete: "Completar",
      previous: "Atrás",
      next: "Siquiente",
      send: "Enviar",
      preview: "Vista previa",
      close: "Cerrar",
      submit: "Submitir",
      error_msg1: "Todos los campos son obligatorios, asegúrate de llenar cada espacio con información específica.",
      error_msg2: "Este es un campo obligatorio",

      // STEP-1
      name: "Nombre",
      email: "Correo electrónico",
      phone: "Teléfono",
      message: "Mensaje",

      // STEP-2
      origin: "Origen",
      destiny: "Destino",
      address: "Dirección",
      service: "Tipo de Servicio",
      movement: "Tipos de Movimiento",
      d_to_d: "Puerta a Puerta",
      d_to_p: "Puerta a Puerto",
      p_to_p: "Puerto a Puerto",
      p_to_d: "Puerto a Puerta",

      //STEP-3
      long: "Largo",
      high: "Alto",
      wide: "Ancho",
      weight: "Peso",
      dimension_define: "Define las dimensiones de la carga.",
      dimension_weight: "Definir el peso de la carga",
      product: "Producto",
      product_define: "Define, ¿Qué tipo de producto?",
      full_truck: "Full truck",
      ltl: "LTL",
      drayage: "Drayage",
      amount: "Cantidad",
      many_cargoes: "Dimensiones diferentes para las cargas",
      equipment: "Equipamiento",
      trailer_size: "Tamaño del trailer",
      equipment_type: "Tipo de Equipamiento",
      equipment_size: "Tamaño del Equipamiento",
      full_container: "Contenedor completo",
      lcl: "LCL",
      container_size: "Tamaño del contenedor",
      commodity: "Producto",
      other: "otro",

      //STEP-4
      comments: "Comentarios",
      cleary_msg: "Antes de enviar su solicitud, no dude en proporcionar cualquier detalle o comentario que crea relevante.",
      review: "Revise sus datos",
      category: "Categoría",
      dimensions: "Dimensiones",

      //CONTACT-US
      contact_msg: "Descríbenos tu situación en el siguiente formulario y te responderemos en breve con asistencia profesional. Si es necesario, podemos agendar una reunión.",
      contact_msg2: "Tus datos y la descripción proporcionada se han enviado correctamente. Nos pondremos en contacto contigo en un plazo de 24 horas en días laborables.",
      contact_msg3: "Ha ocurrido un error al enviar sus datos. Por favor, inténtelo más tarde. También puede hacer una llamada telefónica o escribir directamente al correo ",
      drop: "¡Envíanos un mensaje!",
      talk: "¡Hablemos!",
      contact_you: "¿Te gustaría que te contactáramos? ¡Hecho!",

      //ABOUT-US
      text_1: "Bienvenido a nuestra empresa de logística, donde nos especializamos en brindar soluciones de transporte integrales para satisfacer sus necesidades. Con un enfoque en la eficiencia, la confiabilidad y la satisfacción del cliente, ofrecemos una variedad de servicios para garantizar que sus envíos se entreguen de manera segura y a tiempo.",
      text_2: "Con más de 20 años de experiencia en la industria, nuestro equipo incluye veteranos con profundas conexiones y relaciones sólidas con una amplia red de empresas de transporte. Nuestra empresa ofrece tres tipos principales de servicios de transporte:",
      text_3: "Nuestros servicios de flete marítimo están diseñados para manejar grandes envíos con facilidad. Nos asociamos con las principales navieras para garantizar que sus productos se transporten de manera segura y eficiente a través de los mares.",
      text_4: "Nuestros servicios de flete terrestre cubren rutas extensas en todos los estados, proporcionando un transporte rápido y confiable para su carga. Ya sea carga completa (FTL) o carga parcial (LTL), lo tenemos cubierto.",
      text_5: "Nuestros servicios de flete aéreo están entre los más rápidos y confiables de la industria. Colaboramos con las principales aerolíneas para garantizar la entrega puntual de sus envíos urgentes.",
      text_6: "También ofrecemos opciones de entrega flexibles para satisfacer sus requisitos específicos:",
      text_7: "Servicio integral donde manejamos todo el proceso de transporte desde la puerta del vendedor hasta la puerta del comprador, garantizando comodidad y mínima responsabilidad para ambas partes.",
      text_8: "Gestionamos el transporte desde las instalaciones del exportador hasta el puerto de origen, proporcionando flexibilidad para exportadores que necesitan asistencia con la logística inicial.",
      text_9: "Servicio rentable donde transportamos bienes entre puertos, ideal para transportistas experimentados que pueden manejar la logística interna y el despacho de aduanas.",
      text_10: "Nos encargamos del transporte desde el puerto de destino hasta las instalaciones del importador, gestionando la última etapa del trayecto.",
      text_11: "En nuestra empresa, entendemos la importancia de la logística confiable y eficiente. Nuestro equipo de profesionales está comprometido a brindar servicios de primer nivel, asegurando que su carga sea manejada con el mayor cuidado y precisión. Nos enorgullecemos de nuestra capacidad para adaptarnos a las necesidades únicas de cada cliente, ofreciendo soluciones personalizadas que impulsan el éxito.",
      text_12: "Gracias por elegirnos como su socio logístico. Esperamos apoyar su negocio y asegurarnos de que sus envíos lleguen a sus destinos sin contratiempos.",
      strong_text_1: "Transporte Marítimo:",
      strong_text_2: "Transporte Terrestre:",
      strong_text_3: "Transporte Aéreo:",
      strong_text_4: "Puerta a Puerta:",
      strong_text_5: "Puerta a Puerto:",
      strong_text_6: "Puerto a Puerto:",
      strong_text_7: "Puerto a Puerta:",

    }
  }
};

const savedLanguage = localStorage.getItem("lng") || "en";

// Inicializa i18next
i18n
  .use(initReactI18next)
  .init({
    resources,            // Proporciona las traducciones
    lng: savedLanguage,           // Configura el idioma inicial
    fallbackLng: "en",  // Configura el idioma de reserva
    interpolation: {
      escapeValue: false // No escapar valores (XSS seguro)
    },
    debug: true          // Opcional: habilita los mensajes de depuración
  });

export default i18n;