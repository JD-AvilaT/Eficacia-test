import { Meta, StoryFn } from '@storybook/angular';
import { SearchComponent } from '../../app/components/search/search.component';

export default {
  title: 'Components/Search/SearchComponent',
  component: SearchComponent,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'light', 
      values: [
        { name: 'light', value: '#f5f5f5' },
        { name: 'dark', value: '#333333' },
      ],
    },
    docs: {
      description: {
        component: `
Un componente de búsqueda altamente personalizable con funcionalidades avanzadas.

### Características:
- 🔍 Icono de búsqueda integrado
- ✖️ Botón para limpiar la búsqueda
- ⌨️ Emite eventos en tiempo real mientras se escribe
- ♿ Accesibilidad mejorada
- 🎨 Estilos personalizables (tamaño configurable)
- ⏳ Soporte para estados deshabilitados
- 📱 Diseño responsive

### Uso recomendado:
- Búsqueda en listas o tablas
- Filtrado de contenido dinámico
- Barras de búsqueda principales
- Componentes de autocompletado (cuando se combina con otros)
        `,
      },
    },
  },
  argTypes: {
    placeholder: {
      description: 'Texto placeholder del campo de búsqueda',
      control: 'text',
      table: {
        category: 'Content',
        defaultValue: { summary: 'Buscar' },
      },
    },
    disabled: {
      description: 'Deshabilita el campo de búsqueda',
      control: 'boolean',
      table: {
        category: 'Behavior',
        defaultValue: { summary: 'false' },
      },
    },
    value: {
      description: 'Valor inicial del campo de búsqueda',
      control: 'text',
      table: {
        category: 'State',
      },
    },
    width: {
      description: 'Ancho del campo de búsqueda (ej: "300px", "50%")',
      control: 'text',
      table: {
        category: 'Styling',
        defaultValue: { summary: '222px' },
      },
    },
    height: {
      description: 'Altura del campo de búsqueda (ej: "40px", "2rem")',
      control: 'text',
      table: {
        category: 'Styling',
        defaultValue: { summary: '40px' },
      },
    },
    searchChange: {
      description: 'Evento emitido cuando cambia el valor de búsqueda',
      table: {
        category: 'Events',
      },
      action: 'searchChange',
    },
  },
  args: {
    placeholder: 'Buscar',
    disabled: false,
    value: '',
    width: '320px',
    height: '34px',
  },
} as Meta<SearchComponent>;

const Template: StoryFn<SearchComponent> = (args) => ({
  props: args,
});

export const Default = Template.bind({});

export const CustomSize = Template.bind({});
CustomSize.args = {
  width: '300px',
  height: '50px'
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  width: '150px',
  height: '30px'
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  width: '100%',
  height: '45px'
};