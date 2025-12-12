const page = () => {
  return (
    <div>
      <h2 className="text-3xl pb-6">
        This is the wizard city quest tree page!
      </h2>
      <h3 className="text-xl">Unicorn Way</h3>
      <ol className="list-decimal px-12 pb-6">
        <li>Unicorn Way - Explore + Talk</li>
        <li>Ghost Hunters - Mob + Talk + Talk</li>
        <li>Skeleton Crew - Mob + Talk</li>
        <li>Monsters and Mazes - Explore + Talk</li>
        <li>Finding Out Why - Interact + D&C + Explore + Talk</li>
        <li>Who Could It Be Now? - Talk</li>
        <li>Sinister Skeleton - Explore + Boss + Explore + Talk</li>
        <li>Grim Tales - Talk + Talk</li>
        <li>To Ravenwood! - Talk 4x</li>
        <li>Panic In Three Streets! - Talk</li>
        <li>
          Secret Strife of Pets - Interact + Explore + Mob + Explore + Interact
          + Explore + Talk 3x + Interact + Talk + Talk
        </li>
      </ol>
      <h3 className="text-xl">Cyclops Lane</h3>
      <ol className="list-decimal px-12 pb-6" start={12}>
        <li>A Good Day to Cyclops - Explore + Talk</li>
        <li>A Stroll With Trolls - Mob + Talk</li>
        <li>Run and Done - Talk 6x</li>
        <li>The Cave Escape - Mob + Explore + D&C + Interact 3x + Talk</li>
        <li>Oh Me, Oh Minotaur - Mob + Talk</li>
        <li>Akilles' Deal - Explore + Boss + Interact + Talk + Talk</li>
      </ol>
      <h3 className="text-xl">Triton Avenue</h3>
      <ol className="list-decimal px-12 pb-6" start={18}>
        <li>Trouble on Triton Avenue - Talk</li>
        <li>Menacing Minions - Mob + Talk</li>
        <li>The Shadow of Death Magic - Talk + D&C + Talk</li>
        <li>Quest for Clues - D&C + Talk</li>
        <li>Catching a Glimpse - Talk</li>
        <li>
          Clear as Crystal - Interact + D&C + Talk + Explore + Interact + Talk
        </li>
        <li>Luminate - Talk</li>
        <li>The Enemy Revealed - Explore + Boss + Talk + Talk</li>
        <li>To Tame a Tempest - Talk + Interact + Talk + Talk</li>
        <li>Triton Report - Talk</li>
        <li>Calming the Chaos - Talk</li>
      </ol>
      <h3 className="text-xl">Firecat Alley</h3>
      <ol className="list-decimal px-12 pb-6" start={29}>
        <li>Putting Out the Fire! - Talk + Mob + Talk</li>
        <li>She Ran Crying Wildfire - Talk + Mob + Talk</li>
        <li>100% Not That Witch - D&C + Talk + Interact + Interact + Talk</li>
        <li>Which Craft? - Talk + Talk + Interact + Interact + Talk</li>
        <li>The Cure - Explore + Boss + Talk + Talk</li>
        <li>Firecat's In The Bag - Talk + Talk</li>
      </ol>
      <h3 className="text-xl">Olde Town, Haunted Cave, Nightside</h3>
      <ol className="list-decimal px-12 pb-6" start={36}>
        <li>
          A Brief History of the Spiral - Talk + Explore + Explore + Boss +
          Explore + Talk
        </li>
        <li>Throwing Nightshade - Explore + Boss + Talk</li>
        <li>Things and Stuff - D&C + Talk + Talk</li>
        <li>
          Take a Walk on the Nightside - Explore + Talk + Explore + Talk + Talk
        </li>
      </ol>
    </div>
  );
};

export default page;
