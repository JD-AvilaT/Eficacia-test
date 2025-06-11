import { Meta, StoryObj } from '@storybook/angular';
import { ProgressBarComponent } from '../../app/components/progress-bar/progress-bar.component';

export default {
  title: 'Components/ProgressBar/ProgressBar',
  component: ProgressBarComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Uso

El componente **Progress Bar** muestra visualmente el avance de una tarea o proceso. Puede ser:

- **Determinístico:** Con porcentaje definido.
- **Indeterminado:** Con animación continua para tareas de duración desconocida.

Se usa para:
- Carga de archivos o contenido.
- Formularios de pasos múltiples.
- Instalaciones o actualizaciones.
- Estados de procesos activos.

---

### Mejores prácticas

✅ **Sí**  
- Mostrar progreso cuando el usuario lo necesita.  
- Usar valores numéricos si ayudan a entender el avance.  
- Mantener contraste visual y consistencia.  

🚫 **No**  
- No usar si el progreso es instantáneo.  
- No cambiar escalas manualmente.  
- No usar colores que confundan al usuario.  

---

### Variantes visuales

- 🟢 **Green**: Progreso óptimo o sin problemas.  
- 🟡 **Yellow**: Progreso aceptable pero con atención.  
- 🔴 **Red**: Estado crítico o con errores.

---

### Elementos clave

- **Barra base**: estructura general del componente.  
- **Indicador de color**: verde, amarillo o rojo.  
- **Badge numérico**: muestra el porcentaje si es necesario.
        `
      }
    }
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100 },
    },
    status: {
      control: 'radio',
      options: ['green', 'yellow', 'red'],
    },
    showPercent: {
      control: 'boolean',
    },
  },
  args: {
    value: 65,
    status: 'green',
    showPercent: true,
  },
} as Meta<ProgressBarComponent>;

type Story = StoryObj<ProgressBarComponent>;

export const Green: Story = {
  args: {
    status: 'green',
    value: 65,
    showPercent: true,
  },
};

export const Yellow: Story = {
  args: {
    status: 'yellow',
    value: 65,
    showPercent: true,
  },
};

export const Red: Story = {
  args: {
    status: 'red',
    value: 65,
    showPercent: true,
  },
};
