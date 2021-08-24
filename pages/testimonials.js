import Carousel from "../components/Carousel";

const Home = () => (
  <div className="page-content">
    <div className="page-title">Testimonials</div>
    <div className="content">
      <div className="tile testimonial-tile">
        <Carousel>
          <div className="testimonial-container">
            {/*damian derobbio*/}
            <div className="testing">
              <div className="testimonial-person" id="unknown"></div>
            </div>
            <div className="text-tile-text-emp testimonial-text testimonial-text">
              “The Walking Man Tribute is an absolute pleasure to witness.
              Musical Mastery of some of America’s finest songs.”
              <p className="text-tile-text-minor testimonial-text">
                - Damian DeRobbio, Belly Up Tavern, Solana Beach, California
              </p>
            </div>
          </div>

          <div className="testimonial-container">
            {/*greg howard*/}
            <div className="testing">
              <div className="testimonial-person" id="unknown"></div>
            </div>
            <div className="text-tile-text-emp testimonial-text testimonial-text">
              “The show was flawless. Each song sounds true to the original;
              faithfully reproduced from beginning to end. Amazing, I would hire
              them again without hesitation, and plan to do so.”
              <p className="text-tile-text-minor testimonial-text">
                - Greg Howard, CEO, Carecraft
              </p>
            </div>
          </div>

          <div className="testimonial-container">
            {/*raffi*/}
            <div className="testing">
              <div className="testimonial-person" id="unknown"></div>
            </div>
            <div className="text-tile-text-emp testimonial-text">
              "You have got to see Walking Man (the San Diego based James Taylor
              tribute band). Their performance at the Belly Up in May 2019 was
              stunningly good. This simply amazing band covers the folk-rock
              songs from Taylor’s impactful 50 year career that are both gentle
              & sweet as well as uplifting. If you want to see a great show that
              will trigger your most beautiful and emotional nostalgic memories,
              do not miss Walking Man!"
              <p className="text-tile-text-minor testimonial-text">
                - Raffi Simonian
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  </div>
);
export default Home;
