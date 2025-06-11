import type { Meta, StoryObj } from '@storybook/angular';
import { TableHeaderComponent } from '../../../app/components/tables/table/table-header/table-header.component';


const meta: Meta<TableHeaderComponent> = {
  title: 'Components/Tables/Table/TableHeader',
  component: TableHeaderComponent,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Título principal de la tabla',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Header' },
        category: 'Content',
      }
    },
    data: {
      control: 'object',
      description: 'Array de datos que definirá la estructura de las columnas',
      table: {
        type: { summary: 'any[]' },
        defaultValue: { summary: '[]' },
        category: 'Data',
      }
    }
  },
  parameters: {
    layout: 'fullscreen',
  }
};

export default meta;
type Story = StoryObj<TableHeaderComponent>;

export const Default: Story = {
  args: {
    title: 'Employees',
    data: [
      { nombre: 'Ana', edad: 30, cargo: 'Developer' },
      { nombre: 'Carlos', edad: 25, cargo: 'Designer' }
    ]
  },
};

export const Empty: Story = {
  args: {
    title: 'Departments',
    data: []
  },
};