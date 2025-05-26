import React from 'react';
import styles from '../css/skill.module.css'

function Skill(props) {
    return (
        <>
            <div id={"skill"} className={"flex flex-col gap-4 justify-center items-center"}>
                <div>
                    <h3 className={styles.skill_title+" text-3xl font-bold"}>Skill's</h3>
                </div>
            </div>
        </>
    );
}

export default Skill;