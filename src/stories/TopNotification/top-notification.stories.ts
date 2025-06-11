import type { Meta, StoryObj } from '@storybook/angular';
import { TopNotificationComponent } from '../../app/components/top-notification/top-notification.component';

const meta: Meta<TopNotificationComponent> = {
  title: 'Components/Buttons/Top Notification',
  component: TopNotificationComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: {
        type: 'radio'
      },
      options: ['default', 'started', 'finished', 'error', 'completed'],
    }
  },
  args: {
    onClick: () => console.log('Button clicked!'), 
  },
};

export default meta;
type Story = StoryObj<TopNotificationComponent>;

export const Default: Story = {
  args: {
    state: "started",
    children: 'Label',
  },
};
