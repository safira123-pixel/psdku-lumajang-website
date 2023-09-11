import React, { Component } from 'react';
import axios from 'axios';
import { Modal, Form, Upload, Icon } from 'antd';

class AddKalenderForm extends Component {
  state = {
    selectedFile: null,
  };

  fileSelectedHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    });
  };

  fileUploadHandler = () => {
    const formData = new FormData();
    formData.append('file', this.state.selectedFile, this.state.selectedFile.name);

    axios.post('http://localhost8080/api/kalender/upload', formData)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    const { visible, onCancel, onOk, form, confirmLoading } = this.props;
    const { getFieldDecorator } = form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };

    return (
      <Modal
        title="Tambah Gambar Kalender"
        visible={visible}
        onCancel={onCancel}
        onOk={onOk}
        confirmLoading={confirmLoading}
      >
        <Form {...formItemLayout}>
          <Form.Item label="File">
            <Upload
              name="file"
              beforeUpload={() => false}
              maxCount={1}
              customRequest={({ file }) => {
                this.setState({
                  selectedFile: file,
                });
              }}
            >
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">Klik atau Seret file ke sini</p>
              <p className="ant-upload-hint">support semua file</p>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

export default Form.create({ name: "AddKalenderForm" })(AddKalenderForm);
// })(<Button type="primary" onClick={this.showSelectImageDialog}>Select image...</Button>