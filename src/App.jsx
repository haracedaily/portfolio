import {useEffect, useRef, useState} from 'react'
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
        let targetTop = Math.floor(e.target.scrollTop);
        if(targetTop===Math.floor(currentScroll)||targetTop===Math.floor(e.target.scrollHeight)-Math.floor(e.target.clientHeight)){
            setScrollLoad(false);
        }
        if(scrollLoad) {
            return;
        }
    if(targetTop>currentScroll+(Math.floor(e.target.clientHeight)*0.1)){
        setScrollLoad(true);
        if(! ((targetTop === Math.floor(e.target.scrollHeight)-Math.floor(e.target.clientHeight))))
        setCurrentScroll(currentScroll+Math.floor(mainRef.current.clientHeight));
    }else if(targetTop<currentScroll-(Math.floor(e.target.clientHeight)*0.1)){
        setScrollLoad(true);
        if(targetTop)
            if(currentScroll-Math.floor(mainRef.current.clientHeight)>0){
        setCurrentScroll(currentScroll-Math.floor(mainRef.current.clientHeight));
            }
        else setCurrentScroll(0);
    };
    }

    useEffect(()=>{
        mainRef.current.scrollTop=currentScroll;
    },[currentScroll])
    return (
        <>
            <Header mainRef={mainRef} setCurrentScroll={setCurrentScroll} setScrollLoad={setScrollLoad}/>
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
