import { Meta, StoryFn } from '@storybook/angular';
import { FileUploaderComponent } from '../../app/components/uploader/uploader.component';

export default {
  title: 'Components/File Uploader/Link Uploader',
  component: FileUploaderComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Un componente para pegar y enviar enlaces con soporte para validación básica.

### Características:
- 📌 Soporte para pegar enlaces (Ctrl+V)
- 🖱️ Envío manual con botón
- 👁‍🗨 Visualización del enlace enviado
- ✖️ Opción para eliminar el enlace actual
- 🚀 Integración sencilla con formularios
        `,
      },
    },
  },
  argTypes: {
    title: {
      description: 'Título principal del componente',
      control: 'text',
      table: {
        category: 'Content',
        defaultValue: { summary: 'Cargar Archivo' },
      },
    },
    hint: {
      description: 'Texto del placeholder del input',
      control: 'text',
      table: {
        category: 'Content',
        defaultValue: { summary: 'Pegar enlace aquí' },
      },
    },
    title2: {
      description: 'Título cuando hay un enlace cargado',
      control: 'text',
      table: {
        category: 'Content',
        defaultValue: { summary: 'Enlace Cargado' },
      },
    },
    hint2: {
      description: 'Texto descriptivo cuando hay un enlace cargado',
      control: 'text',
      table: {
        category: 'Content',
        defaultValue: { summary: 'Enlace adjuntado' },
      },
    },
    linkSubmitted: {
      description: 'Evento emitido cuando se envía un enlace válido',
      table: {
        category: 'Events',
      },
      action: 'linkSubmitted',
    },
    linkRemoved: {
      description: 'Evento emitido cuando se elimina el enlace actual',
      table: {
        category: 'Events',
      },
      action: 'linkRemoved',
    },
  },
  args: {
    title: 'Cargar Archivo',
    hint: 'Pegar enlace aquí',
    title2: 'Enlace Cargado',
    hint2: 'Enlace adjuntado'
  },
} as Meta<FileUploaderComponent>;

const Template: StoryFn<FileUploaderComponent> = (args) => ({
  props: args,
});

export const Default = Template.bind({});

export const WithCustomLabels = Template.bind({});
WithCustomLabels.args = {
  title: 'Subir URL',
  hint: 'Introduce o pega tu enlace',
  title2: 'URL Guardada',
  hint2: 'URL almacenada correctamente'
};
WithCustomLabels.parameters = {
  docs: {
    description: {
      story: 'Versión con textos personalizados para diferentes casos de uso.',
    },
  },
};

export const AutoSubmitOnPaste = Template.bind({});
AutoSubmitOnPaste.parameters = {
  docs: {
    description: {
      story: 'El componente automáticamente captura y envía los enlaces pegados sin necesidad de hacer click en el botón.',
    },
  },
};