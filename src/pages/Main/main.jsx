import React from 'react';

import Footer from '@Components/Footer/footer';
import Description from '@Components/Description/description';
import MainHeader from '@Components/Main-header/main-header';

const Main = () => (
    <div className={'main-page'}>
        <div className={'main-page__title'}>
            <MainHeader />
            <Description />
            <Footer />
        </div>
    </div>
);

export default Main;
