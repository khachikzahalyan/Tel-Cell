import { useEffect, useState } from "react";

import getRates from "../../utils/getRates";

import "./styles.css";

const Exchange = () => {
  const [rates, setRates] = useState({ buy: "", sell: "" });

  useEffect(() => {
    (async () => {
      try {
        const data = await getRates();

        setRates({
          buy: data[0].buy,
          sell: data[0].sell,
        });
      } catch (er) {
        console.error(er);
      }
    })();
  }, []);

  return (
    <>
      <img src="/telcell.svg" alt="telcell" className="logo" />
      <div className="main">
        <h1>Դրամական փոխանցումների համակարգով ստացվող ՌԴ ռուբլու փոխարժեք</h1>

        <h2 className="exchange-system">Unistream</h2>
        <div>
          <div className="row flex">
            <div>Արժույթ</div>
            <div>Առք</div>
            <div>Վաճառք</div>
          </div>
          <div className="row flex">
            <div>
              <div>
                <img className="flag" src="/russia.png" alt="russia-rate" />
                <span>RUB</span>
              </div>
            </div>
            <div>{rates.buy}</div>
            <div>{rates.sell}</div>
          </div>
        </div>
        <footer className="flex">
          <div>Հունվարի 14, 2024թ, 11։11</div>
          <div>«ԹԵԼ-ՍԵԼ» ՓԲԸ</div>
        </footer>
      </div>
    </>
  );
};

export default Exchange;
