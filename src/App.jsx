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
    const [currentScroll,setCurrentScroll] = useState(0);
    const [scrollLoad,setScrollLoad] = useState(false);
    const mainRef = useRef(null);
    const checkScroll = (e)=>{
        if(e.target.scrollTop===currentScroll||e.target.scrollTop===e.target.scrollHeight-e.target.clientHeight){
            setCurrentScroll(e.target.scrollTop);
            setScrollLoad(false);
        }
        if(scrollLoad) {
            e.target.scrollTop = currentScroll;
            return;
        }
    if(e.target.scrollTop>currentScroll){
        mainRef.current.scrollTop = currentScroll+mainRef.current.clientHeight;
        setScrollLoad(true);

        if(!(e.target.scrollTop === (e.target.scrollHeight-e.target.clientHeight)))
        setCurrentScroll(currentScroll+mainRef.current.clientHeight)
    }else{
        mainRef.current.scrollTop = currentScroll-mainRef.current.clientHeight;
        setScrollLoad(true);
        if(e.target.scrollTop)
            if(currentScroll-mainRef.current.clientHeight>0)
        setCurrentScroll(currentScroll-mainRef.current.clientHeight);
        else setCurrentScroll(0);
    };

    }
    return (
        <>
            <Header mainRef={mainRef} />
            <SideBar />
            <main className={`${scrollLoad&&"change_screen"} h-[90vh] bg-obliq-orange text-white overflow-y-auto`} onScroll={checkScroll} ref={mainRef}>
            <Profile/>
            <Skill  />
            <Experience />
            <Project />
            </main>

        </>
    )
}

export default App
