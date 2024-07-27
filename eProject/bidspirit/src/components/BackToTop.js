// components/BackToTop.js
import React, { useState, useEffect } from 'react';
import '../css/backtotop.css';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="back-to-top" style={{ display: isVisible ? 'block' : 'none' }}>
            <div onClick={scrollToTop} className="back-to-top-button">
                <i className="fa fa-arrow-up" aria-hidden="true"></i>
            </div>
        </div>
    );
};

export default BackToTop;
