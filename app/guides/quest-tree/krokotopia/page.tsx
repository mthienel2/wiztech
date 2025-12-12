const page = () => {
  return (
    <div>
      <h2 className="text-3xl pb-6">This is the krokotopia quest tree page!</h2>
      <h3 className="text-xl">Royal Hall</h3>
      <ol className="list-decimal px-12 pb-6">
        <li>Krokotopia - explore + talk 3x</li>
        <li>Digging in the Dirt - talk</li>
        <li>Make Some Rubbings - explore + talk</li>
        <li>Fragments of a Key - D&C + talk</li>
        <li>The Final Rubbing - boss + talk</li>
        <li>Speak to the Assistant - talk</li>
      </ol>
      <h3 className="text-xl">Chamber of Fire</h3>
      <ol className="list-decimal px-12 pb-6" start={7}>
        <li>Find My Colleague - talk + talk</li>
        <li>New Digs - interact + talk</li>
        <li>Quarter Master - boss + talk</li>
        <li>Back to the Archeologist - talk</li>
      </ol>
      <h3 className="text-xl">Palace of Fire, Throne Room of Fire</h3>
      <ol className="list-decimal px-12 pb-6" start={11}>
        <li>Assault on the Palace - talk</li>
        <li>Gather the Troops - talk 5x</li>
        <li>Payback - mob + mob + talk</li>
        <li>Give 'Em Another Round - boss 4x + talk</li>
        <li>Back to Winthrop - talk</li>
        <li>Into the Map Room - talk + talk</li>
        <li>Serpent Staff - instance: talk + boss + talk</li>
        <li>Eye of Krok - instance: talk + boss + talk</li>
        <li>Use the Map Room - instance: talk + interact + talk</li>
        <li>Permission to Enter - talk</li>
        <li>Fandango - talk</li>
      </ol>
      <h3 className="text-xl">Hall of Champions</h3>
      <ol className="list-decimal px-12 pb-6" start={22}>
        <li>Order at Last - talk</li>
        <li>The Great General - talk</li>
        <li>Minion Massacre - mob + talk</li>
        <li>Search for the Seal - boss + talk</li>
        <li>General Admission - talk</li>
        <li>Coin of Destiny - boss + talk</li>
        <li>Lay of the Land - talk + talk</li>
        <li>Blades of Ice - D&C + talk</li>
        <li>Armor Handle - D&C + talk</li>
        <li>Get Some Bling - collect + talk</li>
        <li>Grip It! - D&C + talk</li>
        <li>Forge Key - D&C + talk</li>
        <li>Taking it to the Tuts - boss + interact + talk</li>
        <li>Back Among the Fold - talk</li>
      </ol>
      <h3 className="text-xl">Grand Arena</h3>
      <ol className="list-decimal px-12 pb-6" start={36}>
        <li>Quest for the Warrior - talk</li>
        <li>Mark of the Gladiator - D&C + talk</li>
        <li>Gladiator Games - talk</li>
        <li>Are You Experienced? - mob + talk</li>
        <li>Battle of the Sunbird - boss + talk</li>
        <li>Along Came a Spider - D&C + talk</li>
        <li>Stonechin - boss + talk</li>
        <li>Enter Sandman - mob + talk</li>
        <li>Malletmane - boss + talk</li>
        <li>Krokotopian Idol - mob + talk</li>
        <li>Who's More Amazing - boss + talk</li>
        <li>The Ultimate Battle - boss + talk</li>
      </ol>
      <h3 className="text-xl">
        Entrance Hall, Vault of Ice, Emperor's Retreat
      </h3>
      <ol className="list-decimal px-12 pb-6" start={48}>
        <li>Return to Shalek - talk</li>
        <li>Find the Fang - talk + boss + talk</li>
        <li>
          Breaking the Vault - instance: boss 3x + puzzle 3x + boss + talk
        </li>
        <li>Retribution - talk + boss + talk</li>
        <li>
          Guardians at the Gate - instance: talk + boss 2x + talk + explore +
          talk
        </li>
        <li>New Allies - instance: talk + interact + talk</li>
        <li>Overpower the Overseer - instance: talk + boss + talk</li>
        <li>The Right Combination - instance: talk + boss</li>
        <li>Back to Balance - talk + talk</li>
      </ol>
      <h3>Tomb of Storms, Temple of Storms</h3>
      <ol className="list-decimal px-12 pb-6" start={57}>
        <li>Tomb of Storms - talk + talk</li>
        <li>De-Cipher the Ahnics - boss + talk</li>
        <li>De-Cipher the Djeserits - boss + talk</li>
        <li>The Key to the Temple - boss 4x + talk</li>
        <li>Temple Dweller - instance: explore + boss + talk</li>
        <li>Test of Strength - instance: talk + boss 3x + talk</li>
        <li>Get Smart - instance: talk + puzzle 3x + talk</li>
        <li>Triumphant Return - talk</li>
        <li>Missing Souls - talk + talk</li>
      </ol>
    </div>
  );
};

export default page;
