import { describe, expect, it, vi } from 'vitest';
import { screen } from '@testing-library/dom';

import '../dsy-button';

const render = async ({ level } = { level: 'primary' }) => {
  document.body.innerHTML = `
    <dsy-button level="${level}" data-testid="root">Test</dsy-button>
  `;
  await window.happyDOM.whenAsyncComplete();
  await new Promise((resolve) => setTimeout(resolve, 0));
};

const getRoot = () => {
  return screen.getByTestId('root');
};

const getRootElement = () => {
  return getRoot()?.shadowRoot?.querySelector('button');
};

describe('dsy-button', () => {
  it('should have primary level by default', async () => {
    await render();
    expect(getRootElement().className).toContain('primary');
  });

  it('should handle click', async () => {
    const clickHandler = vi.fn();

    await render();
    getRoot().addEventListener('click', clickHandler);

    getRootElement()?.click();

    expect(clickHandler).toBeCalled();
  });
});
