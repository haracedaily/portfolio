import {useState} from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profile from "./pages/Profile.jsx";
import {Layout, Menu, Button, theme, Flex} from "antd";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import Main from "./layout/Main.jsx";

function App() {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    return (
        <>
            <Layout>
                <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="demo-logo-vertical"/>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: <UserOutlined/>,
                                label: 'profile',
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
                </Layout.Sider>
                <Layout style={{height: '100vh', maxHeight: '100vh'}}>
                    <Layout.Header style={{padding: 0, background: colorBgContainer}}>

                        <Flex direction="row" alignitems="center" gap="1rem">
                            <Button
                                type="text"
                                icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                                onClick={() => setCollapsed(!collapsed)}
                                style={{
                                    fontSize: '16px',
                                    width: 64,
                                    height: 64,
                                }}
                            />
                            <h4>Portfolio</h4>
                        </Flex>

                    </Layout.Header>
                    <Layout.Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 500,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Main></Main>
                    </Layout.Content>
                </Layout>
            </Layout>
        </>
    )
}

export default App
