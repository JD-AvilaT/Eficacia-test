import { Meta, StoryObj } from "@storybook/angular";
import { ToggleComponent } from "../../app/components/toggle/toggle.component";

export default {
  title: "Components/Toggle/Toggle",
  component: ToggleComponent,
  tags: ["autodocs"],
  argTypes: {
    checked: { control: "boolean" },
  },
  parameters: {
    layout: "centered", 
    docs: {
      description: {
        component: `
### Uso
El **Toggle** se utiliza en escenarios donde se requiere una acción binaria (encender o apagar una función). Se implementa en:

- **Configuraciones y preferencias**: Permite activar o desactivar funciones dentro de la aplicación.
- **Gestión de permisos**: Facilita la administración de accesos o activación de módulos específicos.
- **Opciones interactivas**: Permite habilitar o deshabilitar funciones de manera intuitiva.

### Mejores Prácticas
#### ✔️ Sí:
- Mantener la estructura del componente en **Figma**, usando las variantes y propiedades predefinidas.
- Seleccionar el **estilo adecuado** según el contexto.
- Configurar **etiquetas y estados** mediante variantes.
- Respetar la **coherencia visual y espaciado**.
- Usar **Auto Layout** para escalabilidad.

#### ❌ No:
- No agregar elementos externos dentro del componente.
- No cambiar los colores o estilos fuera de la configuración establecida.
- No alterar la alineación del contenido interno.
- No desactivar **Auto Layout**.

### Elementos Clave
- **Contenedor del Toggle**: Define la estructura y tamaño del componente.
- **Indicador de estado**: Muestra visualmente si la opción está activada o desactivada.
- **Interruptor (Thumb)**: Elemento que se desliza entre los estados de **On** y **Off**.
- **Fondo del Toggle**: Representa el estado actual mediante colores distintivos.
- **Estados dinámicos**: Incluye variantes como activo, inactivo, con interacción o en error.
`,
      },
    },
  },
} as Meta<ToggleComponent>;

type Story = StoryObj<ToggleComponent>;

export const Default: Story = {
  args: {
    checked: false,
  },
};
