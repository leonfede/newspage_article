import "./article.css";
import { 
  ArticleInfo, Headline, Photo, 
  ScrollyTelling, SectionStart, Sharing, 
  TabNavigator 
} from "../../components";

import HeadingBackground from "../../assets/headingBackground.jpeg";
import AuthorImage from "../../assets/authorImage.png";
import Photo1 from "../../assets/photo1.jpg";
import Photo2 from "../../assets/photo2.jpg";
import Photo3 from "../../assets/photo3.jpg";
import Photo4 from "../../assets/photo4.jpg";
import Photo5 from "../../assets/photo5.jpg";
import Photo6 from "../../assets/photo6.jpg";
import Photo7 from "../../assets/photo7.jpg";
import Photo8 from "../../assets/photo8.jpg";
import Photo9 from "../../assets/photo9.jpg";
import Photo10 from "../../assets/photo10.jpg";
import Photo11 from "../../assets/photo11.jpg";
import Photo12 from "../../assets/photo12.jpg";
import Photo13 from "../../assets/photo13.jpg";
import Photo14 from "../../assets/photo14.jpg";
import Photo15 from "../../assets/photo15.jpg";
import Photo16 from "../../assets/photo16.jpg";
import Photo17 from "../../assets/photo17.jpg";
import Section1 from "../../assets/section1.png";
import Section2 from "../../assets/section2.png";
import Section3 from "../../assets/section3.png";
import Section4 from "../../assets/section4.png";
import Section5 from "../../assets/section5.png";
import Section6 from "../../assets/section6.png";
import Section7 from "../../assets/section7.png";
import Section8 from "../../assets/section8.png";
import MapaBanfield from "../../assets/mapaBanfield.jpg";
import DatosMural from "../../assets/datosMural.jpg";
import ImgScroll1 from "../../assets/imgScroll1.jpg";
import Enero05 from "../../assets/enero05.svg";
import ImgScroll2 from "../../assets/imgScroll2.jpg";
import Enero12 from "../../assets/enero12.svg";
import ImgScroll3 from "../../assets/imgScroll3.jpg";
import Enero20 from "../../assets/enero20.svg";
import ImgScroll4 from "../../assets/imgScroll4.jpg";
import Enero28 from "../../assets/enero28.svg";
import ImgScroll5 from "../../assets/imgScroll5.jpg";
import Febrero05 from "../../assets/febrero05.svg";
import ImgScroll6 from "../../assets/imgScroll6.jpg";
import Febrero11 from "../../assets/febrero11.svg";
import ImgScroll7 from "../../assets/imgScroll7.jpg";
import Febrero20 from "../../assets/febrero20.svg";
import ImgScroll8 from "../../assets/imgScroll8.jpg";
import Marzo03 from "../../assets/marzo03.svg";
import ImgScroll9 from "../../assets/imgScroll9.jpg";
import MapaPenangMalasia from "../../assets/mapaPenangMalasia.svg";
import ImgScroll10 from "../../assets/imgScroll10.jpg";
import MapaMoscuRusia from "../../assets/mapaMoscuRusia.svg";
import ImgScroll11 from "../../assets/imgScroll11.jpg";
import MapaTumbyAustralia from "../../assets/mapaTumbyAustralia.svg";
import ImgScroll12 from "../../assets/imgScroll12.jpg";
import MapaDohaQatar from "../../assets/mapaDohaQatar.svg";
import ImgScroll13 from "../../assets/imgScroll13.jpg";
import MapaMoscuRusia2 from "../../assets/mapaMoscuRusia2.svg";
import ImgScroll14 from "../../assets/imgScroll14.jpg";

const tabTargets = [
  {
    title: "Chicos Jugando: El inicio de la idea",
    targetElement: "section1",
    color: "#1492E6"
  },
  {
    title: "La Obra: De principio a fin",
    targetElement: "section2",
    color: "#9EADA8"
  },
  {
    title: "La C??bala T??cnica/Estilos",
    targetElement: "section3",
    color: "#E2B184"
  },
  {
    title: "Pros y Contras",
    targetElement: "section4",
    color: "#E20D32"
  },
  {
    title: "Qui??n es Mart??n Ron",
    targetElement: "section5",
    color: "#F2B02D"
  }
];

const st1Sections = [
  {
    background: ImgScroll1,
    image: Enero05,
    title: "El comienzo",
    text: "Lo primero es garabatear la pared de arriba a abajo. Mart??n Ron eligi?? dibujos alusivos a la pandemia. A fines de diciembre, una empresa colg?? el balanc??n para poder pintar.",
    toRight: false,
    canExpand: true
  },
  {
    background: ImgScroll2,
    image: Enero12,
    title: "A garabatear",
    text: "Los garabatos funcionan como cuadr??cula para plantar el dibujo de la nena. Se hace con un ???matcheo??? digital o superposici??n de dos fotos: la de la pared garabateada y la del dise??o de la nena.",
    toRight: true,
    canExpand: true
  },
  {
    background: ImgScroll3,
    image: Enero20,
    title: '"Manchar" la pared',
    text: 'Se pinta o ???mancha???, seg??n la jerga, de manera ???r??stica??? algunas partes del dise??o, como para empezar a visualizar la obra.',
    toRight: false,
    canExpand: true
  },
  {
    background: ImgScroll4,
    image: Enero28,
    title: "Probar colores",
    text: "Se empiezan a probar los colores de los ladrillitos de encastre que forman parte del dise??o. Se oscurecen, aclaran o mezclan, seg??n como se vean con la luz o lo que absorba la pared.",
    toRight: true,
    canExpand: true,
  },
  {
    background: ImgScroll5,
    image: Febrero05,
    title: "Pintar",
    text: "Se pinta por partes siguiendo una planificaci??n. Pintar el mural es lo que requiere mayor tiempo de trabajo: es el 90% de la labor del artista.",
    toRight: false,
    canExpand: true
  },
  {
    background: ImgScroll6,
    image: Febrero11,
    title: "Varias capas",
    text: "Se sigue coloreando. Seg??n la dificultad del dise??o, se pinta todo lo que lleva el mismo color o por partes. Deben colocarse varias manos de color.",
    toRight: true,
    canExpand: true
  },
  {
    background: ImgScroll7,
    image: Febrero20,
    title: "El final",
    text: "El mural ya est?? terminado. Se corrigen detalles, se mejoran luces y sombras, se repasan algunos colores.",
    toRight: false,
    canExpand: true
  },
  {
    background: ImgScroll8,
    image: Marzo03,
    title: "La protecci??n",
    text: "Se coloca la ??ltima p??tina protectora para que la pintura dure m??s tiempo a la intemperie y resista la erosi??n del clima (sol, lluvia, viento).",
    toRight: true,
    canExpand: true
  }
];

