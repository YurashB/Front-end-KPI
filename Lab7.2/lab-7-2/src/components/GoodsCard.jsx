import React from 'react';

const GoodsCard = ({item}) => {
    return (
        <div className="card">
            <picture>
                <img src={item.imgSrc} className="card-img-top" alt="Picture must be here"/>
            </picture>
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">{item.advantages}</p>
                <p className="card-text">{item.disadvantages}</p>
            </div>
            <div className="card-footer">
                <small className="text-body-secondary">{item.price}</small>
            </div>
        </div>
    );
};

export default GoodsCard;