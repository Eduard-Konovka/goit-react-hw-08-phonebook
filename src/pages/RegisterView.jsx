import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import Container from 'components/Container';
import Button from 'components/Button';
import brokenGlass from 'img/brokenGlass2.png';
import sound from 'audio/glassBreak2.mp3';
import s from './pages.module.css';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    new Audio(sound).play();
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <div className={s.window}>
        <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
          <label className={s.label}>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>

          <label className={s.label}>
            E-mail
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </label>

          <label className={s.label}>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </label>

          <Button type="submit">Register now</Button>
        </form>
      </div>

      <div className={s.glass}>
        <img src={brokenGlass} alt="Broken glass" />
      </div>
    </Container>
  );
}
