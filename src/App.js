import React, { Component } from 'react';
import { Row, Col, Layout } from 'antd';
import { InfoBox } from './components/info-box';
import { UploadControls } from './components/upload-controls';
import { analyze } from './services/images';
import './App.css';

const { Header, Content } = Layout;

class App extends Component {
  state = {
    uploading: false,
    info: {}
  };

  onImageSelected = (image) => {
    this.setState({ uploading: true });
    analyze({ buffer: image.content }).then(data => {
      // console.log('Analized image, got the following:', data);
      this.setState({ uploading: false, info: data });
    });
  };

  render() {
    const { uploading, info } = this.state;
    return (
      <div className="App">
        <Layout>
          <Header>
            <h1 className="title">Análisis de Imágenes</h1>
          </Header>
          <Content className="main-layout">
            <Row gutter={5}>
              <Col span={10}>
                <UploadControls uploading={uploading} onUpload={this.onImageSelected} />
              </Col>
              <Col span={12} push={1}>
                <InfoBox uploading={uploading} attributes={info} />
              </Col>
            </Row>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
