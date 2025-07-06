import React, {useEffect, useState} from 'react';
import styles from '../css/header.module.css'

function Header(props) {
    const [mainHeight,setMainHeight] = useState();

    useEffect(()=>{
    setMainHeight(document.querySelector("main").clientHeight);
    },[])


    return (
        <>
            <header className={`sticky top-0 font-sans shadow whitespace-nowrap ${props.backConfig==="dark"?"bg-black white":"bg-white black"}`}>
                <div className={"flex flex-row gap-4 h-[10vh] justify-around items-center"}>
                    <h3 className={styles.header_title+" font-bold"} style={{cursor:"pointer"}} onClick={()=>{props.setCurrentScroll(0);props.setScrollLoad(true);props.currentPosition.current=0;}}>최준호</h3>
                    <ul className={styles.header_ul+" flex gap-3 "}>
                        <li className={props.currentPosition.current===0?styles.choose_li:""} onClick={()=>{props.setCurrentScroll(0);props.setScrollLoad(true);props.currentPosition.current=0;}}>About me</li>
                        <li className={props.currentPosition.current===1?styles.choose_li:""} onClick={()=>{props.setCurrentScroll(mainHeight);props.setScrollLoad(true);props.currentPosition.current=1;}}>Skill</li>
                        <li className={props.currentPosition.current===2?styles.choose_li:""} onClick={()=>{props.setCurrentScroll(Math.floor(mainHeight*2));props.setScrollLoad(true);props.currentPosition.current=2;}}>Experience</li>
                        <li className={props.currentPosition.current===3?styles.choose_li:""} onClick={()=>{props.setCurrentScroll(Math.floor(mainHeight*3));props.setScrollLoad(true);props.currentPosition.current=3;}}>Project</li>
                    </ul>

                </div>
            </header>
        </>
    );
}

export default Header;