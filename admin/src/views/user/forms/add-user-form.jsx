import React, { Component } from "react";
import { Form, Input, Select, Modal } from "antd";
import { reqValidatUserID } from "@/api/user";
const { TextArea } = Input;
class AddUserForm extends Component {
  validatUserID = async (rule, value, callback) => {
    if (value) {
      if (!/^[a-zA-Z0-9]{1,6}$/.test(value)) {
        callback("用户ID必须为1-6位数字或字母组合");
      }
      let res = await reqValidatUserID(value);
      const { status } = res.data;
      if (status) {
        callback("该用户ID已存在");
      }
    } else {
      callback("请输入用户ID");
    }
    callback();
  };
  render() {
    const { visible, onCancel, onOk, form, confirmLoading } = this.props;
    const { getFieldDecorator } = form;
    const formItemLayout = {
      labelCol: {
        sm: { span: 4 },
      },
      wrapperCol: {
        sm: { span: 16 },
      },
    };
    return (
      <Modal
        title="编辑"
        visible={visible}
        onCancel={onCancel}
        onOk={onOk}
        confirmLoading={confirmLoading}
      >
        <Form {...formItemLayout}>
          <Form.Item label="User ID:">
            {getFieldDecorator("id", {
              rules: [{ required: true, validator: this.validatUserID }],
            })(<Input placeholder="Please enter user ID" />)}
          </Form.Item>
          <Form.Item label="User Name:">
            {getFieldDecorator("name", {
              rules: [{ required: true, message: "Please enter a username!" }],
            })(<Input placeholder="Please enter a username" />)}
          </Form.Item>
          <Form.Item label="user role:">
            {getFieldDecorator("role", {
              initialValue: "admin",
            })(
              <Select style={{ width: 120 }}>
                <Select.Option value="admin">admin</Select.Option>
                <Select.Option value="guest">guest</Select.Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item label="user description:">
            {getFieldDecorator("description", {
            })(<TextArea rows={4} placeholder="Please enter a user description" />)}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

export default Form.create({ name: "AddUserForm" })(AddUserForm);
