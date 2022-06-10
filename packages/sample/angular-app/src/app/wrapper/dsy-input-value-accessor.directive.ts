import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

@Directive({
  selector: 'dsy-input',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DsyInputValueAccessorDirective,
      multi: true,
    },
  ],
})
export class DsyInputValueAccessorDirective implements ControlValueAccessor {
  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.onChange = noop;
    this.onTouched = noop;
  }

  onChange: (value: string) => void;
  onTouched: () => void;

  writeValue(value: string) {
    this.renderer.setProperty(this.element.nativeElement, 'value', value);
  }

  @HostListener('input', ['$event.detail.value'])
  _handleIllyChange(value: string) {
    this.onChange(value);
  }

  @HostListener('onBlur', ['$event.target'])
  _handleBlurEvent() {
    this.onTouched();
  }

  registerOnChange(fn: (value: string) => void) {
    this.onChange = (value) => {
      fn(value);
    };
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = () => {
      fn();
    };
  }

  setDisabledState(isDisabled: boolean) {
    this.renderer.setProperty(this.element.nativeElement, 'disabled', isDisabled);
  }
}
