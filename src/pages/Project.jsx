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
                    <h3 className={styles.skill_title+` text-3xl font-bold ${props.backConfig==="dark"?"white":"black"}`}>Project</h3>
                </div>
                <div style={{padding:"2rem"}} className={`flex flex-col gap-16 overflow-y-auto h-[70vh] ${props.backConfig==="dark"?"white":"black"}`}>

                    <div className={`grid gap-4 shadow-2xs ${isMobile?"grid-cols-1":"grid-cols-2"}`}>
                        <div className={`flex flex-col gap-4`}>
                            <h3 className={"font-bold text-3xl"}>C# 간편 스케줄러</h3>
                            <a href={"/schedule.zip"} download={"schedular.zip"}>
                                다운로드
                            </a>
                            <Image src={"/schedule.png"} onClick={()=>{
                                event.preventDefault();
                                }}></Image>
                        </div>
                        <div className={"flex items-center"}>
                            <div className={`grid grid-cols-[1fr_3fr] gap-4`}>
                                <h3>팀원</h3>
                                <h3>총 1명</h3>
                                <h3>사용스택</h3>
                                <h3>C#, winform, supabase</h3>
                                <h3>내용</h3>
                                <h3>Winform 기반의 C#으로 작업하였으며, 작업기간은 2025.07.06 - 2025.07.11입니다.
                                    07-06(토)부터 주제를 정하고 시작한 프로젝트로 학습 목적과 점검용으로 만든 토이프로젝트입니다.
                                    DB는 Supabase를 이용하였습니다.
                                </h3>
                                <h3>코드</h3>
                                <h3 style={{cursor:"pointer"}} onClick={()=>{window.open("https://github.com/haracedaily/c-Study/tree/main/TODO-List","_blank","location=no,menubar=no,status=no")}}>깃허브</h3>
                                <h3>프로젝트내용</h3>
                                <h3 style={{cursor:"pointer"}} onClick={()=>{window.open("https://ripe-potato-6b7.notion.site/C-228cb7b25b638001afb7ccf665d4cec0","_blank","location=no,menubar=no,status=no,width=800,height=800")}}>노션</h3>
                            </div>
                        </div>
                    </div>


                    {/*제빙기 청소기사 앱*/}
                    <div className={`grid gap-4 shadow-2xs ${isMobile?"grid-cols-1":"grid-cols-2"}`}>
                        <div className={`flex flex-col gap-4`}>
                            <h3 className={"font-bold text-3xl"}>제빙기 청소기사 PWA 어플리케이션</h3>
                            <Image src={"/icecare_Pwa.png"} width={350} preview={false} onClick={()=>{window.open("https://port-0-cleaning-node-managdgo41797b84.sel4.cloudtype.app/","_blank","location=no,menubar=no,status=no")}}></Image>
                        </div>
                        <div className={"flex items-center"}>
                            <div className={`grid grid-cols-[1fr_3fr] gap-4`}>
                                <h3>팀원</h3>
                                <h3>총 1명</h3>
                                <h3>사용스택</h3>
                                <h3>HTML, CSS, javascript, Node.js, Expressjs, nunjucks, web-push, PWA, CloudType</h3>
                                <h3>내용</h3>
                                <h3>
                                    Node기반의 프로젝트로 nunjucks 템플릿 엔진으로 동적인 화면을 구현하였습니다.
                                    또한, PWA를 구현하여 service-worker.js와 web-push를 이용한 알림 서비스를 구현하였습니다.
                                    해당 부분에서 Rest API를 만들어 제빙기 관리자 사이트에서 해당 API를 사용하거나 제빙기 청소기사 어플리케이션에서 사용합니다.
                                    CloudType의 free-tier로 배포하여 하루에 한번 서버가 내려가는 문제점이 있습니다.
                                    제빙기 청소기사 어플리케이션 자체는 단독으로 구현 하였지만, 프로젝트 전체 구성은 사용자 사이트, 점주 PWA 어플리케이션, 관리자 사이트, 청소기사 PWA 어플리케이션으로 구성되어있습니다.
                                    Rest API 테스트와 디자인 요소, 시스템 로직등은 다른 파트를 담당한 팀원분들과 회의를 거쳐 방향을 정했습니다.
                                </h3>
                                <h3>코드</h3>
                                <h3 style={{cursor:"pointer"}} onClick={()=>{window.open("https://github.com/haracedaily/cleaning_node","_blank","location=no,menubar=no,status=no")}}>깃허브</h3>
                                <h3>프로젝트내용</h3>
                                <h3 style={{cursor:"pointer"}} onClick={()=>{window.open("https://ripe-potato-6b7.notion.site/217cb7b25b638032bf86e04a1f4b1fba","_blank","location=no,menubar=no,status=no,width=800,height=800")}}>노션</h3>
                            </div>
                        </div>
                    </div>

                    {/*포트폴리오*/}
                    <div className={`grid gap-4 shadow-2xs ${isMobile?"grid-cols-1":"grid-cols-2"}`}>
                        <div className={`flex flex-col gap-4`}>
                            <h3 className={"font-bold text-3xl"}>포트폴리오</h3>
                            <Image src={"/portfolio.png"} onClick={()=>{window.open("https://portfolio-silk-eight-20.vercel.app/","_blank","location=no,menubar=no,status=no")}}></Image>
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
                                <h3>프로젝트내용</h3>
                                <h3 style={{cursor:"pointer"}} onClick={()=>{window.open("https://ripe-potato-6b7.notion.site/1ffcb7b25b6380df8d73f98ab8b47d36","_blank","location=no,menubar=no,status=no,width=800,height=800")}}>노션</h3>
                            </div>
                        </div>
                    </div>

                {/*대중교통 프로젝트*/}
                <div className={`grid gap-4 shadow-2xs ${isMobile?"grid-cols-1":"grid-cols-2"}`}>
                    <div className={`flex flex-col gap-4`}>
                    <h3 className={"font-bold text-3xl"}>StarBus</h3>
                        <Image src={"/starbus.png"} onClick={()=>{window.open("https://public-traffic-alpha.vercel.app/","_blank","location=no,menubar=no,status=no")}}></Image>
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
                        <h3>프로젝트내용</h3>
                        <h3 style={{cursor:"pointer"}} onClick={()=>{window.open("https://ripe-potato-6b7.notion.site/1f4cb7b25b6380439d6bfcd5b6b6135b","_blank","location=no,menubar=no,status=no,width=800,height=800")}}>노션</h3>
                    </div>
                    </div>
                </div>

                    {/*제빙기 관리자 사이트*/}
                    <div className={`grid gap-4 shadow-2xs ${isMobile?"grid-cols-1":"grid-cols-2"}`}>
                        <div className={`flex flex-col gap-4`}>
                            <h3 className={"font-bold text-3xl"}>IceCare_Admin</h3>
                            <Image src={"/icecare_admin.png"} onClick={()=>{window.open("https://ice-care-admin.vercel.app/","_blank","location=no,menubar=no,status=no")}}></Image>
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
                                팀장, 대쉬보드(rechart.js, antd), 로그인, 레이아웃(html,css) 등을 담당하였습니다.<br/>
                                VITE+REACT 프로젝트로 생성하였으며, SUPABASE를 사용하여 데이터베이스를 구축하였습니다.
                                bcryptjs를 사용하여 비밀번호 암호화를 구현하였으며, 레이아웃 자체는 html과 css로 구성하였으며, antd를 사용하여 구성요소를 배치하였습니다.
                                recharts를 사용하여 대쉬보드의 차트 부분을 구현하였습니다.
                                배포는 vercel을 사용하였습니다.
                            </h3>
                            <h3>코드</h3>
                            <h3 style={{cursor:"pointer"}} onClick={()=>{window.open("https://github.com/haracedaily/ice_care_admin","_blank","location=no,menubar=no,status=no")}}>깃허브</h3>
                            <h3>프로젝트내용</h3>
                            <h3 style={{cursor:"pointer"}} onClick={()=>{window.open("https://ripe-potato-6b7.notion.site/1cfcb7b25b6380a891c5d4496330e77f","_blank","location=no,menubar=no,status=no,width=800,height=800")}}>노션</h3>
                        </div>
                        </div>
                    </div>
                    
                    {/*제빙기 사이트 리뉴얼*/}
                    <div className={`grid gap-4 shadow-2xs ${isMobile?"grid-cols-1":"grid-cols-2"}`}>
                        <div className={`flex flex-col gap-4`}>
                            <h3 className={"font-bold text-3xl"}>IceCare_renew</h3>
                            <Image src={"/icecare.png"} onClick={()=>{window.open("https://haracedaily.github.io/renew_ice_clean/","_blank","location=no,menubar=no,status=no")}}></Image>
                        </div>
                        <div className={"flex items-center"}>
                            <div className={`grid grid-cols-[1fr_3fr] gap-4`}>
                                <h3>팀원</h3>
                                <h3>총 4명</h3>
                                <h3>사용스택</h3>
                                <h3>HTML, CSS, javascript, TailwindCss, sweetalert2, quill, swiper, vercel, SUPABASE</h3>
                                <h3>내용</h3>
                                <h3>제빙기 청소업체 사이트</h3>
                                <h3>역할</h3>
                                <h3>
                                    팀장, 메인페이지(swiper, TailwindCss), 레이아웃(html,css+Tailwindcss) 등을 담당하였습니다.<br/>
                                    VITE+VANILLA 프로젝트로 생성하였으며, SUPABASE를 사용하여 데이터베이스를 구축하였습니다.
                                    TailwindCss를 사용하여 레이아웃을 구성하였으며, swiper를 사용하여 메인페이지의 슬라이드를 구현하였습니다.
                                    갤러리의 전반적인 기능과 이미지파일 업로드는 SUPABASE의 rpc를 사용하여 구현하였으며, 갤러리 작성의 에디터로는 quill을 채택하였습니다.
                                    quill을 채택한 이유는 다른 에디터보다 가벼웠고, 리턴되는 value가 html로 되어 있어, 별도의 변환이 필요하지 않았기 때문입니다.
                                    sweetalert2를 사용하여 알림창을 구현하였으며, 배포는 github를 사용하였습니다.
                                </h3>
                                <h3>코드</h3>
                                <h3 style={{cursor:"pointer"}} onClick={()=>{window.open("https://github.com/haracedaily/renew_ice_clean","_blank","location=no,menubar=no,status=no")}}>깃허브</h3>
                                <h3>프로젝트내용</h3>
                                <h3 style={{cursor:"pointer"}} onClick={()=>{window.open("https://ripe-potato-6b7.notion.site/1cfcb7b25b638077b304dfe2abbfef4d","_blank","location=no,menubar=no,status=no,width=800,height=800")}}>노션</h3>
                            </div>
                        </div>
                    </div>
                    
                    {/*제빙기 사이트*/}
                    <div className={`grid gap-4 shadow-2xs ${isMobile?"grid-cols-1":"grid-cols-2"}`}>
                        <div className={`flex flex-col gap-4`}>
                            <h3 className={"font-bold text-3xl"}>IceCare_origin(iceClean)</h3>
                            <Image src={"/ice_clean.png"} onClick={()=>{window.open("https://haracedaily.github.io/iceClean/index.html","_blank","location=no,menubar=no,status=no")}}></Image>
                        </div>
                        <div className={"flex items-center"}>
                            <div className={`grid grid-cols-[1fr_3fr] gap-4`}>
                                <h3>팀원</h3>
                                <h3>총 3(2)명</h3>
                                <h3>사용스택</h3>
                                <h3>HTML, CSS, javascript, gsap, googleTranslate, github</h3>
                                <h3>내용</h3>
                                <h3>제빙기 청소업체 사이트</h3>
                                <h3>역할</h3>
                                <h3>
                                    팀장, 메인페이지(gsap, googleTranslate,html,css,js), 레이아웃(html,css) 등 요청부분 지원<br/>
                                    VITE+VANILLA 프로젝트로 생성하였으며, gsap을 사용하여 메인페이지의 애니메이션을 구현하였고, googleTranslate를 사용하여 번역을 구현하였습니다.
                                    다만 googleTranslate는 기능이 정확하지 않아, 현재는 사용하지 않고 있습니다.
                                </h3>
                                <h3>코드</h3>
                                <h3 style={{cursor:"pointer"}} onClick={()=>{window.open("https://github.com/haracedaily/iceClean","_blank","location=no,menubar=no,status=no")}}>깃허브</h3>
                                <h3>프로젝트내용</h3>
                                <h3 style={{cursor:"pointer"}} onClick={()=>{window.open("https://ripe-potato-6b7.notion.site/1a1cb7b25b6380b3b8d1f0952ef69527","_blank","location=no,menubar=no,status=no,width=800,height=800")}}>노션</h3>
                            </div>
                        </div>
                    </div>

                    {/*일정앱*/}
                    <div className={`grid gap-4 shadow-2xs ${isMobile?"grid-cols-1":"grid-cols-2"}`}>
                        <div className={`flex flex-col gap-4`}>
                            <h3 className={"font-bold text-3xl"}>withTime</h3>
                            <Image src={"/with_time.png"} onClick={()=>{window.open("https://haracedaily.github.io/studyList/1st/login.html","_blank","location=no,menubar=no,status=no")}}></Image>
                        </div>
                        <div className={"flex items-center"}>
                            <div className={`grid grid-cols-[1fr_3fr] gap-4`}>
                                <h3>팀원</h3>
                                <h3>총 4명</h3>
                                <h3>사용스택</h3>
                                <h3>HTML, CSS, javascript, github</h3>
                                <h3>내용</h3>
                                <h3>일정공유앱</h3>
                                <h3>역할</h3>
                                <h3>
                                    팀장, 메인페이지(html,css,js), 레이아웃, 캘린더, 플래너 (html,css,js)를 담당하였습니다.<br/>
                                    html, css, js만 사용하여 구성된 프로젝트로, 캘린더와 플래너를 구현하였습니다.
                                    캘린더는 포커싱된 날짜 css를 변경하고, 달력 자체의 기능 구현에 집중하였습니다.
                                    Today 버튼을 클릭하면 현재 날짜로 이동하며, 이전달, 다음달 버튼을 클릭하거나 우측 셀렉트박스를 선택하면 해당 월로 이동합니다.
                                    연도 변경은 12월에서 다음달 또는 1월에서 이전달로 이동하게만 구현하였습니다.
                                    플래너의 경우도 css에 집중하였으며 과정 초기에 구현하였던 프로젝트입니다.
                                </h3>
                                <h3>코드</h3>
                                <h3 style={{cursor:"pointer"}} onClick={()=>{window.open("https://github.com/haracedaily/studyList/tree/main/1st","_blank","location=no,menubar=no,status=no")}}>깃허브</h3>
                                <h3>프로젝트내용</h3>
                                <h3 style={{cursor:"pointer"}} onClick={()=>{window.open("https://ripe-potato-6b7.notion.site/UI-html-css-javascri-199cb7b25b6380248918e9763f319bdd","_blank","location=no,menubar=no,status=no,width=800,height=800")}}>노션</h3>
                            </div>
                        </div>
                    </div>

                    {/*볼펜제조공장MES시스템*/}
                    <div className={`grid gap-4 shadow-2xs ${isMobile?"grid-cols-1":"grid-cols-2"}`}>
                        <div className={`flex flex-col gap-4`}>
                            <h3 className={"font-bold text-3xl"}>penService</h3>
                            <Image src={"/penService.png"} ></Image>
                        </div>
                        <div className={"flex items-center"}>
                            <div className={`grid grid-cols-[1fr_3fr] gap-4`}>
                                <h3>팀원</h3>
                                <h3>총 5명</h3>
                                <h3>사용스택</h3>
                                <h3>HTML, CSS, JS, JQuery, BootStrap, Thymleaf, Spring Boot, MyBatis, Java, Spring Security, Oracle, AWS</h3>
                                <h3>내용</h3>
                                <h3>볼펜 제조 공장의 MES 도입 시스템 기준으로 개발</h3>
                                <h3>역할</h3>
                                <h3>
                                    부팀장, MVC2 패턴으로 생산계획 관리 및 조회, 생산지시 관리 및 조회, 생산공정실적 관리, 생산공정실적 조회 페이지의 CRUD와 전반적인 지원을 담당하였습니다.<br/>
                                    Spring Boot와 Thymleaf를 사용하여 MVC2 패턴으로 개발하였으며, MyBatis를 사용하여 데이터베이스와 연동하였습니다.
                                    Pdfmake API를 이용하여 생산지시서 PDF 출력 기능을 구현하였으며, Toastr grid를 사용하여 자재나 공정등의 테이블을 구현하였습니다.
                                    AWS를 사용하여 배포하였으며, Spring Security를 사용하여 로그인 기능을 구현하였었으며, DB는 Oracle을 사용하였습니다.
                                    현재는 AWS에서 배포가 중단되었습니다.
                                </h3>
                                <h3>코드</h3>
                                <h3 style={{cursor:"pointer"}} onClick={()=>{window.open("https://github.com/san1313/PenService","_blank","location=no,menubar=no,status=no")}}>깃허브</h3>
                            </div>
                        </div>
                    </div>

                    {/*캠핑 웹사이트*/}
                    <div className={`grid gap-4 shadow-2xs ${isMobile?"grid-cols-1":"grid-cols-2"}`}>
                        <div className={`flex flex-col gap-4`}>
                            <h3 className={"font-bold text-3xl"}>GoCamping</h3>
                            <Image src={"/go_camping.png"} ></Image>
                        </div>
                        <div className={"flex items-center"}>
                            <div className={`grid grid-cols-[1fr_3fr] gap-4`}>
                                <h3>팀원</h3>
                                <h3>총 4명</h3>
                                <h3>사용스택</h3>
                                <h3>HTML, CSS, JS, JQuery, BootStrap, JSTL, MyBatis, Java, Oracle</h3>
                                <h3>내용</h3>
                                <h3>캠핑용품 구매부터 캠핑장 예약, 커뮤니티 사이트</h3>
                                <h3>역할</h3>
                                <h3>
                                    팀장, 카카오지도 API를 사용하여 지역별 숙박업체 소개(등록 캠핑장의 위치와 정보), FullCallendar를 이용한 숙박업체 예약 및 예약 수정, 아임포트API를 이용한 결제기능과 팀장으로서 전반적인 지원을 담당하였습니다.
                                </h3>
                                <h3>코드</h3>
                                <h3 style={{cursor:"pointer"}} onClick={()=>{window.open("https://github.com/haracedaily/Go-Camping","_blank","location=no,menubar=no,status=no")}}>깃허브</h3>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </>
    );
}

export default Project;