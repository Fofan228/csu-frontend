import React from 'react';

import AdminBody from '@Components/AdminBody/AdminBody';
import Footer from '@Components/Footer/footer';
import Header from '@Components/Main-header/Header/header';

const AdminPanel = () => (
    <div className="admin-panel">
        <div className="admin-panel__semen">
            <Header />
            <AdminBody />
            <Footer />
        </div>
    </div>
);

export default AdminPanel;
