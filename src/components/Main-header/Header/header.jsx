import React from 'react';

import logo from '@Assets/images/logo.png';
import phone from '@Assets/images/phone.png';
import './header.less';

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <nav className="menu">
                    <div className="sub-menu left-menu">
                        <img src={logo} className="logo" />
                        <div className="separator" />
                        <span className="info-link">
                            Курьерская служба доставки
                        </span>
                    </div>
                    <div className="sub-menu wrapper">
                        <img className="phone-img" src={phone} />
                        <a href="#" className="phone-link">
                            <span className="phone">8 (909) 023-12-51</span>
                        </a>
                        <button className="login-btn">Вход</button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
