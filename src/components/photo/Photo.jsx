import "./photo.css";

export default function Photo({ imageSource, epigraph}) {
  return (
    <div className="photoContainer">
      <figure>
        <img src={imageSource} alt={epigraph} className="photo" />
      </figure>
      <figcaption className="epigraph">{epigraph}</figcaption>
    </div>
  );
}
