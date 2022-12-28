import React, { useContext } from 'react';
import { SliderContext } from '../../Slider';

import '../../Slider.less';

export default function Point({ number }) {
    const { goToSlide, slideNumber, slidesCount } = useContext(SliderContext);

    const currentSlide =
        slideNumber === -1 ? slidesCount - 1 : slideNumber % slidesCount;
    return (
        <div
            className={`point ${currentSlide === number ? 'selected' : ''}`}
            onClick={() => goToSlide(number)}
        />
    );
}
