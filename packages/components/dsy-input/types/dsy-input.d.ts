import { LitElement } from 'lit';
/**
 * An input element.
 * @emits input
 */
export declare class DsyInput extends LitElement {
    static styles: import("lit").CSSResult;
    inputElement: HTMLInputElement;
    type: string;
    value: string;
    protected handleInput(e: InputEvent): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'dsy-input': DsyInput;
    }
}
