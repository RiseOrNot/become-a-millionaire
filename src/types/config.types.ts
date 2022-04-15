export type AnswerItemType = {
  variant: string;
  isCorrect: boolean;
};

export type QuestionItemType = {
  heading: string;
  answers: AnswerItemType[];
};

export type QuestionsType = QuestionItemType[];

export type PricesType = number[];
