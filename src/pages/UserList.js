import React, { useEffect, useState } from "react";
import {
    Table,
    Button,
    Modal,
    Form,
    Input,
    Select,
    Space,
    message,
    Switch,
} from "antd";
import api from "../utils/axios"; // updated
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const { Option } = Select;

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [form] = Form.useForm();

    const fetchUsers = async () => {
        try {
            const res = await api.get("/admins");
            setUsers(res.data);
        } catch {
            message.error("Failed to fetch users");
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const showDeleteConfirm = (record) => {
        Modal.confirm({
            title: "Are you sure you want to delete this user?",
            content: `${record.f_name} ${record.l_name}`,
            okText: "Yes",
            cancelText: "No",
            onOk: () => handleDelete(record.id),
        });
    };

    const handleDelete = async (id) => {
        try {
            await api.delete(`/admins/${id}`);
            message.success("User deleted");
            fetchUsers();
        } catch {
            message.error("Delete failed");
        }
    };

    const handleEdit = (record) => {
        setEditingUser(record);
        form.setFieldsValue({
            ...record,
            status: Number(record.status),
        });
        setModalVisible(true);
    };

    const handleAdd = () => {
        setEditingUser(null);
        form.resetFields();
        setModalVisible(true);
    };

    const handleFinish = async (values) => {
        const payload = {
            ...values,
            status: Number(values.status),
        };
        try {
            if (editingUser) {
                await api.put(`/admins/${editingUser.id}`, payload);
                message.success("User updated");
            } else {
                await api.post("/admins", {
                    ...payload,
                    password: "123456",
                });
                message.success("User added");
            }
            fetchUsers();
            setModalVisible(false);
        } catch {
            message.error("Save failed");
        }
    };

    const handleStatusToggle = async (checked, record) => {
        const updatedStatus = checked ? 1 : 0;
        try {
            await api.put(`/admins/${record.id}`, {
                status: updatedStatus,
            });
            message.success("Status updated");
            fetchUsers();
        } catch {
            message.error("Failed to update status");
        }
    };

    const columns = [
        { title: "ID", dataIndex: "id" },
        { title: "Username", dataIndex: "username" },
        { title: "First Name", dataIndex: "f_name" },
        { title: "Last Name", dataIndex: "l_name" },
        { title: "Email", dataIndex: "email" },
        { title: "Role", dataIndex: "role" },
        {
            title: "Status",
            dataIndex: "status",
            render: (status, record) => (
                <Switch
                    className="custom-switch"
                    checked={Number(status) === 1}
                    checkedChildren="Active"
                    unCheckedChildren="Inactive"
                    onChange={(checked) => handleStatusToggle(checked, record)}
                />
            ),
        },
        {
            title: "Action",
            render: (_, record) => (
                <Space>
                    <Button
                        type="primary"
                        size="small"
                        onClick={() => handleEdit(record)}
                        className="mx-1 bg-white text-dark shadow-none"
                    >
                        <i className="fa-regular fa-pen-to-square px-1" />
                    </Button>
                    <Button
                        type="primary"
                        size="small"
                        onClick={() => showDeleteConfirm(record)}
                        className="mx-1 bg-white text-dark shadow-none"
                    >
                        <i className="fa-solid fa-trash-can px-1" />
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <>
            <Header />
            <div className="container-fluid bg-light min-vh-100">
                <div className="row">
                    <Sidebar />
                    <div className="col-md-10 p-4">
                        <div className="d-flex justify-content-between mb-3">
                            <h3>User List</h3>
                            <Button className="button btn add_button rounded-pill" type="primary" onClick={handleAdd}>
                                <i className="fa-solid fa-plus px-1" /> Add User
                            </Button>
                        </div>
                        <Table rowKey="id" dataSource={users} columns={columns} />

                        <Modal
                            title={editingUser ? "Edit User" : "Add User"}
                            open={modalVisible}
                            onCancel={() => setModalVisible(false)}
                            onOk={() => form.submit()}
                        >
                            <Form form={form} layout="vertical" onFinish={handleFinish}>
                                <Form.Item name="username" label="Username" rules={[{ required: true }]}>
                                    <Input />
                                </Form.Item>
                                <Form.Item name="f_name" label="First Name">
                                    <Input />
                                </Form.Item>
                                <Form.Item name="l_name" label="Last Name">
                                    <Input />
                                </Form.Item>
                                <Form.Item name="email" label="Email" rules={[{ required: true }]}>
                                    <Input />
                                </Form.Item>
                                <Form.Item name="password" label="Password">
                                    <Input />
                                </Form.Item>
                                <Form.Item name="role" label="Role" rules={[{ required: true }]}>
                                    <Select>
                                        <Option value="subadmin">Sub Admin</Option>
                                        <Option value="superadmin">Super Admin</Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item name="status" label="Status" rules={[{ required: true }]}>
                                    <Select>
                                        <Option value={1}>Active</Option>
                                        <Option value={0}>Inactive</Option>
                                    </Select>
                                </Form.Item>
                            </Form>
                        </Modal>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default UserList;
