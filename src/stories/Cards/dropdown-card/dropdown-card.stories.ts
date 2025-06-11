import type { Meta, StoryObj } from '@storybook/angular';
import { DropdownCardComponent } from '../../../app/components/cards/dropdown-card/dropdown-card.component';

const meta: Meta<DropdownCardComponent> = {
  title: 'Components/Cards/Dropdown Card',
  component: DropdownCardComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: String.raw`

## 🧩 Uso
- Mostrar una vista colapsada con información resumida que se puede expandir.
- Utilizado para tareas o actividades que requieren ver estado y detalle bajo demanda.
- Optimiza espacio en interfaces con múltiples tarjetas o ítems informativos.
- Permite al usuario controlar la visualización de contenido adicional mediante interacción.

---

## 🧱 Elementos clave

- Contenedor principal con borde y padding.
- Icono informativo alineado a la izquierda.
- Título principal de la tarjeta.
- Subtítulo o texto auxiliar debajo del título.
- Icono de flecha para expandir o colapsar el contenido.
- Línea divisoria entre el encabezado y el contenido expandido.
- Texto de estado alineado a la derecha (color variable).
- Subtítulos para secciones internas del detalle.
- Texto auxiliar explicativo.
- Bloque de contenido adicional con párrafos descriptivos.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    // Controles de estado
    isOpen: {
      control: 'boolean',
      description: 'Controla si el dropdown está expandido inicialmente',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'State'
      }
    },

    // Layout
    width: {
      control: 'text',
      description: 'Ancho personalizado (ej: "100%", "300px", "50vw")',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '100%' },
        category: 'Layout'
      }
    },

    // Style
    style: {
      control: 'text',
      description: 'Estilo personalizado (ej: "primary" (fondo blanco), "secondary" (fondo azul)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '100%' },
        category: 'Style'
      }
    },
  
    // Contenido principal
    title: {
      control: 'text',
      description: 'Texto principal del encabezado. Máx. 60 caracteres recomendados',
      table: {
        type: { summary: 'string' },
        category: 'Content',
        subcategory: 'Header'
      }
    },
    description: {
      control: 'text',
      description: 'Contenido detallado. 2-3 párrafos máximo para mejor legibilidad',
      table: {
        type: { summary: 'string' },
        category: 'Content',
        subcategory: 'Body'
      }
    },
    caption: {
      control: 'text',
      description: 'Texto contextual pequeño (ej. fecha, categoría)',
      table: {
        type: { summary: 'string' },
        category: 'Metadata'
      }
    },

  
    // Íconos
    iconStart: {
      control: 'text',
      description: 'Nombre del ícono inicial (ej. "card", "alertInfo")',
      table: {
        type: { summary: 'string' },
        category: 'Icons'
      }
    },
    showIconEnd: {
      control: 'boolean',
      description: 'Mostrar/ocultar el ícono final (usualmente para indicar dropdown)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
        category: 'Icons'
      }
    }
  },
};

export default meta;
type Story = StoryObj<DropdownCardComponent>;

export const Default: Story = {
  args: {
    title: 'Gestión de actividades',
    caption: 'Configuración de la organización',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu blandit diam amet, ac commodo blandit facilisis. Tincidunt ultricies congue cras habitasse sem eu. Ut rutrum non malesuada est. Augue egestas vestibulum dolor, lectus mauris, odio ut.',
    iconStart: 'card'
  },
};