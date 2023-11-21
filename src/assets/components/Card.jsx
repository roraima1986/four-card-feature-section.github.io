const Card = ({title, description, image, color}) => {    
    
    return (
        <div className={`card ${color}`}>
            <h3 className="card__title">{title}</h3>
            <p className="card__description">{description}</p>
            <div className="card__container-icon">
                <img src={image} alt={title} className="card__icon" />
            </div>
        </div>
    );
}

export default Card;