import React from 'react';
import image from '../../download.jpeg';
import './ImageBox.css';

export const ImageBox = () => {
    return (
        <div className="image-container">
            <img src={image} />
        </div>
    );
};
