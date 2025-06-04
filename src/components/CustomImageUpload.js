import React, { useEffect, useState } from "react";
import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const CustomImageUpload = ({ fieldName, value, form, multiple }) => {
    const [fileList, setFileList] = useState(() => {
        if (!value) return [];
        if (Array.isArray(value)) {
            return value.map((url, index) => ({
                uid: `-${index}`,
                name: `image-${index}`,
                status: "done",
                url,
            }));
        }
        return [
            {
                uid: "-1",
                name: "image",
                status: "done",
                url: value,
            },
        ];
    });

    const handleChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);

        const files = newFileList.map(file =>
            file.originFileObj || file.url
        );

        form.setFieldsValue({
            [fieldName]: multiple ? files : files[0] || null,
        });
    };

    useEffect(() => {
        const files = fileList.map(file =>
            file.originFileObj || file.url
        );
        form.setFieldsValue({
            [fieldName]: multiple ? files : files[0] || null,
        });
    }, [fileList]);

    return (
        <>
            <Upload
                listType="picture"
                accept=".jpg,.jpeg,.png"
                multiple={multiple}
                fileList={fileList}
                customRequest={({ file, onSuccess }) => {
                    setTimeout(() => onSuccess("ok"), 0);
                }}
                onChange={handleChange}
            >
                <Button icon={<UploadOutlined />}>
                    Upload {multiple ? "Images" : "Image"}
                </Button>
            </Upload>

            {fileList.length > 0 && (
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 10,
                        marginTop: 16,
                    }}
                >
                    {fileList.map((file, index) => (
                        <img
                            key={index}
                            src={
                                file.originFileObj
                                    ? URL.createObjectURL(file.originFileObj)
                                    : file.url
                            }
                            alt={`preview-${index}`}
                            style={{
                                width: 100,
                                height: 100,
                                objectFit: "cover",
                                borderRadius: 8,
                                border: "1px solid #ccc",
                            }}
                        />
                    ))}
                </div>
            )}
        </>
    );
};

export default CustomImageUpload;
