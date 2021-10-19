import "./sharing.css";

import FacebookLogo from "../../assets/facebookLogo.svg";
import TwitterLogo from "../../assets/twitterLogo.svg";
import MailLogo from "../../assets/mailLogo.svg";

export default function Sharing() {
  return (
    <div className="sharingWrapper">
      <hr />
      <div className="sharingLinks">
        <span className="sharingText">Compartir en redes: </span>
        <a href="#!" className="socialBtn">
          <img src={FacebookLogo} alt="Compartir en Facebook" className="socialLogo" />
        </a>
        <a href="#!" className="socialBtn">
          <img src={TwitterLogo} alt="Compartir en Twitter" className="socialLogo" />
        </a>
        <a href="#!" className="socialBtn">
          <img src={MailLogo} alt="Enviar por Mail" className="socialLogo" />
        </a>
      </div>
      <hr />
      <div className="credits">
        <span className="creditsTitle">Créditos</span>
        <span className="creditsItem">TEXTOS / Paula Conde</span>
        <span className="creditsItem">EDITORAS / Patricia Kolesnicov, Paula Conde</span>
        <span className="creditsItem">DESARROLLO / Ornella Cicalello</span>
        <span className="creditsItem">VIDEO DRON / Mario Quinteros</span>
        <span className="creditsItem">VIDEO Y POST PRODUCCIÓN / Alejandro Leguizamón y Cecilia Vecchiarelli</span>
        <span className="creditsItem">FOTOS / Lucía Merle, Mario Quinteros, Germán García Adrasti, Enrique García</span>
        <span className="creditsItem">Medina. Foto de apertura y M. Ron con latas: Cristian Flores</span>
        <span className="creditsItem">EDICIÓN DE FOTOGRAFÍA / Julieta Gómez Bidondo</span>
        <span className="creditsItem">INFOGRAFÍA / Vanina Sánchez</span>
        <span className="creditsItem">PM & DISEÑO / Tea Alberti, Valeria Castresana</span>
        <span className="creditsItem">EDITORES DE CONTENIDOS ORIGINALES / Héctor Gambini / Diana Baccaro</span>
      </div>
    </div>
  );
}
