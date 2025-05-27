import React from 'react';
import styles from "../css/skill.module.css";

function Experience(props) {
    return (
        <>
            <div id={"experience"} className={"flex flex-col gap-4 justify-center items-center"}>
                <div>
                    <h3 className={styles.skill_title+" text-3xl font-bold"}>Experience</h3>
                </div>
                <div style={{padding:"1rem"}} className={"flex flex-col gap-6 rounded-2xl border-[1px] border-amber-500"}>
                    <div className={"flex flex-col gap-4 shadow-2xs"}>
                    <h3 className={"font-bold text-3xl"}>학습</h3>
                        <div className={"grid grid-cols-[1fr_1fr_3fr] gap-4"}>
                            <h3>그린컴퓨터아트학원</h3>
                            <h3>2024.12 - 2025.07</h3>
                            <div style={{cursor:"pointer"}} onClick={()=>{window.open("https://github.com/haracedaily/studyList","_blank","location=no,menubar=no,status=no")}}>
                                <h3>기업요구 프로젝트 중심 풀스택 개발자 (PWA를 활용한 React,Express.js) 양성과정</h3>
                            </div>

                            <h3>동북아 ai 교육센터</h3>
                            <h3>2025.04.07 - 2024.04.18</h3>
                            <div style={{cursor:"pointer"}} onClick={()=>{window.open("https://github.com/haracedaily/studyList/tree/main/self_c","_blank","location=no,menubar=no,status=no")}}>
                            <h3>[25년 2기] AIoT 사물인터넷(IoT, C언어,전자회로) 교육과정</h3>
                            </div>

                            <h3>네이버 부스트캠프</h3>
                            <h3>2024.06.24 - 2024.06.28</h3>
                            <h3>네이버 부스트캠프 앱 베이스(kotlin) 과정</h3>

                            <h3>예담직업전문학교</h3>
                            <h3>2022.12 - 2023.06</h3>
                            <div style={{cursor:"pointer"}} onClick={()=>{window.open("https://github.com/haracedaily/Java","_blank","location=no,menubar=no,status=no")}}>
                            <h3> 클라우드 기반 JAVA 개발자 양성과정</h3>
                            </div>
                        </div>
                    </div>

                    <div className={"flex flex-col gap-4 shadow-2xs"}>
                        <h3 className={"font-bold text-3xl"}>실무</h3>
                        <div className={"grid grid-cols-[1fr_1fr_3fr] gap-4"}>
                            <h3>㈜이젠솔루션</h3>
                            <h3>2023.12 - 2024.06</h3>
                            <h3>냉장,냉동창고업 MES시스템 도입 프로젝트 담당</h3>

                            <h3>㈜이젠솔루션</h3>
                            <h3>2023.07 - 2023.11</h3>
                            <h3>마스크 제조업 및 유통업 MES시스템 유지보수 담당</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Experience;