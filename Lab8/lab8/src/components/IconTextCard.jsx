import React from 'react';

const IconTextCard = ({title, content, icon}) => {
    return (
        <div className="icon-text-card me-5">
            <i className={icon} style={{fontSize: 40}}></i>
            <h3 className="pt-3">{title}</h3>
            <p>{content}</p>
        </div>
    );
}

export default IconTextCard;