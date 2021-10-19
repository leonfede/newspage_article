import "./sectionStart.css";

export default function SectionStart({ idTag, image, title, strongTitle, bgColor, textColor }) {
  return (
    <div id={idTag} className="sectionStartContainer" style={{ backgroundColor: bgColor }}>
      <div className="imageContainer">
        <img 
          data-aos="fade-right" 
          data-aos-delay="600"
          src={image} 
          alt={title} 
          className="sectionImage" 
        />
      </div>
      <div className="sectionTitle">
        <span 
          data-aos="fade-left" 
          data-aos-delay="650"
          className="secTitle"
          style={{ color: textColor }}
        >
          {strongTitle ? (<b>{strongTitle}</b>) : null}{title ? title : null}
        </span>
      </div>
    </div>
  );
}
