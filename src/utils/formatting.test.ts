import { intToChar, moneyFormatter } from './formatting.utils';

describe('formattingUtils', () => {
  it('should return upper case letter when u pass number', () => {
    expect(intToChar(0)).toBe('A');
  });
  it('should return formatted money string', () => {
    expect(moneyFormatter(1000)).toBe('$1,000');
  });
});
