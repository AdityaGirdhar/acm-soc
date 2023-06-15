import React from "react";

export default function Navbar() {
    return(
        <>
            <div className={'brightness-125 px-2 py-2 sm:flex justify-around sm:text-[20px] sm:py-5 backdrop-blur-sm'}>
                <div className={'font-[600]'}>
                    ACM Summer of Code'23
                </div>
                <div className={'flex sm:justify-around'}>
                    <p className={'sm:px-5'}>[Rules]</p>
                    <p className={'sm:px-5'}>[Calender]</p>
                    <p className={'sm:px-5'}>[Leaderboard]</p>
                </div>
            </div>
        </>
    )
}