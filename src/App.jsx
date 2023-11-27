import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

//styles
import "./App.scss";

//pages
import HomePage from "./pages/home-page/home-page";
import Sponsor from "./components/Sponsor/Sponsor";
import GridBox from "./components/GridBox/GridBox";

function App() {
  let mediaQuery = window.matchMedia(`(max-width: 480px)`);

  const [pathname, setPathname] = useState(window.location.pathname);
  const [query, setQuery] = useState(mediaQuery.matches);


  useEffect(() => {
    window.onresize = () => {
      setQuery(mediaQuery.matches);
    };
  }, [mediaQuery]);

  const handlePathname = () => {
    setPathname(window.location.pathname);
    // eslint-disable-next-line

  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<HomePage HandlePathname={handlePathname} />}
          />
          <Route
            exact
            path="/box"
            element={<GridBox/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
