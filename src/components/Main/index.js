import { useEffect, useState } from "react";

import Exchange from "../Exchange";
import Services from "../Services";
import VideoPlayer from "../VideoPlayer";

const Main = () => {
  const [currentComponent, setCurrentComponent] = useState(1);

  useEffect(() => {
    const intervalDuration = 60000;

    const intervalId = setInterval(() => {
      setCurrentComponent((prevComponent) =>
        prevComponent === 2 ? 1 : prevComponent + 1
      );
    }, intervalDuration);

    return () => clearInterval(intervalId);
  }, []);

  const components = {
    1: <Exchange />,
    2: <Services />,
  };

  return <div className="Main">{components[currentComponent]}</div>;
};

export default Main;
