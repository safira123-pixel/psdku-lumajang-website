import React, { Component } from "react";
import { Form, Input, Select, Button, Upload, message, Icon, Modal } from "antd";
const { TextArea } = Input;
class EditKalenderForm extends Component {
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
    const {
      visible,
      onCancel,
      onOk,
      form,
      confirmLoading,
      currentRowData,
    } = this.props;
    const { getFieldDecorator } = form;
    const { id, name,description } = currentRowData;
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
        title="Edit Gambar Kalender"
        visible={visible}
        onCancel={onCancel}
        onOk={onOk}
        confirmLoading={confirmLoading}
      >
        <Form {...formItemLayout}>
          <Form.Item label="ID Gambar:">
            {getFieldDecorator("id", {
              initialValue: id,
            })(<Input disabled />)}
          </Form.Item>
          <Form.Item label="Judul Gambar:">
            {getFieldDecorator("imageName", {
              rules: [{ required: true, message: "Silahkan isikan Judul Gambar" }],
              initialValue: name,
            })(<Input placeholder="Judul Gambar" />)}
          </Form.Item>
          <Form.Item label="Tipe gambar:">
            {getFieldDecorator("imageType", {
              rules: [{ required: true, message: "Silahkan isikan tipe gambar" }],
              initialValue: description,
            })(<TextArea rows={4} placeholder="Tipe Gambar" />)}
          </Form.Item>
          <Form.Item label="Image">
            {getFieldDecorator("image", {
              rules: [
                {
                  required: false,
                  message: "Silahkan tambahkan gambar",
                },
              ],
            })( <Upload
              name="file"
              action="http://localhost:8080/api/upload" // Sesuaikan dengan endpoint yang sesuai
              showUploadList={false} // Jika Anda tidak ingin menampilkan daftar file yang diunggah
          >
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

export default Form.create({ name: "EditKalenderForm" })(EditKalenderForm);
