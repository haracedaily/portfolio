import React from 'react';
import {Image} from "antd";

function Profile(props) {
    return (
        <>
            <div className={"flex flex-col gap-4 justify-center items-center"}>
                <div>
                    <Image></Image>
                </div>
                <div className={"flex flex-col gap-2 text-white"}>
                    <div className={"flex gap-2 flex-row"}>
                        <h4>이름</h4>
                        <h4>최준호</h4>
                    </div>
                    <div>
                        <h4></h4>
                        <h4></h4>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;