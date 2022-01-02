import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import Button from 'components/Button/Button';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = `https://thispersondoesnotexist.com/image`;

  return (
    <div className={s.container}>
      <img src={avatar} alt="" width="64" className={s.avatar} />
      <div className={s.greeting}>
        <span className={s.name}>Welcome,</span>
        <span className={s.accent}>{`${name}!`}</span>
      </div>
      <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log out
      </Button>
    </div>
  );
}
