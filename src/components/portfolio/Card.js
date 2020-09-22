// import PropTypes from 'prop-types';
import React from 'react';
// import Image from 'gatsby-image';
import PropTypes from 'prop-types';



const Card = ({image, technologies, title, description, url}) => {

    return (
    <>

        <div className="shadow mt-5 d-flex flex-column justify-content-center" style={{width: '400px'}}>
            {/* <img src={image} className="bg-primary w-100 rounded-lg shadow-md bg-cover" alt="..." /> */}

            <div className="card-body text-center">
                <a href={url} target="_blank" rel="noreferrer" className="text-decoration-none"> <h3 className="card-title">{title}</h3> </a>
                <p className="">{description}</p>
                <div className="d-flex flex-wrap mt-4 justify-content-around">
                    {technologies.map(tech=> (
                        <span key={tech} className="badge tag">{tech}</span>
                    ))}
                </div>
            </div>
        </div>

    </>);
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.array,
    direccion: PropTypes.string,
    image: PropTypes.object.isRequired,
};

export default Card;