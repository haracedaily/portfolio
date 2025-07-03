import React from 'react';
import styles from '../css/skill.module.css'

function Skill(props) {
    return (
        <>
            <div id={"skill"} className={`flex flex-col gap-4 justify-center items-center ${props.backConfig==="dark"?"white":"black"}`}>
                <div>
                    <h3 className={styles.skill_title+" text-3xl font-bold"}>Skill's</h3>
                </div>
                <div style={{padding:"1rem"}} className={"flex flex-col gap-6 rounded-2xl border-[1px] border-amber-500"}>
                    <div className={"flex flex-col gap-4 shadow-2xs"}>
                        <h3 className={"font-bold text-3xl"}>Front-End</h3>
                        <div className={"grid grid-cols-[1fr_1fr_1fr_1fr] gap-2 skills"}>
                            <h3 className={"bg-amber-600"}>HTML</h3>
                            <h3 className={"bg-blue-400"}>CSS</h3>
                            <h3 className={"bg-yellow-400"}>JavaScript</h3>
                            <h3 className={"bg-blue-200"}>React.js</h3>
                            <h3 className={"bg-blue-500"}>JQuery</h3>
                            <h3 className={"bg-cyan-400"}>TailwindCss</h3>
                            <h3 className={"bg-blue-600"}>Antd</h3>
                        </div>
                    </div>

                    <div className={"flex flex-col gap-4 shadow-2xs"}>
                        <h3 className={"font-bold text-3xl"}>Back-End</h3>
                        <div className={"grid grid-cols-[1fr_1fr_1fr_1fr] gap-2 skills"}>
                            <h3 className={"bg-green-300"}>Node.js</h3>
                            <h3 className={"bg-green-500"}>Express.js</h3>
                            <h3 className={"bg-green-700"}>Spring</h3>
                            <h3 className={"bg-green-800"}>Spring Boot</h3>
                            <h3 className={"bg-cyan-800"}>Java</h3>
                        </div>
                    </div>

                    <div className={"flex flex-col gap-4 shadow-2xs"}>
                        <h3 className={"font-bold text-3xl"}>Database</h3>
                        <div className={"grid grid-cols-[1fr_1fr_1fr_1fr] gap-2 skills"}>
                            <h3 className={"bg-cyan-900"}>MySQL</h3>
                            <h3 className={"bg-red-700"}>MsSQL</h3>
                            <h3 className={"bg-red-800"}>ORACLE</h3>
                            <h3 className={"bg-cyan-200"}>SUPABASE</h3>
                            <h3 className={"bg-cyan-800"}>MariaDB</h3>
                        </div>
                    </div>

                    <div className={"flex flex-col gap-4 shadow-2xs"}>
                        <h3 className={"font-bold text-3xl"}>Tools & Others</h3>
                        <div className={"grid grid-cols-[1fr_1fr_1fr_1fr] gap-2 skills"}>
                            <h3 className={"bg-gray-950 text-white"}>GitHub</h3>
                            <h3 className={"bg-gray-900 text-white"}>Notion</h3>
                            <h3 className={"bg-pink-700 text-white"}>Intellij</h3>
                            <h3 className={"bg-blue-950 text-white"}>Eclipse</h3>
                            <h3 className={"col-span-2 bg-blue-500 text-white"}>Visual Studio</h3>
                            <h3 className={"col-span-2 bg-cyan-500 text-white"}>WebStorm</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skill;