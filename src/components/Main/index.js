import { useEffect, useState } from "react";

import Exchange from "../Exchange";
import { useStore } from "../../store";
import Information from "../Information";
// import VideoPlayer from "../VideoPlayer";
import getRates from "../../utils/getRates";

const Main = () => {
  const { setStore } = useStore();
  const [currentComponent, setCurrentComponent] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentComponent((prevComponent) => {
        return prevComponent === 2 ? 1 : prevComponent + 1;
      });
    }, 57000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const data = await getRates();

        setStore({ rates: { buy: data[0].buy, sell: data[0].sell } });
      } catch (er) {
        console.error(er);
      }
    })();
  }, []);

  const components = {
    // 1: <VideoPlayer />,
    1: <Information />,
    2: <Exchange />,
  };

  return <div className="Main">{components[currentComponent]}</div>;
};

export default Main;
