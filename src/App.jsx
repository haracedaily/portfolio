import React, {useEffect, useRef, useState} from 'react'
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
    const [backConfig,setBackConfig] = useState("dark");
    const mainRef = useRef(null);
    const [configOpen,setConfigOpen] = useState(false);
    const currentPosition = useRef(0);
    useEffect(() => {
        const con = document.querySelector(".config-close");
        if(con)
            setTimeout(()=>{
                con.classList.add("none");
            },500);
        else{
            document.querySelector(".config-open").classList.remove("none");
        }
    },[configOpen])
    const checkScroll = (e)=>{
        // console.log(currentScroll);
        // console.log("타겟 높이",e.target.clientHeight);
        // console.log("총 높이", e.target.scrollHeight);
        // console.log("계산높이",currentScroll+(Math.floor(e.target.clientHeight)*0.1));
        // console.log("???",currentScroll+Math.floor(mainRef.current.clientHeight));
        let targetTop = Math.floor(e.target.scrollTop);
        // console.log("현 높이",targetTop);
        // console.log("조건",targetTop>currentScroll+(Math.floor(e.target.clientHeight)*0.1));
        // console.log("조건2",!((targetTop === Math.floor(e.target.scrollHeight)-Math.floor(e.target.clientHeight))));
        // console.log("scrollLoad",scrollLoad);
        if(targetTop===currentScroll||targetTop===Math.floor(e.target.scrollHeight)-Math.floor(e.target.clientHeight)||targetTop<currentScroll+(Math.floor(e.target.clientHeight)*0.1)&&targetTop>currentScroll-(Math.floor(e.target.clientHeight)*0.1)) {
            setScrollLoad(false);
        }
        if(scrollLoad) {
            return;
        }
        if(targetTop>currentScroll+(Math.floor(e.target.clientHeight)*0.1)){
            if(!((targetTop === Math.floor(e.target.scrollHeight)-Math.floor(e.target.clientHeight)))){
                // console.log("여기 안 들어옴?");
                setCurrentScroll(currentScroll+Math.floor(mainRef.current.clientHeight));
                setScrollLoad(true);
                currentPosition.current=Math.round(currentScroll/Math.floor(mainRef.current.clientHeight))+1;
            }
        }else if(targetTop<currentScroll-(Math.floor(e.target.clientHeight)*0.1)){
            setScrollLoad(true);
            if(targetTop)
                if(currentScroll-Math.floor(mainRef.current.clientHeight)>0){
            setCurrentScroll(currentScroll-Math.floor(mainRef.current.clientHeight));
            currentPosition.current=Math.round(currentScroll/Math.floor(mainRef.current.clientHeight))-1;
                }
            else {
                    setCurrentScroll(0);
                    currentPosition.current=0;
                }

            // scrollView.setFlingVelocity(0);
        }
    }


    useEffect(()=>{
        mainRef.current.scrollTop=currentScroll;
    },[currentScroll])
    return (
        <>
            <Header currentPosition={currentPosition} mainRef={mainRef} setCurrentScroll={setCurrentScroll} setScrollLoad={setScrollLoad} setBackConfig={setBackConfig} backConfig={backConfig}/>
            <SideBar />
            <main className={`${scrollLoad&&"change_screen"} h-[90vh] ${backConfig==="dark"?"bg-obliq-orange":"bg-obliq-white"} text-white overflow-y-auto`} onScroll={checkScroll} ref={mainRef}>
            <Profile backConfig={backConfig}/>
            <Skill backConfig={backConfig} />
            <Experience backConfig={backConfig}/>
            <Project backConfig={backConfig}/>
            </main>
            <div className={`${configOpen?"grid config-open":"config-close"} ${backConfig==="dark"?"border-white":"border-black"}`} style={{position:"fixed",bottom:"6.5rem",right:"2rem",gridTemplateColumns:"1fr 1fr",fontSize:"1rem",borderRadius:"5px",overflow:"hidden",zIndex:999999999}}>
                <div style={{padding:".3rem",paddingLeft:"0.6rem",paddingRight:"0.6rem",backgroundColor:"white",color:"black",cursor:"pointer"}} onClick={()=>{setBackConfig("light")}}>Light</div>
                <div style={{padding:".3rem",paddingRight:"0.6rem",paddingLeft:"0.6rem",backgroundColor:"black",color:"white",cursor:"pointer"}} onClick={()=>{setBackConfig("dark")}}>Dark</div>
            </div>
            <div style={{width:"45px",height:"45px",borderRadius:"50%",backgroundColor:"white",border:"1px solid black",position:"fixed",bottom:"3rem",right:"3rem",fontSize:"30px",cursor:"pointer",zIndex:999999999,display:"flex",justifyContent:"center",alignItems:"center"}} onClick={()=>{setConfigOpen(!configOpen)}}>
                <div>
                    ⚙
                </div>
            </div>
        </>
    )
}

export default App
