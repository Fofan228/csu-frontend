import React from 'react';

import logo from '@Assets/images/logo.png';
import './footer.less';

const Footer = () => {
    return (
        <footer className={'footer'}>
            <div className={'footer-container'}>
                <div className={'footer-logo'}>
                    <img src={logo} className={'logo'} />
                </div>
                <div className={'footer-info-begin'}>
                    <dl className={'footer-info-list-begin'}>
                        <dt>О компании</dt>
                        <dt>Вакансии</dt>
                        <dt>Клиенту</dt>
                        <dt>Франчайзинг</dt>
                    </dl>
                    <dl className={'footer-info-list-middle'}>
                        <dt>Доставка из китая</dt>
                        <dt>Все услуги</dt>
                        <dt>Акции</dt>
                    </dl>
                </div>
                <div className={'footer-info-end'}>
                    <dl className={'footer-info-list-end'}>
                        <dt>manager@uexpress.ru</dt>
                        <dt>
                            115221, г. Челябинск, ул.
                            <br /> Северная, д. 29-в
                        </dt>
                        <dt>
                            Мы работаем по 24 часа
                            <br /> 5 дней в неделю
                        </dt>
                    </dl>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
