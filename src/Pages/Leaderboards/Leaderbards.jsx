import { useEffect, useState } from "react";
// import UserData from "./components/UserData.jsx";
import coin from "../../Assets/coins.png"
import battery from "../../Assets/battery.png"
import Board from "./Board.jsx";

const API = "https://sheet.best/api/sheets/ac762f3b-4dff-439a-a87d-f321b883f8d3";

const Leaderbards = () => {
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
    <div className="min-h-screen brightness-125 rounded-xl mt-10 backdrop-blur-sm" style={{ marginLeft: "140px" ,marginRight: "250px" }}>
      <div className={'flex justify-around'}>
        <img src={battery} alt="battery" />
        <img src={coin} alt="Image"  />
      </div>
      <table>
        <thead>

          <tr>
            <th style={{ paddingLeft: "40px" }}>Ran k</th>
            <th style={{ paddingLeft: "40px" }}>Username</th>
            <th style={{ paddingLeft: "40px" }}>Coins</th>
          </tr>
        </thead>
      </table>
      <table>
        <tbody>
          <Board users={users} />
        </tbody>
      </table>


    </div>
  );
};

export default Leaderbards;
