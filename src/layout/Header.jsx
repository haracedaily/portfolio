import React, {useEffect, useState} from 'react';
import styles from '../css/header.module.css'

function Header(props) {
    const [mainHeight,setMainHeight] = useState();
    useEffect(()=>{
    setMainHeight(document.querySelector("main").clientHeight);
    },[])
    console.log(mainHeight);

    return (
        <>
            <header className={"sticky top-0 font-sans bg-black shadow whitespace-nowrap"}>
                <div className={"flex flex-row gap-4 h-[10vh] justify-around items-center text-shadow-amber-900 text-shadow-2xs text-white"}>
                    <h3 className={styles.header_title+" font-bold"}>최준호</h3>
                    <ul className={styles.header_ul+" flex gap-3 "}>
                        <li onClick={()=>{props.setCurrentScroll(0);props.setScrollLoad(true);}}>About me</li>
                        <li onClick={()=>{props.setCurrentScroll(mainHeight);props.setScrollLoad(true);}}>Skill</li>
                        <li onClick={()=>{props.setCurrentScroll(Math.floor(mainHeight*2));props.setScrollLoad(true);}}>Experience</li>
                        <li onClick={()=>{props.setCurrentScroll(Math.floor(mainHeight*3));props.setScrollLoad(true);}}>Project</li>
                    </ul>
                </div>
            </header>
        </>
    );
}

export default Header;