import "./headline.css";

export default function Headline({ background, title, subtitle }) {
  return (
    <div style={{ backgroundImage: `url(${background})` }} className="title">
      <div className="layer">
        <div className="titleContainer">
          <span className="titleSpecial">ESPECIALES</span>
          <span className="titleHead">{ title }</span>
          <span className="subtitle">{ subtitle }</span>
        </div>
      </div>
    </div>
  );
}
