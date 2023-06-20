import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Leaderboards from "./Pages/Leaderboards/Leaderboards";
import Rules from "./Pages/Rules/Rules";
import Calender from "./Pages/Calender/Calender";

function App() {
  return (
      <>
        <div className="min-h-screen bg-[url('../src/Assets/grid.png')] bg-contain App bg-[#2B2B2B] scp-font text-[#07B509] ">
            <div className={''}>
                <BrowserRouter>
                    <Navbar />
                      <Routes>
                        <Route path={'/'} element={<Home />}/>
                        <Route path={'/rules'} element={<Rules/>}/>
                        <Route path={'/leaderboards'} element={<Leaderboards />}/>
                        <Route path={'/calender'} element={<Calender />}/>
                        <Route path={'/rules'} element={<Rules />}/>
                      </Routes>
                    <Footer />
                </BrowserRouter>
            </div>
        </div>
      </>
  );
}

export default App;
