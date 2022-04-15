import React from 'react';

export interface HexagonProps {
  onClick?(): void;
  text: React.ReactNode;
  buttonStatus?: ButtonStatus;
  hexStatus?: HexStatus;
}

export enum ButtonStatus {
  SELECTED = 'selected',
  CORRECT = 'correct',
  WRONG = 'wrong',
  NULL = ''
}

export enum HexStatus {
  NEXT = 'next',
  CURRENT = 'current',
  NULL = ''
}
