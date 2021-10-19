import { useState } from "react";
import "./scrollyTelling.css";
import Lightbox from "react-image-lightbox";
import OpenModal from "../../assets/openModal.svg";

export default function ScrollyTelling({ sections }) {
  const [currentPhoto, setCurrentPhoto] = useState(null);
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);

  const viewImage = image => {
    setCurrentPhoto(image);
    setIsPhotoOpen(true);
  }

  return (
    <div className="stWrapper">
      {
        isPhotoOpen ? (
          <Lightbox
            mainSrc={currentPhoto}
            onCloseRequest={() => setIsPhotoOpen(false)}
          />
        ) : null
      }
      {
        sections.map((section, index) => (
          <div 
            key={index}
            className="stSection" 
            style={{ alignItems: (section.toRight ? "flex-end" : "flex-start") }}
          >
            <figure className="stImageContainer">
              <img loading="eager" className="stImage" src={section.background} alt="" />
            </figure>
            <div className="stSectionInfoWrapper">
              <div 
                className="stSectionInfo" 
                style={{ flexDirection: (section.toRight ? "row-reverse" : "row") }}
                data-aos="zoom-in"
              >
                { section.image ? (
                  <img data-aos="zoom-in" src={section.image} alt="" className="stSectionImage" />
                 ) : null }
                <div 
                  data-aos={ section.toRight ? "zoom-out" : "fade-right" }
                  data-aos-delay="500"
                  className="textInfo"
                >
                  { section.title ? <span className="stSectionTitle">{section.title}</span> : null }
                  { section.text ? <span className="stSectionText">{section.text}</span> : null }
                  {
                    section.canExpand ? (
                      <div onClick={() =>  viewImage(section.background)} className="modalBtn">
                        <img src={OpenModal} alt="" className="modalBtnImg" />
                        <span className="modalBtnText">Ver imagen completa</span>
                      </div>
                    ) : null
                  }
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
}
