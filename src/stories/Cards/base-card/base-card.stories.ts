import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { BaseCardComponent } from './baseCard.component';
import { HeaderMomentosComponent } from '../header-momentos/headerMomentos.component';
import { InputComponent } from '../input/input.component';

const meta: Meta<BaseCardComponent> = {
  title: 'Components/BaseCard',
  component: BaseCardComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, HeaderMomentosComponent, InputComponent]
    })
  ],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    description: { control: 'text' },
    inputLabel: { control: 'text' },
    placeholder: { control: 'text' },
    type: { control: { type: 'radio', options: ['textField', 'multiline'] } },
    state: { control: { type: 'radio', options: ['enable', 'selected', 'error'] } },
    showIcon: { control: 'boolean' },
    showRequired: { control: 'boolean' },
    ShowAlert: { control: 'boolean' },
    alertText: { control: 'text' },
    errorText: { control: 'text' },
    value: { control: 'text' }
  }
} as Meta;

export default meta;

type Story = StoryObj<BaseCardComponent>;

export const Default: Story = {
  args: {
    title: 'Hola, buen día',
    subtitle: 'Subtítulo aquí',
    description: 'Esta es la descripción del header momentos.',
    inputLabel: 'Etiqueta',
    placeholder: 'Escribe algo...',
    type: 'textField',
    state: 'enable',
    showIcon: false,
    showRequired: false,
    ShowAlert: false,
    alertText: 'Texto de alerta',
    errorText: 'Texto de error',
    value: ''
  }
};

export const TwoCards: Story = {
  args: Default.args,
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; gap: 16px;">
        <app-base-card
          [title]="title"
          [subtitle]="subtitle"
          [description]="description"
          [inputLabel]="inputLabel"
          [placeholder]="placeholder"
          [type]="type"
          [state]="state"
          [showIcon]="showIcon"
          [showRequired]="showRequired"
          [ShowAlert]="ShowAlert"
          [alertText]="alertText"
          [errorText]="errorText"
          [value]="value"
          (valueChange)="valueChange($event)"
        ></app-base-card>

        <app-base-card
          [title]="title"
          [subtitle]="subtitle"
          [description]="description"
          [inputLabel]="inputLabel"
          [placeholder]="placeholder"
          [type]="type"
          [state]="state"
          [showIcon]="showIcon"
          [showRequired]="showRequired"
          [ShowAlert]="ShowAlert"
          [alertText]="alertText"
          [errorText]="errorText"
          [value]="value"
          (valueChange)="valueChange($event)"
        ></app-base-card>
      </div>
    `
  })
};
