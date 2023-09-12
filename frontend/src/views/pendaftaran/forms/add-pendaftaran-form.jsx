import React, { Component } from "react";
import { Form, Input, Modal, Select, } from "antd";
const { TextArea } = Input;
class AddPendaftaranForm extends Component {
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
        title="Tambah Jalur Pendaftaran"
        visible={visible}
        onCancel={onCancel}
        onOk={onOk}
        confirmLoading={confirmLoading}
      >
        <Form {...formItemLayout}>
          <Form.Item label="Jalur:">
            {getFieldDecorator("name", {
              rules: [
                { required: true, message: "Silahkan isikan jalur pendaftaran" },
              ],
            })(<Select style={{ width: 250 }}>
              <Select.Option value="Seleksi Nasional Berdasarkan Prestasi (SNBP)">Jalur SNBP</Select.Option>
              <Select.Option value="Seleksi Nasional Berdasarkan Tes (SNBT)">Jalur SNBT</Select.Option>
              <Select.Option value="Seleksi Mandiri">Jalur Mandiri</Select.Option>
            </Select>)}
          </Form.Item>
          <Form.Item label="Deskripsi:">
            {getFieldDecorator("description", {
              rules: [
                {
                  required: true,
                  message: "Silahkan isikan deskripsi jalur pendaftaran",
                },
              ],
            })(<TextArea rows={4} placeholder="Deskripsi Jalur" />)}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

export default Form.create({ name: "AddPendaftaranForm" })(AddPendaftaranForm);