const productos = [{
    id: 1,
    marca: "Pago de Carraovejas",
    img: "Pago de Carraovejas.png",
    bodega: "Pago de Carraovejas",
    denominacion: "Ribera del Duero",
    tipo: "Tinto",
    añada: "2019",
    grado: "15% vol.",
    variedad: "15% vol.",
    precio: 600,
    cantidad: 1,
    descripcion: "Quinta añada de este superventas que nació con la cosecha de 2015 unificando el antiguo Crianza y Reserva de la casa. Estamos ante uno de los vinos más demandados de España. Un fijo en nuestro ranking de Top Ventas, cuya añada 2019, plena de matices, es la máxima expresión de su valle ribereño de origen. El invierno poco frío y las escasas precipitaciones contribuyeron a una cosecha inmejorable que, sometida a la elaboración paciente, cuidadosa y atenta al minimo detalle de la que hace gala la bodega vallisoletana, ha dado como resultado un gran tinto con estructura y fondo vibrante. Aromas tostados, especiados, de fruta madura y roble nuevo son la antesala perfecta a un paladar sabroso y con un fino amargor final para constituir un conjunto que sigue siendo imbatible."
}, {
    id: 2,
    marca: "La Montesa",
    img: "la montesa.png",
    bodega: "Bodegas Palacios Remondo",
    denominacion: "Rioja",
    tipo: "Tinto",
    añada: "2018",
    grado: "14% vol.",
    variedad: "95% Garnacha, 5% otras",
    precio: 1100,
    cantidad: 1,
    descripcion: "Álvaro Palacios deja su impronta enológica en este tinto que tan bien refleja todas las características de su lugar de origen, las laderas de suelo arcillo-calcáreo del Monte Yerga, en Alfaro. La Montesa 2018 culmina el proceso natural, iniciado años atrás, hacia una identidad clásica. En esta añada ha habido un cambio de imagen definitivo. La etiqueta sigue el modelo de Quiñón de Valmira y cierra la línea definitiva de los vinos de la bodega: equilibrio de elementos, claridad en la jerarquía de contenidos, vocación informativa, proyección de un estilo limpio, veraz y atemporal. Los tonos rojo y crema se apoderan de la botella, así como los hierros ganaderos. "
}, {
    id: 3,
    marca: "Juan Gil Etiqueta Plata",
    img: "Juan Gil Etiqueta PLata.png",
    bodega: "Bodegas Juan Gil",
    denominacion: "Juamilla",
    tipo: "Tinto",
    añada: "2020",
    grado: "15% vol.",
    variedad: "100% Monastrell",
    precio: 1200,
    cantidad: 1,
    descripcion: "Uno de los vinos más vendidos y mejor valorados de nuestra web. Arrasa por su excelente concentración aromática, su textura aterciopelada, su explosiva carga frutal y su jugosidad. Una referencia que exhibe el carácter cautivador de la uva Monastrell. Desde 2018 cuenta con el sello ecológico."
}, {
    id: 4,
    marca: "Pruno",
    img: "pruno.png",
    bodega: "Finca Villacreces",
    denominacion: "Ribera del Duero",
    tipo: "Tinto",
    añada: "2020",
    grado: "14% vol.",
    variedad: "90% Tempranillo,10% Cabernet sauvignon",
    precio: 700,
    cantidad: 1,
    descripcion: "Estamos ante uno de nuestros vinos más vendidos. Sus añadas anteriores deslumbraron por su gran relación calidad-precio y esta excelente añada promete seguir el mismo camino. Las variedades Tempranillo y Cabernet sauvignon y el trabajo en bodega dan lugar a un tinto goloso, con recuerdos de café, tofe, fruta madura y regaliz negro. Todo un caramelo para los aficionados a los tintos de la Ribera del Duero."
}, {
    id: 5,
    marca: "Pago de los Capellanes Joven Roble",
    img: "Pago de los Capellanes Joven Roble.png",
    bodega: "Pago de los Capellanes",
    denominacion: "Ribera del Duero",
    tipo: "Tinto Joven",
    añada: "2021",
    grado: "14.5% vol.",
    variedad: "100% Tempranillo",
    precio: 550,
    cantidad: 1,
    descripcion: "Este tinto es un habitual de nuestros ránkings de vinos Más Vendidos y Mejor Valorados, siendo la referencia con mejor relación calidad-precio de la bodega. Como curiosidad, se trata del primer vino de la bodega elaborado bajo la asesoría técnica del reconocido enólogo Pepe Hidalgo. En esta nueva añada 2021 vuelve a hacer gala de su alegre carácter frutal, convirtiéndose en un tinto muy apto para la temporada estival. Su acidez refrescante y su sutil tanicidad terminan por modelarlo como el acompañante perfecto para una elegante velada."
}, {
    id: 6,
    marca: "Jose Pariente Sauvignon Blan",
    img: "Jose Pariente Sauvignon Blanc.png",
    bodega: "Bodegas José Pariente",
    denominacion: "Rueda",
    tipo: "Blanco",
    añada: "2021",
    grado: "13% vol.",
    variedad: "100% Sauvignon blanc",
    precio: 450,
    cantidad: 1,
    descripcion: "Con este varietal la bodega José Pariente aporta un interesante matiz de persistencia y mineralidad en la forma de entender el vino blanco de Rueda. La Sauvignon blanc, elaborada en una zona de clima continental y suelo pobre, se traduce en un blanco aromático y redondo perfecto para los fans de la fruta exótica. Un vino muy recomendado para acompañar mariscos de concha. "
}, {
    id: 7,
    marca: "La Caprichosa Verdejo",
    img: "La Caprichosa Verdejo.png",
    bodega: "La Caprichosa Verdejo.png",
    denominacion: "Rueda",
    tipo: "Blanco",
    añada: "2021",
    grado: "13.5$ vol.",
    variedad: "100% Verdejo",
    precio: 800,
    cantidad: 1,
    descripcion: "La Caprichosa es un monovarietal de Verdejo que nace en viñedos situados en la zona de Rueda (Pollos y La Seca), con más de 30 años de edad. Tras una permanencia sobre lías durante 4 meses, se obtiene un vino muy aromático, con notas de heno, cítricos y toques balsámicos. Ideal para disfrutar junto con mariscos, pescados, foie y quesos curados. "
}, {
    id: 8,
    marca: "Flor de Vetus",
    img: "Flor de Vetus.png",
    bodega: "Bodegas Vetus",
    denominacion: "Toro",
    tipo: "Tinto Crianza",
    añada: "2018",
    grado: "14.5% vol.",
    variedad: "100% Tinta de Toro",
    precio: 750,
    cantidad: 1,
    descripcion: "Considerado como uno de los tintos con mejor relación calidad-precio de la escena nacional, Flor de Vetus es un vino de finca que representa fielmente la tipicidad de la Tinta de Toro. Te sorprenderá por su frescura y suaves taninos. "
}, {
    id: 9,
    marca: "Habla del Silencio",
    img: "Habla del Silencio.png",
    bodega: "Habla",
    denominacion: "IGP Extremadura",
    tipo: "Tinto",
    añada: "2020",
    grado: "14% vol.",
    variedad: "Syrah, Cabernet sauvignon, Tempranillo",
    precio: 900,
    cantidad: 1,
    descripcion:"Habla del Silencio reúne varias condiciones para ser catalogado como un estupendo tinto muy asequible. Con él siempre acertarás- Es una tentación difícil de rechazar a un precio impresionante por lo que nos ofrece. Un vino que se puede convertir en un vino para todos los días. Combina a la perfección con aperitivos y tapas. Fue elegido en las añadas 2014, 2015, 2016 y 2017 como el mejor vino de España por la Asociación Española de Periodistas y Escritores del Vino (AEPEV)."
}, {
    id: 10,
    marca: "Viña Zorzal Garnacha",
    img: "Viña Zorzal Garnacha.png",
    bodega: "Viña Zorzal Wines",
    denominacion: "Navarra",
    tipo: "Tinto",
    añada: "2020",
    grado: "13.5% vol.",
    variedad: "100% Garnacha",
    precio: 500,
    cantidad: 1,
    descripcion:"Tinto elaborado con Garnacha procedente de viñedos ubicados al pie del Sistema Ibérico. Una apuesta clara por la honestidad, el terruño y la frescura, además del respeto por el medioambiente utilizando técnicas de producción ecológicas. Ideal para acompañar carne de caza, guisos de carne y magret de pato. Un vino de pueblo que es perfecto como vino alegre y desenfado, de beber a diario."
}, {
    id: 11,
    marca: "La Cueva del Contador",
    img: "La Cueva del Contador.png",
    bodega: "Bodega Contador",
    denominacion: "Rioja",
    tipo: "Tinto Crianza",
    añada: "2016",
    grado: "13.5% vol.",
    variedad: "100% Tempranillo",
    precio: 2500,
    cantidad: 1,
    descripcion: "La Cueva del Contador, cuyo nombre hace referencia al lugar y al método utilizado antiguamente por los elaboradores que transportaban el vino en pellejos de cabra y lo contabilizaban a pie del calado, donde se almacenaba y vendía, es el segundo vino de la bodega. Tras la incorporación de pequeñas cantidades de Mazuelo en anteriores añadas, en esta vuelve a presentarse como un monovarietal de Tempranillo."
}, {
    id: 12,
    marca: "Vina Tondonia  Reserva",
    img: "Vina Tondonia Tinto Reserva.png",
    bodega: "López de Heredia",
    denominacion: "Rioja",
    tipo: "Tinto Reserva",
    añada: "2010",
    grado: "13% vol.",
    variedad: "70% Tempranillo, 20% Garnacha, 10% Graciano",
    precio: 500,
    cantidad: 1,
    descripcion: "Otra añada más la atemporalidad hecha vino. Su característico largo envejecimiento en barrica y reposo en botella es reflejo del buen hacer de la histórica bodega López de Heredia para crear tintos suaves, redondos, bien desarrollados y con larga capacidad de guarda, como su emblemático reserva. Un vino clásico en sus formas que a nadie dejará indiferente y que procede de una añada que, si bien fue más escasa en cantidad, está considerada como una de las mejores en calidad de lo que va de siglo en Rioja, e incluso a la altura de otras ya históricas, no en vano, obtuvo la calificación de Excelente por el consejo regulador de la D.O.Ca. El crítico británico y Master of Wine, Tim Atkin, ha sido el primero en concederle su beneplácito absoluto con una alta puntuación y a buen seguro que no será en único. "
}];
const datosDeUsuario = {
    "nombre": "Daniel",
    "apellido": "Lorenzo",
    "email": "cogitaciones@hotmail.com",
    "telefono":555555,
    "domicilio": "Av San Martin1234",
    "password": "contraseña"
}

btn