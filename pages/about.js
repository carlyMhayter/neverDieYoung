const bandMembers = [
  {
    name: "Tim Godwin",
    title: "Vocalist, Guitarist",
    photoID: "tim",
    bio: "Godwin has worked with such notable artists as Air Supply, Laura Brannigan, Shelby Lynne, Farmer, Tanya Tucker and been involved innumerous television projects and studio house bands.",
    tileOrientation: "tile2  tile bio-tile",
  },
  {
    name: "David Sheils",
    title: "Lead Guitar, back-up vocals",
    photoID: "dave",
    bio: "Sheils has worked with wide variety of artists including Chicago, Toto, Mary Travers, Tower of Power, Billy Vera, Pat Benatar and written songs for Billy Preston and Freda Payne.",
    tileOrientation: "tile1  tile bio-tile",
  },
  {
    name: "Michael Hayter",
    title: "Bass guitar, back-up vocals",
    photoID: "mike",
    bio: "Well known local San Diego musician joins Never Die Young on bass guitar.",
    tileOrientation: "tile2  tile bio-tile",
  },
  {
    name: "Al Cacas",
    title: "Percussion, back-up vocals",
    photoID: "al",
    bio: "A San Diego native also well known in the SD music scene, Al Cacas performs drums in Never Die Young.",
    tileOrientation: "tile1  tile bio-tile",
  },
  {
    name: "Kylea Sheils",
    title: "Main and back-up vocals",
    photoID: "kylie",
    bio: "Life-long vocalist adds her wonderful vocals to the sound of Never Die Young.",
    tileOrientation: "tile2 tile bio-tile",
  },
];

const Home = () => (
  <div className="page-content">
    <div className="page-title">About </div>
    <div className="content">
      {/* Band info Tile Main */}
      <div className="tile tile1 bio-tile">
        <div className="img-tile inner-tile" id="dave_tim" />
        <div className="text-tile bio-text-tile inner-tile">
          <p className="text-tile-text-emp bio-name">Meet the band</p>
          <img src="/ndy-scroll.svg" id="scroll-1" className="scroll-img" />
          <p className="text-tile-text-minor bio-text">
            For the last four decades David Sheils and Tim Godwin have been
            writing and performing music worldwide. When they both ended up
            making San Diego their home it seemed only right to put together
            something very special.
          </p>
        </div>
      </div>
      {/* Band info Tile Minor */}
      <div className="tile tile1 bio-tile">
        <div className="text-tile bio-text-tile inner-tile">
          <img src="/ndy-scroll.svg" className="scroll-img" />

          <p className="text-tile-text-minor bio-text">
            Never Die Young was born from two musicians great respect for one
            another and their longing to continue to perform in venues across
            the US. Having been influenced by the legendary style of James
            Taylor it made even more sense to create a project that paid
            ultimate respect to his music. Never Die Young will take you down
            that Country Road James Taylor wrote about so many years ago and
            into his living room with songs like the Secret of Life. A truly
            heartfelt and authentic interpretation of the music of James Taylor.
          </p>
          <img src="/ndy-scroll.svg" id="scroll-1" className="scroll-img" />
        </div>
      </div>
      {bandMembers.map((member) => (
        <div key={member.name} className={member.tileOrientation}>
          <div className="img-tile inner-tile" id={member.photoID} />
          <div className="text-tile bio-text-tile inner-tile">
            <p className="text-tile-text-emp bio-name">{member.name}</p>
            <p className="member-info"> {member.title}</p>
            <img src="/ndy-scroll.svg" id="scroll-1" className="scroll-img" />
            <p className="text-tile-text-minor bio-text">{member.bio}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
export default Home;
