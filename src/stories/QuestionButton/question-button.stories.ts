import type { Meta, StoryObj } from '@storybook/angular';
import { QuestionButtonComponent } from '../../app/components/question-button/question-button.component';

const meta: Meta<QuestionButtonComponent> = {
  title: 'Components/Buttons/Question Button',
  component: QuestionButtonComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isTooltipVisible: {
      control: {
        type: 'boolean'
      },
    },
  }
};

export default meta;
type Story = StoryObj<QuestionButtonComponent>;

export const Default: Story = {
  args: {
    isTooltipVisible: false,
  },
};