const st2Sections = [
  {
    background: ImgScroll9,
    title: "Sus murales en el mundo",
    toRight: true
  },
  {
    background: ImgScroll10,
    image: MapaPenangMalasia,
    title: "Swimming in the Air",
    text: "2015",
    toRight: false,
    canExpand: true
  },
  {
    background: ImgScroll11,
    image: MapaMoscuRusia,
    title: "Handsantd",
    text: "2018",
    toRight: true,
    canExpand: true
  },
  {
    background: ImgScroll12,
    image: MapaTumbyAustralia,
    title: "Jeti Jumping",
    text: "2018",
    toRight: false,
    canExpand: true
  },
  {
    background: ImgScroll13,
    image: MapaDohaQatar,
    title: "Oryx Going Ahead",
    text: "2019",
    toRight: true,
    canExpand: true
  },
  {
    background: ImgScroll14,
    image: MapaMoscuRusia2,
    title: "Parado de Manos",
    text: "2019",
    toRight: false,
    canExpand: true
  }
];

export default function Article() {
  return (
    <div className="articleWrapper">
      <Headline
        background={HeadingBackground}
        title="Viaje a la cabeza de un artista: as?? se hace una obra de arte"
        subtitle="Una aventura fascinante de 47 d??as para pintar un mural de 65 metros de altura."
      />
      <TabNavigator targets={tabTargets} />
      <div className="contentsWrapper">
        <ArticleInfo
          authorName="Paula Conde"
          authorImage={AuthorImage}
          uploadDate="13/04/2021 6:01"
          category="Cultura"
          lastUpdated="14/04/2021 14:03"
        />
        <p className="articleParagraph">
          "??Ese amarillo est?? muy chill??n! Hay que apagarlo un poco, que sea m??s ocre, como el de la baranda del balanc??n. Ponele m??s violeta". Con medio cuerpo fuera de la ventana del sexto piso de un edificio de <a href="https://es.wikipedia.org/wiki/Banfield" className="textLink">Banfield</a>, <a href="https://es.wikipedia.org/wiki/Mart%C3%ADn_Ron_(artista)" className="textLink">Mart??n Ron</a>, muralista, artista visual y, antes que nada, un hombre talentoso en el uso del rodillo, da indicaciones a su equipo de trabajo, Mariana Parra y Nicol??s Dicianno.
        </p>
        <p className="articleParagraph">
          Es un martes de mediados de enero, hace m??s de 30 grados, y estamos en Belgrano 1529, donde hace pocos d??as <strong>Mart??n Ron, uno de los artistas argentinos m??s requeridos del planeta</strong>, empez?? a pintar no s??lo el mural m??s alto de su carrera que ya lleva dos d??cadas, sino <strong>uno de los m??s altos de la regi??n.</strong>
        </p>
        <p className="articleParagraph">
          Son <b>65 metros</b> de la medianera de un edificio de 21 pisos, a media cuadra de Maip??, una de las zonas comerciales de esa localidad.
        </p>
        <p className="articleParagraph">
          Lleg?? a esta pared, porque, antes, hace un a??o, pint?? otra en la cuadra siguiente y, juego ??ptico mediante, fue elogiado y aplaudido por los que lo vieron en vivo o compartido en alguna red social. Ambos edificios son emprendimientos de Vidal Constructores y fue a su titular, Daniel Vidal, al que se le ocurri?? <b>sumar arte a las torres</b> terminadas, despu??s de haber quedado deslumbrado por los murales de <b>Ron</b> en <a href="https://es.wikipedia.org/wiki/Casa_Amarilla_(Buenos_Aires)" className="textLink">Casa Amarilla</a>.
        </p>
        <Photo
          imageSource={Photo1}
          epigraph="Mart??n Ron, con sus murales terminados. Foto Mario Quinteros"
        />
        <p className="articleParagraph">
          Primero fue la pared de Belgrano 1646, con un mural de 50 metros de <strong>un nene que juega con un globo metalizado</strong>. Le sigui?? la de Belgrano 1529, con un mural de 65 metros, de una nena, amiga del primer nene, que <strong>apila ladrillitos de encastre</strong>, parada en puntitas de pie sobre un globo metalizado. M??s adelante, cuando la construcci??n est?? terminada, habr?? una tercera medianera con un nuevo mural, lo que formar?? un tr??ptico de obras de <b>Ron</b> en la zona.
        </p>
        <p className="articleParagraph">
          De principio a fin, para tener <b>perspectiva</b> de c??mo marcha la obra, Mart??n debe subir a la terraza de un edificio vecino. Es Andrea, la que vive en el sexto piso desde el cual <b>Ron</b> da indicaciones a su equipo asom??ndose por la ventana, la que acepta <b>prestar su llave</b>, su contacto, su departamento para que los artistas puedan trabajar.
        </p>
        <p className="articleParagraph">
          Da la casualidad que ella es estudiante de Bellas Artes y <i>no-puedo-creer-tener-esta-vista-del-mural-desde-mi-ventana</i>. Andrea todav??a no sabe -pero ahora va spoiler- que el d??a en que el mural est?? terminado a fines de febrero, cuando la ??ltima p??tina de protecci??n est?? colocada "para que aguante m??s la intemperie", recibir?? <b>un regalo especial de parte</b> de Mart??n: una brocha cari??osamente dedicada.
        </p>
        <p className="articleParagraph">
          <b>Seis semanas despu??s</b> de plantar el dise??o, pintar y probar colores ???"manchar", como se dice en la jerga???, emprolijar detalles, laquear el trabajo y superar escollos clim??ticos y t??cnicos, el mural est?? terminado.
        </p>
        <p className="articleParagraph">
          Pintar un mural de m??s de 60 metros en seis semanas es un buen tiempo. Pero <b>Ron</b> asegura que si el clima le hubiera permitido trabajar de corrido y a toda m??quina, habr??a podido concretarlo ??en cuatro semanas!
        </p>
        <p className="articleParagraph">
          Algo que parece absolutamente descabellado para cualquiera de los mortales que pasamos por ah?? y, a riesgo de provocarnos una contractura en el cuello, inclinamos la cabeza hacia arriba, pr??cticamente recostamos la nuca sobre la espalda, hacemos visera con la mano sobre los ojos, y miramos perplejos semejante obra. <b>????C??mo hizo?!</b>
        </p>
        <ScrollyTelling 
          sections={st1Sections}
        />
        <SectionStart
          idTag="section1"
          image={Section1}
          strongTitle="Chicos jugando: "
          title="El inicio de la idea"
          bgColor="#1492E6"
          textColor="#0C0C0C"
        />
        <p className="articleParagraph">
          Hay una relaci??n directa entre los dos murales que <b>Mart??n Ron</b> pint?? en Banfield con un a??o de diferencia. Una idea empuj?? a la otra: como en la cuadra siguiente al mural de la nena est?? el mural del nene, <b>Ron</b> pens?? en hacer obras que dialogaran entre ellas.
        </p>
        <p className="articleParagraph">
          A <b>Ron</b> le interesa la gestualidad de los m??s chicos, esa inocencia que transmiten en su forma de actuar. Algo que llevado a gran escala encuentra a??n m??s interesante. De ah?? el desaf??o, de ah?? que <b>decidi?? pintar ni??os</b>.
        </p>
        <p className="articleParagraph">
          Pero si hay algo que Mart??n hace siempre, siempre, antes de empezar un nuevo proyecto es acercarse a la pared en cuesti??n varias veces, durante varios d??as para ver qu?? le inspira el lugar.
        </p>
        <Photo
          imageSource={Photo2}
          epigraph="Faustino, el nene que qued?? inmortalizado en otro mural de Mart??n Ron, en Banfield. Foto Enrique Garc??a Medina"
        />
        <p className="articleParagraph">
          El nene de Belgrano 1646 se llama <b>Faustino</b>, ahora tiene 8 a??os, pero en el momento de quedar inmortalizado en esta medianera de Banfield ten??a 7. Es hijo de una pareja de amigos de <b>Mart??n Ron</b>.
        </p>
        <p className="articleParagraph">
          En 2018, la imagen de Faustino haciendo la vertical lleg?? a una medianera de un edificio <b>de Mosc??</b>. El chico <b>tuvo que practicar</b> durante semanas y semanas esa pose para que la posici??n fuera real y no trucada en la foto que finalmente Mart??n us?? como base.
        </p>
        <p className="articleParagraph">
          Es que para hacer los dise??os que m??s tarde ser??n murales, <b>Ron</b> se basa en <b>fotograf??as</b> que ??l mismo saca. En el caso de las obras de Banfield, fue una serie de fotos que tom?? a fines de 2019, durante un asado en su casa de <a href="https://es.wikipedia.org/wiki/Boedo_(Buenos_Aires)" className="textLink">Boedo</a>. <b>Ron</b> fotografi?? una y mil veces a Faustino y a su amiga <b>Ail??n</b> (sobrina de la actual pareja del pap?? de Fausti), jugando al natural, sin premisas, sin poses.
        </p>
        <p className="articleParagraph">
          Para el primer mural, el que pint?? en febrero de 2020, se qued?? con una foto de Faustino soplando un globo metalizado; para el segundo, que pint?? en enero de 2021, con una de Ail??n escribiendo en un pizarr??n, en un momento en que todos estaban en un recreo de la sesi??n fotogr??fica. De reojo, Mart??n pesc?? ese momento en que los dos chicos escrib??an en un pizarr??n. Ail??n, en puntitas de pie, tratando de llegar a lo m??s alto, con los piecitos sucios, <b>esa era la imagen que el artista buscaba</b>.
        </p>
        <Photo
          imageSource={Photo3}
          epigraph="Ail??n, la nena que inspir?? el mural de Mart??n Ron en Banfield. Foto Enrique Garc??a Medina"
        />
        <p className="articleParagraph">
          Con las <b>facilidades que da la tecnolog??a</b>, hizo las maquetas de forma digital ???rara vez las imprime???, arm?? la cuadr??cula que le permite plantar el dise??o a gran escala y cambi??, modific?? e intervino a su gusto y conveniencia, y el pizarr??n de la foto original pas?? a ser una pared de ladrillitos de encastre, un gui??o a la pared de ladrillos donde ahora vive la obra.
        </p>
        <p className="articleParagraph">
          A Faustino le encanta verse en el mural. Dice que es famoso. Ail??n, m??s t??mida, apenas se reconoce en esa posici??n de espaldas. A??n no es del todo consciente de <b>su imagen a gran escala en la pared de un edificio</b>.
        </p>
        <SectionStart
          idTag="section2"
          image={Section2}
          strongTitle="La obra:"
          title="De principio a fin"
          bgColor="#9EADA8"
          textColor="#0C0C0C"
        />
        <div className="embebbedImageWrapper">
          <img className="embebbedImage" src={MapaBanfield} alt="Mapa de Banfield" />
        </div>
        <p className="articleParagraph">
          Una semana antes de arrancar este mural el 5 de enero, <b>Mart??n Ron</b> debe ocuparse de la log??stica. Por ejemplo, contactar a la empresa que monta el <b>balanc??n electr??nico</b>, esa especie de balc??n que cuelga de los edificios, con el sost??n que le da desde los extremos dos cables de acero y el impulso de un motor para subir y bajar. Se los suele usar para hacer diferentes trabajos que van de limpieza a pintura y en el caso del muralismo, la empresa debe evaluar el estado de situaci??n, las necesidades, los d??as que estar?? colgado y ofrecer la mejor tecnolog??a y seguridad.
        </p>
        <p className="articleParagraph">
          Despu??s, viene <b>la parte social</b>, por decirlo de alg??n modo. El desembarco en una pared que lo tendr?? a ??l y a su equipo durante varias horas de muchos d??as seguidos, incluidos fines de semanas y feriados, necesita de generar ciertos lazos con la comunidad que lo rodea. Porque no es que va a trasladar las latas de pintura, ni los rodillos todos los d??as desde su taller de Caseros, sino que va a guardar todos los materiales en alg??n dep??sito o garage o departamento vac??o que le presten el tiempo que dure la realizaci??n de la obra.
        </p>
        <Photo
          imageSource={Photo4}
          epigraph="Mart??n Ron y su equipo de trabajo: Mariana Parra y Nicol??s Dicianno. Foto Germ??n Garc??a Adrasti"
        />
        <p className="articleParagraph">
          Despu??s, s??, <b>a colgarse de la pared</b>. Uno de los primeros pasos para plantar el dise??o consiste en delinear una cuadr??cula o grilla de base que act??e de referencia a la hora de plantar el dibujo. Esto es, en el caso de la nena, por d??nde va a pasar la mano, por d??nde la cabeza, por d??nde las piernas. Esa cuadr??cula, que funciona como <b>coordenada</b>, ya no es una divisi??n de la pared en cuadrados, sino una pared toda <b>garabateada en aerosol</b> con dibujos alusivos al <a href="https://es.wikipedia.org/wiki/COVID-19" className="textLink">coronavirus</a> ???virus, bacterias, vacunas, repetidos de arriba a abajo???.
        </p>
        <p className="articleParagraph">
          "El garabato con aerosol en la pared es visto como una irrupci??n violenta. Cuando hice el mural del nene, los vecinos no entend??an y llamaban al constructor para avisarle que est??bamos grafiteando la pared. El aerosol est?? estigmatizado como algo vand??lico y llaman a la polic??a. En cambio, si te ven con un pincel, ya es otra cosa, le tienen respeto, lo ven como una herramienta de trabajo y hasta te ofrecen ayuda", sonr??e <b>Ron</b>. 
        </p>
        <Photo
          imageSource={Photo5}
          epigraph="Los garabatos en la pared funcionan como coordenadas para plantar el dise??o. Foto Luc??a Merle"
        />
        <p className="articleParagraph">
          Con la pared garabateada de arriba a abajo, trabajo que le lleva una ma??ana entera, Mart??n saca una foto vertical a la que, tecnolog??a mediante, le <b>superpone la imagen del dise??o de la nena</b>. De esa manera, tiene la gu??a por d??nde pasar?? cada trazo. Trasladar el dise??o a la pared le toma otros tres d??as de trabajo.
        </p>
        <p className="articleParagraph">
          Con el contorno de la nena dibujado en la pared, <b>Ron</b> hace "un sellado", es decir, coloca una primera mano de pintura sin pigmento, que es brillante y pl??stica, adem??s de transparente, para que colorear sea m??s f??cil y el pincel resbale m??s. Caso contrario, la superficie absorbe mucha pintura. Y a la figura de la nena, le da una mano de color rosa que le permita tener una referencia a la hora de hacer el fondo.
        </p>
        <p className="articleParagraph">
          Lo que sigue es empezar "a manchar", como le dicen en la jerga, es decir, a probar y calibrar colores para ver tonos, c??mo queda, c??mo se ve. "Aislados pod??s tener un mont??n de colores y despu??s los junt??s y no funcionan, <b>los colores tienen que quedar armonizados</b>, ni muy chill??n, ni muy opaco", sentencia <b>Ron</b>. Por eso los prueba en una porci??n de la pared, antes de hacerlos extensivos a toda la superficie.
        </p>
        <p className="articleParagraph">
          "Mi objetivo ???explica??? es que est?? <b>todo coloreado r??pido para matar el blanco del fondo</b> y para tener un panorama m??s claro de c??mo funcionan los colores y ecualizarlos".
        </p>
        <Photo
          imageSource={Photo6}
          epigraph="El mural, en una etapa intermedia. Foto Germ??n Garc??a Adrasti"
        />
        <p className="articleParagraph">
          Se pinta, primero, a grosso modo, el fondo; despu??s, la figura. Y despu??s se emprolija. Tambi??n <b>se trabaja por partes</b>, seg??n una planificaci??n dise??ada de antemano: un d??a la parte de arriba, la cabeza; otro d??a los ladrillitos de encastre; otro d??a los pies.
        </p>
        <p className="articleParagraph">
          El final no s??lo consiste en emprolijar detalles y en darle capas de impermeabilizante (laca poliuret??nica) para que se conserve durante m??s tiempo. Tambi??n est?? en saber poner el punto final: dice Mart??n que siempre se puede mejorar o modificar algo, pero que hay que saber soltar la obra, que <b>hay murales que quiz??s no vuelva a ver en su vida</b>, pero que est??n ah??, para ser contemplados por los dem??s. "La obra ???se??ala??? est?? disociada del artista, porque <b>no puedo enrollar la medianera y llev??rmela al living de mi casa</b>. Est?? ah?? para todos".
        </p>
        <SectionStart
          idTag="section3"
          image={Section3}
          strongTitle="La C??bala"
          title="Tecnica/Estilos"
          bgColor="#E2B184"
          textColor="#0C0C0C"
        />
        <p className="articleParagraph">
          Desde hace tres a??os, cada vez que empieza a pintar un nuevo mural, <b>Mart??n Ron</b> tiene una c??bala: escribir <b>"Hola, mam??"</b> en el boceto inicial plantado en la pared. Es una marca personal, como cuando dice ???mucho biri biri??? por mucho ???blabl?????, mucha conversaci??n.
        </p>
        <p className="articleParagraph">
          El "Hola, mam??" quedar?? tapado a medida que avance el mural. Lo escribi?? una vez en una obra que pintaba en 2018, en Mosc?? ???el ni??o Faustino haciendo la vertical??? para mandarle una foto a su mam?? desde esa otra punta del planeta en donde estaba. Cada nuevo proyecto, desde entonces, tiene esa frase, escrita en aerosol y la posterior foto para que mam?? Norma infle el pecho de orgullo.
        </p>
        <Photo
          imageSource={Photo7}
          epigraph='La c??bala: escribir "Hola mam??", que esta vez, despu??s de un a??o pand??mico sin pintar fue "Volv?? mam??". Foto Luc??a Merle'
        />
        <p className="articleParagraph">
          2020, no obstante, fue un a??o particular, fue el a??o de la <a href="https://es.wikipedia.org/wiki/Pandemia_de_COVID-19" className="textLink">pandemia</a> y el confinamiento. Para <b>Ron</b>, artista de exteriores, fue el a??o en que casi no pudo pintar. Lleg?? a terminar el mural del nene en marzo, justo antes de que se anunciara la <a href="https://es.wikipedia.org/wiki/Medidas_sanitarias_por_la_pandemia_de_COVID-19_en_Argentina" className="textLink">cuarentena</a> obligatoria. Volver a agarrar una brocha casi un a??o m??s tarde, en enero, volver a subirse a un balanc??n, volver a ensuciarse las manos de pintura, tuvo un sabor especial para el artista, que en lugar de escribir ???Hola, mam????? como tantas veces, puso <b>"Volv??, mam??"</b>. Volv?? al ruedo, volv?? a pintar. Sal?? de la jaula.
        </p>
        <p className="articleParagraph">
          <b>TECNICA:</b> 250 litros de pintura hidroesmalte se quedan en este mural. <b>Mart??n Ron</b> pinta con pincel y brocha, hace vieja escuela y no grafiti contempor??neo. Dicho de otra manera: no usa aerosol. Se acostumbr?? a la t??cnica del ??leo, con veladuras (una t??cnica que consiste en aplicar una capa de pintura muy diluida sobre una pared ya pintada), pero dominando <b>la escala gigante</b>.
        </p>
        <Photo
          imageSource={Photo8}
          epigraph="250 litros de pintura requiere el mural de la nena. Foto Germ??n Garc??a Adrasti"
        />
        <p className="articleParagraph">
          Reemplaza los pincelitos de cuadros chicos por brochas grandes y rodillos. Un mural se trabaja capa por capa: primero planta un color de manera r??stica y despu??s va pintando una mano tras otra hasta modelar la forma y conseguir volumen. Muchas capas de buena calidad le garantizan a la obra una larga vida ??til. Eso y la laqueada del final para que se conserve durante m??s tiempo.
        </p>
        <div className="embebbedImageWrapper">
          <img className="embebbedImage" src={DatosMural} alt="Datos sobre el mural" />
        </div>
        <p className="articleParagraph">
          <b>ESTILO:</b> Sus obras a gran escala se caracterizan por el <b>estilo hiperrealista</b>, con el uso de colores fuertes, texturas y elementos de la vida cotidiana. Trabaja con la t??cnica de 3D, d??ndole m??s realismo a su obra. Uno de sus sellos personales es el uso de la cuadr??cula que est?? presente en varios de sus murales. Tiene algunos trabajos sobre lienzo ???es algo que hace para s?? mismo, sin presi??n y para experimentar???, pero lo que verdaderamente le gusta es el muralismo, porque es un desaf??o, porque le da adrenalina, porque cada pared es ??nica e irrepetible.
        </p>
        <Photo
          imageSource={Photo9}
          epigraph="Su estilo es el hiperrealismo. Foto Germ??n Garc??a Adrasti"
        />
        <SectionStart
          idTag="section4"
          image={Section4}
          strongTitle="Pros y contras"
          bgColor="#F2B02D"
          textColor="#0C0C0C"
        />
        <p className="articleParagraph">
          <b>PROS:</b> Pintar esta medianera en pleno verano no fue tan terrible, porque <b>Ron</b> y su equipo pudieron trabajar mayormente a la sombra, gracias <b>a la orientaci??n de la pared</b>. Un muro sin sol y de gran tama??o, explica Mart??n, son dos condiciones ideales para el artista.
        </p>
        <p className="articleParagraph">
          Ac??, por los puntos de vista que tendr??n los peatones, no est?? previsto ning??n truco ??ptico, como s?? en cambio lo est?? en el mural del nene: una especie de distorsi??n, llamada anamorfosis, que favorece algunos puntos de vista en detrimento de otros.
        </p>
        <p className="articleParagraph">
          Adem??s, como la pandemia no le permite agendar otros compromisos a largo plazo, <b>no ten??a plazos que cumplir</b>. En los festivales, siempre corre contrarreloj para dejar el mural terminado, pase lo que pase, porque no lo puede dejar a la mitad. Ac??, en cambio, nadie lo apur??.
        </p>
        <Photo
          imageSource={Photo10}
          epigraph="El cari??o de los vecinos, mientras Mart??n Ron hac??a el mural. Foto Germ??n Garc??a Adrasti"
        />
        <p className="articleParagraph">
          Si se mira en detalle, se ver?? que la medianera tiene ventanitas en todos los pisos. No es una pared completamente lisa. ??Si <b>alg??n vecino se enoj??</b> por encontrarse con el artista al otro lado de la ventana? No. Al contrario, le ofrecieron ayuda, agua mineral, medialunas, caf?? y los m??s chicos hasta dibujaron mensajes de apoyo que dejaron pegados en el vidrio. As?? vale la pena colgarse.
        </p>
        <p className="articleParagraph">
          Y despu??s estuvo <b>Andrea</b>, la vecina del sexto piso, que vive a dos edificios de distancia del mural en cuesti??n y que, generosamente, prest?? su ventana, su llave y la terraza del edificio para que Mart??n pudiera observar, con algo de distancia y altura, el rumbo de la obra. Su ayuda es invaluable.
        </p>
        <Photo
          imageSource={Photo11}
          epigraph="Desde la casa de Andrea, Mart??n Ron pudo tener perspectiva de c??mo iba la obra y dar indicaciones. Foto Luc??a Merle"
        />
        <p className="articleParagraph">
          <b>CONTRAS:</b> Para empezar este mural, que seis semanas despu??s estar?? finalizado, hubo algunos traspi??s, aunque nada graves. Primero, fall?? <b>el balanc??n</b> y hubo que esperar la reparaci??n por parte de la empresa que monta la estructura que cuelga a los artistas durante el tiempo que les lleve concretar la obra. El coronavirus y los protocolos, como en todos lados, demoraron la gesti??n.
        </p>
        <p className="articleParagraph">
          La espera vale la pena y es absolutamente necesaria. As?? de importante es el balanc??n, esa especie de balc??n que pende de los edificios para pintar o limpiar las paredes y cuya seguridad no puede fallar bajo ning??n punto de vista.
        </p>
        <Photo
          imageSource={Photo12}
          epigraph="Manos a la obra. Mart??n Ron, rodillo en mano, pintando el mural. Foto Germ??n Garc??a Adrasti"
        />
        <p className="articleParagraph">
          Mart??n y su equipo trabajan con doble arn??s de seguridad, casco y la llamada "l??nea de vida", colgada de forma independiente al balanc??n por si acaso hubiera un desperfecto quedar colgado del edificio, algo que hasta ahora nunca le sucedi??. <b>??Si tiene v??rtigo?</b> Mart??n asegura que s??, que el miedo nunca se va del todo y que eso, en alg??n punto, le da adrenalina. Y que colgarse de un balanc??n, vaya y pase, pero lo verdaderamente vertiginoso es pintar desde una gr??a, porque se mueve much??simo m??s.
        </p>
        <p className="articleParagraph">
          Al balanc??n se sum?? <b>el clima</b>. Enero y febrero tuvieron numerosos <b>d??as de lluvia</b>; o d??as en los que parec??a que iba a llover y al final no llovi??; o d??as en que parec??a que no iba a llover y al final llovi??.
        </p>
        <p className="articleParagraph">
          El clima condiciona en todo momento la tarea del muralista de exteriores: una jornada de trabajo en un mural no es algo que se pueda resolver en pocas horas.
        </p>
        <Photo
          imageSource={Photo13}
          epigraph="El artista Mart??n Ron hace murales desde hace 20 a??os. Foto Germ??n Garc??a Adrasti"
        />
        <p className="articleParagraph">
          Hay que cargar la camioneta de latas de pintura, rodillos y materiales de recambio, llegar al lugar a 25 kil??metros de casa, cargar el balanc??n (funciona de abajo hacia arriba), ponerse el arn??s y colgarse de la pared. Todo eso lleva tiempo.
        </p>
        <p className="articleParagraph">
          Si no fuera porque esta medianera tiene orientaci??n oeste, lo que significa sombra casi todo el d??a hasta al atardecer cuando apenas recibe un poco de luz y calor, habr??a sido imposible pintar esta pared al rayo del sol, en pleno verano bonaerense.
        </p>
        <p className="articleParagraph">
          Y despu??s, claro, est?? <b>el viento</b>. Si hay mucho viento, el balanc??n se mueve. Mucho. Y rebota y golpea contra la pared. Pensar que colgados m??s cerca del piso es m??s seguro es completamente errado. Cuanto m??s abajo, m??s largo es el cable que llega de la terraza y mayor es el balanceo. Si hay viento, mejor quedarse pintando los detalles de m??s arriba. Y si hay mucho viento, <b>mejor ni pintar</b>, mejor suspender la jornada.
        </p>
        <p className="articleParagraph">
          Lo que se dice, gajes del oficio de muralista.
        </p>
        <SectionStart
          idTag="section5"
          image={Section5}
          strongTitle="Qui??n es Mart??n Ron"
          bgColor="#F2B02D"
          textColor="#0C0C0C"
        />
        <p className="articleParagraph">
          <b>Mart??n Ron</b> es un artista visual y muralista argentino, nacido el 13 de marzo de 1981, en la localidad de <a href="https://es.wikipedia.org/wiki/Caseros" className="textLink">Caseros</a>, al oeste de la <a href="https://es.wikipedia.org/wiki/Provincia_de_Buenos_Aires" className="textLink">provincia de Buenos Aires</a>. Hijo de Guillermo y Norma, y hermano de Guillermo y Federico, ambos m??s chicos que ??l, ninguno de sus familiares se dedica ni al muralismo ni al arte.
        </p>
        <p className="articleParagraph">
          Porque agarr?? l??pices de colores antes que juguetes, diestro de mano, de chico lo mandaron a hacer dibujo en un taller a dos cuadras de su casa. Por su ductilidad y talento, r??pidamente se convirti?? en <b>el favorito de la clase de Pl??stica</b> y tambi??n el encargado de pintar las escenograf??as de los actos en la escuela Nuestra Se??ora de la Merced, de Caseros: una escarapela, una bandera, un Cabildo.
        </p>
        <p className="articleParagraph">
          No dudaron en la escuela en pedirle que pintara el jard??n de infantes. Mart??n cursaba el secundario y acept??: lo hizo durante el horario escolar con sus amigos, algo as?? como sus "asistentes". <b>Las del jard??n fueron las primeras grandes paredes que pint??</b>.
        </p>
        <p className="articleParagraph">
          Con la plata que gan??, <b>se pag?? el viaje de egresados</b> a <a href="https://es.wikipedia.org/wiki/San_Carlos_de_Bariloche" className="textLink">Bariloche</a>. As??, mientras pensaba qu?? quer??a ser cuando fuera grande, empez?? a darse cuenta de que eso de andar coloreando muros era algo que le encantaba hacer.
        </p>
        <p className="articleParagraph">
          Pero termin?? el secundario y <b>se anot?? en Ciencias Econ??micas</b>, un poco porque su mam?? Norma es contadora, otro poco porque le dec??an que una carrera dura le garantizaba el futuro y otro poquito porque estudiar Bellas Artes en el 2001 no era un lujo que se pudiera dar. Lleg?? a hacer tres a??os antes de dejar.
        </p>
        <p className="articleParagraph">
          Lo que <b>nunca dej?? de lado fueron las brochas y las latas de pintura</b>. A la par de la cursada y de un trabajo contable con su mam??, ??l sigui?? dibujando paredes, adiestrando la mano.
        </p>
        <p className="articleParagraph">
          ???Empec?? a hacer murales por <b>la adrenalina que me daba salir a la calle a pintar</b> un dibujo, volver al otro d??a y observar c??mo reaccionaba la gente???, recuerda <b>Ron</b>, de 40 a??os reci??n cumplidos.
        </p>
        <p className="articleParagraph">
          Y aunque era consciente de que <b>su arte  a veces era ef??mero</b> (porque el muro volv??a a ser pintado encima o era demolido), ese salir a cazar paredes le despert?? la pasi??n: <b>primero el mural como hobby; m??s tarde, como profesi??n</b>.
        </p>
        <p className="articleParagraph">
          Cerca de su casa, en el Municipio de <a href="https://es.wikipedia.org/wiki/Partido_de_Tres_de_Febrero" className="textLink">Tres de Febrero</a>, fue el encargado de "embellecer" las paredes de las casas de la zona. La ecuaci??n era sencilla: vecinos que ced??an paredes algo despintadas para que <b>Ron</b> y su equipo plasmaran su arte y mejoraran la est??tica del lugar. Segundo gran antecedente.
        </p>
        <p className="articleParagraph">
          Mientras ??l segu??a pensado qu?? quer??a ser cuando fuera grande, lo segu??an invitando a pintar murales. <b>"????C??mo me voy a dedicar a esto?!"</b>, se preguntaba. El camino del muralismo estaba ah??, invit??ndolo. S??lo hab??a que animarse a transitarlo. Por fortuna, sigui?? una corazonada y se anim??.
        </p>
        <p className="articleParagraph">
          Lo que sigui?? es una exitosa carrera de muralismo, que lo llev?? a pintar m??s de <b>300 paredes</b> en todos los rincones del planeta, desde <a href="https://es.wikipedia.org/wiki/Nueva_York" className="textLink">Nueva York</a> a <a href="https://es.wikipedia.org/wiki/Mosc%C3%BA" className="textLink">Mosc??</a>, desde <a href="https://es.wikipedia.org/wiki/Malasia" className="textLink">Malasia</a> a <a href="https://es.wikipedia.org/wiki/Australia" className="textLink">Australia</a>, y a convertirse en <b>uno de los 10 mejores muralistas del mundo</b>. Y, claro, tambi??n, en un orgullo argentino.
        </p>
        <SectionStart
          idTag="section6"
          image={Section6}
          strongTitle="De la AMIA al Hospital de Cl??nicas"
          title="Los antecedentes"
          bgColor="#0C0C0C"
          textColor="#F5F5F5"
        />
        <p className="articleParagraph">
          Son numerosas las intervenciones de <b>Mart??n Ron</b> en las paredes argentinas.
        </p>
        <p className="articleParagraph">
          Primero fue una acci??n de <b>"embellecimiento urbano"</b> en el partido de Tres de Febrero. Con un equipo de trabajo, pint?? paredes despintadas que los vecinos ced??an para mejorar. Tambi??n ah?? pint?? al escritor <a href="https://es.wikipedia.org/wiki/Ernesto_Sabato" className="textLink">Ernesto Sabato</a>, en donde hoy funciona su casa-museo. En Capital, en 2013, estamp?? un mural de <b>412 metros cuadrados</b> en un edificio de cuatro pisos de <a href="https://es.wikipedia.org/wiki/Villa_Urquiza_(Buenos_Aires)" className="textLink">Villa Urquiza</a>: <i>El cuento de los loros</i> lo titul??.
        </p>
        <p className="articleParagraph">
        Tambi??n es autor de una serie de murales de <b>"??dolos populares"</b>: <a href="https://es.wikipedia.org/wiki/Carlos_T%C3%A9vez" className="textLink">Carlos Tevez</a> en <a href="https://es.wikipedia.org/wiki/Barrio_Ej%C3%A9rcito_de_los_Andes" className="textLink">Fuerte Apache</a>; la Coca Sarli, la Mona Jim??nez, <a href="https://es.wikipedia.org/wiki/Diego_Maradona" className="textLink">Diego Maradona</a>. <b>Ron</b> dej?? su arte en varias estaciones de subte, como la de <a href="https://es.wikipedia.org/wiki/Plaza_Miserere" className="textLink">Plaza Miserere</a>, Medrano y <a href="https://es.wikipedia.org/wiki/Plaza_de_Mayo" className="textLink">Plaza de Mayo</a>. Por los cien a??os de la l??nea A, pint?? una formaci??n completa con cien personajes de la historia argentina como <a href="https://es.wikipedia.org/wiki/Julio_Cort%C3%A1zar" className="textLink">Julio Cort??zar</a>, <a href="https://es.wikipedia.org/wiki/Mercedes_Sosa" className="textLink">Mercedes Sosa</a>, Carlos Tevez, <a href="https://es.wikipedia.org/wiki/Juan_Manuel_Fangio" className="textLink">Juan Manuel Fangio</a> y <a href="https://es.wikipedia.org/wiki/Luis_Alberto_Spinetta" className="textLink">Luis Alberto Spinetta</a>, entre otros.
        </p>
        <Photo
          imageSource={Photo14}
          epigraph='"El cuento de los loros", en Holmberg y Rivera, Villa Urquiza. Foto Ariel Grinberg'
        />
        <p className="articleParagraph">
          Tambi??n intervino la l??nea B logrando un efecto ??ptico cuando el subte toma velocidad. Y en la l??nea H, hizo los retratos de la cantante y actriz <a href="https://es.wikipedia.org/wiki/Tita_Merello" className="textLink">Tita Merello</a> y del m??sico ??ngel Villoldo. Le dio color y vida al bajo autopista del Acceso Oeste y Perito Moreno, en el l??mite entre <a href="https://es.wikipedia.org/wiki/Liniers_(Buenos_Aires)" className="textLink">Liniers</a> y <a href="https://es.wikipedia.org/wiki/Ciudadela" className="textLink">Ciudadela</a>.
        </p>
        <p className="articleParagraph">
          En 2018, pint?? "El Muro de la Memoria", un mural de 12 metros de ancho por 30 de alto, para <b>honrar a las v??ctimas</b> del <a href="https://es.wikipedia.org/wiki/Atentado_a_la_AMIA" className="textLink">atentado a la AMIA</a>: lo hizo en dos columnas que quedaron de la mutual de la calle Pasteur 633.
        </p>
        <Photo
          imageSource={Photo15}
          epigraph='"El Muro de la Memoria", en Pasteur 633, homenaje a las v??ctimas del atentado a la Amia. Foto Mario Quinteros'
        />
        <p className="articleParagraph">
          Un a??o m??s tarde, el homenaje lleg?? a las paredes del <a href="https://es.wikipedia.org/wiki/Hospital_de_Cl%C3%ADnicas_Jos%C3%A9_de_San_Mart%C3%ADn" className="textLink">Hospital de Cl??nicas</a>, ubicado en la <a href="https://es.wikipedia.org/wiki/Avenida_C%C3%B3rdoba" className="textLink">avenida C??rdoba</a> al 2300. Es un tr??ptico de murales que pueden verse por la calle Uriburu en los tres cuerpos que forman parte del gran hospital, que recibi?? el homenaje por parte de la AMIA por haber atendido cerca de 300 heridos aquel 18 de julio de 1994. El mural de Mart??n Ron es el del medio y rinde tributo a los trabajadores de la salud.
        </p>
        <p className="articleParagraph">
          Entre otros de sus murales m??s conocidos, est??n el de la tortuga en 3D que sale de una pared (ya demolida) en <a href="https://es.wikipedia.org/wiki/Barracas_(Buenos_Aires)" className="textLink">Barracas</a> y el de una anciana en el frente del bar Desarmadero en <a href="https://es.wikipedia.org/wiki/Palermo_(Buenos_Aires)" className="textLink">Palermo</a>, en Gorriti y Armenia.
        </p>
        <p className="articleParagraph">
          No solo en Argentina hay obras de <b>Mart??n Ron</b>. Admirador de <b>Eric Grohe</b> -destacado muralista estadounidense-, el argentino tiene una decena de murales en todo el mundo: ha pintado en ciudades como <a href="https://es.wikipedia.org/wiki/Londres" className="textLink">Londres</a>, Tallin, Penang (Malasia), Bristol, <a href="https://es.wikipedia.org/wiki/Miami" className="textLink">Miami</a>, <a href="https://es.wikipedia.org/wiki/Tenerife" className="textLink">Tenerife</a>, Bremen, Glauchau (<a href="https://es.wikipedia.org/wiki/Alemania" className="textLink">Alemania</a>), Nueva York, Tumby Bay (Australia), Mosc??.
        </p>
        <p className="articleParagraph">
          Particip?? del festival Rock Werchter en <a href="https://es.wikipedia.org/wiki/B%C3%A9lgica" className="textLink">B??lgica</a>, donde pint?? una torre armada con viejos contenedores, una obra de gran tama??o con un retrato de un hombre que sostiene en su boca una rama en la que est?? apoyado un colorido loro.
        </p>
        <ScrollyTelling
          sections={st2Sections}
        />
        <p className="articleParagraph">
          Tuvo una muestra individual en la galer??a Mead Carney, de Londres. Y tiene tres murales en <a href="https://es.wikipedia.org/wiki/Inglaterra" className="textLink">Inglaterra</a>: en la cl??sica cervecer??a Old Thruman's Brewery en Colbert Place; en el edificio Number 90 en Hackney Wick -una imagen hiperrealista titulada "Machaco"- y el tercer mural en Bristol, bajo el nombre "Andr??meda". Ese mismo a??o pint?? un gran mural titulado "Mudra" en Tallin, Estonia. Tambi??n pint?? un enorme mural hiperrealista con tres tortugas marinas en efecto 3D en la ciudad de Penang, Malasia, donde las tortugas dejan sus huevos en las playas de esa ciudad.
        </p>
        <SectionStart
          idTag="section7"
          image={Section7}
          strongTitle={(<span>Su vinculo con<br/>Carlos Tevez</span>)}
          bgColor="#0C0C0C"
          textColor="#F5F5F5"
        />
        <p className="articleParagraph">
          Un d??a de 2016, <b>Carlos Tevez</b> lo llam?? a <b>Mart??n Ron</b>: "Quiero que pintes un mural del Fuerte Apache en mi casa", le pidi??. <b>Ron</b>, hincha de Boca, fan del futbolista, creador del Carlitos que ensalza un muro en <b>Fuerte Apache</b>, acept??. De alguna manera, lo que inici?? <b>Ron</b> con aquel mural de Carlitos en el barrio natal del jugador se repiti?? de forma inversa y termin?? con un mural de Fuerte Apache en el gimnasio personal de la casa de Tevez, un lugar de entrenamiento y motivaci??n.
        </p>
        <p className="articleParagraph">
        Cuando <b>Ron</b> pint?? el Carlitos en Fuerte Apache, en una pared que da a un potrero ???la ubicaci??n no es inocente???, lo pens?? como un s??mbolo de superaci??n y de inspiraci??n para los chicos que viv??an y viven en el lugar, los que sue??an con ser como <b>Tevez</b>.
        </p>
        <Photo
          imageSource={Photo16}
          epigraph="El mural de Carlitos Tevez en Fuerte Apache. Foto Fernando de la Orden"
        />
        <p className="articleParagraph">
          No se sab??a de la existencia del Fuerte Apache en el gimnasio de la casa del jugador de Boca hasta que el propio futbolista lo dio a conocer a fines del a??o pasado. Reci??n ah??, <b>Ron</b> se anim?? a subir a sus redes im??genes de aquel trabajo que solo se conoc??a en el c??rculo ??ntimo.
        </p>
        <p className="articleParagraph">
          No fue, sin embargo, el ??nico mural que pint?? en la casa del actual Diez de Boca en La Horqueta. En la pared de un pasillo curvo del subsuelo, <b>Ron</b> estamp?? a fuerza de color y talento la carrera deportiva de <b>Tevez</b>: Carlitos en Boca, Carlitos en el <a href="https://es.wikipedia.org/wiki/Manchester_United_Football_Club" className="textLink">Manchester United</a>, Carlitos en el <a href="https://es.wikipedia.org/wiki/Manchester_City_Football_Club" className="textLink">Manchester City</a>, Carlitos en <a href="https://es.wikipedia.org/wiki/Sport_Club_Corinthians_Paulista" className="textLink">Corinthians</a>, Carlitos en el West Ham, Carlitos en la <a href="https://es.wikipedia.org/wiki/Juventus_de_Tur%C3%ADn" className="textLink">Juventus</a>... Solo falta su paso por <a href="https://es.wikipedia.org/wiki/Rep%C3%BAblica_Popular_China" className="textLink">China</a>.
        </p>
        <SectionStart
          idTag="section8"
          image={Section8}
          strongTitle="La pr??xima colgada"
          title="Avenida Corrientes"
          bgColor="#0C0C0C"
          textColor="#F5F5F5"
        />
        <p className="articleParagraph">
          <b>Lo que viene: el mural "r??cord"</b><br/>El 1?? de Mayo, <b>Mart??n Ron</b> se colgar?? nuevamente y <b>ser?? r??cord</b>.
        </p>
        <p className="articleParagraph">
          Arrancar?? a pintar un mural en plena <a href="https://es.wikipedia.org/wiki/Avenida_Corrientes" className="textLink">avenida Corrientes</a>. Ser?? en la medianera de la torre <b>Lex Tower</b>, en Corrientes 1454, entre Uruguay y Paran??, mano derecha, y constituir?? todo un r??cord para el pa??s y la regi??n por su altura: <b>un mural de 100 metros de alto, a tres cuadras del Obelisco</b>. 
        </p>
        <p className="articleParagraph">
          Aunque todav??a no tiene el dise??o, <b>Mart??n Ron</b> adelant?? a <b>Clar??n</b> que para esta obra usar?? la t??cnica pict??rica de "trompe-l'??il" (trampa para el ojo), que busca enga??ar a la vista jugando con el entorno y con efectos ??pticos de sombra y perspectiva: siguiendo con la tem??tica de dibujar ni??os, simular?? unos chicos jugando en las ventanas. 
        </p>
        <Photo
          imageSource={Photo17}
          epigraph="Lex Tower, en avenida Corrientes al 1400. Sobre esa franja lateral de 100 metros, Mart??n Ron realizar?? el mural m??s alto del pa??s y la regi??n. Arranca en mayo."
        />
        <Sharing />
      </div>
    </div>
  );
}
