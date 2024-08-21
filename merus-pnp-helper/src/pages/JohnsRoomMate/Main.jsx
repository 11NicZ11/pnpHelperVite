import Stats from "./Stats.jsx";
import Header from "./Header.jsx";
function Main() {
  let str = 10;
  let dex = 15;
  let con = 14;
  let int = 17;
  let wis = 12;
  let char = 16;

  return (
    <>
      <Header />
      <Stats
        strS={str}
        strM={(str - 10) / 2}
        dexS={dex}
        dexM={(dex - 10) / 2}
        conS={con}
        conM={(con - 10) / 2}
        intS={int}
        intM={(int - 10) / 2}
        wisS={wis}
        wisM={(wis - 10) / 2}
        charS={char}
        charM={(char - 10) / 2}
      />
    </>
  );
}

export default Main;
