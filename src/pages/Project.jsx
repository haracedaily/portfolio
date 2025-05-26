import React from 'react';
import styles from "../css/skill.module.css";

function Project(props) {
    return (
        <>
            <div id={"project"} className={"flex flex-col gap-4 justify-center items-center"}>
                <div>
                    <h3 className={styles.skill_title+" text-3xl font-bold"}>Project</h3>
                </div>
            </div>
        </>
    );
}

export default Project;