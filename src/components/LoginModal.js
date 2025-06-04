import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { LoginUserData } from "./../reducer/thunks";
import { useAuth } from "../auth/auth";

const LoginModal = ({ visible, onClose }) => {
  const dispatch = useDispatch();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const { loading, error, loginData } = useSelector(
    (state) => state.loginData
  );

  useEffect(() => {
    if (loginData) {
      login(loginData.user); // Save to context/localStorage

      if (loginData.user.role === "superadmin") {
        message.success("Super Admin logged in successfully", 3);
      } else {
        message.success("Login successful", 3);
      }

      onClose(); // Close modal
      navigate("/"); // Redirect to home or dashboard
    }

    if (error) {
      if (error.message) {
        message.error(error.message, 5);
      } else {
        message.error("Login failed. Please try again.", 5);
      }
    }
  }, [loginData, error, login, onClose, navigate]);

  const onFinish = (values) => {
    dispatch(LoginUserData(values));
  };

  return (
    <div className="p-3">
      <h4 className="text-center font-weight-bold head-control mt-4">
        Admin Login
      </h4>

      <Form
        form={form}
        requiredMark={false}
        onFinish={onFinish}
        layout="vertical"
        initialValues={{ email: "", password: "" }}
      >
        <Form.Item
          name="email"
          label="Email"
          labelCol={{ span: 24 }}
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input className="form-control text-input" placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          labelCol={{ span: 24 }}
          rules={[
            { required: true, message: "Please enter your password" },
            { min: 6, message: "Password must be at least 6 characters" },
          ]}
        >
          <Input.Password
            className="form-control text-input custom-password-input"
            placeholder="Password"
            style={{ backgroundColor: "transparent" }}
          />
        </Form.Item>

        <div className="mb-3">
          <p className="text-start p-texts mb-4 mt-2">Forgot Password ?</p>
        </div>

        <div className="d-flex justify-content-center pt-2">
          <Button
            type="primary"
            className="btn button w-75 h-25"
            htmlType="submit"
            loading={loading}
          >
            Login
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default LoginModal;
