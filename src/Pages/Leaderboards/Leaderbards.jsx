import { useEffect, useState } from "react";
// import UserData from "./components/UserData.jsx";
import coin from "../../Assets/coins.png"
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
  }, []);

  return (
    <div className="brightness-125 rounded-xl mt-10 backdrop-blur-sm" style={{ marginLeft: "140px" ,marginRight: "250px" }}>
      <table>
        <thead>
            
          <tr>
            <th style={{ paddingLeft: "40px" }}>Rank</th>
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
      <img src={coin} alt="Image" style={{ marginLeft: "700px" , marginTop :"200px",  marginRight: "10px" }} />

    </div>
  );
};

export default Leaderbards;
