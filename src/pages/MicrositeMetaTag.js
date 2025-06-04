import React, { useEffect, useState, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import usePermission from "../hooks/usePermission";
import { Link } from "react-router-dom";
import {
    Table,
    Button,
    Modal,
    Row,
    Col,
    Switch,
    Form,
    Input,
    Upload,
    Select,
    Image,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
    GetMicrositeById,
    GetMicrositeMetaTagById,
    AddMicrositeMetaTagById,
    EditMicrositeMetaTagById,
    DeleteMicrositeMetaTagById,
} from "../reducer/thunks";
import { DeleteFilled } from "@ant-design/icons";

const { Dragger } = Upload;
const { confirm } = Modal;
const { Option } = Select;

const MicrositeMetaTag = () => {
    // State to manage the file upload
    const { canDelete } = usePermission("/microsite-meta-tag");
    const [file, setFile] = useState(null);
    const fileInputRef = useRef(null);
    // State to manage the edit modal visibility
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [editData, setEditData] = useState([]);

    // Redux state for microsite meta tag data and microsite data
    const { loading: getcategoriesLoading, MicrositeMetaTagres: getcategoriesResponse } =
        useSelector((state) => state.MicrositeMetaTagres);

    const { loading: getOrderUserLoadings, Micrositeres: getOrderResponses } =
        useSelector((state) => state.Micrositeres);

    const { loading: EditcategoryLoading, EditMicrositeMetaTagres: EditcategoryResponse } =
        useSelector((state) => state.EditMicrositeMetaTagres);

    const dispatch = useDispatch();

    // Fetch the microsite meta tag and microsite data when the component mounts
    useEffect(() => {
        dispatch(GetMicrositeMetaTagById());
        dispatch(GetMicrositeById());
    }, [dispatch, EditcategoryResponse]);

    // Handle the "active" status toggle action
    const handleToggleActive = (productId, newStatus) => {
        console.log(`Toggle Active for Product ${productId} to ${newStatus}`);
    };

    // Handle edit modal visibility
    const handleEdit = (record) => {
        setEditData(record);
        setEditModalVisible(true);
    };

    // Handle save action from the edit modal
    const handleSaveEdit = (editedData) => {
        if (editData.id) {
            dispatch(EditMicrositeMetaTagById(editData.id, editedData));
        } else {
            dispatch(AddMicrositeMetaTagById(editedData));
        }

        setEditModalVisible(false); // Close the modal after saving
    };

    // Show confirmation for deleting an item
    const showDeleteConfirm = (record) => {
        confirm({
            title: `Are you sure delete this ${record.title}?`,
            icon: <DeleteFilled />,
            content: "Some descriptions",
            okText: "Yes",
            okType: "danger",
            cancelText: "No",
            onOk() {
                console.log("OK");
                dispatch(DeleteMicrositeMetaTagById(record.id))
                    .then(() => dispatch(GetMicrositeMetaTagById()))
                    .catch((error) => console.error("Error:", error));
            },
            onCancel() {
                console.log("Cancel");
            },
        });
    };

    // Columns for the table display
    const columns = [
        {
            title: "Microsite Name",
            key: "microsite_name",
            render: (_, record) => {
                const microsite = getOrderResponses?.find(site => site.micro_id === record.micro_id);
                return microsite?.name || "N/A"; // Handle empty microsite name
            },
        },
        {
            title: "Name",
            dataIndex: "title",
        },
        {
            title: "Meta Name",
            dataIndex: "meta_name",
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

    // Edit Modal Component
    const EditModal = ({ visible, data, onClose, onSave }) => {
        const [form] = Form.useForm();

        const handleSave = () => {
            form
                .validateFields()
                .then((values) => {
                    onSave(values);  // Save the form data
                    form.resetFields();  // Reset form fields
                    onClose();  // Close the modal
                })
                .catch((errorInfo) => {
                    console.log("Validation Failed:", errorInfo);
                });
        };

        return (
            <Modal
                title="Add Microsite Meta Tag"
                width={"800px"}
                open={visible}
                onCancel={onClose}
                footer={[
                    <Button key="cancel" onClick={onClose}>Cancel</Button>,
                    <Button key="save" type="primary" onClick={handleSave}>Save</Button>,
                ]}
            >
                <Form form={form} initialValues={data} className="col-md-12 row">
                    {Object.entries(data).map(
                        ([key, value]) =>
                            !["_id", "createdAt", "__v"].includes(key) && (
                                <Form.Item
                                    key={key}
                                    labelCol={{ span: 24 }}
                                    label={key.charAt(0).toUpperCase() + key.slice(1)}
                                    name={key}
                                    className="col-md-6"
                                >
                                    {key === "isActive" ? (
                                        <Switch
                                            size="small"
                                            checked={value}
                                            onChange={(checked) => form.setFieldsValue({ [key]: checked })}
                                        />
                                    ) : key === "status" ? (
                                        <Select>
                                            <Option value="Enable">Enable</Option>
                                            <Option value="Disable">Disable</Option>
                                        </Select>
                                    ) : key === "micro_id" ? (
                                        <Select
                                            placeholder="Select Microsite"
                                            onChange={(val) => form.setFieldsValue({ [key]: val })}
                                            showSearch
                                            optionFilterProp="children"
                                        >
                                            {getOrderResponses?.map((microsite) => (
                                                <Select.Option
                                                    key={microsite.micro_id}
                                                    value={microsite.micro_id}
                                                >
                                                    {microsite.name}
                                                </Select.Option>
                                            ))}
                                        </Select>
                                    ) : key === "id" ? (
                                        <Input disabled />
                                    ) : (
                                        <Input />
                                    )}
                                </Form.Item>
                            )
                    )}
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
                            <div className="col-md-6 my-2 col-12">
                                <p className="fs-3 fw-semibold text-start col-md-6 col-12">Add Property Type</p>
                            </div>
                            <div className="row col-md-12 d-flex justify-content-between bg-white p-4 m-0">
                                <div className="col-md-4">
                                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                                        <div className="input-group flex-nowrap bg-secondary-subtle  rounded-pill">
                                            <span className="input-group-text border-0 bg-secondary-subtle rounded-pill" id="addon-wrapping">
                                                <i className="fa-solid fa-magnifying-glass"></i>
                                            </span>
                                            <input
                                                type="text"
                                                className="form-control border-0 bg-secondary-subtle text-secondary rounded-pill"
                                                placeholder="Search"
                                                aria-label="Search"
                                                aria-describedby="addon-wrapping"
                                            />
                                        </div>
                                    </form>
                                </div>
                                <div className="col-md-3 text-end ">
                                    <Button
                                        className={`button btn add_button  rounded-pill`}
                                        type="primary"
                                        onClick={() =>
                                            handleEdit({
                                                micro_id: "",
                                                title: "",
                                                meta_name: "",
                                                keyword: "",
                                                metadescription: "",
                                                status: "",
                                            })
                                        }
                                    >
                                        <i className="fa-solid fa-plus px-1" />
                                        Add Property Type
                                    </Button>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12 ">
                                    <div className="row mx-1">
                                        <div className="table-responsive py-3 bg-white mt-3">
                                            <Table
                                                dataSource={getcategoriesResponse}
                                                columns={columns}
                                                pagination={{
                                                    pageSize: 10, // Set the number of items per page
                                                }}
                                            />
                                        </div>
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
                </div>
            </div>

            <Footer />
        </>
    );
};

export default MicrositeMetaTag;
