import React, { Component } from 'react';
import { Row, Col, Layout, Divider } from 'antd';
import { ImageBox } from './components/image-box';
import { InfoBox } from './components/info-box';
import { UploadControls } from './components/upload-controls';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Row gutter={5}>
            <Col span={10}>
              <ImageBox />
              <Divider>Subir imagen</Divider>
              <UploadControls />
            </Col>
            <Col span={12} push={1}>
              <InfoBox />
            </Col>
          </Row>
        </Layout>
      </div>
    );
  }
}

export default App;
