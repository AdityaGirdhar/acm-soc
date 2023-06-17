import {useEffect, useState} from "react";
// import UserData from "./components/UserData.jsx";
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
            console.error(e)
        }
    }


    useEffect(() => {
        fetchUsers(API);
    }, [])
    return <>
        <table>
            <thead>
            <tr>
                <th>700</th>
                <th>State1</th>
            </tr>
            </thead>
            <tbody>
            <Board users={users}/>
            </tbody>
        </table>
    </>
}

export default Leaderbards;
