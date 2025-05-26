import React from 'react';
import styles from "../css/skill.module.css";

function Experience(props) {
    return (
        <>
            <div id={"experience"} className={"flex flex-col gap-4 justify-center items-center"}>
                <div>
                    <h3 className={styles.skill_title+" text-3xl font-bold"}>Experience</h3>
                </div>
            </div>
        </>
    );
}

export default Experience;