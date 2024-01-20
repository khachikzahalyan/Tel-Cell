import { useEffect, useState } from "react";

import Exchange from "../Exchange";
import Services from "../Services";
// import VideoPlayer from "../VideoPlayer";

const Main = () => {
  const [currentComponent, setCurrentComponent] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentComponent((prevComponent) => {
        return prevComponent === 2 ? 1 : prevComponent + 1;
      });
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  const components = {
    // 1: <VideoPlayer />,
    1: <Services />,
    2: <Exchange />,
  };

  return <div className="Main">{components[currentComponent]}</div>;
};

export default Main;
