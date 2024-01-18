import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import getRates from "../../utils/getRates";
import updateRates from "../../utils/updateRates";

import "react-toastify/dist/ReactToastify.css";

import "./styles.css";

const Admin = () => {
  const [rateId, setRateId] = useState(null);

  const [rates, setRates] = useState({
    buy: "",
    sell: "",
  });

  useEffect(() => {
    (async () => {
      try {
        const data = await getRates();

        setRates({
          buy: data[0].buy,
          sell: data[0].sell,
        });

        setRateId(data[0].id);
      } catch (er) {
        console.error(er);
      }
    })();
  }, []);

  const handleUpdateRates = async () => {
    const result = await updateRates(rateId, {
      buy: rates.buy,
      sell: rates.sell,
    });

    if (result) {
      toast("Փոխարժեքը հաջողությամբ թարմացվեց!");
    }
  };

  return (
    <div className="styled-form-container">
      <div className="input-container">
        <p>Առք</p>
        <input
          className="styled-input"
          value={rates.buy}
          onChange={(e) =>
            setRates((prev) => ({ ...prev, buy: e.target.value }))
          }
        />
      </div>
      <div className="input-container">
        <p>Վաճառք</p>
        <input
          className="styled-input"
          value={rates.sell}
          onChange={(e) =>
            setRates((prev) => ({ ...prev, sell: e.target.value }))
          }
        />
      </div>

      <button
        className="styled-button"
        disabled={!rates.buy || !rates.sell}
        onClick={handleUpdateRates}
      >
        Թարմացնել
      </button>
      <ToastContainer />
    </div>
  );
};

export default Admin;
