import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <section className="para">
        <div className="para_container">
          <Link>About</Link>
          <div>
            <h1>Evangadi Networks</h1>
          </div>
          <div>
            <p>
              No matter what stage of life you are in, whether you are just
              starting elementary school or being promoted to CEO of a Fortune
              500 company, you have much to offer to those who are trying to
              follow in your footsteps.
            </p>
            <p>
              Whether you are willing to share your knowledge or you are just
              looking to meet mentors of your own, please start by joining the
              network here.
            </p>
          </div>
          <button>HOW IT WORKS</button>
        </div>
      </section>
    </>
  );
}

export default About;
