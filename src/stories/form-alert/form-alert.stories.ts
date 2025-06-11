import { Meta, StoryObj } from '@storybook/angular';
import { FormAlertComponent } from '../../app/components/form-alert/form-alert.component';

export default {
  title: 'Components/Alerts/FormAlert',
  component: FormAlertComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Uso

- Se usan para indicar errores o validaciones en los campos de entrada dentro de formularios.
- Aparecen en la parte inferior del campo afectado para evitar confusión en la lectura.
- Deben activarse en tiempo real según la interacción del usuario con el formulario.

---

## Elementos clave

- **Mensaje de error o validación:** Proporciona una explicación clara del problema (ejemplo: “El correo ingresado no es válido”).
- **Relación con el campo afectado:** Se posiciona directamente debajo del input para que sea evidente a qué campo hace referencia.
        `
      }
    }
  },
  argTypes: {
    textAlert: {
      control: 'text',
    },
  },
  args: {
    textAlert: 'Participación diferente de lo esperado',
  },
} as Meta<FormAlertComponent>;

type Story = StoryObj<FormAlertComponent>;

export const Default: Story = {};
