import { useEffect, useState } from "react";
import coin from "../../Assets/coin-large.png";
import battery from "../../Assets/battery.png";
import pulse from "../../Assets/pulse.png";
import Board from "./Board.jsx";
import leader from "../../Assets/leaderboard.png";
import radar from "../../Assets/radar_thingy.png";

const API = "https://sheet.best/api/sheets/ac762f3b-4dff-439a-a87d-f321b883f8d3";

const Leaderboards = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setUsers(data);
      }
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUsers(API);
    console.log(API);
  }, []);

  return (
    <div className="h-screen">
      <div className="flex justify-center">
          <div className={'sm:w-3/4 w-full flex justify-center'}>
              <div className={' h-screen w-3/4 flex justify-end flex-col'}>
                <div className="h-3/4 backdrop-blur-sm bg-gradient-to-r from-[#ffffff10] to-[#ffffff08] rounded-xl px-5 py-8">
                    <div className="flex justify-evenly">
                      <div className="w-1/2 flex justify-start">
                        <img className="sm:h-[40px] sm:w-[120px] h-[30px]" src={battery} alt="battery" />
                      </div>
                      <div className="w-1/2 flex justify-end">
                        <img className="sm:h-[50px] sm:w-[300px h-[30px]" src={pulse} alt="pulse" />
                      </div>
                    </div>
                    <div className={'py-[10px] h-full '}>
                      <table className={'table-auto w-full'}>
                        <Board users={users} />
                      </table>
                    </div>
                </div>
                <div className="w-full sm:text-[20px] text-[16px]">
                  <div className="sm:w-full w-3/4 flex pt-[40px] pb-[30px]">
                      <img className="sm:h-[40px] sm:w-[120px] h-[30px]" src={radar} alt="radar" />
                      <div className="sm:px-10 px-2">Coins Collected on Site : </div>
                      <img className="h-[30px] w-[30px]" src={coin} alt="coin" />
                      <div className="text-xl px-2">x98 </div>
                  </div>
                </div>
              </div>
          </div>
            <div className="sm:w-1/4 flex justify-center items-center">
              <img className="sm:block hidden" src={leader} alt="leader" />
            </div>
      </div>

    </div>
    
  );
};

export default Leaderboards;
