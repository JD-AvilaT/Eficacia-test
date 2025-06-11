import { Meta, StoryObj } from '@storybook/angular';
import { CheckboxTextComponent } from '../../app/components/Checkbox/CheckboxText/CheckboxText.component';

const meta: Meta<CheckboxTextComponent> = {
  title: 'Components/Checkbox/Checkbox Text',
  component: CheckboxTextComponent,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Texto mostrado al lado del checkbox',
    },
  },
  args: {
    label: 'Label',
  },
};

export default meta;
type Story = StoryObj<CheckboxTextComponent>;

export const Default: Story = {
  args: {
    label: 'Label',
  },
};
