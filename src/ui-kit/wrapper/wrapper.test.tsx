import { render, screen } from '@testing-library/react';
import Wrapper from './wrapper';

describe('wrapper', () => {
  it('should return button element when exist onclick prop', () => {
    render(<Wrapper onClick={jest.fn} />);

    expect(screen.getByRole('button')).toBeVisible();
  });
  it('should return div element when onclick prop dont exist', () => {
    render(<Wrapper>Hello</Wrapper>);

    expect(
      screen.getByText((content, element) => element?.tagName.toLowerCase() === 'div' && content === 'Hello')
    ).toBeVisible();
  });
});
