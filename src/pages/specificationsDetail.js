import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import usePermission from "../hooks/usePermission";
import { Table, Button, Modal, Form, Input, Image, Select, } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
    GetMicrositeById,
    GetSpecificationsById,
    GetSpecificationsDetailById,
    AddSpecificationsDetailById,
    EditSpecificationsDetailById,
    DeleteSpecificationsDetailById,
} from "../reducer/thunks";
import { DeleteFilled } from "@ant-design/icons";

const { confirm } = Modal;

const SpecificationsDetail = () => {
    const { canDelete } = usePermission("/specifications-detail");
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [editData, setEditData] = useState({});

    const dispatch = useDispatch();
    const IMAGE_BASE_URL = "https://realtyfocus.info/images/";


    const { SpecificationsDetailres: specificationDetails } = useSelector((state) => state.SpecificationsDetailres);

    const { Specificationsres: getspecificationResponses } = useSelector((state) => state.Specificationsres);

    const { Micrositeres: getMicrositeResponses } = useSelector((state) => state.Micrositeres);

    const { EditSpecificationsDetailres: editResponse } = useSelector((state) => state.EditSpecificationsDetailres);


    useEffect(() => {
        dispatch(GetSpecificationsDetailById());
        dispatch(GetSpecificationsById());
        dispatch(GetMicrositeById());

        if (editResponse) {
            setEditData({});
            setEditModalVisible(false);
        }
    }, [dispatch, editResponse]);

    const handleEdit = (record) => {
        setEditData(record);
        setEditModalVisible(true);
    };

    const handleSaveEdit = (editedData) => {
        if (editData.id) {
            dispatch(EditSpecificationsDetailById(editData.id, editedData));
        } else {
            dispatch(AddSpecificationsDetailById(editedData));
        }
    };

    const showDeleteConfirm = (record) => {
        const specification = getspecificationResponses?.find(spec => spec.id === record.sp_id);
        const specName = specification?.name || "this item";

        confirm({
            title: `Are you sure you want to delete ${specName}?`,
            icon: <DeleteFilled />,
            content: "This action cannot be undone.",
            okText: "Yes",
            okType: "danger",
            cancelText: "No",
            onOk() {
                dispatch(DeleteSpecificationsDetailById(record.id))
                    .then(() => dispatch(GetSpecificationsDetailById()))
                    .catch((error) => console.error("Error:", error));
            },
        });
    };

    const columns = [
        {
            title: "Microsite Name",
            key: "microsite_name",
            render: (_, record) => {
                const microsite = getMicrositeResponses?.find(site => site.micro_id === record.micro_id);
                return microsite?.name || "N/A"; // Handle empty microsite name
            },
        },
        {
            title: "Name",
            key: "specification_name",
            render: (_, record) => {
                const specification = getspecificationResponses?.find(site => site.id === record.sp_id);
                return specification?.name || "N/A"; // Handle empty specification name
            },
        },
        {
            title: "Image",
            key: "image",
            render: (_, record) => {
                const specification = getspecificationResponses?.find(site => site.id === record.sp_id);
                const image = specification?.image;
                return image ? (
                    <Image
                        width={80}
                        src={`${IMAGE_BASE_URL}specification/${image}`}
                        alt="Specification"
                        fallback="https://via.placeholder.com/80"
                    />
                ) : (
                    "No Image"
                );
            },
        },
        {
            title: "Actions",
            render: (_, record) => (
                <>
                    <Button
                        type="primary"
                        size="small"
                        onClick={() => handleEdit(record)}
                        className="mx-1 bg-white text-dark shadow-none"
                    >
                        <i className="fa-regular fa-pen-to-square px-1" />
                    </Button>
                    {canDelete && (
                        <Button
                            type="primary"
                            size="small"
                            onClick={() => showDeleteConfirm(record)}
                            className="mx-1 bg-white text-dark shadow-none"
                        >
                            <i className="fa-solid fa-trash-can px-1" />
                        </Button>
                    )}
                </>
            ),
        },
    ];

    const filteredData = specificationDetails?.filter(record => {
        const specification = getspecificationResponses?.find(site => site.id === record.sp_id);
        return !!specification?.name; // Only include records with valid specification name
    });

    const customLabels = {
        micro_id: "Microsite Name",
        id: "Specification ID",
        sp_id: "Specification",
    };

    const EditModal = ({ visible, data, onClose, onSave }) => {
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
                title="Add/Edit Specifications Detail"
                width={800}
                open={visible}
                onCancel={onClose}
                footer={[
                    <Button key="cancel" onClick={onClose}>Cancel</Button>,
                    <Button key="save" type="primary" onClick={handleSave}>Save</Button>,
                ]}
            >
                <Form
                    form={form}
                    layout="vertical"
                    className="row"
                    initialValues={data} // Make sure `data` contains id and description
                >
                    {Object.entries(data).map(([key, value]) => {
                        if (["_id", "createdAt", "__v"].includes(key)) return null;

                        return (
                            <Form.Item
                                key={key}
                                name={key}
                                label={customLabels[key] || key.charAt(0).toUpperCase() + key.slice(1)}
                                className={
                                    ["description"].includes(key) ? "col-md-12" : "col-md-6"
                                }
                                labelCol={{ span: 24 }}
                            >
                                {key === "micro_id" ? (
                                    <Select
                                        placeholder="Select Microsite"
                                        onChange={(val) => form.setFieldsValue({ [key]: val })}
                                        showSearch
                                        optionFilterProp="children"
                                    >
                                        {getMicrositeResponses?.map((microsite) => (
                                            <Select.Option
                                                key={microsite.micro_id}
                                                value={microsite.micro_id}
                                            >
                                                {microsite.name}
                                            </Select.Option>
                                        ))}
                                    </Select>
                                ) : key === "sp_id" ? (
                                    <Select
                                        placeholder="Select Specification"
                                        onChange={(val) => form.setFieldsValue({ [key]: val })}
                                        showSearch
                                        optionFilterProp="children"
                                    >
                                        {getspecificationResponses?.map((spec) => (
                                            <Select.Option
                                                key={spec.sp_id}
                                                value={spec.sp_id}
                                            >
                                                {spec.name}
                                            </Select.Option>
                                        ))}
                                    </Select>
                                ) : key === "description" ? (
                                    <Input.TextArea rows={6} />
                                ) : (
                                    <Input disabled={key === "id"} />
                                )}
                            </Form.Item>
                        );
                    })}
                </Form>
            </Modal>

        );
    };

    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <div className="col-md-10 bg-color-main">
                        <div className="main px-lg-5 my-lg-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h3>Add Specifications Detail</h3>
                                <Button
                                    className={` button btn add_button  rounded-pill`}
                                    type="primary"
                                    onClick={() => handleEdit({ micro_id: "", sp_id: "", description: "" })}
                                >
                                    <i className="fa-solid fa-plus px-1" /> Add Specifications
                                </Button>
                            </div>

                            <div className="bg-white p-4">
                                <Table
                                    dataSource={filteredData}
                                    columns={columns}
                                    pagination={{ pageSize: 10 }}
                                />
                            </div>

                            <EditModal
                                visible={editModalVisible}
                                data={editData}
                                onClose={() => setEditModalVisible(false)}
                                onSave={handleSaveEdit}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default SpecificationsDetail;
