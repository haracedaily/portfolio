import React, {useEffect} from 'react';
import {Image} from "antd";
import {useMediaQuery} from "react-responsive";

function Profile() {
    const isMobile = useMediaQuery({maxWidth: 900});
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
            <div id={"profile"} className={"flex flex-col gap-4 justify-center items-center"} style={{padding:"2rem"}}>
                <div>
                    <Image></Image>
                </div>
                <div className={"flex flex-col gap-3 text-white"}>
                    <div className={`flex flex-row gap-2 flex-wrap items-end`}>
                        <h3 className={`font-bold text-white ${isMobile?"text-lg":"text-2xl"}`}>I'm</h3>
                        <h3 className={`opacity-0 interval_title text-orange-300 font-semibold ${isMobile?"text-lg":"text-2xl"}`}>JoonHo Choi</h3>
                        <h3 className={`none opacity-0 interval_title text-orange-300 font-semibold ${isMobile?"text-lg":"text-2xl"}`}>Web Developer</h3>
                        <h3 className={`none opacity-0 interval_title text-orange-300 font-semibold ${isMobile?"text-lg":"text-2xl"}`}>FullStack Developer</h3>
                    </div>
                    <div className="text-white">
                        <h4>안녕하세요, 저는 최준호입니다.</h4>
                        <h4>새로운 기술을 배우고 적용하는 것에 관심이 많으며, 상호 피드백하는 것을 좋아합니다.</h4>
                        <h4>"미숙한 사람은 자기가 다 아는 것처럼 말하지만, 성숙한 사람은 자신이 얼마나 부족한지 깨닫고 끊임없이 배운다." - 소크라테스</h4>
                    </div>
                    <div className={"flex gap-2 flex-row"}>
                        <h3 className={`${isMobile?"text-lg":"text-2xl"} font-bold text-white`}>Personal Info</h3>
                    </div>
                    <div className={"grid-cols-2 grid"}>
                        <div className={"grid grid-cols-[1fr_3fr]"}>
                        <h4 className="text-white">Name</h4>
                        <h4 className={"text-orange-300 font-semibold"}>최준호</h4>
                        </div>
                        <div className={"grid grid-cols-[1fr_3fr]"}>
                            <h4 className="text-white">Age</h4>
                            <h4 className={"text-orange-300 font-semibold"}>1992.05</h4>
                        </div>

                        <div className={`grid ${isMobile?"col-span-2 grid-cols-[1fr_6fr]":"col-span-1 grid-cols-[1fr_3fr]"}`}>
                        <h4 className="text-white">Phone</h4>
                        <h4 className={`text-orange-300 font-semibold`}>010-7368-5337</h4>
                        </div>
                        <div className={`grid ${isMobile?"col-span-2 grid-cols-[1fr_6fr]":"col-span-1 grid-cols-[1fr_3fr]"}`}>
                            <h4 className="text-white">GitHub</h4>
                            <h4 className={"text-orange-300 font-semibold cursor-pointer"} onClick={()=>{window.open("https://github.com/haracedaily","_blank","location=no,menubar=no,status=no")}}>https://github.com/haracedaily</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;