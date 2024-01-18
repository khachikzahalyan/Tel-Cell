import { useEffect, useState } from "react";

import Exchange from "../Exchange";
import Information from "../Information";
import VideoPlayer from "../VideoPlayer";

const Main = () => {
  const [currentComponent, setCurrentComponent] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentComponent((prevComponent) => {
        return prevComponent === 3 ? 1 : prevComponent + 1;
      });
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  const components = {
    1: <VideoPlayer />,
    2: <Information />,
    3: <Exchange />,
  };

  return <div className="Main">{components[currentComponent]}</div>;
};

export default Main;
