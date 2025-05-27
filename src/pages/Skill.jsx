import React from 'react';
import styles from '../css/skill.module.css'

function Skill(props) {
    return (
        <>
            <div id={"skill"} className={"flex flex-col gap-4 justify-center items-center"}>
                <div>
                    <h3 className={styles.skill_title+" text-3xl font-bold"}>Skill's</h3>
                </div>
                <div style={{padding:"1rem"}} className={"flex flex-col gap-6 rounded-2xl border-[1px] border-amber-500"}>
                    <div className={"flex flex-col gap-4 shadow-2xs"}>
                        <h3 className={"font-bold text-3xl"}>Front-End</h3>
                        <div className={"grid grid-cols-[1fr_1fr_1fr_1fr] gap-4"}>
                            <h3>HTML</h3>
                            <h3>CSS</h3>
                            <h3>JavaScript</h3>
                            <h3>React.js</h3>
                            <h3>JQuery</h3>
                            <h3>TailwindCss</h3>
                            <h3>Antd</h3>
                        </div>
                    </div>

                    <div className={"flex flex-col gap-4 shadow-2xs"}>
                        <h3 className={"font-bold text-3xl"}>Back-End</h3>
                        <div className={"grid grid-cols-[1fr_1fr_1fr_1fr] gap-4"}>
                            <h3>Node.js</h3>
                            <h3>Express.js</h3>
                            <h3>Spring</h3>
                            <h3>Spring Boot</h3>
                            <h3>Java</h3>
                        </div>
                    </div>

                    <div className={"flex flex-col gap-4 shadow-2xs"}>
                        <h3 className={"font-bold text-3xl"}>Database</h3>
                        <div className={"grid grid-cols-[1fr_1fr_1fr_1fr] gap-4"}>
                            <h3>MySQL</h3>
                            <h3>MsSQL</h3>
                            <h3>ORACLE</h3>
                            <h3>SUPABASE</h3>
                        </div>
                    </div>

                    <div className={"flex flex-col gap-4 shadow-2xs"}>
                        <h3 className={"font-bold text-3xl"}>Tools & Others</h3>
                        <div className={"grid grid-cols-[1fr_1fr_1fr_1fr] gap-4"}>
                            <h3>GitHub</h3>
                            <h3>Notion</h3>
                            <h3>Intellij</h3>
                            <h3>Eclipse</h3>
                            <h3>Visual Studio</h3>
                            <h3>WebStorm</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skill;