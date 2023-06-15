import React from "react";

export default function Home() {
    return(
        <>
            <div className={'flex py-10 flex-col justify-center items-center'}>
                <div className={'w-3/6 '}>
                    <div className={'text-[24px]'}>
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
                    <div className={'flex justify-center text-[24px] pb-10 '}>
                        <button className={'px-[100px] py-2 brightness-125 rounded-xl mt-5 backdrop-blur-sm'}>Enter Challenge</button>
                    </div>
                </div>
            </div>
        </>
    )
}