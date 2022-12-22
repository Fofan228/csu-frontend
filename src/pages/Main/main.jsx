import React from 'react';
import Header from '@Components/Main-header/Header/header.jsx';
import Footer from '@Components/Footer/footer';
import Description from '@Components/Description/description';

//import './main1.less';

const Main = () => (
    <div className="main-page">
        <div className="main-page__title">
            <Header />
            <Description />
            <Footer />
        </div>
    </div>
);

export default Main;
