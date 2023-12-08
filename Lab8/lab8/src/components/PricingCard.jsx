import React from 'react';

const PricingCard = ({backgroundColor, price, title, features}) => {
    return (
        <div className={`pricing ${backgroundColor} `}>
            <h3 className="fw-light">{title}</h3>
            <strong className="price">{`$${price}`}</strong>
            <ul className="list-unstyled list mb-4 fw-light">
                {features.map(feature => (
                    <li className="m-1"><i className="bi bi-arrow-right-short m-1"></i>{feature}</li>
                ))}
            </ul>
            <p><a href="#" className="btn btn-outline-primary">Get started</a></p>
        </div>
    );
}

export default PricingCard;