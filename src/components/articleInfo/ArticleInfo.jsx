import "./articleInfo.css";

import FacebookLogo from "../../assets/facebookLogo.svg";
import TwitterLogo from "../../assets/twitterLogo.svg";
import MailLogo from "../../assets/mailLogo.svg";

export default function ArticleInfo({ authorName, authorImage, uploadDate, lastUpdated, category }) {
  return (
    <div className="articleInfoWrapper">
      <hr />
      <div className="topArea">
        <div className="topLeftArea">
          <img src={authorImage} alt={authorName} className="authorImg" />
          <span className="authorName">{authorName}</span>
        </div>
        <div className="topRightArea">
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
      </div>
      <hr />
      <div className="bottomArea">
        <span className="infoText">{uploadDate} | <span className="categoryText">{category}</span> | Actualizado al {lastUpdated}</span>
      </div>
    </div>
  );
}
