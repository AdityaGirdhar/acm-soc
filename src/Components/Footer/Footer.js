import React from "react";

export default function Footer() {
    return(
        <>
            <div className={'flex sm:text-[20px] text-[12px] pb-2 bg-[#2B2B2B]'}>
                <p className={'pl-10'}>ACM IIIT Delhi Student Chapter </p>
                <img className={'sm:h-[25px] h-[15px] sm:w-[20px] w-[10px] mx-2 '} src={require('../../Assets/c.png')} alt={'c'}/>
            </div>
        </>
    )
}