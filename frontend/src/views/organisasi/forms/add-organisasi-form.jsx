import React, { Component } from "react";
import { Form, Input, Select, Button, Upload, message, Icon, Modal } from "antd";
const { TextArea } = Input;
class AddOrganisasiForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
        if (!err) {
            console.log('Received values of form: ', values);
            const data = new FormData();
            data.append('file', values.image.file.originFileObj)
            data.append('filename', values.title)
            const filename = values.image.file.name

            fetch('http://localhost:8080/api/upload', {
                    method: 'POST',
                    body: data
                }).then(response => {
                        const jsons = {
                            'name': values.title,
                            'photo': filename
                        }
      
                    })
        }
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
    // const { getFieldDecorator } = this.props.form;


        const props = {
            name: 'file',
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            headers: {
                authorization: 'authorization-text',
            },
            onChange(info) {
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                    message.success(`${info.file.name} file uploaded successfully`);
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
            },
        };  
    return (
      <Modal
        title="Tambah Data"
        visible={visible}
        onCancel={onCancel}
        onOk={onOk}
        confirmLoading={confirmLoading}
      >
        <Form {...formItemLayout} onSubmit={this.handleSubmit} encType="multipart/form-data">
          <Form.Item label="Nama:">
            {getFieldDecorator("imageName", {
              rules: [
                {
                  required: true,
                  message: "Silahkan isikan nama!",
                },
              ],
            })(<TextArea rows={4} placeholder="Nama" />)}
          </Form.Item>
          <Form.Item label="Jabatan:">
            {getFieldDecorator("jabatan", {
              rules: [
                {
                  required: true,
                  message: "Silahkan isi jabatan!",
                },
              ],
            })(<TextArea rows={4} placeholder="Jabatan" />)}
          </Form.Item>
          <Form.Item label="File">
            {getFieldDecorator("file")(
              <Upload.Dragger
                name="file"
                beforeUpload={() => false}
                maxCount={1}
              >
                <p className="ant-upload-drag-icon">
                  <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">Klik atau Seret file ke sini</p>
                <p className="ant-upload-hint">support semua file</p>
              </Upload.Dragger>
            )}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

export default Form.create({ name: "AddOrganisasiForm" })(AddOrganisasiForm);
// })(<Button type="primary" onClick={this.showSelectImageDialog}>Select image...</Button>