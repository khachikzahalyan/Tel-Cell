import "./styles.css";

function Services() {
  return (
    <div className="general">
      <div className="header">
        <div className="logoImg">
          <img src="/telcell.svg" alt="logo" />
          <span className="text">Տրամադրվող ծառայությունների սակագները</span>
        </div>
      </div>
      <div className="generalBox">
        <div className="box1">
          <h2>Բջջային օպերատորներ</h2>
          <div className="operators">
            <div className="company">
              <p>Viva MTS</p>
              <p>Team Telecom</p>
            </div>
            <div className="operatorsPrecent">
              <span className="zero">0</span>
              <span className="percent">%</span>
              <br></br>
              <span className="x">միջնորդավճար</span>
            </div>
          </div>
          <h2>Ինտերնետ և IP հեռախոսակապ</h2>
          <div className="operators">
            <div className="company">
              <p>Ucom</p>
              <p>Rostelecom</p>
            </div>
            <div className="operatorsPrecent">
              <span className="zero">0</span>
              <span className="percent">%</span>
              <br></br>
              <span className="x">միջնորդավճար</span>
            </div>
          </div>
          <h2>Բանկեր</h2>
          <div className="operatorsBank">
            <div className="banksBox">
              <p>ՎՏԲ - Հայաստան Բանկ ՓԲԸ </p>
              <p>300֏</p>
            </div>
            <div className="banksBox">
              <p>Ինեկոբանկ ԹԲԸ</p>
              <p>400֏</p>
            </div>
            <div className="banksBox">
              <p>ԱՄԻՕ Բանկ ՓԲԸ</p>
              <p>300֏</p>
            </div>
            <div className="banksBox">
              <p>Արդշինբանկ ՓԲԸ</p>
              <p>500֏</p>
            </div>
          </div>
        </div>
        <div className="box2">
          <h2>Կոմունալ ծառայություններ</h2>
          <div className="operators">
            <div className="company">
              <p>Էլեկտրամատակարարում</p>
              <p>Գազամատակարարում</p>
              <p>Ջրամատակարարում</p>
            </div>
            <div className="utilityPrecent">
              <span className="zero">0</span>
              <span className="percent">%</span>
              <br></br>
              <span className="x">միջնորդավճար</span>
            </div>
          </div>
          <h2>Դրամական փոխանցումներ</h2>
          <div className="operators">
            <div className="company">
              <p id="unistream">Unistream</p>
            </div>
            <div className="operatorsPrecent">
              <span className="zero">0.6</span>
              <span className="percent">%-ից</span>
              <br></br>
              <span className="x">սկսած</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
