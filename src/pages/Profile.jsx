import React, {useEffect} from 'react';
import {Image} from "antd";

function Profile(props) {
    let title_index=0;
    useEffect(() => {
        setInterval(()=>{
            [...document.querySelectorAll(".interval_title")].map(el=>el.classList.add("none"));
            title_index++;
            if(title_index>2) title_index=0;
            document.querySelectorAll(".interval_title")[title_index].classList.remove("none");
        },1500);
    }, []);


    return (
        <>
            <div id={"profile"} className={"flex flex-col gap-4 justify-center items-center"}>
                <div>
                    <Image></Image>
                </div>
                <div className={"flex flex-col gap-3 text-white"}>
                    <div className={"flex flex-row gap-2"}>
                        <h3 className={`text-2xl font-bold ${props.backConfig==="dark"?"white":"black"}`}>I'm</h3>
                        <h3 className={"opacity-0 interval_title text-2xl text-amber-400 font-bold"}>JoonHo Choi</h3>
                        <h3 className={"none opacity-0 interval_title text-2xl text-amber-400 font-bold"}>Web Developer</h3>
                        <h3 className={"none opacity-0 interval_title text-2xl text-amber-400 font-bold"}>FullStack Developer</h3>
                    </div>
                    <div className={`${props.backConfig==="dark"?"white":"black"}`}>
                        <h4>안녕하세요, 저는 최준호입니다.</h4>
                        <h4>새로운 기술을 배우고 적용하는 것에 관심이 많으며, 상호 피드백하는 것을 좋아합니다.</h4>
                        <h4>맡은 바 자부심을 가지고 도전할 수 있는 회사에서 일하고 싶습니다.</h4>
                    </div>
                    <div className={"flex gap-2 flex-row"}>
                        <h3 className={`text-2xl font-bold ${props.backConfig==="dark"?"white":"black"}`}>Personal Info</h3>
                    </div>
                    <div className={"grid-cols-2 grid"}>
                        <div className={"grid grid-cols-[1fr_3fr]"}>
                        <h4 className={`${props.backConfig==="dark"?"white":"black"}`}>Name</h4>
                        <h4 className={"text-amber-500 font-bold text-shadow-2xs"}>최준호</h4>
                        </div>
                        <div className={"grid grid-cols-[1fr_3fr]"}>
                            <h4 className={`${props.backConfig==="dark"?"white":"black"}`}>Age</h4>
                            <h4 className={"text-amber-500 font-bold text-shadow-2xs"}>1992.05</h4>
                        </div>

                        <div className={"grid grid-cols-[1fr_3fr]"}>
                        <h4 className={`${props.backConfig==="dark"?"white":"black"}`}>Phone</h4>
                        <h4 className={"text-amber-500 font-bold text-shadow-2xs"}>010-7368-5337</h4>
                        </div>
                        <div className={"grid grid-cols-[1fr_3fr]"}>
                            <h4 className={`${props.backConfig==="dark"?"white":"black"}`}>GitHub</h4>
                            <h4 className={"text-amber-500 font-bold cursor-pointer text-shadow-2xs"} onClick={()=>{window.open("https://github.com/haracedaily","_blank","location=no,menubar=no,status=no")}}>https://github.com/haracedaily</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;