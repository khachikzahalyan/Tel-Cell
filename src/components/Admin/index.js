import { useEffect, useState } from "react";

import getRates from "../../utils/getRates";
import updateRates from "../../utils/updateRates";

const Admin = () => {
  const [success, setSuccess] = useState(false);
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
    setSuccess(false);
    const result = await updateRates(rateId, {
      buy: rates.buy,
      sell: rates.sell,
    });

    if (result) setSuccess(true);
  };

  return (
    <>
      <input
        value={rates.buy}
        onChange={(e) => setRates((prev) => ({ ...prev, buy: e.target.value }))}
        placeholder="Arq"
      ></input>
      <input
        value={rates.sell}
        onChange={(e) =>
          setRates((prev) => ({ ...prev, sell: e.target.value }))
        }
        placeholder="Vajarq"
      ></input>
      <button disabled={!rates.buy || !rates.sell} onClick={handleUpdateRates}>
        Update
      </button>
      {success && <p>toshnia, elav sax</p>}
    </>
  );
};

export default Admin;
