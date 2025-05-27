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
        console.log(currentScroll);
        console.log("타겟 높이",e.target.clientHeight);
        console.log("총 높이", e.target.scrollHeight);
        console.log("계산높이",currentScroll+(Math.floor(e.target.clientHeight)*0.1));
        console.log("???",currentScroll+Math.floor(mainRef.current.clientHeight));
        let targetTop = Math.floor(e.target.scrollTop);
        console.log("현 높이",targetTop);
        console.log("조건",targetTop>currentScroll+(Math.floor(e.target.clientHeight)*0.1));
        console.log("조건2",!((targetTop === Math.floor(e.target.scrollHeight)-Math.floor(e.target.clientHeight))));
        console.log("scrollLoad",scrollLoad);
        if(targetTop===currentScroll||targetTop===Math.floor(e.target.scrollHeight)-Math.floor(e.target.clientHeight)||targetTop<currentScroll+(Math.floor(e.target.clientHeight)*0.1)&&targetTop>currentScroll-(Math.floor(e.target.clientHeight)*0.1)) {
            setScrollLoad(false);
        }
        if(scrollLoad) {
            return;
        }
    if(targetTop>currentScroll+(Math.floor(e.target.clientHeight)*0.1)){
        if(!((targetTop === Math.floor(e.target.scrollHeight)-Math.floor(e.target.clientHeight)))){
            console.log("여기 안 들어옴?");
            setCurrentScroll(currentScroll+Math.floor(mainRef.current.clientHeight));
            setScrollLoad(true);
        }
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
