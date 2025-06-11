import type { Meta, StoryObj } from '@storybook/angular';
import { BreadcrumbCategoriesComponent } from '../../app/components/breadcrumb-categories/breadcrumb-categories.component';

const meta: Meta<BreadcrumbCategoriesComponent> = {
  title: 'Components/Breadcrumbs/BreadcrumbCategories',
  component: BreadcrumbCategoriesComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Uso

El componente Breadcrumb categorías se utiliza para mostrar la jerarquía de navegación dentro de un sistema estructurado por categorías y subcategorías. Su función principal es orientar al usuario respecto a su ubicación actual en la interfaz, facilitando el regreso a niveles anteriores de forma intuitiva.  
Debe usarse especialmente en módulos donde se manejan múltiples niveles jerárquicos (por ejemplo, catálogos de productos, planes, contenidos organizados por tema).  
El último nivel del breadcrumb debe destacarse visualmente (por ejemplo, en color azul) para indicar la categoría activa o seleccionada.  
Cada nivel previo puede ser interactivo para permitir navegación hacia atrás.

---

## Elementos clave

- **Contenedor del breadcrumb:** Agrupa todos los niveles jerárquicos en una sola línea horizontal, respetando el orden y espaciado.  
- **Nivel de categoría:** Cada segmento representa un nivel (ejemplo: Categoría / Sub-Categoría / Sub-sub-Categoría).  
- **Separador:** Usualmente un slash ( / ) o símbolo similar que separa los niveles.  
- **Categoría activa (último nivel):** Destaca visualmente (color azul) para señalar la ubicación actual del usuario.  
- **Interactividad (opcional):** Los niveles anteriores pueden ser clicables para permitir regresar fácilmente a puntos anteriores de navegación.
        `,
      },
    },
  },
  argTypes: {
    items: {
      control: 'object',
      description: 'Arreglo de categorías (strings) para mostrar en las migajas',
    },
  },
  args: {
    items: ['Categoría', 'Sub-Cat 1', 'Sub-sub-Cat 1', 'Sub-sub-sub-Cat 1'],
  },
};

export default meta;
type Story = StoryObj<BreadcrumbCategoriesComponent>;

export const Default: Story = {};
