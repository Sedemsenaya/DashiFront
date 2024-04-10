import React, { useState, useEffect } from 'react';
import { Button, Form, Input, Modal, Radio } from 'antd';
import {PlusOutlined} from "@ant-design/icons";
import axios from "axios";
import Listi from "./Listi";
const CollectionCreateForm = ({ initialValues, onFormInstanceReady }) => {
  const [form] = Form.useForm();
  useEffect(() => {
    onFormInstanceReady(form);
  }, []);
    return (
        <Form layout="vertical" form={form} name="form_in_modal" initialValues={initialValues}>
            <Form.Item
                name="name"
                label="Name"
                rules={[
                    {
                        required: true,
                        message: 'Please input your full Name!',
                    },
                ]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                name="email"
                label="Email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Email!',
                    },
                ]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                name="age"
                label="Age"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Age!',
                    },
                ]}
                style={{'width':100}}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                name="website"
                label="Link"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Website Link!',
                    },
                ]}
            >
                <Input/>
            </Form.Item>
            <Form.Item name="introduction" label="Introduction">
                <Input type="textarea"/>
            </Form.Item>
        </Form>
    );
};
const CollectionCreateFormModal = ({ open, onCreate, onCancel, initialValues }) => {
  const [formInstance, setFormInstance] = useState();
  return (
    <Modal
      open={open}
      title="Create a new collection"
      okText="Create"
      cancelText="Cancel"
      okButtonProps={{
        autoFocus: true,
      }}
      onCancel={onCancel}
      destroyOnClose
      onOk={async () => {
        try {
          const values = await formInstance?.validateFields();
          formInstance?.resetFields();
          onCreate(values);
        } catch (error) {
          console.log('Failed:', error);
        }
      }}
    >
      <CollectionCreateForm
        initialValues={initialValues}
        onFormInstanceReady={(instance) => {
          setFormInstance(instance);
        }}
      />
    </Modal>
  );
};
const App = () => {
  const [formValues, setFormValues] = useState();
  const [open, setOpen] = useState(false);
  const onCreate = (values) => {
    console.log('Received values of form: ', values);
      axios.post('http://localhost:5000/push', values)
          .then(res => {
              console.log(res.data)
              setFormValues(values)
          })
          .catch(err => {
              console.error('Error: ', err)
          });
    // setFormValues(values);
    setOpen(false);
  };
    return (
        <>
            <Button type="primary" onClick={() => setOpen(true)}>
                <div className="row">
                    <div className="col-sm-1 gx-0">
                        <PlusOutlined/>
                    </div>
                    <div className="col-sm-1">
                        Add Member
                    </div>
                </div>
            </Button>
            <pre>{JSON.stringify(formValues, null, 2)}</pre>

            <CollectionCreateFormModal
                open={open}
                onCreate={onCreate}
                onCancel={() => setOpen(false)}
                initialValues={{
                    modifier: 'public',
                }}
            />
        </>
    );
};
export default App;