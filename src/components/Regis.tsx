import React, { useEffect, useState } from "react";
import reactLogo from "@assets/react.svg";
import viteLogo from "/vite.svg";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { regisSlice, updateFormRegis } from "@store/slice/regisSlice";
import { RootState } from "@store/store";

const Regis: React.FC = () => {
  const count = useSelector((state: RootState) => state.regis.value);
  const dispatch = useDispatch();
  const next: FormProps<regisSlice>["onFinish"] = (values) => {
    console.log(values);
    dispatch(updateFormRegis(values));
  };



  return (
    <>
      <div className="flex items-center justify-start h-screen bg-black ">
        <div className=" h-[500px] bg- p-20 flex-1 h-screen">
          <div className="flex p-5  justify-center">
            <a
              href="http://vitejs.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-5"
            >
              <img
                src={viteLogo}
                alt="Vite Logo"
                className="w-[90px] h-[90px]"
              />
            </a>
            <a
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={reactLogo}
                alt="React Logo"
                className="w-[90px] h-[90px]"
              />
            </a>
          </div>
          <h1 className="font-bold text-center text-3xl text-white mb-10">
            Vite + React
          </h1>
          <Form
            className="w-[300px] m-auto [&_label]:!text-white "
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={next}
            autoComplete="off"
          >
            <Form.Item<regisSlice>
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item<regisSlice>
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input valid email!",
                  type: "email",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item<regisSlice>
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-[100%] bg-gray-700"
              >
                Register
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div className=" bg-white  p-5 flex-1 h-[600px] font-bold">
          <h1 className="mt-10 text-xl">ข้อมูลจาก Reducer</h1>
     
          <h1>
            usrname : {" "}
            {count.username.length ? count.username : "ไม่มีข้อมูล"}
            </h1>
          <h1>email: {count.email.length ? count.email : "ไม่มีข้อมูล"}</h1>
          <h1>password: {count.password.length ? count.password : "ไม่มีข้อมูล"}</h1>
        </div>
      </div>
    </>
  );
};

export default Regis;
