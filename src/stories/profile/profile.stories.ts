import type { Meta, StoryObj } from '@storybook/angular';
import { ProfileComponent } from '../../app/components/profile/profile.component';

const meta: Meta<ProfileComponent> = {
  title: 'Components/Avatar/Profile',
  component: ProfileComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: String.raw`
---

## 🧩 Uso

El avatar en Eficacia se usa para identificar visualmente a un usuario dentro de la interfaz. Se implementa en:

- Perfiles de usuario en tarjetas o listas.
- Encabezados o barras de navegación.
- Tableros de puntuaciones o rankings.
- Chats, comentarios y actividades colaborativas.

---

## ✅ Mejores prácticas

| ✔️ Sí | ❌ No |
|------|------|
| Mantener la estructura del componente en Figma: Usar las variantes y propiedades predefinidas sin alterar la configuración base. | No modificar las máscaras de imagen ni redimensionar manualmente el contenedor del avatar. |
| Utilizar imágenes de alta calidad: Asegurar que las imágenes sean proporcionales y no pixeladas para mantener una apariencia profesional. | No añadir elementos externos dentro del componente que alteren su alineación o estructura. |
| Activar/desactivar elementos mediante variantes: Insignias, nombres y puntuaciones deben configurarse desde las propiedades del componente sin agregar elementos manualmente. | No cambiar los colores o proporciones de las insignias fuera de las configuraciones establecidas en el diseño original.  |
| Respetar los espacios y alineaciones: Mantener la tipografía y los elementos dentro de la jerarquía definida en la librería UI de Eficacia. | No reemplazar el Fallback por imágenes externas sin ajustar su escalado correctamente. |
| Usar Auto Layout para escalabilidad: Permitir que el avatar se adapte correctamente dentro de los layouts sin desactivar esta propiedad. | No desactivar Auto Layout, ya que esto afectará la responsividad del componente en la UI. |

---


# ☑️ Componente

## 🧩 Uso
- El componente Avatar está estructurado con variantes para manejar diferentes estados y configuraciones.
- Se deben utilizar las propiedades configurables en Figma (ejemplo: Imagen, Insignia, Tamaño) para mantener consistencia en su aplicación.
- El avatar se utiliza en contextos donde es necesario identificar a un usuario, como en listas, encabezados o sistemas de gamificación.
- La imagen de perfil se reemplaza dentro del frame del avatar sin modificar su estructura base.

---

## 🧱 Elementos clave

| Elemento              | Descripción                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| Imagen de usuario      | Contenedor principal que muestra la imagen del usuario.                        |
| Badge                  | Elemento opcional que se superpone a la imagen de usuario. Puede representar roles, logros o estados dentro del sistema                                    |
| Nombre de usuario      | Texto asociado al avatar que muestra el nombre del usuario.         |
| Puntos                 | Indicador numérico opcional que muestra la puntuación del usuario.     |
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    showName: {
      control: { type: 'boolean' },
      description: 'Controla si el nombre del usuario debe mostrarse.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
        category: 'Visibility'
      }
    },
    name: {
      control: 'text',
      description: 'Nombre del usuario a mostrar en el perfil.',
      table: {
        type: { summary: 'string' },
        category: 'User Info'
      }
    },
    showDescription: {
      control: { type: 'boolean' },
      description: 'Controla si la descripción del usuario debe mostrarse.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
        category: 'Visibility'
      }
    },
    description: {
      control: 'text',
      description: 'Descripción del usuario a mostrar en el perfil.',
      table: {
        type: { summary: 'string' },
        category: 'User Info'
      }
    },
    image: {
      control: 'text',
      description: 'URL de la imagen de perfil. Si no se proporciona, se usará el avatar por defecto',
      table: {
        type: { summary: 'string' },
        category: 'User Info'
      }
    }
  }
};

export default meta;
type Story = StoryObj<ProfileComponent>;

export const Default: Story = {
  args: {
    name: 'Amanda Miguel',
    showName: true,
    showDescription: true,
    description: 'Conectado como: [Super admin]',
    image: 'https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?cs=srgb&dl=pexels-pixabay-57416.jpg&fm=jpg'
  },
};