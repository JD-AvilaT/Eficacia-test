import type { Meta, StoryObj } from '@storybook/angular';
import { PersonCardComponent } from '../../../app/components/cards/person-card/person-card.component';

const meta: Meta<PersonCardComponent> = {
  title: 'Components/Cards/Person Card',
  component: PersonCardComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: String.raw`

## 🧩 Uso
- Informar al usuario sobre novedades o actualizaciones recientes.
- Promover contenido nuevo dentro de la aplicación o sistema.
- Utilizado en centros de notificaciones o secciones de novedades.
- Ideal para alertas no críticas que requieren atención contextual.

---

## 🧱 Elementos clave

- Contenedor con esquinas redondeadas y padding interno.
- Avatar o imagen representativa alineada a la izquierda.
- Título destacado en alto contraste (bold y color primario).
- Subtítulo o mensaje descriptivo.
- Marca de tiempo o metadata contextual en parte inferior.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    header: {
      control: 'text',
      description: 'Título principal de la tarjeta.',
      table: {
        type: { summary: 'string' },
        category: 'Content',
        subcategory: 'Text'
      }
    },
    name: {
      control: 'text',
      description: 'Contenido descriptivo.',
      table: {
        type: { summary: 'string' },
        category: 'Content',
        subcategory: 'Text'
      }
    },
    detail: {
      control: 'text',
      description: 'Texto secundario (fecha).',
      table: {
        type: { summary: 'string' },
        category: 'Content',
        subcategory: 'Metadata'
      }
    },
    image: {
      control: 'text',
      description: 'URL de imagen destacada.',
      table: {
        type: { summary: 'string' },
        category: 'Media'
      }
    }
  }
};

export default meta;
type Story = StoryObj<PersonCardComponent>;

export const Default: Story = {
  args: {
    header: 'Jefe directo',
    name: 'Jane Doe',
    detail: '1025-5620',
    image: 'https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?cs=srgb&dl=pexels-pixabay-57416.jpg&fm=jpg'
  },
};