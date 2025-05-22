import React from 'react';
import { Form, Input, Button, Card, message } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined, IdcardOutlined } from '@ant-design/icons';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Register: React.FC = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = async (values: { 
    fullName: string;
    username: string; 
    email: string; 
    phone: string;
    password: string;
    confirmPassword: string;
  }) => {
    try {
      if (values.password !== values.confirmPassword) {
        message.error('Passwords do not match!');
        return;
      }
      await register(values.username, values.email, values.password);
      message.success('Registration successful!');
      navigate('/profile');
    } catch (error: any) {
      message.error(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 py-8 px-4">
      <Card 
        className="w-full max-w-2xl shadow-2xl"
        style={{ 
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px'
        }}
      >
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h1>
          <p className="text-gray-600">Join our community today!</p>
        </div>

        <Form
          form={form}
          name="register"
          onFinish={onFinish}
          layout="vertical"
          size="large"
          className="max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Form.Item
              name="fullName"
              rules={[{ required: true, message: 'Please input your full name!' }]}
            >
              <Input
                prefix={<IdcardOutlined className="text-gray-400" />}
                placeholder="Full Name"
                className="rounded-lg"
              />
            </Form.Item>

            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input
                prefix={<UserOutlined className="text-gray-400" />}
                placeholder="Username"
                className="rounded-lg"
              />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Please input your email!' },
                { type: 'email', message: 'Please enter a valid email!' }
              ]}
            >
              <Input
                prefix={<MailOutlined className="text-gray-400" />}
                placeholder="Email"
                className="rounded-lg"
              />
            </Form.Item>

            <Form.Item
              name="phone"
              rules={[
                { required: true, message: 'Please input your phone number!' },
                { pattern: /^[0-9]{10}$/, message: 'Please enter a valid 10-digit phone number!' }
              ]}
            >
              <Input
                prefix={<PhoneOutlined className="text-gray-400" />}
                placeholder="Phone Number"
                className="rounded-lg"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' },
                { min: 6, message: 'Password must be at least 6 characters!' }
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="text-gray-400" />}
                placeholder="Password"
                className="rounded-lg"
              />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              dependencies={['password']}
              rules={[
                { required: true, message: 'Please confirm your password!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The two passwords do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="text-gray-400" />}
                placeholder="Confirm Password"
                className="rounded-lg"
              />
            </Form.Item>
          </div>

          <Form.Item className="mt-6">
            <Button 
              type="primary" 
              htmlType="submit" 
              block 
              className="h-12 text-lg font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              Create Account
            </Button>
          </Form.Item>

          <div className="text-center mt-4">
            <span className="text-gray-600">Already have an account? </span>
            <Link to="/login" className="text-blue-600 hover:text-blue-800 font-medium">
              Login here
            </Link>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Register; 