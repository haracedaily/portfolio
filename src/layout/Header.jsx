import React from 'react';
import styles from '../css/header.module.css'

function Header(props) {
    return (
        <>
            <header className={"sticky top-0 font-sans bg-black shadow whitespace-nowrap"}>
                <div className={"flex flex-row gap-4 h-[10vh] justify-around items-center text-shadow-fuchsia-500 text-shadow-2xs text-white"}>
                    <h3 className={styles.header_title+" font-bold"}>최준호</h3>
                    <ul className={styles.header_ul+" flex gap-3 "}>
                        <li>About me</li>
                        <li>Skill</li>
                        <li>Experience</li>
                        <li>Project</li>
                    </ul>
                </div>
            </header>
        </>
    );
}

export default Header;