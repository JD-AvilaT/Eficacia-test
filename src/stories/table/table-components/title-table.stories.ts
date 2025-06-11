import type { Meta, StoryObj } from '@storybook/angular';
import { TitleTable } from '../../../app/components/tables/table/title-table/title-table.component';


const meta: Meta<TitleTable> = {
  title: 'Components/Tables/Table/TitleTable',
  component: TitleTable,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Texto del título a mostrar',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Header' },
        category: 'Content',
      }
    },
    style: {
      control: { type: 'radio' },
      options: ['filled', 'text'],
      description: 'Estilo visual del título',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'filled' },
        category: 'Style',
      }
    },
    width: {
      control: 'text',
      description: 'Ancho del componente título',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '404px' },
        category: 'Layout',
      }
    }
  },
  parameters: {
    layout: 'centered',
  }
};

export default meta;
type Story = StoryObj<TitleTable>;

export const Filled: Story = {
  args: {
    title: 'Employees',
    style: 'filled',
    width: '404px'
  },
};

export const Text: Story = {
  args: {
    title: 'Departments',
    style: 'text',
    width: '300px'
  },
};