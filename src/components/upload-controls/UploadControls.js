import React, { Component } from 'react';
import { Button, Icon, Upload, Divider, Row, Col } from 'antd';
import { ImageBox } from '../image-box';
import './UploadControls.css';

const electron = window.require('electron');
const fs = electron.remote.require('fs');

export class UploadControls extends Component {
    state = {
      fileToUpload: null
    };

    beforeUploadHandler = (file) => {
      try {
        const { path: imagePath, type, name } = file;
        const content = fs.readFileSync(imagePath);
        this.setState({
          fileToUpload: { imagePath, type, name, content }
        });
      } catch (error) {
        console.log('Error reading file from local FS', error);
        this.setState({ fileToUpload: null });
      }
      return false;
    };

    preview = () => {
      const { fileToUpload } = this.state;
      return fileToUpload
        ? `data:${fileToUpload.type};base64,${fileToUpload.content.toString('base64')}`
        : '';
    };

    upload = () => {
      const { fileToUpload } = this.state;
      if (fileToUpload) {
        this.props.onUpload(fileToUpload);
      }
    };

    render() {
        const { uploading } = this.props;
        const imagePreview = this.preview();
        return (
          <div>
            <Row>
              <Col span={24}>
                <ImageBox src={imagePreview}/>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Divider>Subir imagen</Divider>
              </Col>
            </Row>
            <Row>
              <Col span={8} offset={1}>
                <Upload beforeUpload={this.beforeUploadHandler} action='//jsonplaceholder.typicode.com/posts/' showUploadList={false}>
                  <div>
                    <Button>
                        <Icon type="upload" />
                        Seleccionar archivo
                    </Button>
                  </div>
                </Upload>
              </Col>
              <Col span={15}>
                <Button
                  loading={uploading}
                  disabled={uploading}
                  onClick={this.upload}
                >
                  {uploading ? 'Analizando' : 'Analizar'}
                </Button>
              </Col>
            </Row>
          </div>
        );
    }
}