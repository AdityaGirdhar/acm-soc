import React from "react";
import smolwave from "../../Assets/smol wave.png";
import codess from "../../Assets/codess.png";
import notequal from "../../Assets/notequal.png";
import compass from "../../Assets/compass.png";
import box from "../../Assets/box.png";

export default function Home() {
    return ( <
        >
        <
        div className = { 'min-w-screen min-h-screen flex sm:py-10 flex-col sm:justify-center items-center' } >
        <
        div className = { 'sm:w-3/6 px-4' } >
        <
        div className = "w-[174px]" >
        <
        img className = "h-[28px] w-full mx-[1005px] -py-[100px] my-7"
        src = { smolwave }
        alt = "smolwave" / >
        <
        /div> <
        div className = "w-[39px]" >
        <
        img className = "h-[40px] w-full -mx-[100px] my-[90px]"
        src = { codess }
        alt = "codess" / >
        <
        /div>

        <
        div className = { 'sm:text-[20px] text-[16px] relative' } >
        <
        img className = "h-[600px] w-[1200px] mx-[-70px] my-[-100px] absolute top-0 left-0 z-0"
        src = { box }
        alt = "box" / >
        <
        p className = { 'py-2 relative z-10' } >
        Welcome to IIIT Delhi Student Chapter’ s self - hosted ACM Summer of Code!This is an 11 - day challenge
        for beginners and experts alike that presents you with one unique task per day with a 24 - hour deadline.(You heard that right, deadline again.) <
        /p> <
        p className = { 'py-2 relative z-10' } >
        As you progress through each day 's task, you will have the opportunity to put your creativity and logical thinking to the test! You'
        ll encounter puzzles, optimization challenges, and hands - on projects that will push you to think critically and devise efficient solutions. <
        /p> <
        p className = { 'py-2 relative z-10' } >
        So, roll up your sleeves, buckle up your coding skills, and get ready to embark on this incredible 11 - Day Coding Challenge.We are ready, are you ?
        <
        /p> <
        /div>

        <
        div className = { 'flex justify-center sm:text-[24px] text-[12px] sm:pb-10 pb-2' } >
        <
        button className = { 'cursor-default px-[100px] py-2 bg-gradient-to-r from-[#ffffff18] to-[#ffffff08] rounded-xl mt-5 backdrop-blur-sm' } >
        Event starts on 21 / 06 / 23, be ready. <
        /button> <
        /div>

        <
        div className = { 'flex justify-start' } >
        <
        img className = "h-[30px] w-[30px] my-7"
        src = { notequal }
        alt = "notequal" / >
        <
        img className = "h-[30px] w-[30px] my-[9px]"
        src = { compass }
        alt = "compass" / >
        <
        /div> <
        /div> <
        /div> <
        />
    );
}