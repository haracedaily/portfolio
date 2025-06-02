import React, {useEffect, useState} from 'react';
import styles from '../css/header.module.css'

function Header(props) {
    const [mainHeight,setMainHeight] = useState();
    useEffect(()=>{
    setMainHeight(document.querySelector("main").clientHeight);
    },[])

console.log(props.currentPosition.current);
    return (
        <>
            <header className={"sticky top-0 font-sans bg-black shadow whitespace-nowrap"}>
                <div className={"flex flex-row gap-4 h-[10vh] justify-around items-center text-shadow-amber-900 text-shadow-2xs text-white"}>
                    <h3 className={styles.header_title+" font-bold"}>최준호</h3>
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