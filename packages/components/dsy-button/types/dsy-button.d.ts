import { LitElement } from 'lit';
/**
 * A button element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class DsyButton extends LitElement {
    level: 'primary' | 'secondary' | 'tertiary';
    static styles: import("lit").CSSResult;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'dsy-button': DsyButton;
    }
}
