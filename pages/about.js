const Home = () => (
  <div className="page-content">
    <div className="page-title">About </div>
    <div className="content">
      {/* Band info Tile Main */}
      <div className="tile tile1 bio-tile">
        <div className="img-tile inner-tile" id="dave_tim" />
        <div className="text-tile bio-text-tile inner-tile">
          <p className="text-tile-text-emp bio-name">Meet the band</p>
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
          <img src="/scroll.png" width="300px" height="30px" id="scroll-1" />
          <p className="text-tile-text-minor bio-text">
            Walking Man was born from two musicians great respect for one
            another and their longing to continue to perform in venues across
            the US. Having been influenced by the legendary style of James
            Taylor it made even more sense to create a project that paid
            ultimate respect to his music. Walking Man will take you down that
            Country Road James Taylor wrote about so many years ago and into his
            living room with songs like the Secret of Life. A truly heartfelt
            and authentic interpretation of the music of James Taylor.
          </p>
          <img src="/scroll.png" width="300px" height="30px" />
        </div>
      </div>
      {/* first member */}
      <div className="tile tile2 bio-tile">
        <div className="text-tile bio-text-tile inner-tile">
          <p className="text-tile-text-emp bio-name">Tim Godwin</p>
          <p className="member-info"> Vocalist </p>
          <p className="text-tile-text-minor bio-text">
            Godwin has worked with such notable artists as Air Supply, Laura
            Brannigan, Shelby Lynne, Farmer, Tanya Tucker and been involved in
            numerous television projects and studio house bands.
          </p>
        </div>
        <div id="tim" className="img-tile inner-til artist-img" />
      </div>
      {/* second member*/}
      <div className="tile tile1 bio-tile">
        <div id="dave" className="img-tile inner-tile artist-img" />
        <div className="text-tile bio-text-tile inner-tile">
          <p className="text-tile-text-emp bio-name">David Sheils</p>
          <p className="member-info"> Lead Guitar, back-up vocals </p>
          <p className="text-tile-text-minor bio-text">
            Sheils has worked with wide variety of artists including Chicago,
            Toto, Mary Travers, Tower of Power, Billy Vera, Pat Benatar and
            written songs for Billy Preston and Freda Payne.
          </p>
        </div>
      </div>
      {/* third member*/}
      <div className="tile tile2 bio-tile">
        <div className="text-tile inner-tile bio-text-tile">
          <p className="text-tile-text-emp bio-name">Michael Hayter</p>
          <p className="member-info"> Bass guitar, back-up vocals</p>

          <p className="text-tile-text-minor bio-text">
            Well known local San Diego musician joins Walking Man on bass
            guitar.
          </p>
        </div>
        <div id="mike" className="img-tile inner-til artist-img" />
      </div>
      {/* fourth member*/}
      <div className="tile tile1 bio-tile">
        <div id="al" className="img-tile inner-tile artist-img" />
        <div className="text-tile bio-text-tile inner-tile">
          <p className="text-tile-text-emp bio-name">Al Cacas</p>
          <p className="member-info"> Percussion, back-up vocals</p>

          <p className="text-tile-text-minor bio-text">
            A San Diego native also well known in the SD music scene, Al Cacas
            performs drums in Walking Man.
          </p>
        </div>
      </div>
      {/* fifth member*/}
      <div className="tile tile2 bio-tile">
        <div className="text-tile inner-tile bio-text-tile">
          <p className="text-tile-text-emp bio-name">Kylea Sheils</p>
          <p className="member-info"> Main and back-up vocals</p>
          <p className="text-tile-text-minor bio-text">
            Life-long vocalist adds her wonderful vocals to the sound of Walking
            Man.
          </p>
        </div>
        <div id="kylie" className="img-tile inner-til artist-img" />
      </div>
    </div>
  </div>
);
export default Home;
