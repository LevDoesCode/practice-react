function CoreConceptv2({ image, title: title_xl, description }) {
    return (
        <li>
            <img src={image} alt={title_xl} />
            <h3>{title_xl}</h3>
            <p>{description}</p>
        </li>
    );
}

export default CoreConceptv2;
