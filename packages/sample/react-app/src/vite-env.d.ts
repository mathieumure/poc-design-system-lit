/// <reference types="vite/client" />

import { DOMAttributes } from 'react';
import { DsyButton } from '@dsy/button';
import { DsyInput } from '@dsy/input';

/* eslint-disable @typescript-eslint/no-explicit-any*/
type CustomElement<T> = Partial<T & DOMAttributes<T> & { children: any; ref?: any }>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['dsy-button']: CustomElement<DsyButton>;
      ['dsy-input']: CustomElement<DsyInput>;
    }
  }
}
