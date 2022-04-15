import s from './gameScreenResults.module.css';
import BurgerButton from '../../ui-kit/burgerButton/burgerButton';
import Hexagon from '../../ui-kit/hexagon/hexagon';
import { moneyFormatter } from '../../utils/formatting.utils';
import { HexStatus } from '../../ui-kit/hexagon/hexagon.types';
import React, { useState } from 'react';
import { PricesType } from '../../types/config.types';

type GameScreenResultsProps = {
  prices: PricesType;
  currentQuestionIndex: number;
};

const GameScreenResults: React.FC<GameScreenResultsProps> = ({ prices, currentQuestionIndex }) => {
  const [showMenu, setShowMenu] = useState(false);

  const menuHandler = () => {
    setShowMenu((show) => !show);
  };

  return (
    <>
      <BurgerButton onClick={menuHandler} className={s.button} />
      <div className={`${s.resultPart} ${showMenu ? s.showMenu : ''}`}>
        {prices.map((price, i) => (
          <Hexagon
            key={`money_${i}`}
            text={moneyFormatter(price)}
            hexStatus={
              currentQuestionIndex === i
                ? HexStatus.CURRENT
                : currentQuestionIndex < i
                ? HexStatus.NEXT
                : HexStatus.NULL
            }
          />
        ))}
      </div>
    </>
  );
};

export default GameScreenResults;
