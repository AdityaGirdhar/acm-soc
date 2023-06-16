import React, {useState} from "react";
import {Link} from "react-router-dom";

export default function Navbar() {
    const [currPage, setCurrPage] = useState(0);

    return(
        <>
            <div className={'brightness-125 px-2 py-2 sm:flex justify-around sm:text-[20px] sm:py-5 backdrop-blur-sm'}>
                <Link to={'/'}>
                    {currPage===0 ?
                        <div className={'font-[700] cursor-pointer'}>
                            ACM Summer of Code'23
                        </div> :
                        <div className={'cursor-pointer'} onClick={() => setCurrPage(0)}>ACM Summer of Code'23</div>
                    }
                </Link>
                <div className={'flex sm:justify-around'}>
                    {currPage===1 ?
                        <p className={'sm:px-5 font-[700] cursor-pointer'}>[Rules]</p> :
                        <Link to={'/rules'}><p className={'sm:px-5 cursor-pointer'} onClick={() => setCurrPage(1)}>[Rules]</p></Link>
                    }
                    {currPage===2 ?
                        <p className={'sm:px-5 font-[700] cursor-pointer'}>[Calender]</p> :
                        <Link to={'/calender'}><p className={'sm:px-5 cursor-pointer'} onClick={() => setCurrPage(2)}>[Calender]</p></Link>
                    }
                    {currPage===3 ?
                        <p className={'sm:px-5 font-[700] cursor-pointer'}>[Leaderboards]</p> :
                        <Link to={'/leaderboards'}><p className={'sm:px-5 cursor-pointer'} onClick={() => setCurrPage(3)}>[Leaderboards]</p></Link>
                    }
                </div>
            </div>
        </>
    )
}