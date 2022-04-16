import UroborosGameScreen, { StartGameScreenType } from './uroborosGameScreen';
import { render, screen, fireEvent } from '@testing-library/react';
import { moneyFormatter } from '../../utils/formatting.utils';

describe('uroborosGameScreen', () => {
  it('should render start screen', () => {
    const onClick = jest.fn();
    render(<UroborosGameScreen changeScreenToGame={onClick} type={StartGameScreenType.START} />);

    expect(screen.getByText('Who wants to be a millionaire?')).toBeVisible();
  });

  it('should trigger button whe clicked', () => {
    const onClick = jest.fn();
    render(<UroborosGameScreen changeScreenToGame={onClick} type={StartGameScreenType.START} />);

    fireEvent.click(screen.getByText('Start'));
    expect(onClick).toBeCalledTimes(1);
  });

  it('should render end screen', () => {
    const onClick = jest.fn();
    const winAmount = moneyFormatter(1000);

    render(<UroborosGameScreen changeScreenToGame={onClick} type={StartGameScreenType.END} winAmount={winAmount} />);

    expect(screen.getByText('Total score:')).toBeVisible();
    expect(screen.getByText(`${winAmount} earned`)).toBeVisible();
  });
});
