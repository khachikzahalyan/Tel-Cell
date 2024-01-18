import "./styles.css";

const Exchange = () => {
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
            <div>4.30</div>
            <div>4.60</div>
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
