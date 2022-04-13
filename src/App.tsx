import handIcon from './assets/hand.svg';
import Button from './ui-kit/button/button';

import s from './App.module.css';

function App() {
  return (
    <div className={s.rootContainer}>
      <img src={handIcon} alt={'Hand icon with stars'} />
      <Button>Start</Button>
    </div>
  );
}

export default App;
