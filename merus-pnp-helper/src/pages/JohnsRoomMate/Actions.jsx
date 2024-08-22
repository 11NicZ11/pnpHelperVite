function Actions() {
  return (
    <div className="Action">
      <hr></hr>
      <h1>Actions kampf</h1>
      <p>normal Rapier Attack: Hit +7 DMG W8+4 magic piercing</p>
      <p>
        chromatic Rapier Attack: Hit +7 DMG W8+4 magic piercing, 2W4 Acid, Cold,
        fire, lightning, poison
      </p>
      <p>
        Breath weapon: Range 15 feat cone; DMG 2d10 necrotic on fail, on success
        half dmg (increasing by 1w8 on lv 11(3W8), lv 17(4w8)); DEX save against
        DC 15 (= 8+ con mod + PR); amount of uses depending on PR
      </p>
      <p>
        Cantrip Booming Blade: hit+7; DMG W8+4 magic piercing, W8 Thunder on hit
        and another 2w8 lightning dmg if the target moves willingly one square
      </p>
      <p>
        Cantrip Green Flame Blade: hit+7; DMG W8+4 magic piercing, W8 fire on
        hit and w8+spell mod on another target in one squre occupied
      </p>
      <p>Shocking grasp: hit +7; DMG 2w8</p>
      <p>
        R2 Blindness/Deafness (cast up to hit additional target for each slot
        over R2)
      </p>
      <p>R2 Mirror Image</p>
      <p>R3 Haste</p>
      <p>Grapple</p>
      <p>Shove</p>
      <p>Disarm</p>
      <h1>Bonus Actions kampf</h1>

      <p>
        Blade Song: +1 AC, Walking speed + 10 feet, advantage on acrobatic
        checks, +1 to consaves holding concentration, ends early if
        incapacitated, amount of uses depending on PR
      </p>
      <p></p>
      <h1>Reaction kampf</h1>
      <p>R1 Shield</p>
      <p>R3 Counterspell</p>
      <p>opportunity attack</p>
      <h1>others</h1>
      <p>
        Aracane recovery: oncer per day on a short rest you can recover spell
        slots combined up to R3(half your wizard lv rounded up) not bigger then
        R6
      </p>
    </div>
  );
}

export default Actions;
