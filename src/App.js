import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Leaderboards from "./Pages/Leaderboards/Leaderboards";
import Rules from "./Pages/Rules/Rules";

function App() {
  return (
      <>
        <div className="App bg-[#2B2B2B] scp-font text-[#07B509] ">
            <img src={require("../src/Assets/grid.png")} alt="bg" className={'absolute sm:w-screen sm:h-[900px]'}/>
            <div className={''}>
                <BrowserRouter>
                    <Navbar />
                      <Routes>
                        <Route path={'/'} element={<Home />}/>
                        <Route path={'/rules'} element={<Rules/>}/>
                        <Route path={'/leaderboards'} element={<Leaderboards />}/>
                      </Routes>
                </BrowserRouter>
            </div>
            <Footer />
        </div>
      </>
  );
}

export default App;
