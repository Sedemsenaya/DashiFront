import React, { useState } from 'react';
import {
    AppstoreOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import {Layout, Menu, theme, Button} from 'antd';
import InputH from "./InputH";
import Slider from "./Slider";
import Cardi from "./Cardi";
import InCard from "./InCard";
import {Todo} from "./Todo"
import {useNavigate} from "react-router-dom";
import AppRoutes from "../AppRoutes";



const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate()

    return (

        <Layout style={{minHeight: '100vh'}}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical"/>
                <Menu
                    theme="dark"
                    mode="inline"
                    // defaultSelectedKeys={['1']}
                    onClick = { (item) => {
                     navigate(item.key)
                    }}
                    items={[
                        {
                            key: '/',
                            icon: <AppstoreOutlined/>,
                            label: 'Dashboard',

                        },
                        {
                            key: '/todo',
                            icon: <UserOutlined/>,
                            label: 'Todo',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined/>,
                            label: 'nav 2',
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined/>,
                            label: 'nav 3',
                        },
                    ]}
                />

            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                        height: '45px',
                        display: 'flex'
                    }}
                >


                    <div className="container text-center">
                        <div className="row">
                            <div className="col-5">
                                <Button
                                    type="text"
                                    icon={collapsed ? <MenuUnfoldOutlined style={{fontSize: '24px'}}/> :
                                        <MenuFoldOutlined style={{fontSize: '24px'}}/>}
                                    onClick={() => setCollapsed(!collapsed)}
                                    style={{
                                        fontSize: '16px',
                                        width: 45,
                                        height: 45,
                                        display: 'flex',
                                        padding: '10px'
                                    }}
                                />
                            </div>
                            <div className="col-5">
                                <InputH/>
                            </div>
                            <div className="col-2">

                            </div>
                        </div>
                    </div>

                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                        backgroundColor:'aliceblue'
                    }}
                >
                    <AppRoutes/>
                    {/*<InCard/>*/}
                    {/*<br/>*/}
                    {/*<Cardi/>*/}
                    {/*<Slider/>*/}
                    {/*    Content*/}


                </Content>
            </Layout>
        </Layout>

    );
};

export default App;
