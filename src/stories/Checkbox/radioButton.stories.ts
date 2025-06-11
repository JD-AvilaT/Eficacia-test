import { Meta, StoryObj } from "@storybook/angular";
import { RadioButtonComponent } from "../../app/components/Checkbox/RadioButton/radio-button.component";

export default {
  title: "Components/Checkbox/Radio Button",
  component: RadioButtonComponent,
  tags: ["autodocs"],
  argTypes: {
    selected: {
      control: "boolean",
      description: "Estado del radio button (seleccionado o no)",
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: String.raw`
# 🔘 Check redondo

---

## 🎛️ Variables

Vista de los estados visuales del radio button: default, Select.

---

## 🧩 Uso

- El check redondo es un componente de selección binaria que permite a los usuarios activar o desactivar una opción.
- Se usa en contextos donde es necesario marcar una preferencia o estado de manera visualmente diferenciada.
- Este componente está estructurado con variantes dentro de su ícono para manejar diferentes estados y configuraciones.
- Se deben utilizar las propiedades configurables (ejemplo: \`selected\`) para mantener consistencia en su aplicación.

---

## 🧱 Elementos clave

- **Contenedor del botón**: Estructura circular que define su tamaño y forma.
- **Ícono de check**: Elemento gráfico que indica la selección cuando el estado es activo.
- **Estado**: Variantes como activo, inactivo o en carga que afectan la interacción del usuario.
        `,
      },
    },
  },
} as Meta<RadioButtonComponent>;

type Story = StoryObj<RadioButtonComponent>;

export const Default: Story = {
  args: {
    selected: false,
  },
};

export const Selected: Story = {
  args: {
    selected: true,
  },
};

export const Variants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px; align-items: center; background: #f5f7fa; padding: 24px; border-radius: 8px;">
        <storybook-radio-button [selected]="false"></storybook-radio-button>
        <storybook-radio-button [selected]="true"></storybook-radio-button>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          "Vista de las variantes visuales del componente: sin seleccionar, seleccionado, y deshabilitado.",
      },
    },
  },
};
