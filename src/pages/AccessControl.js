import React, { useState, useEffect } from "react";
import { Table, Switch, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import api from "../utils/axios";

const rawPages = [
    "dashboard",
    "microsite",
    "microsite-meta-tag",
    "microsite-details",
    "microsite-price",
    "floor-plan",
    "blogs",
    "builder",
    "amenities",
    "specifications",
    "specifications-detail",
    "bank-approval",
    "legal-approval",
    "property-status",
    "property-type",
    "access-control"
];

const AccessControl = () => {
    const [users, setUsers] = useState([]);
    const [pages] = useState(rawPages.map((p) => `/${p}`));
    const navigate = useNavigate();

    // Get current user from localStorage
    const currentUser = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        // Redirect if not superadmin
        if (!currentUser || currentUser.role !== "superadmin") {
            message.warning("Unauthorized access");
            navigate("/dashboard"); // or any fallback route
        } else {
            fetchUsers();
        }
    }, []);

    const fetchUsers = async () => {
        try {
            const res = await api.get("/access/users");
            setUsers(res.data);
        } catch (err) {
            message.error("Failed to fetch users");
        }
    };

    const updatePermissions = (userId, page, type) => {
        setUsers((prev) =>
            prev.map((user) =>
                user.id === userId
                    ? {
                        ...user,
                        [type]: user[type].includes(page)
                            ? user[type].filter((p) => p !== page)
                            : [...user[type], page]
                    }
                    : user
            )
        );
    };

    const savePermissions = async () => {
        try {
            await api.post("/access/update", { users });
            message.success("Permissions updated!");
        } catch (err) {
            message.error("Failed to update permissions");
        }
    };

    const columns = [
        {
            title: "Page",
            dataIndex: "page",
            key: "page",
            fixed: "left",
            width: 250,
            render: (text) => <strong>{text.replace("/", "")}</strong>
        },
        ...users.map((user) => ({
            title: user.email,
            dataIndex: user.id,
            key: user.id,
            align: "center",
            render: (_, record) => {
                const hasAccess = user.permissions.includes(record.page);
                const canDelete = user.deletePermissions.includes(record.page);
                return (
                    <div className="d-flex flex-column align-items-center gap-2">
                        <div>
                            <span style={{ marginRight: 8 }}>Access</span>
                            <Switch
                                checked={hasAccess}
                                onChange={() => updatePermissions(user.id, record.page, "permissions")}
                            />
                        </div>
                        <div>
                            <span style={{ marginRight: 8 }}>Delete</span>
                            <Switch
                                checked={canDelete}
                                onChange={() => updatePermissions(user.id, record.page, "deletePermissions")}
                            />
                        </div>
                    </div>
                );
            }
        }))
    ];

    const dataSource = pages.map((page) => ({ key: page, page }));

    return (
        <>
            <Header />
            <div className="container-fluid bg-light min-vh-100">
                <div className="row">
                    <Sidebar />
                    <div className="col-md-10 p-4">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h3 className="fw-bold">Access Control</h3>
                            <Button className="button btn add_button rounded-pill" onClick={savePermissions} type="primary">
                                Save Changes
                            </Button>
                        </div>
                        <Table
                            bordered
                            size="small"
                            columns={columns}
                            dataSource={dataSource}
                            rowKey="page"
                            pagination={false}
                            scroll={{ x: "max-content" }}
                            className="bg-white"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AccessControl;
