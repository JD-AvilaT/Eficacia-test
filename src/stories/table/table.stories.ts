import type { Meta, StoryObj } from '@storybook/angular';
import { TableComponent } from '../../app/components/tables/table/table.component';

interface Employee {
  nombre: string;
  edad: number;
  cargo: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  stock?: number;
}

const meta: Meta<TableComponent> = {
  title: 'Components/Tables/Table',
  component: TableComponent,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Título principal de la tabla',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Tabla' },
        category: 'Content',
      }
    },
    data: {
      control: 'object',
      description: 'Array de datos para mostrar en la tabla',
      table: {
        type: { summary: 'any[]' },
        defaultValue: { summary: '[]' },
        category: 'Data',
      }
    },
    showFooter: {
      control: 'boolean',
      description: 'Muestra u oculta el footer de la tabla',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Layout',
      }
    }
  },
  parameters: {
    layout: 'fullscreen',
  }
};

export default meta;
type Story = StoryObj<TableComponent>;

export const EmployeesTable: Story = {
  args: {
    title: 'Employees',
    data: [
      { nombre: 'Ana', edad: 30, cargo: 'Developer' },
      { nombre: 'Carlos', edad: 25, cargo: 'Designer' },
      { nombre: 'Sergio', edad: 40, cargo: 'UX Designer' }
    ],
    showFooter: false
  },
};

export const EmployeesTableWithFooter: Story = {
  args: {
    title: 'Employees',
    data: [
      { nombre: 'Ana', edad: 30, cargo: 'Developer' },
      { nombre: 'Carlos', edad: 25, cargo: 'Designer' },
      { nombre: 'Sergio', edad: 40, cargo: 'UX Designer' }
    ],
    showFooter: true
  },
};

export const ProductsTable: Story = {
  args: {
    title: 'Products',
    data: [
      { id: 1, name: 'Laptop', price: 999.99, stock: 15 },
      { id: 2, name: 'Mouse', price: 25.50, stock: 42 }
    ],
    showFooter: false
  },
};

export const ProductsTableWithFooter: Story = {
  args: {
    title: 'Products',
    data: [
      { id: 1, name: 'Laptop', price: 999.99, stock: 15 },
      { id: 2, name: 'Mouse', price: 25.50, stock: 42 }
    ],
    showFooter: true
  },
};

export const EmptyTable: Story = {
  args: {
    title: 'Empty Table',
    data: [],
    showFooter: true
  },
};