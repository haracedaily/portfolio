import React, {useEffect, useState} from 'react';
import styles from '../css/header.module.css'

function Header(props) {
    const [mainHeight,setMainHeight] = useState();
    const [configOpen,setConfigOpen] = useState(false);
    useEffect(()=>{
    setMainHeight(document.querySelector("main").clientHeight);
    },[])
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

    return (
        <>
            <header className={`sticky top-0 font-sans shadow whitespace-nowrap ${props.backConfig==="dark"?"bg-black white":"bg-white black"}`}>
                <div className={"flex flex-row gap-4 h-[10vh] justify-around items-center text-shadow-amber-900 text-shadow-2xs"}>
                    <h3 className={styles.header_title+" font-bold"} style={{cursor:"pointer"}} onClick={()=>{props.setCurrentScroll(0);props.setScrollLoad(true);props.currentPosition.current=0;}}>최준호</h3>
                    <ul className={styles.header_ul+" flex gap-3 "}>
                        <li className={props.currentPosition.current===0?styles.choose_li:""} onClick={()=>{props.setCurrentScroll(0);props.setScrollLoad(true);props.currentPosition.current=0;}}>About me</li>
                        <li className={props.currentPosition.current===1?styles.choose_li:""} onClick={()=>{props.setCurrentScroll(mainHeight);props.setScrollLoad(true);props.currentPosition.current=1;}}>Skill</li>
                        <li className={props.currentPosition.current===2?styles.choose_li:""} onClick={()=>{props.setCurrentScroll(Math.floor(mainHeight*2));props.setScrollLoad(true);props.currentPosition.current=2;}}>Experience</li>
                        <li className={props.currentPosition.current===3?styles.choose_li:""} onClick={()=>{props.setCurrentScroll(Math.floor(mainHeight*3));props.setScrollLoad(true);props.currentPosition.current=3;}}>Project</li>
                    </ul>
                    <div className={`${configOpen?"grid config-open":"config-close"} ${props.backConfig==="dark"?"border-white":"border-black"}`} style={{position:"fixed",bottom:"6.5rem",right:"2rem",gridTemplateColumns:"1fr 1fr",fontSize:"1rem",borderRadius:"5px",overflow:"hidden"}}>
                        <div style={{padding:".3rem",paddingRight:"1rem",backgroundColor:"white",color:"black",cursor:"pointer"}} onClick={()=>{props.setBackConfig("light")}}>Light</div>
                        <div style={{padding:".3rem",paddingLeft:"1rem",backgroundColor:"black",color:"white",cursor:"pointer"}} onClick={()=>{props.setBackConfig("dark")}}>Dark</div>
                    </div>
                    <div style={{position:"fixed",bottom:"3rem",right:"3rem",fontSize:"2rem",cursor:"pointer"}} onClick={()=>{setConfigOpen(!configOpen)}}>
                        ⚙
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;