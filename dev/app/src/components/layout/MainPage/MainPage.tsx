import React from 'react';
import Enchancer from './Modules/Enchancer/Enchancer';

export const BACKEND_URL = 'http://127.0.0.1:3003/api/';

const MainPage = () => {
    return (
        <div className="container">
            <Enchancer />
        </div>
    );
};

export default MainPage;
