import React from 'react';
import s from './uroborosGameScreen.module.css';
import Button from '../../ui-kit/button/button';
import handIcon from '../../assets/hand.svg';

export enum StartGameScreenType {
  START = 'start',
  END = 'end'
}

export type ChangeScreenType = { changeScreenToGame(): void; type: StartGameScreenType; winAmount?: string };

const UroborosGameScreen: React.FC<ChangeScreenType> = ({ changeScreenToGame, type, winAmount }) => {
  const getContentByType = () => {
    switch (type) {
      case StartGameScreenType.START:
        return (
          <div className={s.callToActionWrapper}>
            <h1>
              Who wants to be <br /> a millionaire?
            </h1>
            <Button onClick={changeScreenToGame}>Start</Button>
          </div>
        );

      case StartGameScreenType.END:
        return (
          <div className={s.callToActionWrapper}>
            <span>Total score:</span>
            <h1>{winAmount} earned</h1>
            <Button onClick={changeScreenToGame}>Try again</Button>
          </div>
        );
    }
  };

  return (
    <div className={`${s.rootContainer} ${type === StartGameScreenType.END ? s.white : ''}`}>
      <div className={s.contentWrapper}>
        <img src={handIcon} alt={'Hand icon with stars'} />
        {getContentByType()}
      </div>
    </div>
  );
};

export default UroborosGameScreen;
