import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * A button element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('dsy-button')
export class DsyButton extends LitElement {
  @property()
  level: 'primary' | 'secondary' | 'tertiary' = 'primary';

  static styles = css`
    button {
      padding: 8px 12px;
      color: var(--neutral-50);
      font-family: 'Public Sans', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      border-radius: 4px;
      border: none;
    }

    .primary {
      background-color: var(--blue-500);
    }
    .primary:hover {
      background-color: var(--blue-400);
    }
    .primary:active {
      background-color: var(--blue-600);
    }
    .primary:disabled {
      background-color: var(--blue-500);
    }

    .secondary {
      background-color: var(--neutral-50);
      border: solid 1px var(--blue-500);
      color: var(--blue-500);
    }
    .secondary:hover {
      background-color: var(--blue-200);
      border: solid 1px var(--blue-400);
      color: var(--blue-500);
    }
    .secondary:active {
      background-color: var(--blue-300);
      border: solid 1px var(--blue-600);
      color: var(--blue-600);
    }
    .secondary:disabled {
      background-color: var(--blue-500);
    }
  `;

  render() {
    return html`
      <button type="button" class=${this.level}>
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dsy-button': DsyButton;
  }
}
