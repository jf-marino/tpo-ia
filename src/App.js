import React, { Component } from 'react';
import { Row, Col, Layout, Button, Icon, Modal } from 'antd';
import { InfoBox } from './components/info-box';
import { UploadControls } from './components/upload-controls';
import { Configuration } from './components/configuration';
import { analyze, getConfig, setConfig } from './services/images';
import './App.css';

const { Header, Content } = Layout;

class App extends Component {
  state = {
    uploading: false,
    info: {},
    config: getConfig()
  };

  onImageSelected = (image) => {
    this.setState({ uploading: true });
    analyze({ buffer: image.content }).then(data => {
      this.setState({ uploading: false, info: data });
    });
  };

  openConfig = () => {
    this.setState({ showConfig: true });
  };

  cancelConfig = () => {
    this.setState({ showConfig: false });
  };

  applyConfig = () => {
    const config = this.state.config;
    setConfig(config);
    this.cancelConfig();
  };

  onConfigChange = (config) => {
    this.setState({ config });
  };

  render() {
    const { uploading, info, showConfig, config } = this.state;
    return (
      <div className="App">
        <Layout>
          <Header>
            <h1 className="title">Análisis de Imágenes</h1>
            <div className="right-menu">
              <Button onClick={this.openConfig}>
                <Icon type="setting" theme="filled" /> Configuración
              </Button>
            </div>
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
          <Modal
            visible={showConfig}
            title="Configuración"
            onOk={this.applyConfig}
            onCancel={this.cancelConfig}
            footer={[
              <Button key="back" onClick={this.cancelConfig}>Cancelar</Button>,
              <Button key="submit" type="primary" onClick={this.applyConfig}>Aplicar</Button>  
            ]}
          >
            <Configuration config={config} onChange={this.onConfigChange} />
          </Modal>
        </Layout>
      </div>
    );
  }
}

export default App;
