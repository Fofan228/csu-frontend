import React from 'react';

import './card.less';

const Card = ({ avatar, title, description }) => {
    return (
        <div className="card-info">
            <div className="card-info__img">
                <img src={avatar} />
            </div>
            <div className="card-title">{title}</div>
            <div className="card-description">{description}</div>
        </div>
    );
};

export default Card;
