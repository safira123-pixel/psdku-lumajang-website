import React, { Component } from "react";
import { Form, Input, Modal } from "antd";
const { TextArea } = Input;
class EditProfilForm extends Component {
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
    const { id, name, description } = currentRowData;
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
        title="Edit Data"
        visible={visible}
        onCancel={onCancel}
        onOk={onOk}
        confirmLoading={confirmLoading}
      >
        <Form {...formItemLayout}>
          <Form.Item label="Judul:">
            {getFieldDecorator("name", {
              rules: [{ required: true, message: "Silahkan isi Judul" }],
              initialValue: name,
            })(<Input placeholder="Data" />)}
          </Form.Item>
          <Form.Item label="Deskripsi:">
            {getFieldDecorator("description", {
              rules: [{ required: true, message: "Silahkan isikan deskripsi" }],
              initialValue: description,
            })(<TextArea rows={4} placeholder="Deskripsi" />)}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

export default Form.create({ name: "EditProfilForm" })(EditProfilForm);