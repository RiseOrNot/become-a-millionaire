import { render, screen, fireEvent } from '@testing-library/react';
import BurgerButton from './burgerButton';

describe('burgerButton', () => {
  it('should render', () => {
    render(<BurgerButton />);

    expect(screen.getByTestId('burger-button')).toBeVisible();
  });

  it('should handle button click when u click on button', () => {
    const onClick = jest.fn();

    render(<BurgerButton onClick={onClick} />);

    fireEvent.click(screen.getByTestId('burger-button'));
    expect(onClick).toBeCalledTimes(1);
  });
});
