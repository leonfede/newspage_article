import "./footer.css";

export default function Footer() {
  return (
    <footer className="footerContainer">
      <hr />
      <div className="footerAreas">
        <div className="footerLeftArea">
          <ul className="footerInfo">
            <li className="footerItem">Website desarrollado por <b>Federico Leon</b></li>
            <li className="footerItem">
              Basado en el articulo de Clarín: <a className="footerLink" href="#!">Visualizar</a>
            </li>
            <li className="footerItem">Utilizando React.js</li>
          </ul>
        </div>
        <div className="footerRightArea" />
      </div>
    </footer>
  );
}
