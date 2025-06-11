import type { Meta, StoryObj } from '@storybook/angular';
import { BreadcrumbProfileComponent } from '../../app/components/breadcrumb-profile/breadcrumb-profile.component';

const meta: Meta<BreadcrumbProfileComponent> = {
  title: 'Components/Breadcrumbs/BreadcrumbProfile',
  component: BreadcrumbProfileComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Uso

El Breadcrumb Profile se utiliza para proporcionar contexto de navegación al usuario dentro de flujos o secciones más complejas del sistema, especialmente en vistas de tipo perfil o detalle.  
Este componente combina navegación jerárquica (breadcrumb) con información contextual (título y subtítulo), permitiendo al usuario:  
- Entender en qué parte del sistema se encuentra.  
- Tener un título claro del módulo o sección.  
- Visualizar la ruta completa mediante un breadcrumb con múltiples niveles.  
- El ícono de flecha hacia la izquierda sirve como acción rápida para regresar a la sección anterior.

---

## Elementos clave

- **Ícono de retroceso (flecha izquierda):**  
  Acción visual que permite al usuario volver a la pantalla previa. Debe ser interactivo.  
- **Título principal:**  
  Describe claramente la sección o módulo donde se encuentra el usuario. Es el elemento más destacado del bloque (por ejemplo, "Regresar a la sección previa").  
- **Ruta breadcrumb (subtítulo):**  
  Línea de texto más ligera que muestra la jerarquía de navegación.  
  Ejemplo: inicio > parametrización > gestión de actividades > Gestión de visitas a punto de venta  
  El último nivel puede estar resaltado en un color diferente (por ejemplo, verde) para indicar la ubicación actual.
        `,
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Texto principal que aparece al lado del ícono',
    },
    showIconArrow: {
      control: 'boolean',
      description: 'Mostrar u ocultar el ícono de flecha izquierda',
    },
    items: {
      control: 'object',
      description: 'Arreglo de cadenas que representan cada nivel de navegación',
    },
  },
  args: {
    title: 'Regresar a la sección previa',
    showIconArrow: true,
    items: [
      'inicio',
      'parametrización',
      'gestión de actividades',
      'Gestión de visitas a punto de venta',
    ],
  },
};

export default meta;
type Story = StoryObj<BreadcrumbProfileComponent>;

export const Default: Story = {};
