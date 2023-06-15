import React from "react";

export default function Navbar() {
    return(
        <>
            <div className={'brightness-125 flex justify-around text-[20px] py-5 backdrop-blur-sm'}>
                <div className={'font-[600]'}>
                    ACM Summer of Code'23
                </div>
                <div className={'flex justify-around'}>
                    <p className={'px-5'}>[Rules]</p>
                    <p className={'px-5'}>[Calender]</p>
                    <p className={'px-5'}>[Leaderboard]</p>
                </div>
            </div>
        </>
    )
}