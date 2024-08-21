import Description from "./Description.jsx";
import Stats from "./Stats.jsx";
import HPAC from "./HPAC.jsx";
import ArmorDisplay from "./ArmorDisplay.jsx";
import Zauber from "./Zauber.jsx";
import Actions from "./Actions.jsx";
function Main() {
  /*sektion status werte*/
  let übungsbonus = 3;
  let str = 10;
  let strM = (str - 10) / 2;
  let dex = 16;
  let dexM = (dex - 10) / 2;
  let con = 18;
  let conM = (con - 10) / 2;
  let int = 18;
  let intM = (int - 10) / 2;
  let wis = 12;
  let wisM = (wis - 10) / 2;
  let char = 16;
  let charM = (char - 10) / 2;
  /*sektion lebenspunkte*/
  let lv =
    5 *
    2; /*die mal zwei sind weil die klassen lv mal 2 genommen werden und damit jeder lv bezogene flat bonus verdoppelt wird*/
  let base = 4;
  let zäh = 2;
  let manRoll = 5; /*der manRoll status wird mit jeden neuen lv um den wert, welcher über 4 hinaus geht, erhöht*/
  /*sektion RüstungsKlasse*/
  let rüst = 13 + dexM;
  return (
    <>
      <div className="headInMain">
        <Description />
        <HPAC
          HP={(conM + base + zäh) * lv + 6 + 6 + manRoll}
          AC={rüst}
          PR={übungsbonus}
        />
        <Stats
          strS={str}
          strM={strM}
          strSave={strM}
          dexS={dex}
          dexM={dexM}
          dexSave={dexM}
          conS={con}
          conM={conM}
          conSave={conM + übungsbonus}
          intS={int}
          intM={intM}
          intSave={intM + übungsbonus}
          wisS={wis}
          wisM={wisM}
          wisSave={wisM}
          charS={char}
          charM={charM}
          charSave={charM}
        />
      </div>

      <div>
        <Actions />
      </div>

      <div>
        <ArmorDisplay />
      </div>

      <div>
        <Zauber />
      </div>
    </>
  );
}

export default Main;
