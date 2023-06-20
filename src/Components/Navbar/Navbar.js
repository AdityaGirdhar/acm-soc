import React, {useState} from "react";
import {Link} from "react-router-dom";

export default function Navbar() {
    const [currPage, setCurrPage] = useState(0);

    return(
        <>
            <div className={'bg-gradient-to-r from-[#ffffff18] to-[#ffffff08] px-2 py-2 sm:flex md:justify-around justify-center sm:text-[20px] sm:py-5 backdrop-blur-sm'}>
                <Link to={'/'}>
                    {currPage===0 ?
                        <div className={'md:text-start text-[20px] text-center font-[700] cursor-pointer'}>
                            ACM Summer of Code'23
                        </div> :
                        <div className={'md:text-start text-[20px] text-center cursor-pointer'} onClick={() => setCurrPage(0)}>ACM Summer of Code'23</div>
                    }
                </Link>
                <div className={'flex sm:justify-around justify-center'}>
                    {currPage===1 ?
                        <p className={'sm:px-5 px-2 font-[700] cursor-pointer'}>[Rules]</p> :
                        <Link to={'/rules'}><p className={'sm:px-5 px-2 cursor-pointer'} onClick={() => setCurrPage(1)}>[Rules]</p></Link>
                    }
                    {currPage===2 ?
                        <p className={'sm:px-5 px-2 font-[700] cursor-pointer'}>[Calender]</p> :
                        <Link to={'/calender'}><p className={'sm:px-5 px-2 cursor-pointer'} onClick={() => setCurrPage(2)}>[Calender]</p></Link>
                    }
                    {currPage===3 ?
                        <p className={'sm:px-5 px-2 font-[700] cursor-pointer'}>[Leaderboards]</p> :
                        <Link to={'/leaderboards'}><p className={'sm:px-5 px-2 cursor-pointer'} onClick={() => setCurrPage(3)}>[Leaderboards]</p></Link>
                    }
                </div>
            </div>
        </>
    )
}