import React, { useEffect, useState } from "react";
import { WiNightAltCloudy } from "react-icons/wi";
import { MdLightbulbOutline } from "react-icons/md";


const Themetoggle = () => {
  const [theme, settheme] = useState(localStorage.getItem("theme"));
  const themetoggle = () => {
    settheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme ); 
  }, [theme]);
  return (
    <div className="nav_ac" onClick={themetoggle}>
      <MdLightbulbOutline />
    </div>
  );
};

export default Themetoggle;
