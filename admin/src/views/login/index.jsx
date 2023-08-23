import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Form, Icon, Input, Button, message, Spin } from "antd";
import { connect } from "react-redux";
import DocumentTitle from "react-document-title";
import "./index.less";
import { login, getUserInfo } from "@/store/actions";

const Login = (props) => {
  const { form, token, login, getUserInfo } = props;
  const { getFieldDecorator } = form;

  const [loading, setLoading] = useState(false);

  const handleLogin = (username, password) => {
    // After the login is complete, send a request to call the interface to obtain user information
    setLoading(true);
    login(username, password)
      .then((data) => {
        message.success("Login successful");
        handleUserInfo(data. token);
      })
      .catch((error) => {
        setLoading(false);
        message. error(error);
      });
  };

  // Get user information
  const handleUserInfo = (token) => {
    getUserInfo(token)
      .then((data) => {})
      .catch((error) => {
        message.error(error);
      });
  };

  const handleSubmit = (event) => {
    // default behavior for blocking events
    event. preventDefault();

    // Check all form fields
    form.validateFields((err, values) => {
      // test succeeded
      if (!err) {
        const { username, password } = values;
        handleLogin(username, password);
      } else {
        console.log("Inspection failed!");
      }
    });
  };

  if (token) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <DocumentTitle title={"Login"}>
      <div className="login-container">
        <Form onSubmit={handleSubmit} className="content">
          <div className="title">
            <h2>Login</h2>
          </div>
          <Spin spinning={loading} tip="logging in...">
            <Form.Item>
              {getFieldDecorator("username", {
                rules: [
                  {
                    required: true,
                    whitespace: true,
                    message: "please enter user name",
                  },
                ],
                initialValue: "admin", // initial value
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Username"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [
                  {
                    required: true,
                    whitespace: true,
                    message: "please enter password",
                  },
                ],
                initialValue: "123456", // initial value
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="password"
                />
              )}
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
            </Form.Item>
            <Form.Item>
            <span>Account: admin Password: Just fill in</span>
               <br />
               <span>Account: editor Password: Just fill in</span>
               <br />
               <span>Account: guest Password: Just fill in</span>
            </Form.Item>
          </Spin>
        </Form>
      </div>
    </DocumentTitle>
  );
};

const WrapLogin = Form.create()(Login);

export default connect((state) => state.user, { login, getUserInfo })(
  WrapLogin
);
