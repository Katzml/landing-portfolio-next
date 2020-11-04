const CardProject = ({ title, description, image }) => {
  return (
    <div className="card column is-4">
      <div className="card-image">
        <figure className="image is-256x256 image-container">
          <img src={image} alt="" />
          <div className="overlay">
            <div className="overlay_text">Hola</div>
          </div>
          </figure>
          </div>
        
        <div className="media-content ">
          <p className="title is-4 text--color">{title}</p>
          <p className="subtitle is-6 text--color">{description}</p>
        </div>
      </div>
  );
};

export default CardProject;
