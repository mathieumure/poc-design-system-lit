import { html } from 'lit';

import './dsy-button';

export default {
  title: 'Button',
  argTypes: {
    level: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
  },
};

const Template = ({ level, text }) => html`<dsy-button level=${level}>${text}</dsy-button>`;

export const Button = Template.bind({});
Button.args = {
  level: 'primary',
  text: 'Click me',
};
