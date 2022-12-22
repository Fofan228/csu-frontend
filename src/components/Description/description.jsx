import React from 'react';

import Card from '@Components/Description/Card/card';

import img1 from '@Assets/images/ico1.png';
import img2 from '@Assets/images/ico2.png';
import img3 from '@Assets/images/ico3.png';
import img4 from '@Assets/images/ico4.png';
import img5 from '@Assets/images/ico5.png';

import './description.less';

const descripton =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elitsequi nesciunt.';

const arr = [
    {
        title: 'Рассчитать стоимость',
        desc: descripton,
        avatar: img1,
    },
    {
        title: 'Вызвать курьера',
        desc: descripton,
        avatar: img2,
    },
    {
        title: 'Оплатить услуги',
        desc: descripton,
        avatar: img3,
    },
    {
        title: 'Заключить договор',
        desc: descripton,
        avatar: img4,
    },
    {
        title: 'Предоставить данные',
        desc: descripton,
        avatar: img5,
    },
];

const Description = () => {
    return (
        <div className="description">
            <div className="description-title">5 шагов к заявке</div>
            <div className="description-info">
                {arr.map((e) => (
                    <Card
                        title={e.title}
                        avatar={e.avatar}
                        description={e.desc}
                    />
                ))}
            </div>
        </div>
    );
};

export default Description;
