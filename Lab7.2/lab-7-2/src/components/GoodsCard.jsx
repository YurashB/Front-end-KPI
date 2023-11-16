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
            </div>
            <div className="card-footer d-flex justify-content-between">
                <p className="text-body-secondary fs-4 m-0">{item.price}</p>
                <a href={item.link} className="btn btn-primary stretched-link btn">Buy now</a>
            </div>
        </div>
    );
};

export default GoodsCard;