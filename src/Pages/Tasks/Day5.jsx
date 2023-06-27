import React from 'react'
import {Link} from "react-router-dom";
import codess from "../../Assets/codess.png";
const Day5 = () => {
  return (
    <>
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
                        Use AI-based Image Generation tools (like Midjourney, DALL-E, Stable Diffusion etc.) to generate images which revolve around the following theme:
                        </div>
                        <p className = {'py-2 relative z-10'}>
                        Design an image depicting a crew of futuristic cyber pirates using augmented reality (AR) glasses to uncover hidden digital treasures buried deep within the virtual Caribbean.
                        </p>
                        <p className = {'py-2 relative z-10'}>
                        You will be judged on creativity and inventiveness among other things, so go wild with your imagination! Make sure you don't forget to incorporate today's theme, though. We can't wait to see what you come up with!
                        </p>
                    </div>
                    <div className = {'flex justify-center sm:text-[18px] text-[12px] sm:pb-10 pb-5 py-2 text-center'}>
                    
                    <a href="https://forms.gle/5ZEM624KcZa9Dtxc9" target="_blank" className = {'w-1/2 cursor-pointer sm:px-[100px] py-2 bg-gradient-to-r from-[#ffffff18] to-[#ffffff08] rounded-xl mt-5 backdrop-blur-sm' } >
                        Submit</a>
                        
                        
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
  )
}

export default Day5