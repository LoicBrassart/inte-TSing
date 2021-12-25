import SApp from './SApp';

export default function App() {
  return (
    <SApp>
      <h1>Hi there!</h1>
      <section>
        <p>
          Ever wanted to sing a random song in duo with someone ? Maybe
          you&apos;re too shy, or your friends don&apos;t like karaoke (there
          are sometimes strange people around) ? Or you always wanted to sing
          along with a popular streamer but never got a chance to ?
        </p>
        <p>
          TwinSing is here to scratch that itch for you! Sing anything along to
          a Youtube video and have a fellow singer with similar tastes join you.
          Once you&apos;re satisfied with your performance, record it to make it
          available to anyone else. <br />
          We&apos;ll then make it available for future performers, in case they
          wanna sing with you on this specific song. Impatient to start singing
          ? Either fill the form below, or click a thumbnail if you want to
          listen to something new.
        </p>
        <p>We wish you a lot of fun singing your heart out !</p>
      </section>
      <form>
        <label htmlFor="artist">
          <span>Artist</span>
          <input type="search" id="artist" placeholder="Indochine" />
        </label>
        <label htmlFor="song">
          <span>Song</span>
          <input type="search" id="song" placeholder="Le Grand Secret" />
        </label>
        <input type="submit" value="Let's Sing !" />
      </form>
    </SApp>
  );
}
