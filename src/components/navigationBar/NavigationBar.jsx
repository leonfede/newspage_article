import "./navigationBar.css";
import Logo from "../../assets/site_logo.svg";

export default function NavigationBar() {
  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <img src={Logo} alt="News" className="logo" />
        <span className="textSlogan">Buenas noticias</span>
      </div>
      <div className="navbarRight">
        <a href="#!" className="navbarLink">Ultimas Noticias</a>
        <a href="#!" className="navbarLink">Tendencias</a>
        <a href="#!" className="navbarLink">Politica</a>
        <a href="#!" className="navbarLink">Economia</a>
        <a href="#!" className="navbarLink">Deportes</a>
        <a href="#!" className="navbarLink">Ciencia</a>
        <div className="search">
          <i className="material-icons">search</i>
        </div>
      </div>
    </div>
  );
}
