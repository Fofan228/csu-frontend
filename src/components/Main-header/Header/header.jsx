import React, { useState } from 'react';

import logo from '@Assets/images/logo.png';
import phone from '@Assets/images/phone.png';

import ModalWindow from '@Components/ModalWindow/ModalWindow';

import './header.less';

const Header = () => {
    const [windowOpen, setWindowOpen] = useState(false);

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
                        <div className="adaptive">
                            <img className="phone-img" src={phone} />
                            <a href="#" className="phone-link">
                                <span className="phone">8 (909) 023-12-51</span>
                            </a>
                        </div>
                        <button
                            onClick={() => {
                                setWindowOpen(true);
                            }}
                            className="login-btn"
                        >
                            Вход
                        </button>
                    </div>
                </nav>
                <ModalWindow
                    isVisible={windowOpen}
                    onClose={() => setWindowOpen(false)}
                />
            </div>
        </header>
    );
};

export default Header;
