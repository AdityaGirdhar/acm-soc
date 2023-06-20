import React from "react";

export default function Calender() {
    return(
        <div className={'flex justify-center'}>
            <div className={' min-h-screen w-4/5 sm:w-full flex md:flex-row flex-col justify-around md:py-[100px] py-[30px]'}>
                <div className={'md:w-1/2 backdrop-blur-sm bg-gradient-to-r from-[#ffffff18] to-[#ffffff08] rounded-[30px] md:mx-[50px] sm:mx-[10px] px-[10px] py-[15px]'}>
                    <div className={'flex'}>
                        <img className={'md:h-[50px] md:w-[150px] h-[30px] mx-1'} src={require('../../Assets/battery.png')} alt={'battery'}/>
                        <img className={'md:h-[50px] h-[30px] mx-1'} src={require('../../Assets/radar_thingy.png')} alt={'radar'}/>
                    </div>
                    <div className={'flex justify-center items-center py-[20px]'}>
                        <div className={'flex flex-col justify-center items-center'}>
                            <img className={'h-[18px] my-1'} src={require('../../Assets/1.png')} alt={'line'}/>
                            <img className={'h-[18px] my-1'} src={require('../../Assets/2.png')} alt={'line'}/>
                            <img className={'h-[18px] my-1'}  src={require('../../Assets/3.png')} alt={'line'}/>

                            <img className={'h-[18px] my-1'}  src={require('../../Assets/1c.png')} alt={'line'}/>
                            {/*<img className={'h-[18px] my-1'}  src={require('../../Assets/4.png')} alt={'line'}/>*/}
                            <img className={'h-[18px] my-1'}  src={require('../../Assets/2c.png')} alt={'line'}/>
                            {/*<img className={'h-[18px] my-1'}  src={require('../../Assets/5.png')} alt={'line'}/>*/}
                            <img className={'h-[18px] my-1'}  src={require('../../Assets/3c.png')} alt={'line'}/>
                            {/*<img className={'h-[18px] my-1'}  src={require('../../Assets/6.png')} alt={'line'}/>*/}
                            <img className={'h-[18px] my-1'}  src={require('../../Assets/4c.png')} alt={'line'}/>
                            {/*<img className={'h-[18px] my-1'}  src={require('../../Assets/7.png')} alt={'line'}/>*/}
                            <img className={'h-[18px] my-1'}  src={require('../../Assets/5c.png')} alt={'line'}/>
                            {/*<img className={'h-[18px] my-1'}  src={require('../../Assets/8.png')} alt={'line'}/>*/}
                            <img className={'h-[18px] my-1'}  src={require('../../Assets/6c.png')} alt={'line'}/>
                            {/*<img className={'h-[18px] my-1'}  src={require('../../Assets/9.png')} alt={'line'}/>*/}
                            <img className={'h-[18px] my-1'}  src={require('../../Assets/7c.png')} alt={'line'}/>
                            {/*<img className={'h-[18px] my-1'}  src={require('../../Assets/10.png')} alt={'line'}/>*/}
                            <img className={'h-[18px] my-1'}  src={require('../../Assets/8c.png')} alt={'line'}/>
                            {/*<img className={'h-[18px] my-1'}  src={require('../../Assets/11.png')} alt={'line'}/>*/}
                            <img className={'h-[18px] my-1'}  src={require('../../Assets/9c.png')} alt={'line'}/>
                            {/*<img className={'h-[18px] my-1'}  src={require('../../Assets/12.png')} alt={'line'}/>*/}
                            <img className={'h-[18px] my-1'}  src={require('../../Assets/10c.png')} alt={'line'}/>
                            {/*<img className={'h-[18px] my-1'}  src={require('../../Assets/13.png')} alt={'line'}/>*/}
                            <img className={'h-[18px] my-1'}  src={require('../../Assets/11c.png')} alt={'line'}/>
                            {/*<img className={'h-[18px] my-1'}  src={require('../../Assets/14.png')} alt={'line'}/>*/}

                        </div>
                        <div className={'px-2'}>
                            <p className={'px-2 h-[20px] my-1 text-[20px]'}></p>
                            <p className={'px-2 h-[20px] my-1 text-[20px]'}></p>
                            <p className={'px-2 h-[20px] my-1 text-[20px]'}></p>
                            <p className={'px-2 h-[20px] my-1 text-[20px]'}>1</p>
                            <p className={'px-2 h-[20px] my-1 text-[20px]'}>2</p>
                            <p className={'px-2 h-[20px] my-1 text-[20px]'}>3</p>
                            <p className={'px-2 h-[20px] my-1 text-[20px]'}>4</p>
                            <p className={'px-2 h-[20px] my-1 text-[20px]'}>5</p>
                            <p className={'px-2 h-[20px] my-1 text-[20px]'}>6</p>
                            <p className={'px-2 h-[20px] my-1 text-[20px]'}>7</p>
                            <p className={'px-2 h-[20px] my-1 text-[20px]'}>8</p>
                            <p className={'px-2 h-[20px] my-1 text-[20px]'}>9</p>
                            <p className={'px-2 h-[20px] my-1 text-[20px]'}>10</p>
                            <p className={'px-2 h-[20px] my-1 text-[20px]'}>11</p>
                        </div>
                    </div>
                </div>
                <div className={'md:w-1/2 sm:mx-[50px]'}>
                    <img className={'z-50'} src={require('../../Assets/coin-large.png')} alt={'coin'}/>
                    <div className={'sm:text-[18px] text-[16px] break-words'}>
                        <p>
                            In "Pirates of the Caribbean: Dead Man's Chest" and "Pirates of the Caribbean: At World's End," Davy Jones, the captain of the Flying Dutchman, has hidden faces in the tentacles of his beard. It's a subtle detail that adds to the mystical
                            and eerie nature of the character.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}