import { format } from "date-fns";
import { hy } from "date-fns/locale";

import { useStore } from "../../store";

import "./styles.css";

const Exchange = () => {
  const { store } = useStore();

  const formattedDate = format(new Date(), "MMMM dd, yyyy, HH:mm", {
    locale: hy,
  });
  const [datePart, yearPart, timePart] = formattedDate.split(", ");
  const modifiedDateTimeString = `${datePart}, ${yearPart}թ, ${timePart}`;

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
            <div>{store?.rates?.buy}</div>
            <div>{store?.rates?.sell}</div>
          </div>
        </div>
        <footer className="flex">
          <div style={{ textTransform: "capitalize" }}>
            {modifiedDateTimeString}
          </div>
          <div>«ԹԵԼ-ՍԵԼ» ՓԲԸ</div>
        </footer>
      </div>
    </>
  );
};

export default Exchange;
