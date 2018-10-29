import React from 'react';
import './InfoBox.css';

export const InfoBox = ({ attributes }) => {
    return (
        <div className="info-container">
            <table>
                <thead className="heading">
                    <tr>
                        <th width="30%">Nombre de la Caracteristica</th>
                        <th width="70%">Valor</th>
                    </tr>
                </thead>
                <tbody className="body">
                    <tr>
                        <td>Descripción</td>
                        <td>
                            <code>
                            { JSON.stringify({ "tags": [ "outdoor", "city", "building", "photo", "white", "large", "background", "black", "sitting", "tall", "skyscraper", "water", "river", "park", "boat", "street", "field", "parked", "computer", "group" ], "captions": [ { "text": "a black and white photo of a city", "confidence": 0.958241045 } ] }) }
                            </code>
                        </td>
                    </tr>
                    <tr>
                        <td>Etiquetas</td>
                        <td>
                            <code>
                            { JSON.stringify([ { "name": "sky", "confidence": 0.998601139 }, { "name": "outdoor", "confidence": 0.9967468 }, { "name": "city", "confidence": 0.9352678 }, { "name": "white", "confidence": 0.728594542 }, { "name": "skyscraper", "confidence": 0.233053252 } ]) }
                            </code>
                        </td>
                    </tr>
                    <tr>
                        <td>Formato de la imagen</td>
                        <td>JPEG</td>
                    </tr>
                    <tr>
                        <td>Dimensiones de la imagen</td>
                        <td>462 x 600</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
