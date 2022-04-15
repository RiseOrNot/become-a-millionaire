import React, { useState } from 'react';
import Hexagon from '../../ui-kit/hexagon/hexagon';
import s from './gameScreen.module.css';
import { intToChar } from '../../utils/formatting.utils';
import { ScreenEnum } from '../../App';
import gameConfig from '../../game-config.json';
import { AnswerItemType } from '../../types/config.types';
import { ButtonStatus } from '../../ui-kit/hexagon/hexagon.types';
import { ChooseScreenType, SubmittedAnswer } from './gameScreen.types';
import GameScreenResults from '../gameScreenResults/gameScreenResults';

const GameScreen: React.FC<ChooseScreenType> = ({ answers, heading, prices, currentQuestionIndex, setters }) => {
  const initialAnswer = { buttonNumber: -1, status: ButtonStatus.NULL };
  const [answer, setAnswer] = useState<SubmittedAnswer>(initialAnswer);

  const animationConfig = {
    duration: 3000,
    changeFrequency: 275
  };

  const handleChoose = ({ isCorrect }: AnswerItemType, buttonNumber: number) => {
    const status = isCorrect ? ButtonStatus.CORRECT : ButtonStatus.WRONG;

    const timerId = setInterval(() => {
      setAnswer((prevAnswer) => ({
        buttonNumber,
        status: prevAnswer?.status === ButtonStatus.SELECTED ? ButtonStatus.NULL : ButtonStatus.SELECTED
      }));
    }, animationConfig.changeFrequency);

    setTimeout(() => {
      clearInterval(timerId);
      setAnswer({ buttonNumber, status });
    }, animationConfig.duration);

    setTimeout(() => {
      if (status === ButtonStatus.CORRECT && currentQuestionIndex + 1 < gameConfig.questions.length) {
        setters.updateQuestionIndex();
        setAnswer(initialAnswer);
      } else {
        setters.setScreen(ScreenEnum.END);
        if (status === ButtonStatus.WRONG) setters.updateQuestionIndex(-1);
      }
    }, animationConfig.duration + 1000);
  };

  return (
    <div className={s.gameScreenWrapper}>
      <div className={s.interactivePart}>
        <h1>{heading}</h1>
        <div className={s.answerWrapper}>
          {answers.map((item, i) => {
            const answerVariant = intToChar(i);
            return (
              <Hexagon
                text={
                  <>
                    <span className={s.variant}>{answerVariant}</span> {item.variant}
                  </>
                }
                buttonStatus={answer?.buttonNumber === i ? answer?.status : ButtonStatus.NULL}
                key={`answer_variant_${answerVariant}`}
                onClick={() => answer?.buttonNumber === -1 && handleChoose(item, i)}
              />
            );
          })}
        </div>
      </div>
      <GameScreenResults prices={prices} currentQuestionIndex={currentQuestionIndex} />
    </div>
  );
};

export default GameScreen;
