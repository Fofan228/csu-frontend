import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Main from '@Pages/Main/main';
import '@Styles/global.less';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
        </Routes>
    );
};

export default App;
