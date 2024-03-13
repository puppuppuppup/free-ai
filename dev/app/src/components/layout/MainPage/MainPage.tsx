'use client';
import axios from 'axios';
import React, { useCallback } from 'react';

type Props = {};

const MainPage = (props: Props) => {
    const enchanceImages = async () => {
        const res = await axios.get(
            process.env.NEXT_PUBLIC_BACKEND_URL + 'enchancer'
        );
        console.log(res.data);
    };

    return (
        <div className="container">
            <button className="btn" onClick={enchanceImages}>
                Launch Image Upgrader
            </button>
        </div>
    );
};

export default MainPage;
