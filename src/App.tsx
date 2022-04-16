import React, { useState } from 'react';
import UroborosGameScreen, { StartGameScreenType } from './components/uroborosGameScreen/uroborosGameScreen';
import GameScreen from './components/gameScreen/gameScreen';
import gameConfig from './game-config.json';
import { PricesType, QuestionsType } from './types/config.types';
import { moneyFormatter } from './utils/formatting.utils';

export enum ScreenEnum {
  START = 'start',
  GAME = 'game',
  END = 'end'
}

const App: React.FC = () => {
  const [screen, setScreen] = useState<ScreenEnum>(ScreenEnum.START);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  console.log('ke');
  const { questions, prices }: { questions: QuestionsType; prices: PricesType } = gameConfig;

  const gameProps = {
    ...questions[currentQuestionIndex],
    prices,
    currentQuestionIndex,
    setters: {
      setScreen,
      updateQuestionIndex: (i = 1) => setCurrentQuestionIndex((current) => current + i)
    }
  };

  const changeScreenToGame = () => {
    setScreen(ScreenEnum.GAME);
    setCurrentQuestionIndex(0);
  };

  const getCurrentScreen = () => {
    switch (screen) {
      case ScreenEnum.START:
        return <UroborosGameScreen changeScreenToGame={changeScreenToGame} type={StartGameScreenType.START} />;
      case ScreenEnum.GAME:
        return <GameScreen {...gameProps} />;
      case ScreenEnum.END:
        return (
          <UroborosGameScreen
            changeScreenToGame={changeScreenToGame}
            type={StartGameScreenType.END}
            winAmount={moneyFormatter(prices[currentQuestionIndex] || 0)}
          />
        );
    }
  };

  return <>{getCurrentScreen()}</>;
};

export default App;
