import { Component, Input } from '@angular/core';
import { CheckboxComponent } from '../checkbox/checkbox.component';


@Component({
  selector: 'storybook-checkbox-text',
  standalone: true,
  imports: [CheckboxComponent],
  templateUrl: './CheckboxText.component.html',
  styleUrls: ['./CheckboxText.component.scss']
})
export class CheckboxTextComponent {
  @Input() label: string = 'Label';
}