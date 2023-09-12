import React, { Component } from "react";
import { Form, Input, Modal, Select, } from "antd";
const { TextArea } = Input;
class EditPendaftaranForm extends Component {
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
    const { id, name, role, description } = currentRowData;
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
        title="Edit Jalur Pendaftaran"
        visible={visible}
        onCancel={onCancel}
        onOk={onOk}
        confirmLoading={confirmLoading}
      >
        <Form {...formItemLayout}>
          <Form.Item label="ID Jalur:">
            {getFieldDecorator("id", {
              initialValue: id,
            })(<Input disabled />)}
          </Form.Item>
          <Form.Item label="Jalur:">
            {getFieldDecorator("name", {
              rules: [{ required: true, message: "Silahkan isi Jalur Pendaftaran" }],
              initialValue: name,
            })(<Select style={{ width: 250 }}>
              <Select.Option value="Seleksi Nasional Berdasarkan Prestasi (SNBP)">Jalur SNBP</Select.Option>
              <Select.Option value="Seleksi Nasional Berdasarkan Tes (SNBT)">Jalur SNBT</Select.Option>
              <Select.Option value="Seleksi Mandiri">Jalur Mandiri</Select.Option>
            </Select>)}
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

export default Form.create({ name: "EditPendaftaranForm" })(EditPendaftaranForm);