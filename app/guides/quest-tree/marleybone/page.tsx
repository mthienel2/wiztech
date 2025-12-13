const page = () => {
  return (
    <div>
      <h2 className="text-3xl pb-6">This is the marleybone quest tree page!</h2>
      <h3 className="text-xl">Wolfminster Abbey</h3>
      <ol className="list-decimal px-12 pb-6">
        <li>Sarcophagus Search - Talk</li>
        <li>Not So Fast... - Talk</li>
        <li>A Cat-tastrophy - Talk</li>
      </ol>
      <h3 className="text-xl">Hyde Park</h3>
      <ol className="list-decimal px-12 pb-6" start={4}>
        <li>Back Up for Bones - Talk</li>
        <li>Garden Secret - Mob + Talk</li>
        <li>House Hunt - Explore 3x + Mob 3x + Talk</li>
        <li>Springing the Snitch - Boss + Talk + Talk</li>
        <li>The Right Tools - D&C + Talk</li>
        <li>Open Says Me - Talk + Boss + Talk + Talk</li>
      </ol>
      <h3 className="text-xl">Chelsea Court</h3>
      <ol className="list-decimal px-12 pb-6" start={10}>
        <li>Out of Control - Talk</li>
        <li>For Whom the Bell Tolls - Explore + Talk</li>
        <li>A Guide… - Talk</li>
        <li>Keeper of Secrets - Boss + Talk</li>
        <li>The Only One Left - Boss + Talk</li>
        <li>Sweet Success - Talk</li>
        <li>Password, Please! - Explore + Mob + Talk + Talk</li>
        <li>Collar Me Impressed - Talk</li>
        <li>A Private Meeting - Explore + Talk 4x</li>
      </ol>
      <h3 className="text-xl">Ironworks</h3>
      <ol className="list-decimal px-12 pb-6" start={19}>
        <li>Ticket to the Ironworks - Explore</li>
        <li>Internal Investigation - Talk</li>
        <li>No Entry - Talk + D&C + Talk</li>
        <li>Gate Crashers - Talk + Boss + Talk</li>
        <li>Purloin the Plans - Talk + Interact + Talk</li>
        <li>Bully the Boss - Talk + Explore + Talk</li>
        <li>Knock on Wood - Talk + Boss + Explore + Boss + Talk</li>
      </ol>
      <h3 className="text-xl">Newgate Prison</h3>
      <ol className="list-decimal px-12 pb-6" start={26}>
        <li>Ring the Alarm - Talk</li>
        <li>Prison Break - Talk</li>
        <li>Stop that Cat! - Explore + Talk 4x + Boss + Boss + Talk</li>
      </ol>
      <h3 className="text-xl">Knight's Court</h3>
      <ol className="list-decimal px-12 pb-6" start={29}>
        <li>Scratching Post - Talk</li>
        <li>Wildcat Woes - Talk + Boss + Talk</li>
        <li>Cat Scratch Fever - Mob + Talk</li>
        <li>Investigation… - Talk + Talk</li>
        <li>Location, Location… - Talk + Talk</li>
        <li>Gimme a Hand - Explore + Mob + Talk</li>
        <li>Cross Examination - Talk + Talk</li>
        <li>Doctor of Deception - Explore + Boss + Talk</li>
        <li>Case Closed! - Talk</li>
      </ol>
      <h3 className="text-xl">Katzenstein's Lab</h3>
      <ol className="list-decimal px-12 pb-6" start={29}>
        <li>Weird Science - Talk</li>
        <li>The Right Combination - Talk + Boss</li>
        <li>Locked Door - Interact</li>
        <li>Gate Is Enough - Talk + Boss + Talk</li>
        <li>The Second Door - Interact</li>
        <li>Weird Science - Boss + Talk</li>
        <li>If You Build It... - Talk + Interact + Talk</li>
        <li>It's Alive! - Interact 3x + Talk</li>
      </ol>
      <h3 className="text-xl">
        Royal Museum, Counterweights East & West, Big Ben
      </h3>
      <ol className="list-decimal px-12 pb-6" start={44}>
        <li>Fetch Bones! - Talk</li>
        <li>Stolen Away! - Talk</li>
        <li>Metal Madness - Talk + Mob 4x + Interact 4x</li>
        <li>Stolen Away - Boss + Talk</li>
        <li>Weights and Measures - Talk + Boss + Talk</li>
        <li>More Metal Madness - Talk + Mob 4x + Interact 4x</li>
        <li>
          The Last Meow - Mob + Talk + Mob 3x + Boss + mob + Puzzle + Mob 4x +
          Boss
        </li>
        <li>Stealthy Stuff - Boss + Talk</li>
      </ol>
    </div>
  );
};

export default page;
