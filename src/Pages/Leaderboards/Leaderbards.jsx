import { useEffect, useState } from "react";
import coin from "../../Assets/coins.png";
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
    <div className="mt-20 ml-[120px] backdrop-blur-sm bg-gradient-to-r from-[#ffffff10] to-[#ffffff08] mr-[30px]"  >
      <div className="flex">
        <div className="brightness-125 rounded-xl ml-4 px-5 py-8">
          <div className="flex items-start space-x-50">
            <div className="w-[110px]">
              <img className="h-[55px] w-full mx-[12px] py-[5px] my-1" src={battery} alt="battery" />
            </div>
            <div className="w-[450px]">
              <img className="h-[58px] w-full mx-[265px] py-[5px] my-1" src={pulse} alt="pulse" />
            </div>
          </div>

          <div className="flex items-start space-x-24 mx-9 my-2">
            <div className="text-2xl mt-47">Rank</div>
            <div className="text-2xl -mx-6 mt-47">Username</div>
            <div className="text-2xl mt-47">Coins</div>
          </div>

          <table>
            <tbody>
              <Board users={users} />
            </tbody>
          </table>
        </div>
        <div className="w-[224px] mx-[95px] mt-[35px] my-1">
          <img className="h-[520px] w-full" src={leader} alt="leader" />
        </div>
        
      </div>
      <div className=" ml-[65px] px-45">
      <div className=" flex bottom-0 left-0 mt-[10px] mb-4">
          <img className="h-[40px] w-[80px]" src={radar} alt="radar" />
          <div className="text-xl px-10">Coins Collected on Site : </div>
          <img className="h-[30px] w-[30px]" src={coin} alt="coin" />
          <div className="text-xl px-2">x98 </div>
        </div>
    </div>
    </div>
    
  );
};

export default Leaderboards;
