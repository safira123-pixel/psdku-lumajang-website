import React, { Component } from "react";
import { Form, Input, Modal } from "antd";
const { TextArea } = Input;
class EditKegiatanForm extends Component {
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
        title="Edit Kegiatan"
        visible={visible}
        onCancel={onCancel}
        onOk={onOk}
        confirmLoading={confirmLoading}
      >
        <Form {...formItemLayout}>
          <Form.Item label="ID Kegiatan:">
            {getFieldDecorator("id", {
              initialValue: id,
            })(<Input disabled />)}
          </Form.Item>
          <Form.Item label="Judul:">
            {getFieldDecorator("name", {
              rules: [{ required: true, message: "Silahkan isikan judul kegiatan" }],
              initialValue: name,
            })(<Input placeholder="Judul Kegiatan" />)}
          </Form.Item>
          <Form.Item label="Deskripsi:">
            {getFieldDecorator("description", {
              rules: [{ required: true, message: "Silahkan isikan deskripsi kegiatan" }],
              initialValue: description,
            })(<TextArea rows={4} placeholder="Deskripsi Kegiatan" />)}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

export default Form.create({ name: "EditKegiatanForm" })(EditKegiatanForm);
