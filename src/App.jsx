import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Main from '@Pages/Main/main';
import '@Styles/global.less';
import AdminPanel from '@Pages/AdminPanel/AdminPanel';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/admin" element={<AdminPanel />} />
        </Routes>
    );
};

export default App;
