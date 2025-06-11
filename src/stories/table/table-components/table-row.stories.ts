import type { Meta, StoryObj } from '@storybook/angular';
import { TableRowComponent } from '../../../app/components/tables/table/table-row/table-row.component';

const meta: Meta<TableRowComponent> = {
  title: 'Components/Tables/Table/TableRow',
  component: TableRowComponent,
  tags: ['autodocs'],
  argTypes: {
    rowData: {
      control: 'object',
      description: 'Objeto con los datos de la fila',
      table: {
        type: { summary: 'any' },
        defaultValue: { summary: '{}' },
        category: 'Data',
      }
    }
  },
  parameters: {
    layout: 'fullscreen',
  }
};

export default meta;
type Story = StoryObj<TableRowComponent>;

export const EmployeeRow: Story = {
  args: {
    rowData: { 
      nombre: 'Ana',
      edad: 30,
      cargo: 'Developer'
    },
    actionIcon: 'more_vert'
  },
};

export const ProductRow: Story = {
  args: {
    rowData: { id: 1, name: 'Laptop', price: 999.99 },

  },
};