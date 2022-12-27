import React from 'react';

import Header from '@Components/Main-header/Header/header';
import Slider from '@Components/Main-header/Slider/Slider';
import FirstSlide from '@Components/Main-header/Slides/SlideOne';
import SecondSlide from '@Components/Main-header/Slides/SlideTwo';

import './main-header.less';

const MainHeader = () => {
    return (
        <div className="main-header-info">
            <div className="main-header-info__header">
                <Header />
            </div>
            <div className="main-header-info__slider">
                <Slider
                    width={'100%'}
                    height={'500px'}
                    autoPlay={true}
                    autoPlayTime={5000}
                    items={[<FirstSlide />, <SecondSlide />]}
                />
            </div>
        </div>
    );
};

export default MainHeader;
