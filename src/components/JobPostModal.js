import React from 'react';
import { Modal, Form, Input, Button, Select } from 'antd';

const { Option } = Select;

const JobPostModal = ({ visible, data, onClose, onSave }) => {
  const [form] = Form.useForm();

  const handleSave = () => {
    form.validateFields().then((values) => {
      onSave(values);
      form.resetFields();
      onClose();
    });
  };

  return (
    <Modal
      title={data ? 'Edit Job Post' : 'Add Job Post'}
      open={visible}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Cancel
        </Button>,
        <Button key="save" type="primary" onClick={handleSave}>
          Save
        </Button>,
      ]}
    >
      <Form form={form} initialValues={data}>
        <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Please enter job title' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Description" name="description" rules={[{ required: true, message: 'Please enter job description' }]}>
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Requirements" name="requirements" rules={[{ required: true, message: 'Please enter job requirements' }]}>
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Location" name="location" rules={[{ required: true, message: 'Please enter job location' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Category" name="category" rules={[{ required: true, message: 'Please select job category' }]}>
          <Select placeholder="Select category">
            <Option value="IT">IT</Option>
            <Option value="Marketing">Marketing</Option>
            <Option value="Finance">Finance</Option>
            <Option value="HR">HR</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default JobPostModal;
