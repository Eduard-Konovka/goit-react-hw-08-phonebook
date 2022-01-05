import { useEffect } from 'react';
import Container from 'components/Container';
import brokenGlass from 'img/brokenGlass1.png';
import sound from 'audio/glassBreak1.mp3';
import s from './pages.module.css';

export default function HomeView() {
  useEffect(() => {
    new Audio(sound).play();
  }, []);

  return (
    <Container>
      <div className={s.window}>
        <div className={s.textCasement}>
          <p>People use the contact book every day.</p>

          <p>
            They prefer to use them rather than memorize phone numbers by heart,
            as it is very convenient to operate.
          </p>

          <p>
            For examplemobile phone books where you just need to choose a name
            person, on him, and will automatically be produced dialing a number.
          </p>
        </div>

        <div className={s.brokenGlass}>
          <img src={brokenGlass} alt="Broken glass" />
        </div>

        <div className={s.textCasement}>
          <p>
            The contact book can be implemented even within the company. This is
            possible thanks to this software product.
          </p>

          <p>
            Using the contact book, employees can call each other in a matter of
            seconds.
          </p>

          <p>
            No need to memorize numbers or ask colleagues for them. Because all
            data will be stored in an electronic contact book.
          </p>
        </div>
      </div>
    </Container>
  );
}
