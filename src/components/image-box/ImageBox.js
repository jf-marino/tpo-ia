import React from 'react';
import image from '../../download.png';
import './ImageBox.css';

export const ImageBox = ({ src }) => {
    const show = src || image;
    return (
        <div className="image-container">
            <img src={show} alt="Nothing" />
        </div>
    );
};
