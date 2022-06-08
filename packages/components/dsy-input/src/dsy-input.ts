import { html, css, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

/**
 * An input element.
 * @emits input
 */
@customElement('dsy-input')
export class DsyInput extends LitElement {
  static styles = css`
    input {
      padding: 8px 8px 8px 12px;
      font-family: 'Public Sans', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      border: 1px solid var(--neutral-600);
      background-color: var(--neutral-50);
      border-radius: 4px;
    }
  `;

  @query('input')
  inputElement!: HTMLInputElement;

  @property()
  type = 'text';

  @property()
  value = '';

  protected handleInput(e: InputEvent): void {
    e.stopPropagation();
    this.dispatchEvent(
      new CustomEvent('input', {
        bubbles: true,
        composed: true,
        detail: {
          value: this.inputElement.value,
        },
      }),
    );
  }

  render() {
    return html` <input type="${this.type}" @input=${this.handleInput} .value=${this.value} /> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dsy-input': DsyInput;
  }
}
