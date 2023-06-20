import React from "react";

export default function Home() {
    return(
        <>
            <div className={'flex sm:py-10 flex-col sm:justify-center items-center'}>
                <div className={'sm:w-3/6 px-4'}>
                    <div className={'sm:text-[20px] text-[12px]'}>
                        <p className={'py-2'}>
                            Welcome to IIIT Delhi Student Chapter’s self hosted ACM Summer of Code! This is an 11 day challenge for beginners and experts alike that presents you with one unique task per day with a 24 hour deadline. (You heard that right, deadline again.)
                        </p>
                        <p className={'py-2'}>
                            As you progress through each day's task, you will have the opportunity to put your creativity and logical thinking to the test! You'll encounter puzzles, optimization challenges, and hands-on projects that will push you to think critically and devise efficient solutions.
                        </p>
                        <p className={'py-2'}>
                            So, roll up your sleeves, buckle up your coding skills, and get ready to embark on this incredible 11-Day Coding Challenge. We are ready, are you?
                        </p>
                    </div>
                    <div className={'flex justify-center sm:text-[24px] text-[12px] sm:pb-10 pb-2'}>
                        <button className={'cursor-default px-[100px] py-2 bg-gradient-to-r from-[#ffffff18] to-[#ffffff08] rounded-xl mt-5 backdrop-blur-sm'}>Event starts on 21/06/23, be ready.</button>
                    </div>
                </div>
            </div>
        </>
    )
}