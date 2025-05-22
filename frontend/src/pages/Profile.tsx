import React, { useState } from 'react';
import { Card, Form, Input, Button, message } from 'antd';
import { UserOutlined, MailOutlined, EditOutlined } from '@ant-design/icons';
import { useAuth } from '../contexts/AuthContext';

const Profile: React.FC = () => {
  const { user, updateUser, logout } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async (values: { username: string; email: string }) => {
    try {
      await updateUser(values);
      message.success('Profile updated successfully!');
      setIsEditing(false);
    } catch (error: any) {
      message.error(error.response?.data?.message || 'Update failed');
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <Card>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Profile</h1>
            <Button
              type="primary"
              icon={<EditOutlined />}
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? 'Cancel' : 'Edit'}
            </Button>
          </div>

          {isEditing ? (
            <Form
              form={form}
              initialValues={{
                username: user.username,
                email: user.email,
              }}
              onFinish={onFinish}
              layout="vertical"
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input
                  prefix={<UserOutlined />}
                  placeholder="Username"
                  size="large"
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
                  prefix={<MailOutlined />}
                  placeholder="Email"
                  size="large"
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block size="large">
                  Save Changes
                </Button>
              </Form.Item>
            </Form>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="text-gray-600">Username</label>
                <p className="text-lg">{user.username}</p>
              </div>
              <div>
                <label className="text-gray-600">Email</label>
                <p className="text-lg">{user.email}</p>
              </div>
            </div>
          )}

          <div className="mt-6">
            <Button type="default" onClick={logout} block>
              Logout
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Profile; 