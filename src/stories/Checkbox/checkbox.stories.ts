import { Meta, StoryObj } from '@storybook/angular';
import { CheckboxComponent } from '../../app/components/Checkbox/checkbox/checkbox.component';

export default {
  title: 'Components/Checkbox/Checkbox',
  component: CheckboxComponent,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Estado del checkbox (marcado o desmarcado)',
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: String.raw`
# ☑️ Checkbox

El **Checkbox** en Eficacia se utiliza para permitir a los usuarios seleccionar una o varias opciones dentro de la interfaz.

---

## 🧩 Uso

- Formularios y configuraciones: Para habilitar o deshabilitar opciones dentro de ajustes o preferencias.
- Selección múltiple: En listas o tablas donde el usuario puede elegir varios elementos a la vez.
- Filtros y búsquedas: Para refinar resultados en interfaces con opciones de filtrado.
- Términos y condiciones: Para aceptar políticas antes de continuar con un proceso.
- Activación de funcionalidades: Para encender o apagar características específicas.

---

## ✅ Mejores prácticas

| ✔️ Sí | ❌ No |
|------|------|
| Mantener la estructura del componente en Figma. Usar variantes y propiedades predefinidas sin modificar la base. | No modificar el tamaño del checkbox manualmente. Usar las variantes predefinidas para garantizar coherencia en la UI. |
| Elegir estilos adecuados según el contexto. Usar checkboxes individuales o agrupados correctamente. | No agregar elementos externos dentro del componente. Evitar íconos, textos o decoraciones fuera de la librería. |
| Activar o desactivar etiquetas y estados (activo, deshabilitado, indeterminado) desde las propiedades del componente. | No cambiar los colores o estilos fuera de las configuraciones establecidas. |
| Asegurar que el checkbox mantenga la tipografía, tamaño y jerarquía visual de la UI. | No alterar la alineación del contenido interno. Mantener disposición del checkbox + etiqueta según el diseño original. |
| Usar Auto Layout para escalabilidad y adaptabilidad. | No desactivar Auto Layout. Afectará la adaptabilidad y responsividad del checkbox. |

---

## 🎛️ Variantes disponibles

| Variante    | Descripción                         |
|-------------|-------------------------------------|
| Default     | Caja sin marcar (borde gris)        |
| Checked     | Caja marcada (fondo azul, check)    |
| Disabled    | Inactivo, sin posibilidad de clic   |

---

## 🧱 Elementos clave

| Elemento              | Descripción                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| Contenedor del botón   | Estructura principal que define su tamaño y forma.                         |
| Etiqueta               | Texto que describe la acción del botón.                                    |
| Ícono (opcional)       | Elemento gráfico que refuerza visualmente la acción del botón.             |
| Estado                 | Variantes como activo, inactivo o en carga que afectan la interacción.     |

---

## ⚙️ Props disponibles

| Propiedad       | Tipo     | Descripción                             | Requerido | Default |
|----------------|----------|-----------------------------------------|-----------|---------|
| \`checked\`     | boolean  | Estado actual del checkbox              | No        | false   |
| \`checkedChange\` | EventEmitter<boolean> | Evento emitido al cambiar el estado | No        | —       |
        `,
      },
    },
  },
} as Meta<CheckboxComponent>;

type Story = StoryObj<CheckboxComponent>;

export const Default: Story = {
  args: {
    checked: false,
  },
};

export const Variants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px; align-items: center">
        <storybook-checkbox [checked]="false"></storybook-checkbox>
        <storybook-checkbox [checked]="true"></storybook-checkbox>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Vista general de las variantes visuales del Checkbox.',
      },
    },
  },
};
