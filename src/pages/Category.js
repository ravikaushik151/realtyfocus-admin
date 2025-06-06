import React, { useState, useEffect, useRef } from "react";
import { Table, Button, Modal, Switch, Form, Input, Upload } from "antd";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import constant from "../constant/constant";
import {
  fetchStoreCategory,
  EditCategoryData,
  AddCategoryData,
  DeleteCategoryData,
} from "../reducer/thunks";
import { UploadOutlined } from "@ant-design/icons";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import { DeleteFilled } from '@ant-design/icons';


const { Dragger } = Upload;
const { confirm } = Modal;

const Categories = () => {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const showDeleteConfirm = (record) => {
    confirm({
      title: 'Are you sure delete this task?',
      icon: <DeleteFilled />,
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        console.log('OK');
        dispatch(DeleteCategoryData(record._id))
          .then(() => dispatch(fetchStoreCategory(1)))
          .catch(error => console.error('Error:', error));
      },
      onCancel() {
        console.log('Cancel');
      },
    });

  }

  const EditModal = ({ visible, data, onClose, onSave }) => {
    const [form] = Form.useForm();
  
    const handleSave = () => {
      form
        .validateFields()
        .then((values) => {
          onSave(values);
          form.resetFields();
          onClose();
        })
        .catch((errorInfo) => {
          console.log("Validation Failed:", errorInfo);
        });
    };
  
    return (
      <Modal
        title="Add Categorie"
        visible={visible}
        onCancel={onClose}
        width={1000}
        footer={[
          <Button key="cancel" onClick={onClose}>
            Cancel
          </Button>,
          <Button key="save" type="primary" onClick={handleSave}>
            Save
          </Button>,
        ]}
      >
        <Form form={form} initialValues={data} className="col-md-12 row">
          {Object.entries(data).map(
            ([key, value]) =>
              !["_id", "createdBy", "createdAt", "__v", "lang"].includes(key) && (
                <Form.Item
                  className="col-md-4"
                  key={key}
                  labelCol={{ span: 24 }}
                  label={key.charAt(0).toUpperCase() + key.slice(1)}
                  name={key}
                >
                  {key === "isActive" ? (
                    <Switch
                      size="small"
                      checked={value}
                      onChange={(checked) => form.setFieldsValue({ [key]: checked })}
                    />
                  ) : ["imageUrl", "category_img_desktop", "category_img_mobile"].includes(key) ? (
                    <CustomImageUpload fieldName={key} value={value} form={form} />
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
  

  const CustomImageUpload = ({ fieldName, value, form }) => {
    const [selectedFiles, setSelectedFiles] = useState(
      value !== "" ? [{ url: value }] : []
    );
  
    const handleFileChange = ({ fileList }) => {
      if (fileList.length === 0) {
        form.setFieldsValue({
          [fieldName]: null,
        });
      } else {
        const selectedFile = fileList[0]?.originFileObj;
  
        console.log("Selected File:", selectedFile);
  
        const imageUrl = selectedFile
          ? URL.createObjectURL(selectedFile)
          : value;
  
        form.setFieldsValue({ [fieldName]: imageUrl });
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
          customRequest={({ file, onSuccess }) => {
            setTimeout(() => {
              onSuccess("ok");
            }, 0);
          }}
          onChange={handleFileChange}
        >
          <Button icon={<UploadOutlined />}>Upload Image</Button>
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
  

  const dispatch = useDispatch();
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editData, setEditData] = useState([]);

  const { loading: getOrderUserLoading, storelist: getOrderResponse } =
    useSelector((state) => state.storelist);

  const { loading: EditcategoryLoading, Editcategory: EditcategoryResponse } =
    useSelector((state) => state.storelist);

  const handleToggleActive = (productId, newStatus) => {
    console.log(`Toggle Active for Product ${productId} to ${newStatus}`);
  };

  useEffect(() => {
    dispatch(fetchStoreCategory());
    if (EditcategoryResponse) {
      setEditData([]);
      setEditModalVisible(false);
    }
  }, [EditcategoryResponse]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Image",
      dataIndex: "imageUrl",
      key: "imageUrl",
      render: (imageUrl) => (
        <img
          src={`${imageUrl}`}
          alt="Product Image"
          style={{ maxWidth: "50px", maxHeight: "50px" }}
        />
      ),
    },
    {
      title: "Active",
      dataIndex: "isActive",
      key: "isActive",
      render: (isActive, record) => (
        <Switch
          checked={isActive}
          size="small"
          onChange={() => handleToggleActive(record._id, !isActive)}
        />
      ),
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (createdAt) => moment(createdAt).format("DD-MM-YYYY"),
    },
    {
      title: "Actions",
      key: "actions",
      render: (record) => (
        <>
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
            {" "}
            <i className="fa-solid fa-trash-can px-1" />
          </Button>
        </>
      ),
    },
  ];

  const handleViewMore = (record) => {
    setEditData(record);
    setEditModalVisible(true);
  };

  const handleModalCancel = () => {
    setEditModalVisible(false);
  };

  const handleEdit = (record) => {
    setEditData(record);
    setEditModalVisible(true);
  };

  const handleSaveEdit = (editedData) => {
    const formData = new FormData();
    formData.append("name", editedData.name);
    formData.append("description", editedData.description);
    formData.append("createdBy", localStorage.getItem("userId"));
    formData.append("lang", "IND");
  
    // Append image files if they are present
    if (editedData.imageUrl) {
      formData.append("imageFile", editedData.imageUrl[0]);
    }
    if (editedData.category_img_desktop) {
      formData.append("ImgDesktop", editedData.category_img_desktop[0]);
    }
    if (editedData.category_img_mobile) {
      formData.append("ImgMobile", editedData.category_img_mobile[0]);
    }
  
    console.log("Form Data:", formData);
  
    if (editData._id) {
      dispatch(EditCategoryData(editData._id, formData));
    } else {
      dispatch(AddCategoryData(editData._id, formData));
    }
  
    console.log("Edited Data:", editedData);
  };
  

  return (
    <>
      <Header />

      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <div className="col-md-10 bg-color-main">
            <div className="main px-lg-5 px-2 my-5">
              <div className="col-md-6 my-2 col-12">
                <p className="fs-3 fw-semibold text-start col-md-6 col-12">
                  {" "}
                  Categories
                </p>
              </div>
              <div className="row col-md-12 d-flex justify-content-between bg-white p-4">

                <div className="col-md-4">
                  <form
                    className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
                    role="search"
                  >
                    <div className="input-group flex-nowrap bg-secondary-subtle  rounded-pill">
                      <span
                        className="input-group-text border-0 bg-secondary-subtle rounded-pill"
                        id="addon-wrapping"
                      >
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

                <div className="col-md-5 col-12   bg-md-transparent ">
                  {/* <div className="text-dark  mt-0 text-center text-md-center ">
                    <div className="text-center text-md-center ">
                      <button className="action_button">
                        <i className="fa-solid fa-download" /> Export

                      </button>
                    </div>

                  </div> */}

                </div>
                <div className="col-md-3 text-end ">
                  <Link
                    className={` button btn add_button  rounded-pill`}
                    onClick={() =>
                      handleEdit({ name: "", description: "", imageUrl: "" ,category_img_desktop:"",category_img_mobile:""})
                    }                    >
                    <i className="fa-solid fa-plus px-1" />
                    Add Categories
                  </Link>
                </div>
              </div>




              <div className="row">
                <div className="table-responsive py-3 bg-white mt-3">
                  <Table
                    dataSource={getOrderResponse?.categories}
                    columns={columns}
                    pagination={{
                      pageSize: 10,
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

      <Footer />
    </>
  );
};

export default Categories;
