import { render, screen } from '@testing-library/react';
import GameScreen from './gameScreen';

const PRICES = [100, 1000, 10000];
const SETTERS = { setScreen: jest.fn(), updateQuestionIndex: jest.fn() };
const ANSWERS = [
  {
    variant: 'Ramadan',
    isCorrect: false
  },
  {
    variant: 'Diwali',
    isCorrect: true
  },
  {
    variant: 'Lent',
    isCorrect: false
  },
  {
    variant: 'Hanukkah',
    isCorrect: false
  }
];

describe('gameScreen', () => {
  it('should render answers', () => {
    render(
      <GameScreen answers={ANSWERS} heading={'Hello'} prices={PRICES} currentQuestionIndex={0} setters={SETTERS} />
    );

    ANSWERS.forEach((answer) => {
      expect(screen.getByText(answer.variant)).toBeVisible();
    });
  });
});
