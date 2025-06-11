// baseCard.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMomentosComponent } from './header-momentos/headerMomentos.component';
import { InputComponent } from '../../input/input.component';

@Component({
  selector: 'app-base-card',
  standalone: true,
  imports: [CommonModule, HeaderMomentosComponent, InputComponent],
  templateUrl: './baseCard.component.html',
  styleUrls: ['./baseCard.component.scss']
})
export class BaseCardComponent {
  /** Props para el header-momentos */
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() description: string = '';

  /** Props para el input */
  @Input() inputLabel: string = '';
  @Input() placeholder: string = '';
  @Input() type: 'textField' | 'multiline' = 'textField';
  @Input() state: 'enable' | 'selected' | 'error' = 'enable';
  @Input() showIcon: boolean = false;
  @Input() showRequired: boolean = false;
  @Input() ShowAlert: boolean = false;
  @Input() alertText: string = '';
  @Input() errorText: string = '';

  /** Binding de valor */
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  handleValueChange(newVal: string) {
    this.value = newVal;
    this.valueChange.emit(newVal);
  }
}