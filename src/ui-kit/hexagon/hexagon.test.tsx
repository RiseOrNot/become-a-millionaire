import { render, screen } from '@testing-library/react';
import Hexagon from './hexagon';

describe('hexagon', () => {
  it('should return button element when exist onclick prop', () => {
    render(<Hexagon onClick={jest.fn} text={'Hello'} />);

    expect(screen.getByRole('button', { name: 'Hello' })).toBeVisible();
    expect(screen.getByTestId('button')).toBeVisible();
  });

  it('should return div element when onclick prop dont exist', () => {
    render(<Hexagon text={'Hello'} />);

    expect(screen.getByTestId('div')).toBeVisible();
  });
});
