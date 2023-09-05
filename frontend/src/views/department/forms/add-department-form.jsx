import React, { Component } from "react";
import { Form, Input, Select, Button, Upload, message, Icon, Modal } from "antd";
const { TextArea } = Input;
class AddDepartmentForm extends Component {
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
    return (
      <Modal
        title="Tambah Jurusan"
        visible={visible}
        onCancel={onCancel}
        onOk={onOk}
        confirmLoading={confirmLoading}
      >
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label="Nama Jurusan:">
            {getFieldDecorator("name", {
              rules: [
                { required: true, message: "Silahkan pilih jurusan" },
              ],
            })(<Select style={{ width: 250 }}>
              <Select.Option value="admin">Jurusan Teknologi Informasi</Select.Option>
              <Select.Option value="student">Jurusan Sipil</Select.Option>
            </Select>)}
          </Form.Item>
          <Form.Item label="Deskripsi Jurusan:">
            {getFieldDecorator("description", {
              rules: [
                {
                  required: true,
                  message: "Silahkan isikan deskripsi jurusan",
                },
              ],
            })(<TextArea rows={4} placeholder="Deskripsi Pengguna" />)}
          </Form.Item>
          <Form.Item label="Kompetensi Lulusan:">
            {getFieldDecorator("kompetensi", {
              rules: [
                {
                  required: true,
                  message: "Silahkan isi kompetensi lulusan",
                },
              ],
            })(<TextArea rows={4} placeholder="Kompetensi Lulusan" />)}
          </Form.Item>
          <Form.Item label="Peluang Kerja:">
            {getFieldDecorator("peluang", {
              rules: [
                {
                  required: true,
                  message: "Silahkan isi peluang kerja",
                },
              ],
            })(<TextArea rows={4} placeholder="Peluang Kerja" />)}
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

export default Form.create({ name: "AddDepartmentForm" })(AddDepartmentForm);
// })(<Button type="primary" onClick={this.showSelectImageDialog}>Select image...</Button>

