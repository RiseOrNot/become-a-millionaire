import { ScreenEnum } from '../../App';
import { AnswerItemType, PricesType } from '../../types/config.types';
import { ButtonStatus } from '../../ui-kit/hexagon/hexagon.types';

export type SettersType = {
  setScreen(screen: ScreenEnum): void;
  updateQuestionIndex(i?: number): void;
};

export type ChooseScreenType = {
  setters: SettersType;
  heading: string;
  answers: AnswerItemType[];
  prices: PricesType;
  currentQuestionIndex: number;
};

export type SubmittedAnswer = { buttonNumber: number; status: ButtonStatus };
