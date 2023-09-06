import React, { Component } from "react";
import { Form, Input, Select, Button, Upload, message, Icon, Modal } from "antd";
const { TextArea } = Input;
class AddKalenderForm extends Component {
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
        title="Tambah Gambar Kalender"
        visible={visible}
        onCancel={onCancel}
        onOk={onOk}
        confirmLoading={confirmLoading}
      >
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label="Judul:">
            {getFieldDecorator("imageName", {
              rules: [
                {
                  required: true,
                  message: "Silahkan isikan judul",
                },
              ],
            })(<TextArea rows={4} placeholder="Judul Gambar" />)}
          </Form.Item>
          <Form.Item label="Tipe:">
            {getFieldDecorator("imageType", {
              rules: [
                {
                  required: true,
                  message: "Silahkan isi tipe gambar",
                },
              ],
            })(<TextArea rows={4} placeholder="Tipe" />)}
          </Form.Item>
          <Form.Item label="Image">
            {getFieldDecorator("image", {
              rules: [
                {
                  required: false,
                  message: "Silahkan tambahkan gambar",
                },
              ],
            })(<Upload {...props}>
              <Button>
                  <Icon type="upload" /> Click to Upload
              </Button>
          </Upload>
            )}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

export default Form.create({ name: "AddKalenderForm" })(AddKalenderForm);
// })(<Button type="primary" onClick={this.showSelectImageDialog}>Select image...</Button>