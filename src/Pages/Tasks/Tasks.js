import React from "react";
import smolwave from "../../Assets/smol wave.png";
import codess from "../../Assets/codess.png";
import lock from "../../Assets/lock.png"
import notequal from "../../Assets/notequal.png";
import compass from "../../Assets/compass.png";
import box from "../../Assets/box.png";
import {Link} from "react-router-dom";

export default function Tasks() {
    return ( <>
        <div className = {'min-w-screen min-h-screen flex sm:py-10 pt-5 justify-center items-center'}>
            <div className={'sm:block hidden sm:w-1/5 px-3 h-screen'}>
                <div className = "h-1/2 flex justify-center">
                    <img className = "h-[40px]" src = { codess } alt = "codess"/>
                </div>
                <div className = "h-1/2 flex justify-end items-center">
                    <img className = "h-[60px]" src={require('../../Assets/waves.png')} alt = "wave"/>
                </div>
            </div>
            <div className={'w-full flex justify-center sm:w-4/5'}>
                <div className = {"w-4/5 sm:max-w-screen"}>
                    <div className = {'sm:w-full min-w-full sm:px-10 sm:py-5 py-2 px-10 border-[2px] border-[#07B509] border-dashed'}>
                        <div className = {'flex justify-center sm:text-5xl text-[25px]'}>
                            TASKS
                        </div>
                    </div>
                    <div className = {'flex justify-center sm:text-[18px] text-[12px] sm:pb-2 py-2 text-center'}>
               
                        <a href="https://codeforces.com/contestInvitation/a31dd4d62f2f09cf1fe904bdcbd92f763f6d8c74" target="_blank" className = {'w-1/2 cursor-pointer sm:px-[100px] py-2 bg-gradient-to-r from-[#ffffff18] to-[#ffffff08] rounded-xl mt-5 backdrop-blur-sm' } >
                            Day 1-Programming
                        </a>
                        
                    </div>
                    <div className = {'flex justify-center sm:text-[18px] text-[12px] sm:pb-2 py-2 text-center'}>
                        <a href="https://codeforces.com/contestInvitation/7ca92263d5b3e125b25f6b3dcf508c0bc114a42c" target="_blank" className = {'w-1/2 cursor-pointer sm:px-[100px] py-2 bg-gradient-to-r from-[#ffffff18] to-[#ffffff08] rounded-xl mt-5 backdrop-blur-sm' } >
                            Day 2-Programming
                        </a>
                    </div>
                    <div className = {'flex justify-center sm:text-[18px] text-[12px] sm:pb-2 py-2 text-center'}>
                        <a href="https://codeforces.com/contestInvitation/0f49c53d5a81a697bed4f382821415716f2773a4" target="_blank" className = {'w-1/2 cursor-pointer sm:px-[100px] py-2 bg-gradient-to-r from-[#ffffff18] to-[#ffffff08] rounded-xl mt-5 backdrop-blur-sm' } >
                            Day 3-Programming
                        </a>
                    </div>
                    <div className = {'flex justify-center sm:text-[18px] text-[12px] sm:pb-2 py-2 text-center'}>
                        <a href="https://codeforces.com/contestInvitation/4c3c7fd17e601cd8fbec665d9660c04d2d0243c8" target="_blank" className = {'w-1/2 cursor-pointer sm:px-[100px] py-2 bg-gradient-to-r from-[#ffffff18] to-[#ffffff08] rounded-xl mt-5 backdrop-blur-sm' } >
                            Day 4-Programming
                        </a>
                    </div>
                    <div className = {'flex justify-center sm:text-[18px] text-[12px] sm:pb-2 py-2'}>
                    <Link to={'/day5'} className = {'w-1/2 text-center cursor-pointer sm:px-[100px] py-2 bg-gradient-to-r from-[#ffffff18] to-[#ffffff08] rounded-xl mt-5 backdrop-blur-sm' } >
                        {"Day 5-Generative AI"}</Link>
                    </div>
                    <div className = {'flex justify-center sm:text-[18px] text-[12px] sm:pb-2 py-2'}>
                        <button className = {'w-1/2 cursor-default sm:px-[100px] py-2 bg-gradient-to-r from-[#ffffff18] to-[#ffffff08] rounded-xl mt-5 backdrop-blur-sm' } >
                            <div className="flex justify-center">
                                <img src={lock} className={'h-[15px] w-[15px]'}></img>
                            </div>
                        </button>
                    </div>
                    <div className = {'flex justify-center sm:text-[18px] text-[12px] sm:pb-2 py-2'}>
                        <button className = {'w-1/2 cursor-default sm:px-[100px] py-2 bg-gradient-to-r from-[#ffffff18] to-[#ffffff08] rounded-xl mt-5 backdrop-blur-sm' } >
                            <div className="flex justify-center">
                                <img src={lock} className={'h-[15px] w-[15px]'}></img>
                            </div>
                        </button>
                    </div>
                    <div className = {'flex justify-center sm:text-[18px] text-[12px] sm:pb-2 py-2'}>
                        <button className = {'w-1/2 cursor-default sm:px-[100px] py-2 bg-gradient-to-r from-[#ffffff18] to-[#ffffff08] rounded-xl mt-5 backdrop-blur-sm' } >
                            <div className="flex justify-center">
                                <img src={lock} className={'h-[15px] w-[15px]'}></img>
                            </div>
                        </button>
                    </div>
                    <div className = {'flex justify-center sm:text-[18px] text-[12px] sm:pb-2 py-2'}>
                        <button className = {'w-1/2 cursor-default sm:px-[100px] py-2 bg-gradient-to-r from-[#ffffff18] to-[#ffffff08] rounded-xl mt-5 backdrop-blur-sm' } >
                            <div className="flex justify-center">
                                <img src={lock} className={'h-[15px] w-[15px]'}></img>
                            </div>
                        </button>
                    </div>
                    <div className = {'flex justify-center sm:text-[18px] text-[12px] sm:pb-2 py-2'}>
                        <button className = {'w-1/2 cursor-default sm:px-[100px] py-2 bg-gradient-to-r from-[#ffffff18] to-[#ffffff08] rounded-xl mt-5 backdrop-blur-sm' } >
                            <div className="flex justify-center">
                                <img src={lock} className={'h-[15px] w-[15px]'}></img>
                            </div>
                        </button>
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
