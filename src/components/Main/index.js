import { useEffect, useState } from "react";

import Exchange from "../Exchange";
import Services from "../Services";
import VideoPlayer from "../VideoPlayer";

const Main = () => {
  const [currentComponent, setCurrentComponent] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentComponent((prevComponent) => {
        return prevComponent === 2 ? 1 : prevComponent + 1;
      });
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  const components = {
    1: <VideoPlayer />,
    2: <Services />,
    3: <Exchange />
  };

  return <div className="Main">{components[currentComponent]}</div>;
};

export default Main;
