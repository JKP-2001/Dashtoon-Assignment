import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <div className="">
        <Home />
      </div>
    </>
  );
}

export default App;
