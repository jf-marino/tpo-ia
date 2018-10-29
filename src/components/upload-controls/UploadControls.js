import React, { Component } from 'react';
import { Button, Icon, Upload } from 'antd';


export class UploadControls extends Component {
    props = {
      name: 'file',
      action: '//jsonplaceholder.typicode.com/posts/',
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          console.log(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          console.log(`${info.file.name} file upload failed.`);
        }
      },
    };

    render() {
        return (
            <Upload>
                <Button>
                    <Icon type="upload" />
                    Seleccionar archivo
                </Button>
            </Upload>
        );
    }
}