import React, { Component } from "react";
import { Form, Input, Select, Button, Upload, message, Icon, Modal } from "antd";
const { TextArea } = Input;
class AddCampusLifeForm extends Component {
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
        title="Tambah Campus Life"
        visible={visible}
        onCancel={onCancel}
        onOk={onOk}
        confirmLoading={confirmLoading}
      >
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label="Kategori:">
            {getFieldDecorator("name", {
              rules: [
                { required: true, message: "Silahkan pilih kategori campus life" },
              ],
            })(<Select style={{ width: 300 }}>
              <Select.Option value="Kuliner">Kuliner</Select.Option>
              <Select.Option value="Pariwisata">Pariwisata</Select.Option>
              <Select.Option value="Profil Lumajang">Profil Lumajang</Select.Option>
              <Select.Option value="Penginapan">Penginapan</Select.Option>
              <Select.Option value="Budaya">Budaya</Select.Option>
            </Select>)}
          </Form.Item>
          <Form.Item label="Deskripsi Kategori:">
            {getFieldDecorator("description", {
              rules: [
                {
                  required: true,
                  message: "Silahkan isikan deskripsi kategori",
                },
              ],
            })(<TextArea rows={4} placeholder="Deskripsi Kategori Campus Life" />)}
          </Form.Item>
          <Form.Item label="File" name="file">
            {getFieldDecorator("file")(
              <Upload.Dragger
              beforeUpload={() => false}
              listType="picture"
            >
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload.
              </p>
            </Upload.Dragger>
            )}
          </Form.Item>
        
        </Form>
      </Modal>
    );
  }
}

export default Form.create({ name: "AddCampusLifeForm" })(AddCampusLifeForm);
// })(<Button type="primary" onClick={this.showSelectImageDialog}>Select image...</Button>

