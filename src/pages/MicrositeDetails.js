import React, { useEffect, useState, useRef } from "react";
import {
    Table,
    Button,
    Modal,
    Switch,
    Form,
    Input,
    Upload,
    Image,
    Checkbox,
    Select,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import usePermission from "../hooks/usePermission";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import {
    GetMicrositeDetailById,
    AddMicrositeDetailById,
    EditMicrositeDetailById,
    DeleteMicrositeDetailById,
    GetAmenitiesById,
    GetMicrositeById,
    GetPropStatusById,
    GetPropTypeById,
    GetSpecificationsById,
    GetBuilderById,
    GetBankApprovalById,
    GetLegalApprovalById,
} from "../reducer/thunks";
import { DeleteFilled, UploadOutlined } from "@ant-design/icons";

const { confirm } = Modal;

const MicrositeDetails = () => {
    const { canDelete } = usePermission("/microsite-details");
    const dispatch = useDispatch();
    const IMAGE_BASE_URL = "https://realtyfocus.info/images/";

    const [editModalVisible, setEditModalVisible] = useState(false);
    const [editData, setEditData] = useState({});

    const { Micrositedetailres: getOrderResponse } = useSelector((state) => state.Micrositedetailres);
    const { EditMicrositedetailres: EditcategoryResponse } = useSelector((state) => state.EditMicrositedetailres);
    const { Micrositeres: getMicrositeResponse } = useSelector((state) => state.Micrositeres);
    const { Amenitiesres: getAmenitieResponse } = useSelector((state) => state.Amenitiesres);
    const { Specificationsres: getSpecificationsResponse } = useSelector((state) => state.Specificationsres);
    const { LegalApprovalres: getLegalApprovalResponse } = useSelector((state) => state.LegalApprovalres);
    const { PropStatusres: getPropStatusResponse } = useSelector((state) => state.LegalApprovalres);
    const { PropTyperes: getPropTypeResponse } = useSelector((state) => state.PropTyperes);
    const { BankApprovalres: getBankApprovalResponse } = useSelector((state) => state.BankApprovalres);
    const { Builderres: getBuilderResponse } = useSelector((state) => state.Builderres);

    /*useEffect(() => {
        console.log("Amenities Response:", getAmenitieResponse);
    }, [getAmenitieResponse]);*/

    useEffect(() => {
        dispatch(GetMicrositeDetailById());
        dispatch(GetAmenitiesById());
        dispatch(GetBankApprovalById());
        dispatch(GetLegalApprovalById());
        dispatch(GetPropStatusById());
        dispatch(GetMicrositeById());
        dispatch(GetPropTypeById());
        dispatch(GetBuilderById());
        if (EditcategoryResponse) {
            setEditData({});
            setEditModalVisible(false);
        }
    }, [dispatch, EditcategoryResponse]);


    const CustomImageUpload = ({ fieldName, value, form, multiple }) => {
        const [selectedFiles, setSelectedFiles] = useState(
            value
                ? Array.isArray(value)
                    ? value.map((v) => ({ url: v }))
                    : [{ url: value }]
                : []
        );

        const handleFileChange = ({ fileList }) => {
            if (fileList.length === 0) {
                form.setFieldsValue({
                    [fieldName]: null,
                });
                setSelectedFiles([]);
            } else {
                const selectedFile = fileList[0]?.originFileObj;

                form.setFieldsValue({ [fieldName]: [selectedFile || value] });
                console.log(fileList);
                setSelectedFiles(fileList);
            }
        };

        useEffect(() => {
            form.setFieldsValue({
                [fieldName]: selectedFiles.map((file) => file.originFileObj || file.url),
            });
        }, [selectedFiles]);

        return (
            <div>
                <Upload
                    accept=".jpg, .jpeg, .png"
                    fileList={selectedFiles}
                    multiple={multiple}
                    customRequest={({ file, onSuccess }) => {
                        setTimeout(() => {
                            onSuccess("ok");
                        }, 0);
                    }}
                    onChange={handleFileChange}
                >
                    <Button icon={<UploadOutlined />}>Upload {multiple ? "Images" : "Image"}</Button>
                </Upload>
                {selectedFiles.length > 0 && (
                    <div style={{ marginTop: 16 }}>
                        {selectedFiles.map((file, index) => (
                            <img
                                key={index}
                                src={
                                    file?.originFileObj
                                        ? URL.createObjectURL(file.originFileObj)
                                        : file.url
                                }
                                alt={`Preview-${index + 1}`}
                                style={{ maxWidth: "100%", maxHeight: "150px", marginRight: "5px" }}
                            />
                        ))}
                    </div>
                )}
            </div>
        );
    };



    const handleEdit = (record) => {
        setEditData(record);
        setEditModalVisible(true);
    };


    const handleSaveEdit = (editedData) => {
        const formData = new FormData();

        // Append all text and numeric fields
        formData.append("md_id", editedData.md_id || "");
        formData.append("micro_id", editedData.micro_id || "");
        formData.append("builder_id", editedData.builder_id || "");
        formData.append("am_id", editedData.am_id || "");
        formData.append("bank_id", editedData.bank_id || "");
        formData.append("legal_id", editedData.legal_id || "");
        formData.append("rera", editedData.rera || "");
        formData.append("about", editedData.about || "");
        formData.append("type_id", editedData.type_id || "");
        formData.append("status_id", editedData.status_id || "");
        formData.append("locationmap_title", editedData.locationmap_title || "");
        formData.append("longitude", editedData.longitude || "");
        formData.append("latitude", editedData.latitude || "");
        formData.append("price", editedData.price || "");
        formData.append("max_price", editedData.max_price || "");
        formData.append("min_price", editedData.min_price || "");
        formData.append("rooms", editedData.rooms || "");
        formData.append("address", editedData.address || "");
        formData.append("location", editedData.location || "");
        formData.append("phone", editedData.phone || "");
        formData.append("email", editedData.email || "");
        formData.append("built_area", editedData.built_area || "");
        formData.append("area_unit", editedData.area_unit || "");
        formData.append("totalarea", editedData.totalarea || "");

        // Indicate target folder (optional)
        formData.append('folder', 'microsite');

        // Append all image files if they exist
        if (editedData.featured_image) {
            formData.append("featured_image", editedData.featured_image[0]);
        }
        if (editedData.masterplan_image?.[0]) {
            formData.append("masterplan_image", editedData.masterplan_image[0]);
        }
        if (editedData.location_image?.[0]) {
            formData.append("location_image", editedData.location_image[0]);
        }
        if (editedData.gallery_image?.length > 0) {
            editedData.gallery_image.forEach((img) => {
                formData.append("gallery_image", img);
            });
        }
        if (editedData.slider_image?.length > 0) {
            editedData.slider_image.forEach((img) => {
                formData.append("slider_image", img);
            });
        }
        if (editedData.adv_image?.[0]) {
            formData.append("adv_image", editedData.adv_image[0]);
        }
        if (editedData.mlogo?.[0]) {
            formData.append("mlogo", editedData.mlogo[0]);
        }

        // Dispatch API call
        if (editedData.md_id) {
            dispatch(EditMicrositeDetailById(editedData.md_id, formData));
        } else {
            dispatch(AddMicrositeDetailById(formData));
        }

        console.log("Edited Data:", editedData);
    };


    /*const handleSaveEdit = (editedData) => {
        if (editData.md_id) {
            dispatch(EditMicrositeDetailById(editData.md_id, editedData));
        } else {
            dispatch(AddMicrositeDetailById(editedData));
        }
    };*/

    const showDeleteConfirm = (record) => {
        confirm({
            title: "Are you sure you want to delete this microsite?",
            icon: <DeleteFilled />,
            content: "This action cannot be undone.",
            okText: "Yes",
            okType: "danger",
            cancelText: "No",
            onOk() {
                dispatch(DeleteMicrositeDetailById(record.md_id))
                    .then(() => dispatch(GetMicrositeDetailById()))
                    .catch((error) => console.error("Error:", error));
            },
        });
    };

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
        },
        {
            title: "Featured Image",
            key: "featured_image",
            render: (_, record) => {
                const isFullURL = record.featured_image?.startsWith("https://storage.googleapis.com/");
                const imageUrl = isFullURL
                    ? record.featured_image
                    : `${IMAGE_BASE_URL}fimage/${record.featured_image}`;

                return (
                    <Image
                        width={80}
                        src={imageUrl}
                        alt="Featured"
                        fallback="https://via.placeholder.com/80"
                    />
                );
            },
        },
        {
            title: "Location",
            dataIndex: "location",
        },
        {
            title: "Logo",
            key: "mlogo",
            render: (_, record) => {
                const isFullURL = record.mlogo?.startsWith("https://storage.googleapis.com/");
                const imageUrl = isFullURL
                    ? record.mlogo
                    : `${IMAGE_BASE_URL}mlogo/${record.mlogo}`;

                return (
                    <Image
                        width={80}
                        src={imageUrl}
                        alt="Logo"
                        fallback="https://via.placeholder.com/80"
                    />
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

    const customLabels = {
        micro_id: "Microsite Name",
        md_id: "Microsite Detail ID",
        builder_id: "Builder",
        am_id: "Amenity",
        status_id: "Property Status",
        type_id: "Property Type",
        bank_id: "Bank",
        legal_id: "Legal",
        locationmap_title: "Location Map",
        mlogo: "Logo",
    };

    const EditModal = ({ visible, data, onClose, onSave }) => {
        const [form] = Form.useForm();

        useEffect(() => {
            form.setFieldsValue(data);
        }, [data, form]);

        const handleSave = () => {
            form.validateFields()
                .then((values) => {
                    onSave(values);
                    form.resetFields();
                    onClose();
                })
                .catch((errorInfo) => {
                    console.error("Validation Failed:", errorInfo);
                });
        };

        useEffect(() => {
            if (data) {
                form.setFieldsValue({
                    ...data,
                    am_id: Array.isArray(data.am_id)
                        ? data.am_id.map((item) =>
                            typeof item === "object"
                                ? item
                                : { am_id: item, details: "" }
                        )
                        : [],
                });
            }
        }, [data, form]);

        return (
            <Modal
                title="Add/Edit Microsite"
                width={1000}
                open={visible}
                onCancel={onClose}
                footer={[
                    <Button key="cancel" onClick={onClose}>Cancel</Button>,
                    <Button key="save" type="primary" onClick={handleSave}>Save</Button>,
                ]}
            >
                <Form form={form} className="row" layout="vertical">
                    {Object.entries(data).map(([key, value]) =>
                        !["md_id", "createdAt", "__v"].includes(key) ? (
                            <Form.Item
                                key={key}
                                label={customLabels[key] || key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                                name={key}
                                className={
                                    ["am_id", "bank_id", "legal_id", "about"].includes(key)
                                        ? "col-md-12"
                                        : "col-md-6"
                                }
                            >
                                {key === "isActive" ? (
                                    <Switch />
                                ) : key === "am_id" ? (
                                    <Form.List name="am_id">
                                        {(fields, { add, remove }) => (
                                            <>
                                                {fields.map(({ key: fieldKey, name, ...restField }) => (
                                                    <div key={fieldKey} className="d-flex gap-3 mb-3">
                                                        <Form.Item
                                                            {...restField}
                                                            name={[name, "am_id"]}
                                                            rules={[{ required: true, message: "Missing amenity" }]}
                                                            className="w-50"
                                                        >
                                                            <Select
                                                                options={getAmenitieResponse?.map((item) => ({
                                                                    label: item.name,
                                                                    value: item.am_id,
                                                                }))}
                                                                placeholder="Select Amenity"
                                                                showSearch
                                                            />
                                                        </Form.Item>
                                                        <Form.Item
                                                            {...restField}
                                                            name={[name, "details"]}
                                                            rules={[{ required: true, message: "Missing details" }]}
                                                            className="w-50"
                                                        >
                                                            <Input placeholder="Enter details" />
                                                        </Form.Item>
                                                        <button type="button" onClick={() => remove(name)}>
                                                            Remove
                                                        </button>
                                                    </div>
                                                ))}
                                                <Form.Item>
                                                    <button type="button" onClick={() => add()}>
                                                        Add Amenity
                                                    </button>
                                                </Form.Item>
                                            </>
                                        )}
                                    </Form.List>
                                ) : key === "bank_id" ? (
                                    <Checkbox.Group
                                        options={getBankApprovalResponse?.map((item) => ({
                                            label: item.name,
                                            value: item.bank_id,
                                            className: "mb-3",
                                        }))}
                                    />
                                ) : key === "legal_id" ? (
                                    <Checkbox.Group
                                        options={getLegalApprovalResponse?.map((item) => ({
                                            label: item.name,
                                            value: item.legal_id,
                                            className: "mb-3",
                                        }))}
                                    />
                                ) : key === "about" ? (
                                    <Input.TextArea rows={6} />
                                ) : key === "builder_id" ? (
                                    <Select
                                        onChange={(val) => form.setFieldsValue({ [key]: val })}
                                        showSearch
                                        optionFilterProp="children"
                                        placeholder="Select Builder"
                                    >
                                        {getBuilderResponse?.map((item) => (
                                            <Select.Option
                                                key={item.name}
                                                value={item.builder_id}
                                            >
                                                {item.name}
                                            </Select.Option>
                                        ))}
                                    </Select>
                                ) : key === "type_id" ? (
                                    <Select
                                        onChange={(val) => form.setFieldsValue({ [key]: val })}
                                        showSearch
                                        optionFilterProp="children"
                                        placeholder="Select Property Type"
                                    >
                                        {getPropTypeResponse?.map((item) => (
                                            <Select.Option
                                                key={item.type}
                                                value={item.type_id}
                                            >
                                                {item.type}
                                            </Select.Option>
                                        ))}
                                    </Select>
                                ) : key === "status_id" ? (
                                    <Select
                                        placeholder="Select Property Status"
                                        onChange={(val) => form.setFieldsValue({ [key]: val })}
                                        showSearch
                                        optionFilterProp="children"
                                    >
                                        {getPropStatusResponse?.map((status) => (
                                            <Select.Option
                                                key={status.status}
                                                value={status.status_id}
                                            >
                                                {status.status}
                                            </Select.Option>
                                        ))}
                                    </Select>
                                ) : key === "micro_id" ? (
                                    <Select
                                        placeholder="Select Microsite"
                                        onChange={(val) => form.setFieldsValue({ [key]: val })}
                                        showSearch
                                        optionFilterProp="children"
                                    >
                                        {getMicrositeResponse?.map((microsite) => (
                                            <Select.Option
                                                key={microsite.micro_id}
                                                value={microsite.micro_id}
                                            >
                                                {microsite.name}
                                            </Select.Option>
                                        ))}
                                    </Select>
                                ) : ["featured_image", "masterplan_image", "location_image", "adv_image", "mlogo", "gallery_image", "slider_image"].includes(key) ? (
                                    <CustomImageUpload
                                        fieldName={key}
                                        value={value}
                                        form={form}
                                        multiple={["gallery_image", "slider_image"].includes(key)}
                                    />
                                ) : (
                                    <Input />
                                )}
                            </Form.Item>
                        ) : null
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
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <h3>Add Microsite Detail</h3>
                                <Button
                                    className={` button btn add_button  rounded-pill`}
                                    type="primary"
                                    onClick={() =>
                                        handleEdit({
                                            md_id: "",
                                            featured_image: "",
                                            micro_id: "",
                                            builder_id: "",
                                            am_id: [],              // Array
                                            bank_id: [],            // Array
                                            legal_id: [],           // Array
                                            rera: "",
                                            about: "",
                                            type_id: "",
                                            status_id: "",
                                            masterplan_image: "",
                                            locationmap_title: "",
                                            longitude: "",
                                            latitude: "",
                                            location_image: "",
                                            gallery_image: [],      // Array
                                            slider_image: [],       // Array
                                            adv_image: "",
                                            mlogo: "",
                                            price: "",
                                            max_price: "",
                                            min_price: "",
                                            rooms: "",
                                            address: "",
                                            location: "",
                                            phone: "",
                                            email: "",
                                            built_area: "",
                                            area_unit: "",
                                            totalarea: "",
                                        })
                                    }

                                >
                                    <i className="fa-solid fa-plus px-1" /> Add Microsite Detail
                                </Button>
                            </div>
                            <div className="table-responsive bg-white p-3">
                                <Table
                                    dataSource={getOrderResponse}
                                    columns={columns}
                                    rowKey="md_id"
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

export default MicrositeDetails;