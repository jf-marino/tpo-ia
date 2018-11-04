import React from 'react';
import { Progress, Spin, Row, Col, Tag } from 'antd';
import './InfoBox.css';

export const InfoBox = ({ uploading = false, attributes = {} }) => {
    const { description = {}, color = {}, categories = [], metadata = {} } = attributes;
    return (
        <div className="info-container">
            <Spin tip="Analizando..." spinning={uploading}>
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
                                <Row gutter={8}>
                                    {description.captions ? description.captions.map((caption, index) => (
                                        <Col key={index} span={12}>
                                            <div className="caption">
                                                <Row type="flex" justify="center">
                                                    <Col>
                                                        <Progress type="circle" percent={Math.round(caption.confidence * 100)} width={50} />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <h4 className="caption-text">{caption.text}</h4>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    )) : '-'}
                                </Row>
                            </td>
                        </tr>
                        <tr>
                            <td>Etiquetas</td>
                            <td>
                                {description.tags ? description.tags.map(tag => (
                                    <Tag key={tag}>{tag}</Tag>
                                )) : '-'}
                            </td>
                        </tr>
                        <tr>
                            <td>Categorías</td>
                            <td>
                                <Row gutter={8}>
                                    {categories.length ? categories.map((category, index) => (
                                        <Col key={index} span={12}>
                                            <div className="caption">
                                                <Row type="flex" justify="center">
                                                    <Col>
                                                        <Progress type="circle" percent={Math.round(category.score * 100)} width={50} />
                                                    </Col>
                                                </Row>
                                                <br></br>
                                                <Row type="flex" justify="center">
                                                    <Col>
                                                        <Tag color="purple">{category.name}</Tag>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    )) : '-'}
                                </Row>
                            </td>
                        </tr>
                        <tr>
                            <td>Colores</td>
                            <td className="color-data">
                                {color.dominantColorForeground && (
                                    <Row>
                                        <Col span={12}>Color Dominante de Frente:</Col>
                                        <Col span={12}>
                                            <span 
                                                className="color-sample" 
                                                style={{backgroundColor: `${color.dominantColorForeground.toLowerCase()}`}}
                                            ></span>
                                            <small className="color-label">({color.dominantColorForeground})</small>
                                        </Col>
                                    </Row>
                                )}
                                {color.dominantColorBackground && (
                                    <Row>
                                        <Col span={12}>Color Dominante de Fondo:</Col>
                                        <Col span={12}>
                                            <span 
                                                className="color-sample" 
                                                style={{backgroundColor: `${color.dominantColorBackground.toLowerCase()}`}}
                                            ></span>
                                            <small className="color-label">({color.dominantColorBackground})</small>
                                        </Col>
                                    </Row>
                                )}
                                {color.accentColor && (
                                    <Row>
                                        <Col span={12}>Color de Acento:</Col>
                                        <Col span={12}>
                                            <span 
                                                className="color-sample" 
                                                style={{backgroundColor: `#${color.accentColor}`}}
                                            ></span>
                                            <small className="color-label">(#{color.accentColor})</small>
                                        </Col>
                                    </Row>
                                )}
                                {color.dominantColors && (
                                    <Row>
                                        <Col span={12}>Colores Dominantes:</Col>
                                        <Col span={12}>
                                            {color.dominantColors.map(color => (
                                                <Tag key={color}>{color}</Tag>
                                            ))}
                                        </Col>
                                    </Row>
                                )}
                            </td>
                        </tr>
                        <tr>
                            <td>Formato de la imagen</td>
                            <td>{metadata.format ? metadata.format.toUpperCase() : '-'}</td>
                        </tr>
                        <tr>
                            <td>Dimensiones de la imagen</td>
                            <td>{metadata.width ? `${metadata.width} x ${metadata.height}` : '-'}</td>
                        </tr>
                    </tbody>
                </table>
            </Spin>
        </div>
    );
};
