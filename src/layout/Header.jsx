import React from 'react';
import styles from '../css/header.module.css'

function Header(props) {
    return (
        <>
            <header className={"sticky top-0 font-sans bg-black shadow whitespace-nowrap"}>
                <div className={"flex flex-row gap-4 h-[10vh] justify-around items-center text-shadow-amber-900 text-shadow-2xs text-white"}>
                    <h3 className={styles.header_title+" font-bold"}>최준호</h3>
                    <ul className={styles.header_ul+" flex gap-3 "}>
                        <li onClick={()=>{location.href="#profile";}}>About me</li>
                        <li onClick={()=>{location.href="#skill";}}>Skill</li>
                        <li onClick={()=>{location.href="#experience";}}>Experience</li>
                        <li onClick={()=>{location.href="#project";}}>Project</li>
                    </ul>
                </div>
            </header>
        </>
    );
}

export default Header;