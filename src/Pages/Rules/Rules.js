import React from "react";

export default function Rules() {
    return(
        <div className={'pt-[80px]'}>
            <div className={'flex justify-around'}>
                <img className={'h-[60px]'} src={require('../../Assets/battery.png')} alt={'battery'}/>
                <img className={'h-[60px]'} src={require('../../Assets/pulse.png')} alt={'pulse'}/>
                <img className={'h-[60px]'} src={require('../../Assets/pulse.png')} alt={'pulse'}/>
            </div>
            <div className={'flex flex-col items-center justify-center pt-[50px]'}>
                <div className={'w-3/5 text-[20px] font-[400]'}>
                    <p className={'py-2'}>
                        Captain Jack Sparrow has achieved immortality after drinking the Elixir of Life. However, he doesn’t realize his eternal enemy Captain Davy Jones had also managed a slip of the same and is out to get his crew and money once and for all!
                    </p>
                        It is 2050 but the tale of the sea bandits continue! Help the Captain of the golden seas find the key to the Dead Man’s Chest once again to kill his arch nemesis once and for all! But, there is a catch; the Master of the Kraken, evil Jones has laid out several traps for our hero, one each for 11 days straight which you must help him solve, each within the four and twenty hours of the day (lest be engulfed by the monsters of the sea)!
                    <p className={'py-2'}>
                        Fill Jack’s aircraft’s fuel tank in exchange of coins you earn on your way and sail past the oceans to attack the Flying Dutchman!
                    </p>
                    <p className={'py-2'}>
                        Note: Early birds earn 2 coins a day, the rest may not fret for they too get one!
                    </p>
                </div>
            </div>
            <div className={'flex justify-around pt-[30px] pb-[50px]'}>
                <img className={'h-[60px]'} src={require('../../Assets/pulse.png')} alt={'battery'}/>
                <div></div>
                <img className={'h-[60px]'} src={require('../../Assets/radar_thingy.png')} alt={'radar'}/>
            </div>
        </div>
    )
}