import {useRef, useState} from 'react'
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
import Header from "./layout/Header.jsx";
import SideBar from "./layout/SideBar.jsx";
import Skill from "./pages/Skill.jsx";
import Experience from "./pages/Experience.jsx";
import Project from "./pages/Project.jsx";

function App() {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();
    const mainRef = useRef(null);

    return (
        <>
            <Header/>
            <SideBar />
            <main className={"bg-black text-white overflow-y-auto overscroll-none"} ref={mainRef}>
            <Profile/>
            </main>
            <Skill  />
            <Experience />
            <Project />

        </>
    )
}

export default App
