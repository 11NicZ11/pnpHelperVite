function Zauber() {
  return (
    <div className="Wizard">
      <h1>Wizard zauber prepared</h1>
      <h1>Cantrip</h1>
      <p>
        Booming Blade: S,M (melee weapong worth 1sp or more); duration one
        round; cast 1 Action; range 5 feet; Dmg W8 thunder on hit, 2W8 thunder
        if the target moves willingly 1 square or more after beeing hit
        (increase by one W8 at lv 11(2w8 and 3w8), lv 17(3w8 and 4w8))
      </p>
      <p>
        Green-Flame Blade: S,M (melee weapong worth 1sp or more); duration: one
        round; cast 1 Action; range 5 feet; Dmg W8 fire on hit, another creature
        1 square next to the hit creature takes 1W8+ability mod (increase by one
        W8 at lv 11(2w8 and 2w8), lv 17(3w8 and 3w8))
      </p>
      <p>
        Light: V,M (a firefly or phosphorescent moss); Duration 1 hour; Cast
        time 1 Action; range touch/20 feet in all directions; touch an object
        not larger then 10 feet in any dimension, the object sheds bright light
        in a 20-foot radius and dim light for an additional 20 feet. the light
        can be colored as you like. you can cover the light. The spell ends if
        you cast it again on or dismiss it as an action. target an object worn
        by a hostile creature causes them to make an dex safe against your spell
        casting DC
      </p>
      <p>
        Shocking Grasp: V,S; duration instant; Casttime 1 action; range touch;
        Melee spell attack aginst the target (with advantage if the target wears
        metal armor). On Hit the target receive 2w8 lightning dmg (increase by
        one W8 at lv 11(3w8), lv 17(4w8))
      </p>
      <h1>Rang 1 Zauber Slots 5</h1>
      <p>Detect Magic: Ritual</p>
      <p>Shield</p>
      <h1>Rang 2 Zauber Slots 3</h1>
      <p>Blindness/Deafness</p>
      <p>Magic weapon</p>
      <p>Mirror Image</p>
      <h1>Rang 3 Zauber Slots 2</h1>
      <p>Blindness/deafness (rank up)</p>
      <p>Counterspell</p>
      <p>Haste</p>
    </div>
  );
}

export default Zauber;
