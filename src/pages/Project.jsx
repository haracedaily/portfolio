import React from 'react';
import styles from "../css/skill.module.css";
import {useMediaQuery} from "react-responsive";
import {Image} from "antd";

function Project(props) {
    const isMobile = useMediaQuery({maxWidth: 900});

    return (
        <>
            <div id={"project"} className={"flex flex-col gap-4 justify-center items-center"}>
                <div>
                    <h3 className={styles.skill_title+" text-3xl font-bold"}>Project</h3>
                </div>
                <div style={{padding:"2rem"}} className={"flex flex-col gap-16 overflow-y-auto h-[70vh]"}>

                    {/*포트폴리오*/}
                    <div className={`grid gap-4 shadow-2xs ${isMobile?"grid-cols-1":"grid-cols-2"}`}>
                        <div className={`flex flex-col gap-4`}>
                            <h3 className={"font-bold text-3xl"}>포트폴리오</h3>
                            <Image src={"/portfolio.png"} ></Image>
                        </div>
                        <div className={"flex items-center"}>
                            <div className={`grid grid-cols-[1fr_3fr] gap-4`}>
                                <h3>팀원</h3>
                                <h3>총 1명</h3>
                                <h3>사용스택</h3>
                                <h3>HTML, CSS, javascript, TailwindCss, React.js, vercel</h3>
                                <h3>내용</h3>
                                <h3>VITE+REACT 프로젝트로 생성하였으며, useState와 useRef 훅으로 스크롤 이벤트를 구현하였습니다. 내부적으로 TailwindCss를 가장 많이 사용하였고, 별도로 css가 필요한 경우 module.css를 사용하였습니다. 배포는 vercel로 하였습니다.</h3>
                                <h3>코드</h3>
                                <h3 style={{cursor:"pointer"}} onClick={()=>{window.open("https://github.com/haracedaily/portfolio","_blank","location=no,menubar=no,status=no")}}>깃허브</h3>
                            </div>
                        </div>
                    </div>

                {/*대중교통 프로젝트*/}
                <div className={`grid gap-4 shadow-2xs ${isMobile?"grid-cols-1":"grid-cols-2"}`}>
                    <div className={`flex flex-col gap-4`}>
                    <h3 className={"font-bold text-3xl"}>StarBus</h3>
                        <Image src={"/starbus.png"} ></Image>
                    </div>
                    <div className={"flex items-center"}>
                    <div className={`grid grid-cols-[1fr_3fr] gap-4`}>
                        <h3>팀원</h3>
                        <h3>총 4명</h3>
                        <h3>사용스택</h3>
                        <h3>HTML, CSS, javascript, Antd, proj4, React.js, vercel, 공공데이터API, 버스정보시스템API, 카카오맵API(react), axios</h3>
                        <h3>내용</h3>
                        <h3>대구지역의 정류소 기반 버스데이터 API 사이트</h3>
                        <h3>역할</h3>
                        <h3>
                            버스정류소 검색, 버스 현위치, 정류소 위치, 카카오맵API(마커, 폴리라인, 오버레이 등), 레이아웃, 전체적인 지원, 정리 및 관리<br/>vite+react 프로젝트로 생성하였으며, 공공데이터API 대구버스정보시스템과 버스정보시스템 사이트의 api를 활용하여 구현하였습니다.
                            react-kakao-maps-sdk를 사용하여 카카오맵을 적용하였으며, axios를 통해 api를 호출합니다. 또한, proj4js를 사용하여 api에서 반한된 좌표 변환을 구현하였습니다.
                        </h3>
                        <h3>코드</h3>
                        <h3 style={{cursor:"pointer"}} onClick={()=>{window.open("https://github.com/haracedaily/publicTraffic","_blank","location=no,menubar=no,status=no")}}>깃허브</h3>
                    </div>
                    </div>
                </div>

                    {/*제빙기 사이트*/}
                    <div className={`grid gap-4 shadow-2xs ${isMobile?"grid-cols-1":"grid-cols-2"}`}>
                        <div className={`flex flex-col gap-4`}>
                            <h3 className={"font-bold text-3xl"}>IceCare_Admin</h3>
                            <Image src={"/icecare_admin.png"} ></Image>
                        </div>
                        <div className={"flex items-center"}>
                        <div className={`grid grid-cols-[1fr_3fr] gap-4`}>
                            <h3>팀원</h3>
                            <h3>총 3명</h3>
                            <h3>사용스택</h3>
                            <h3>HTML, CSS, javascript, Antd, recharts, React.js, vercel, bcryptjs, SUPABASE</h3>
                            <h3>내용</h3>
                            <h3>제빙기 청소업체의 관리자 사이트</h3>
                            <h3>역할</h3>
                            <h3>
                                팀장, 대쉬보드(rechart.js, antd), 로그인, 레이아웃(html,css) 등 요청부분 지원<br/>
                                VITE+REACT 프로젝트로 생성하였으며, SUPABASE를 사용하여 데이터베이스를 구축하였습니다.
                                bcryptjs를 사용하여 비밀번호 암호화를 구현하였으며, 레이아웃 자체는 html과 css로 구성하였으며, antd를 사용하여 구성요소를 배치하였습니다.
                                recharts를 사용하여 대쉬보드의 차트 부분을 구현하였습니다.
                                배포는 vercel을 사용하였습니다.
                            </h3>
                            <h3>코드</h3>
                            <h3 style={{cursor:"pointer"}} onClick={()=>{window.open("https://github.com/haracedaily/ice_care_admin","_blank","location=no,menubar=no,status=no")}}>깃허브</h3>
                        </div>
                        </div>
                    </div>
                    
                    {/*제빙기 사이트 리뉴얼*/}
                    
                </div>
            </div>
        </>
    );
}

export default Project;