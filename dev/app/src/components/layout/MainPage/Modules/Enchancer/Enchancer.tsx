'use client';
import React, { useState } from 'react';
import styles from './Enchancer.module.scss';
import axios from 'axios';
import { BACKEND_URL } from '../../MainPage';
import { MdOutlineDone } from 'react-icons/md';
import { VscError } from 'react-icons/vsc';

const Enchancer = () => {
    const [isLoadingEnchancing, setIsLoadingEnchancing] = useState(false);
    const [isEnchancedSuccess, setIsEnchancedSuccess] = useState(false);
    const [isEnchancedError, setIsEnchancedError] = useState(false);

    const resetStatuses = () => {
        setIsEnchancedError(false);
        setIsEnchancedSuccess(false);
    };

    const makeEnchancedSuccessful = () => {
        setIsEnchancedSuccess(true);
        setTimeout(() => {
            setIsEnchancedSuccess(false);
        }, 10000);
    };

    const makeEnchancedError = () => {
        setIsEnchancedError(true);
        setTimeout(() => {
            setIsEnchancedError(false);
        }, 10000);
    };

    const enchanceImages = async () => {
        resetStatuses();
        if (isLoadingEnchancing) return;
        try {
            setIsLoadingEnchancing(true);
            await axios.get(BACKEND_URL + 'enchancer');
            makeEnchancedSuccessful();
        } catch (err) {
            makeEnchancedError();
        }
        setIsLoadingEnchancing(false);
    };

    return (
        <button className="btn" onClick={enchanceImages}>
            <span>Launch Image Upgrader</span>
            <span
                className={`${styles.loader} ${
                    isLoadingEnchancing ? styles.shown : ''
                }`}
            ></span>
            <span
                className={`${styles.tick} ${
                    isEnchancedSuccess ? styles.shown : ''
                }`}
            >
                <MdOutlineDone />
            </span>
            <span
                className={`${styles.cross} ${
                    isEnchancedError ? styles.shown : ''
                }`}
            >
                <VscError />
            </span>
        </button>
    );
};

export default Enchancer;
