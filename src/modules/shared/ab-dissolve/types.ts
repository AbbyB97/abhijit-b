import { Key, ReactElement } from 'react';

export interface DissolveProps {
  children: ReactElement;
  dissolveKey?: Key;
  duration?: number
}
