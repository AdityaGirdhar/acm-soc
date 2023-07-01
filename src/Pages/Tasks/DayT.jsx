import React from 'react'
import {Link} from "react-router-dom";
import codess from "../../Assets/codess.png";
const DayT = () => {
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
                        Your final task is an ideathon, one where you brainstorm about issues which directly impact you!
                        </div>
                        <div className = {' py-2 relative z-10'}>
                        Choose a topic from the ones given below:
                        </div>
                        <p className = {'py-2 relative z-10'}>
                        "Student Engagement and Community Building: Encourage ideas that foster a sense of community among first-year students, such as social networking platforms for student interactions, online forums for sharing experiences and challenges, or events and initiatives to promote inclusivity and student engagement."
                        </p>
                        <center><p className = {'py-2 relative z-10'}>
                        OR
                        </p></center>
                        <p className = {'py-2 relative z-10'}>
                        "Campus Sustainability: Encourage ideas that promote sustainable practices on campus, such as reducing energy consumption, waste management and recycling initiatives, water conservation, or awareness campaigns on sustainable living."
                        </p>
                        <p className = {'py-2 relative z-10'}>
                        Deliverables : A presentation or a detailed document will do!
                        </p>
                        <p className = {'py-2 relative z-10'}>
                        We have exciting prizes in store, so don't wait anymore. Time is running out. Make your submission now!
                        </p>

                    </div>
                    <div className = {'flex justify-center sm:text-[18px] text-[12px] sm:pb-10 pb-5 py-2 text-center'}>
                    
                    <p className = {'w-1/2 cursor-pointer sm:px-[100px] py-2 bg-gradient-to-r from-[#ffffff18] to-[#ffffff08] rounded-xl mt-5 backdrop-blur-sm' } >
                    Submissions open on 3rd July</p>
                        
                        
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

export default DayT
