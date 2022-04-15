import GameScreenResults from './gameScreenResults';
import { render, screen } from '@testing-library/react';
import { moneyFormatter } from '../../utils/formatting.utils';

const PRICES = [100, 1000, 10000];

describe('gameScreenResults', () => {
  it('should render options', () => {
    render(<GameScreenResults prices={PRICES} currentQuestionIndex={0} />);

    PRICES.forEach((price) => {
      expect(screen.getByText(moneyFormatter(price))).toBeVisible();
    });
  });
});
