import { useEffect, useState } from "react";

import Exchange from "../Exchange";
import Services from "../Services";
import VideoPlayer from "../VideoPlayer";

const Main = () => {
  const [currentComponent, setCurrentComponent] = useState(1);

  useEffect(() => {
    let intervalDuration;

    switch (currentComponent) {
      case 1:
        intervalDuration = 315000;
        break;
      case 2:
      case 3:
        intervalDuration = 60000;
        break;
      default:
        intervalDuration = 60000;
    }

    const intervalId = setTimeout(() => {
      setCurrentComponent((prevComponent) => {
        return prevComponent === 3 ? 1 : prevComponent + 1;
      });
    }, intervalDuration);

    return () => clearTimeout(intervalId);
  }, [currentComponent]);

  const components = {
    1: <VideoPlayer />,
    2: <Services />,
    3: <Exchange />
  };

  return <div className="Main">{components[currentComponent]}</div>;
};

export default Main;
