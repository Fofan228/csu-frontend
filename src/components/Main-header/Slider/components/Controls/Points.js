import React, { useContext } from 'react';
import { SliderContext } from '../../Slider';
import Point from './Point';

import '../../Slider.less';

export default function Points() {
    const { slidesCount } = useContext(SliderContext);

    const renderDots = () => {
        const dots = [];
        for (let i = 0; i < slidesCount; i++) {
            dots.push(<Point key={`point-${i}`} number={i} />);
        }

        return dots;
    };

    return <div className="points">{renderDots()}</div>;
}
