import React, {useState} from 'react';
import styles from '../css/header.module.css'

function Header({currentIndex, scrollToSection}) {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenu = (index) => {
        scrollToSection(index);
        setMenuOpen(false);
    };

    return (
        <>
            <header className="sticky top-0 z-50 overflow-visible border-b border-orange-500/30 bg-black/90 font-sans text-white shadow-lg whitespace-nowrap backdrop-blur">
                <div className={"flex h-[10vh] flex-row items-center justify-between gap-4 px-4"}>
                    <h3 className={styles.header_title+" font-bold"} style={{cursor:"pointer"}} onClick={()=>{scrollToSection(0);setMenuOpen(false);}}>CJH's</h3>

                    <button
                        className={`${styles.menuButton} hidden max-[899px]:inline-flex`}
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label="Toggle menu"
                    >
                        <span className="text-xl">☰</span>
                    </button>

                    <ul className={`${styles.header_ul} flex max-[899px]:hidden gap-3 `}>
                        <li className={currentIndex===0?styles.choose_li:""} onClick={()=>{handleMenu(0);}}>About me</li>
                        <li className={currentIndex===1?styles.choose_li:""} onClick={()=>{handleMenu(1);}}>Skill</li>
                        <li className={currentIndex===2?styles.choose_li:""} onClick={()=>{handleMenu(2);}}>Experience</li>
                        <li className={currentIndex===3?styles.choose_li:""} onClick={()=>{handleMenu(3);}}>Project</li>
                    </ul>
                </div>

                {menuOpen && (
                    <div className={`${styles.mobileMenu} flex flex-col gap-2 border-t border-orange-500/20 bg-black/95 px-4 py-3 min-[900px]:hidden`}>
                        <button className={`${styles.mobileMenuButton} rounded-xl border border-orange-500/20 bg-orange-500/10 px-3 py-2 text-left text-white`} onClick={() => handleMenu(0)}>About me</button>
                        <button className={`${styles.mobileMenuButton} rounded-xl border border-orange-500/20 bg-orange-500/10 px-3 py-2 text-left text-white`} onClick={() => handleMenu(1)}>Skill</button>
                        <button className={`${styles.mobileMenuButton} rounded-xl border border-orange-500/20 bg-orange-500/10 px-3 py-2 text-left text-white`} onClick={() => handleMenu(2)}>Experience</button>
                        <button className={`${styles.mobileMenuButton} rounded-xl border border-orange-500/20 bg-orange-500/10 px-3 py-2 text-left text-white`} onClick={() => handleMenu(3)}>Project</button>
                    </div>
                )}
            </header>
        </>
    );
}

export default Header;