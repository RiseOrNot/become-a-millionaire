import Button from './button';
import { render, screen, fireEvent } from '@testing-library/react';

const BUTTON_TEXT = 'Click me';

describe('Button', () => {
  it('should render', () => {
    render(<Button>{BUTTON_TEXT}</Button>);

    expect(screen.getByText(BUTTON_TEXT)).toBeVisible();
  });

  it('should handle button click when u click on button', () => {
    const onClick = jest.fn();

    render(<Button onClick={onClick}>{BUTTON_TEXT}</Button>);

    fireEvent.click(screen.getByText(BUTTON_TEXT));
    expect(onClick).toBeCalledTimes(1);
  });
});
