import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { login } from './Auth.thunks';
import { PATH } from 'src/constants/paths';

const mapStateToProps = state => ({
  loading: state.loading,
  isAuthenticated: state.isAuthenticated,
});
const mapDispatchToProps = {
  login,
};
const connector = connect(mapStateToProps, mapDispatchToProps);
interface Props extends ConnectedProps<typeof connector> {}

const _Login = (props: Props) => {
  //  eslint-disable-next-line
  const [error, setError] = useState('');
  const { login, loading } = props;
  const history = useHistory();

  const onFinish = async formData => {
    const { username, password } = formData;
    if (!loading) {
      const payload = { username, password };
      try {
        await login(payload);
        message.success('Login successfully');
        history.push(PATH.HOME);
      } catch (error) {
        message.error(error.message);
        setError(error.payload.message);
      }
    }
  };
  return (
    <div className="container">
      <div className="login-form-wrap">
        <h1 className="login-form-title">
          <img
            alt=" logo "
            src=" https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg "
          />
          LOGIN
        </h1>
        <Form
          name="login_form"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Link className="login-form-forgot" to="/forgotpassword">
              Forgot password
            </Link>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              loading={loading}
            >
              Log in
            </Button>
            <div className="login-form-register-link-wrapper">
              Or{' '}
              <Link to="/signup" className="login-form-register-link">
                Register now!
              </Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
const Login = connector(_Login);
export { Login };
