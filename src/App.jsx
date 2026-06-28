import React, {useEffect, useRef, useState} from 'react'
import './App.css'
import Profile from "./pages/Profile.jsx";
import Header from "./layout/Header.jsx";
import SideBar from "./layout/SideBar.jsx";
import Skill from "./pages/Skill.jsx";
import Experience from "./pages/Experience.jsx";
import Project from "./pages/Project.jsx";

function App() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [scrollLoad,setScrollLoad] = useState(false);
    const mainRef = useRef(null);
    const scrollTimerRef = useRef(null);
    const sectionBgClasses = ["bg-obliq-orange","bg-obliq-orange-2","bg-obliq-orange-3","bg-obliq-orange-4"];
    const mainBgClass = sectionBgClasses[Math.min(currentIndex, sectionBgClasses.length - 1)] || sectionBgClasses[0];
    const scrollToSection = (index) => {
        if (!mainRef.current) return;
        const sections = Array.from(mainRef.current.children).filter((node) => node.tagName === "SECTION");
        const target = sections[index];
        if (!target) return;
        setCurrentIndex(index);
        setScrollLoad(true);
        target.scrollIntoView({behavior: "smooth", block: "start"});
    };

    const updateActiveSection = () => {
        if (!mainRef.current) return;
        const sections = Array.from(mainRef.current.children).filter((node) => node.tagName === "SECTION");
        if (!sections.length) return;
        const viewportCenter = mainRef.current.scrollTop + mainRef.current.clientHeight / 2;
        let nextIndex = 0;
        let minDistance = Number.POSITIVE_INFINITY;

        sections.forEach((section, index) => {
            const distance = Math.abs(section.offsetTop + section.offsetHeight / 2 - viewportCenter);
            if (distance < minDistance) {
                minDistance = distance;
                nextIndex = index;
            }
        });

        setCurrentIndex((prev) => (prev === nextIndex ? prev : nextIndex));
    };

    const checkScroll = () => {
        if (scrollTimerRef.current) {
            window.clearTimeout(scrollTimerRef.current);
        }
        scrollTimerRef.current = window.setTimeout(updateActiveSection, 80);
    };

    useEffect(() => {
        if (!scrollLoad) return;
        const timer = window.setTimeout(() => setScrollLoad(false), 220);
        return () => window.clearTimeout(timer);
    }, [scrollLoad]);

    useEffect(() => {
        return () => {
            if (scrollTimerRef.current) {
                window.clearTimeout(scrollTimerRef.current);
            }
        };
    }, []);
    return (
        <>
            <Header currentIndex={currentIndex} scrollToSection={scrollToSection} />
            <SideBar />
            <main className={`${scrollLoad&&"change_screen"} h-[90vh] ${mainBgClass} text-white overflow-y-auto`} onScroll={checkScroll} ref={mainRef}>
                <section className="section-block"><Profile /></section>
                <section className="section-block"><Skill /></section>
                <section className="section-block"><Experience /></section>
                <section className="section-block"><Project /></section>
            </main>
        </>
    )
}

export default App
