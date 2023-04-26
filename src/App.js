import './App.css';

import LeftSideBar from './components/LeftSideBar';
import RightSideBar from './components/RightSideBar';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    <main className="h-full">
      <div className="sticky top-0 z-10 h-full">
        <Header />
      </div>
      <div className="flex flex-col md:flex-row h-full">
        <LeftSideBar />
        <div className="py-4 px-5 w-full bg-[#F5F7F9] h-full">
          <Body />
        </div>
        <RightSideBar />
      </div>
    </main>

  );
}

export default App;
