import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../Button';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'UI/Button',
  component: Button,
  args: {
    children: "Click me",
    appName: "storybook"
  },
  argTypes: {
    appName: {
      description: "Nombre de la app que consume el componente",
      control: "text"
    },
    className: {
      description: "Clases CSS adicionales",
      control: "text"
    },
    children: {
      control: "text"
    }
}} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Guardar cambios",
    className: "ui-button--primary"
  },
};