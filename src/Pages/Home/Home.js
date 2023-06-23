import React from "react";
import smolwave from "../../Assets/smol wave.png";
import codess from "../../Assets/codess.png";
import notequal from "../../Assets/notequal.png";
import compass from "../../Assets/compass.png";
import box from "../../Assets/box.png";
import {Link} from "react-router-dom";

export default function Home() {
    return ( <>
        <div className = {'min-w-screen min-h-screen flex sm:py-10 pt-10 sm:justify-center items-center'}>
            <div className={'sm:block hidden sm:w-1/5 px-3 h-screen'}>
                <div className = "h-1/2 flex justify-center">
                    <img className = "h-[40px]" src = { codess } alt = "codess"/>
                </div>
                <div className = "h-1/2 flex justify-end items-center">
                    <img className = "h-[60px]" src={require('../../Assets/waves.png')} alt = "wave"/>
                </div>
            </div>
            <div className={'flex justify-center sm:w-4/5'}>
                <div className = {"w-4/5 sm:max-w-screen"}>
                    <div className = {'sm:w-full sm:px-10 sm:py-5 py-2 px-3 border-[2px] border-[#07B509] border-dashed sm:text-[22px] text-[16px] '}>
                        <div className = {' py-2 relative z-10'}>
                            Welcome to IIIT Delhi Student Chapter’ s self - hosted ACM Summer of Code!This is an 11 - day challenge
                            for beginners and experts alike that presents you with one unique task per day with a 24 - hour deadline.
                            <span className={'px-1 text-[14px]'}>(You heard that right, deadline again.)</span>
                        </div>
                        <p className = {'py-2 relative z-10'}>
                            As you progress through each day 's task, you will have the opportunity to put your creativity and logical thinking to the test! You'
                            ll encounter puzzles, optimization challenges, and hands - on projects that will push you to think critically and devise efficient solutions.
                        </p>
                        <p className = {'py-2 relative z-10'}>
                            So, roll up your sleeves, buckle up your coding skills, and get ready to embark on this incredible 11 - Day Coding Challenge.We are ready, are you ?
                        </p>
                    </div>
                    <div className = {'flex justify-center sm:text-[18px] text-[12px] sm:pb-10 py-2 text-center'}>
                    
                        <Link to={'/tasks'} className = {'w-1/2 cursor-default sm:px-[100px] py-2 bg-gradient-to-r from-[#ffffff18] to-[#ffffff08] rounded-xl mt-5 backdrop-blur-sm' } >
                        {"ENTER->"}</Link>
                        
                        
                    </div>
                </div>
            </div>
            <div className = {'sm:block hidden px-3 h-screen sm:w-1/5'}>
                <div className = "h-1/2 flex justify-center">
                    <img className = "h-[20px] mt-5" src={require('../../Assets/smol wave.png')} alt = "wave"/>
                </div>
                <div className = "h-1/2 flex justify-end items-center">
                    <img className = "h-[300px] mx-5" src={require('../../Assets/compass.png')} alt = "wave"/>
                </div>
            </div>
        </div>
    </>
    );
}