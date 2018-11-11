import React from 'react';
import { Progress, Spin } from 'antd';
import './InfoBox.css';

export const InfoBox = ({ uploading = false, predictions = [] }) => {
    return (
        <div className="info-container">
            <Spin tip="Analizando..." spinning={uploading}>
                {predictions.length > 0 && (
                    <table>
                        <thead className="heading">
                            <tr>
                                <th width="30%">Predicción</th>
                                <th width="70%">Valor</th>
                            </tr>
                        </thead>
                        <tbody className="body">
                            {predictions.map(prediction => (
                                <tr>
                                    <td>{prediction.name}</td>
                                    <td>
                                        <div>
                                            <Progress percent={Math.round(prediction.probability * 100)} />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
                {!predictions.length && (
                    <div className="empty-message">
                        <h2>
                            Seleccione una imagen para analizar.
                        </h2>
                    </div>
                )}
            </Spin>
        </div>
    );
};
