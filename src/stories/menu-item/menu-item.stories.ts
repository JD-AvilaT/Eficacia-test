import { Meta, StoryFn } from '@storybook/angular';
import { MenuItemComponent } from '../../app/components/menu-item/menu-item.component';
import { iconNames } from '../../utils/icons';

export default {
  title: 'Components/Navigation/Menu/MenuItem',
  component: MenuItemComponent,
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
Un componente de elemento de menú con icono SVG y texto.

### Características:
- 🖼️ Icono SVG integrado
- 📝 Texto descriptivo
- 🎨 Estados activo/inactivo
- ✂️ Texto truncado cuando es muy largo
- 🖱️ Efectos hover y estados visuales
- ♿ Accesibilidad incorporada
- 📱 Diseño responsive
- 🚀 Navegación integrada

### Uso recomendado:
- Menús de navegación principal
- Listas de opciones
- Menús laterales (sidebars)
- Barras de herramientas
- Cualquier interfaz que requiera elementos de menú seleccionables
        `,
      },
    },
    layout: 'centered',
  },
  argTypes: {
    text: {
      description: 'Texto que se muestra en el elemento del menú',
      control: 'text',
      table: {
        category: 'Content',
        defaultValue: { summary: '""' },
      },
    },
    isActive: {
      description: 'Indica si el elemento está en estado activo/seleccionado',
      control: 'boolean',
      table: {
        category: 'State',
        defaultValue: { summary: 'true' },
      },
    },
    icon: {
      description: 'Icono que se muestra junto al texto',
      control: {
        type: 'select',
      },
      options: iconNames,
      table: {
        category: 'Content',
        defaultValue: { summary: 'list' },
      },
    },
    route: {
      description: 'Ruta a la que navegará el componente al hacer click',
      control: 'text',
      table: {
        category: 'Navigation',
        defaultValue: { summary: 'undefined' },
      },
    },
    clicked: {
      description: 'Evento emitido al hacer click en el elemento',
      table: {
        category: 'Events',
      },
      action: 'clicked',
    },
  },
  args: {
    text: 'Menu Item',
    isActive: true,
    icon: 'list',
    route: '/home',
  },
} as Meta<MenuItemComponent>;

const Template: StoryFn<MenuItemComponent> = (args) => ({
  props: args,
});

export const Default = Template.bind({});

export const DesactiveItem = Template.bind({});
DesactiveItem.args = {
  text: 'Desactive Item',
  isActive: false,
  route: '/inactive',
};

export const ActiveLongText = Template.bind({});
ActiveLongText.args = {
  text: 'Active item with very long text that should be truncated',
  isActive: true,
  route: '/long-active',
};

export const LongTextItem = Template.bind({});
LongTextItem.args = {
  text: 'Menu Item with very long text that should be truncated',
  isActive: false,
  route: '/long-inactive',
};

export const WithNavigation = Template.bind({});
WithNavigation.args = {
  text: 'Click to navigate',
  isActive: false,
  route: '/dashboard',
};

export const WithoutNavigation = Template.bind({});
WithoutNavigation.args = {
  text: 'No navigation',
  isActive: false,
  route: undefined,
};