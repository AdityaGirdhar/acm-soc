import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Leaderboards from "./Pages/Leaderboards/Leaderboards";
import Rules from "./Pages/Rules/Rules";
import Calender from "./Pages/Calender/Calender";
import Tasks from './Pages/Tasks/Tasks';
import Day5 from './Pages/Tasks/Day5';
import Day6 from './Pages/Tasks/Day6';
import Day7 from './Pages/Tasks/Day7';
import DayT from './Pages/Tasks/DayT';

function App() {
  return (
      <>
        <div className="min-h-screen bg-[url('../src/Assets/grid.png')] bg-contain App bg-[#2B2B2B] scp-font text-[#07B509] ">
            <div className={''}>
                <BrowserRouter>
                    <Navbar />
                    <div className={''}>
                      <Routes>
                        <Route path={'/'} element={<Home />}/>
                        <Route path={'/rules'} element={<Rules/>}/>
                        <Route path={'/leaderboards'} element={<Leaderboards />}/>
                        <Route path={'/calender'} element={<Calender />}/>
                        <Route path={'/rules'} element={<Rules />}/>
                        <Route path={'/tasks'} element={<Tasks />}/>
                        <Route path={'/day5'} element={<Day5 />}/>
                        <Route path={'/day6'} element={<Day6 />}/>
                        <Route path={'/day7'} element={<Day7 />}/>
                        <Route path={'/dayT'} element={<DayT />}/>
                      </Routes>
                    </div>
                    <Footer />
                </BrowserRouter>
            </div>
        </div>
      </>
  );
}

export default App;
