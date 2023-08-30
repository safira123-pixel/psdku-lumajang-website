import 'antd/dist/antd.less';
import React, { Component } from "react";
import { UploadOutlined } from '@ant-design/icons';
import { Form, Input, Select, Modal, Button, Upload, message } from "antd";

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
    return (
      <Modal
        title="Tambah Jurusan"
        visible={visible}
        onCancel={onCancel}
        onOk={onOk}
        confirmLoading={confirmLoading}
      >
        <Form {...formItemLayout}>
          <Form.Item label="Nama Jurusan:">
            {getFieldDecorator("name", {
              rules: [
                { required: true, message: "Silahkan isikan nama jurusan" },
              ],
            })(<Select style={{ width: 120 }}>
              <Select.Option value="admin">Jurusan Teknologi Informasi</Select.Option>
              <Select.Option value="student">Jurusan Sipil</Select.Option>
            </Select>)}
          </Form.Item>
          <Form.Item label=":">
            {getFieldDecorator("name", {
              rules: [
                { required: true, message: "Silahkan isikan nama jurusan" },
              ],
            })(<Select style={{ width: 120 }}>
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
        </Form>
      </Modal>
    );
  }
}

export default Form.create({ name: "AddDepartmentForm" })(AddDepartmentForm);
