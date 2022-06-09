import { html } from 'lit';

import './dsy-button';
import Documentation from './dsy-button.stories.mdx';

export default {
  title: 'Button',
  argTypes: {
    level: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
  },
  parameters: {
    docs: {
      page: Documentation.parameters.docs.page,
    },
  },
};

const Template = ({ level, text }) => html`<dsy-button level=${level}>${text}</dsy-button>`;

export const Playground = Template.bind({});
Playground.args = {
  level: 'primary',
  text: 'Click me',
};

export const Primary = Template.bind({});
Primary.args = {
  level: 'primary',
  text: 'Click me',
};

export const Secondary = Template.bind({});
Secondary.args = {
  level: 'secondary',
  text: 'Click me',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  level: 'tertiary',
  text: 'Click me',
};
