import { Meta, StoryFn } from '@storybook/angular';
import { PaginationComponent } from '../../app/components/pagination/pagination.component';

export default {
  title: 'Components/Pagination/Pagination Component',
  component: PaginationComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Un componente de paginación flexible y accesible para navegar entre conjuntos de datos.

### Características:
- 🔢 Navegación por números de página
- ⏮️⏪ Botones para primera/anterior página
- ⏩⏭️ Botones para siguiente/última página
- 📏 Selector de items por página
- ♿ Accesibilidad mejorada con ARIA
- 🎨 Estilos personalizables
- 📱 Diseño responsive
- 🔄 Emite eventos para cambios de página y tamaño

### Uso recomendado:
- Tablas de datos paginadas
- Listados de productos/artículos
- Resultados de búsqueda
- Galerías de imágenes
- Cualquier contenido que requiera división en páginas
        `,
      },
    },
  },
  argTypes: {
    currentPage: {
      description: 'Página actualmente activa',
      control: 'number',
      table: {
        category: 'State',
        defaultValue: { summary: '1' },
      },
    },
    totalPages: {
      description: 'Número total de páginas disponibles',
      control: 'number',
      table: {
        category: 'State',
        defaultValue: { summary: '1' },
      },
    },
    pageSize: {
      description: 'Número de items por página',
      control: 'number',
      table: {
        category: 'State',
        defaultValue: { summary: '10' },
      },
    },
    maxVisiblePages: {
      description: 'Máximo número de páginas visibles en la navegación',
      control: 'number',
      table: {
        category: 'Behavior',
        defaultValue: { summary: '5' },
      },
    },
    pageChange: {
      description: 'Evento emitido cuando cambia la página',
      table: {
        category: 'Events',
      },
      action: 'pageChange',
    },
  
  },
  args: {
    currentPage: 1,
    totalPages: 10,
    pageSize: 10,
    maxVisiblePages: 5,
  },
} as Meta<PaginationComponent>;

const Template: StoryFn<PaginationComponent> = (args) => ({
  props: args,
});

export const Default = Template.bind({});

export const ManyPages = Template.bind({});
ManyPages.args = {
  currentPage: 5,
  totalPages: 20,
};
